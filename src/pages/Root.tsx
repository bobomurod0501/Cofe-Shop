import { useAuthContext } from '../context/authContext'
import MainLayout from '../layout/MainLayout'
import { Navigate, Outlet } from 'react-router'
import StateValuesProvider from '../providers/StateValuesProvider'

export const Root = () => {
  const { isAuth } = useAuthContext()

  if (!isAuth) {
    return <Navigate to="/auth/login" replace />;
  }

  return (

    <StateValuesProvider>
      <MainLayout>
        <Outlet />
      </MainLayout>
    </StateValuesProvider>
  )
}
