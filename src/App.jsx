import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import FAQ from './pages/Faq';
import Shop from './pages/Shop';
import News from './pages/News';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Wishlist from './pages/WishList';
import NotFoundPage from './pages/NotFoundPage';
import Footer from './components/Footer';

import CreateCategory from './pages/dashboard/category/Create';
import ReadCategory from './pages/dashboard/category/Read';
import UpdateCategory from './pages/dashboard/category/Update';

import CreateProduct from './pages/dashboard/products/Create';
import ReadProduct from './pages/dashboard/products/Read';
import UpdateProduct from './pages/dashboard/products/Update';
import Register from './pages/auth/Register';
import Login from './pages/auth/Login';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/faq' element={<FAQ />} />
          <Route path='/login' element={<Login />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/news' element={<News />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/wishlist' element={<Wishlist />} />
          <Route path='/register' element={<Register/>} />

          <Route path='/dashboard/category/read' element={<ReadCategory />} />
          <Route path='/dashboard/category/create' element={<CreateCategory />} />
          <Route path='/dashboard/category/update/:id' element={<UpdateCategory />} />

          <Route path='/dashboard/products/read' element={<ReadProduct />} />
          <Route path='/dashboard/products/create' element={<CreateProduct />} />
          <Route path='/dashboard/products/update/:id' element={<UpdateProduct />} />

          <Route path='*' element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;