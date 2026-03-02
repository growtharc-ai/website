interface CounterProps {
  target: number
  suffix?: string
  prefix?: string
  duration?: number
}

export function Counter({
  target,
  suffix = '',
  prefix = '',
}: CounterProps) {
  return (
    <span>
      {prefix}
      {target}
      {suffix}
    </span>
  )
}
