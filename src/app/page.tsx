import { redirect } from 'next/navigation'

// Root page — redirects to /it (default locale)
export default function RootPage() {
  redirect('/it')
}
