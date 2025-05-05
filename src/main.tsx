import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { routes } from './routes'
import store from './store'
import { Provider } from 'react-redux'
import { Toaster } from './components/ui/sonner'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      
      <RouterProvider router={routes} />
      <Toaster />
    </Provider>
  </StrictMode>,
)
