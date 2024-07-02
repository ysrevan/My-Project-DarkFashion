import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import './sass/style.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'aos/dist/aos.css';
import { Provider } from 'react-redux'
import store from './tools/store'
import { categorydata, fashiondata, homedata, userdata } from './tools/func/shopdata'


fashiondata();


categorydata()


homedata()

userdata()


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
)
