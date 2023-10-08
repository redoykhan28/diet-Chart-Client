import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import FoodContext from './Context/FoodContext.jsx'
import AuthContext from './Context/AuthContext.jsx'
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthContext>
        <FoodContext>
          <App />
        </FoodContext>
      </AuthContext>
    </QueryClientProvider>
  </React.StrictMode>,
)
