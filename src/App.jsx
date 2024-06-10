import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Books from './components/Books'
import About from './components/About'
import Book from './components/Book'
import NewBook from './components/NewBook'
import NotFound from './components/NotFound'
import BooksLayout from './components/BooksLayout'
function App() {
  return (
    <>
      <nav>
        <ul>
          <li><Link to="/" >Home</Link></li>
          <li><Link to="/books" >Books</Link></li>
          <li><Link to="/About" >About</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path='/books' element={<BooksLayout />}>
          {/* <Route path='/books' element={<BooksLayout />}> */}
          <Route index element={<Books />} />
          <Route path=":id" element={<Book />} />
          <Route path="new" element={<NewBook />} />
        </Route>
        {/* <Route path="/books" element={<Books />} /> */}
        {/* <Route path="/books/:id" element={<Book />} />
        <Route path="/books/new" element={<NewBook />} /> */}
        <Route path="*" element={<NotFound />} />
        <Route />
        <Route />
      </Routes>
    </>
  )
}

export default App
