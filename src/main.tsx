import ReactDOM from 'react-dom/client'
import App from './App'
import '@assets/css/main.css'
import '@assets/fonts/THSarabunNew-Bold.ttf'
import '@assets/fonts/THSarabunNew-BoldItalic.ttf'
import '@assets/fonts/THSarabunNew-Italic.ttf'
import '@assets/fonts/THSarabunNew.ttf'

import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
