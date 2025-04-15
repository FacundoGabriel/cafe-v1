import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './App'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom";
import '@mdi/font/css/materialdesignicons.min.css';


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)

