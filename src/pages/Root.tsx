import MainLayout from '../layout/MainLayout'
import { Outlet } from 'react-router'

export const Root = () => {
  return (
    <MainLayout>
      <Outlet/>
    </MainLayout>
  )
}
