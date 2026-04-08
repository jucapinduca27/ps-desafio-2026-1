import type { Metadata } from 'next'
import { SidebarMain } from './_components/sidebar-main'

export const metadata: Metadata = {
  title: 'Dashboard',
}

export default async function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div>
      <SidebarMain />
      <div>{children}</div>
    </div>
  )
}
