import type { Metadata } from 'next'
import { BlogAdmin } from '@/components/blog-admin'

export const metadata: Metadata = {
  title: 'Blog Admin — Growth Arc',
  robots: { index: false, follow: false },
}

export default function AdminBlogPage() {
  return <BlogAdmin />
}
