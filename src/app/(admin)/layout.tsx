import { MainLayout } from '@/layouts'
import React, { ReactNode } from 'react'

const layout = ({children}:{children:ReactNode}) => {
  return (
    <MainLayout>{children}</MainLayout>
  )
}

export default layout