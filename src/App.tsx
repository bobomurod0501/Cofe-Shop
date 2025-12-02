import { createBrowserRouter, RouterProvider } from "react-router";
import { Root } from "./pages/Root";
import CofePage from "./pages/cofe-page/CofePage";
import CookiePage from "./pages/cookies-page/CookiePage";
import DrinksPage from "./pages/drinks-page/DrinksPage";
import SweetsPage from "./pages/sweets-page/SweetsPage";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const router = createBrowserRouter([
  {
    path:"/",
    element:<Root/>,
    children:[
      {
        index:true,
        element:<CofePage/>
      },
      {
        path:"pechenye",
        element:<CookiePage/>
      },
      {
        path:"ichimliklar",
        element:<DrinksPage/>
      },
      {
        path:"shirinliklar",
        element:<SweetsPage/>
      }
    ]
  }
])
const queryClient = new QueryClient()

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
    <RouterProvider router={router}/>
    </QueryClientProvider>
  )
}

export default App
