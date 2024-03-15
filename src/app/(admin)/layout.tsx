import { MainLayout } from '@/layouts'

const layout = ({children}:LayoutProps) => {
  return (
    <MainLayout>{children}</MainLayout>
  )
}

export default layout