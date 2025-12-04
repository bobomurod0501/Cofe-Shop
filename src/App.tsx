import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import { Root } from "./pages/Root";
import CofePage from "./pages/cofe-page/CofePage";
import CookiePage from "./pages/cookies-page/CookiePage";
import DrinksPage from "./pages/drinks-page/DrinksPage";
import SweetsPage from "./pages/sweets-page/SweetsPage";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import LoginPage from "./pages/auth-pages/LoginPage";
import SignUpPage from "./pages/auth-pages/SignUpPage";
import { ToastContainer } from "react-toastify"
import { AuthProvider } from "./providers/AuthProvider";
import { ProductProvider } from "./providers/ProductProvider";


const queryClient = new QueryClient()

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          index: true,
          element: <CofePage />
        },
        {
          path: "pechenye",
          element: <CookiePage />
        },
        {
          path: "ichimliklar",
          element: <DrinksPage />
        },
        {
          path: "shirinliklar",
          element: <SweetsPage />
        }
      ]
    },
    {
      path: "/auth",
      element: <Outlet />,
      children: [
        {
          path: "login",
          element: <LoginPage />
        },
        {
          path: "signup",
          element: <SignUpPage />
        }
      ]
    }
  ])
  return (
    <ProductProvider>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
          <ToastContainer position="top-center" />
        </QueryClientProvider>
      </AuthProvider>
    </ProductProvider>
  )
}

export default App
