'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { MessageSquare, X, Send } from 'lucide-react'

type Message = { role: 'user' | 'assistant'; content: string }

const WELCOME_MESSAGE: Message = {
  role: 'assistant',
  content:
    "Hi! I'm Arc, your Growth Arc AI assistant. Ask me anything about our services, or tell me about your business and I'll recommend the best solutions for you.",
}

const MAX_MESSAGES = 20
const MAX_CHARS = 500

export function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([WELCOME_MESSAGE])
  const [input, setInput] = useState('')
  const [isStreaming, setIsStreaming] = useState(false)
  const [messageCount, setMessageCount] = useState(0)
  const [error, setError] = useState('')
  const [hasAutoOpened, setHasAutoOpened] = useState(false)
  const [showPulse, setShowPulse] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)
  const userInteracted = useRef(false)

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  useEffect(() => {
    scrollToBottom()
  }, [messages, scrollToBottom])

  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus()
    }
  }, [open])

  // Auto-open after 5s, auto-close after 8s more
  useEffect(() => {
    const openTimer = setTimeout(() => {
      if (!userInteracted.current) {
        setOpen(true)
        setHasAutoOpened(true)
      }
    }, 5000)

    return () => clearTimeout(openTimer)
  }, [])

  useEffect(() => {
    if (!hasAutoOpened || userInteracted.current) return
    const closeTimer = setTimeout(() => {
      if (!userInteracted.current) {
        setOpen(false)
      }
    }, 8000)
    return () => clearTimeout(closeTimer)
  }, [hasAutoOpened])

  // Listen for [data-open-arc] clicks (e.g. FAQ "Ask Arc" link)
  useEffect(() => {
    function handleOpenArc(e: MouseEvent) {
      const target = e.target as HTMLElement
      if (target.closest('[data-open-arc]')) {
        e.preventDefault()
        userInteracted.current = true
        setOpen(true)
      }
    }
    document.addEventListener('click', handleOpenArc)
    return () => document.removeEventListener('click', handleOpenArc)
  }, [])

  // Pulse glow every 10 seconds when closed
  useEffect(() => {
    const interval = setInterval(() => {
      if (!open) {
        setShowPulse(true)
        setTimeout(() => setShowPulse(false), 1500)
      }
    }, 10000)
    return () => clearInterval(interval)
  }, [open])

  function handleUserOpen() {
    userInteracted.current = true
    setOpen(true)
  }

  function handleUserClose() {
    userInteracted.current = true
    setOpen(false)
  }

  async function handleSend() {
    const trimmed = input.trim()
    if (!trimmed || isStreaming) return
    userInteracted.current = true
    if (messageCount >= MAX_MESSAGES) {
      setError('Message limit reached. Book a free call to continue the conversation!')
      return
    }

    setError('')
    const userMessage: Message = { role: 'user', content: trimmed }
    const newMessages = [...messages, userMessage]
    setMessages(newMessages)
    setInput('')
    setMessageCount((c) => c + 1)
    setIsStreaming(true)

    // Add placeholder for assistant response
    const assistantMessage: Message = { role: 'assistant', content: '' }
    setMessages([...newMessages, assistantMessage])

    try {
      // Only send conversation history (exclude welcome message for API)
      const apiMessages = newMessages.filter(
        (_, i) => i > 0 || newMessages[0].role === 'user'
      )

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: apiMessages,
          sessionMessageCount: messageCount + 1,
        }),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({ error: 'Something went wrong.' }))
        throw new Error(data.error || 'Something went wrong.')
      }

      const reader = res.body?.getReader()
      if (!reader) throw new Error('No response stream.')

      const decoder = new TextDecoder()
      let accumulated = ''

      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        accumulated += decoder.decode(value, { stream: true })
        const current = accumulated
        setMessages((prev) => {
          const updated = [...prev]
          updated[updated.length - 1] = { role: 'assistant', content: current }
          return updated
        })
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong.')
      // Remove empty assistant message on error
      setMessages((prev) => {
        if (prev[prev.length - 1]?.content === '') {
          return prev.slice(0, -1)
        }
        return prev
      })
    } finally {
      setIsStreaming(false)
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <>
      {/* Chat panel — bottom-left */}
      <div
        className={`fixed z-50 transition-all duration-300 ease-out ${
          open
            ? 'md:bottom-8 md:left-8 md:h-[500px] md:w-[400px] inset-x-0 bottom-0 h-[70vh] md:inset-x-auto md:rounded-2xl translate-y-0 opacity-100'
            : 'pointer-events-none translate-y-4 scale-95 opacity-0 md:bottom-8 md:left-8 md:h-[500px] md:w-[400px] inset-x-0 bottom-0 h-[70vh] md:inset-x-auto'
        }`}
      >
        <div className="flex h-full flex-col overflow-hidden border border-white/10 bg-[#0D0F18]/95 shadow-2xl shadow-black/40 backdrop-blur-xl md:rounded-2xl">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/5 px-4 py-3">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-[var(--ga-blue)] to-[var(--ga-green)]">
                <MessageSquare className="h-4 w-4 text-white" />
              </div>
              <div>
                <p className="text-sm font-semibold">Arc</p>
                <p className="text-[11px] text-white/30">Powered by GPT-5.4</p>
              </div>
            </div>
            <button
              onClick={handleUserClose}
              className="rounded-lg p-1.5 text-white/40 transition-colors hover:bg-white/5 hover:text-white"
              aria-label="Close chat"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4">
            <div className="flex flex-col gap-3">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-[14px] leading-relaxed ${
                      msg.role === 'user'
                        ? 'bg-gradient-to-r from-[var(--ga-blue)] to-[var(--ga-blue)] text-white'
                        : 'bg-white/[0.05] text-white/70'
                    }`}
                  >
                    {msg.content}
                    {/* Streaming cursor */}
                    {isStreaming && i === messages.length - 1 && msg.role === 'assistant' && (
                      <span className="ml-0.5 inline-block h-4 w-0.5 animate-pulse bg-white/50" />
                    )}
                  </div>
                </div>
              ))}

              {/* Typing indicator */}
              {isStreaming && messages[messages.length - 1]?.content === '' && (
                <div className="flex justify-start">
                  <div className="flex gap-1.5 rounded-2xl bg-white/[0.05] px-4 py-3">
                    <span className="h-2 w-2 animate-[pulse_1s_ease-in-out_infinite] rounded-full bg-white/30" />
                    <span className="h-2 w-2 animate-[pulse_1s_ease-in-out_0.2s_infinite] rounded-full bg-white/30" />
                    <span className="h-2 w-2 animate-[pulse_1s_ease-in-out_0.4s_infinite] rounded-full bg-white/30" />
                  </div>
                </div>
              )}
            </div>
            <div ref={messagesEndRef} />
          </div>

          {/* Error */}
          {error && (
            <div className="px-4 pb-2">
              <p className="text-xs text-red-400">{error}</p>
            </div>
          )}

          {/* Input */}
          <div className="border-t border-white/5 px-4 py-3">
            <div className="flex items-end gap-2">
              <textarea
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value.slice(0, MAX_CHARS))}
                onKeyDown={handleKeyDown}
                placeholder={
                  messageCount >= MAX_MESSAGES
                    ? 'Message limit reached'
                    : 'Ask Arc anything...'
                }
                disabled={isStreaming || messageCount >= MAX_MESSAGES}
                rows={1}
                className="flex-1 resize-none rounded-xl border border-white/5 bg-white/[0.03] px-3.5 py-2.5 text-[14px] text-white placeholder-white/25 outline-none transition-colors focus:border-white/15 disabled:opacity-40"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || isStreaming || messageCount >= MAX_MESSAGES}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-[var(--ga-blue)] to-[var(--ga-green)] text-white transition-all hover:scale-105 disabled:opacity-30 disabled:hover:scale-100"
                aria-label="Send message"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
            <div className="mt-2 flex items-center justify-between">
              <p className="text-[11px] text-white/20">
                {input.length > 0 && `${input.length}/${MAX_CHARS}`}
              </p>
              <p className="text-[11px] text-white/20">
                {messageCount}/{MAX_MESSAGES} messages
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating toggle button — bottom-left */}
      <button
        onClick={handleUserOpen}
        className={`fixed bottom-8 left-8 z-50 flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--ga-blue)] to-[var(--ga-green)] py-3 pr-5 pl-4 text-sm font-semibold text-white shadow-lg shadow-black/20 transition-all duration-300 hover:scale-105 hover:shadow-xl ${
          open
            ? 'pointer-events-none translate-y-2 scale-90 opacity-0'
            : 'translate-y-0 scale-100 opacity-100'
        } ${hasAutoOpened && !open && !userInteracted.current ? 'animate-[bounce_0.6s_ease-in-out]' : ''}`}
        aria-label="Open chat"
      >
        {/* Pulse glow ring */}
        {showPulse && (
          <span className="absolute inset-0 animate-ping rounded-full bg-[var(--ga-blue)]/30" />
        )}
        <MessageSquare className="relative h-4 w-4" />
        <span className="relative">Ask Arc</span>
      </button>

      {/* Mobile close overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={handleUserClose}
        />
      )}
    </>
  )
}
