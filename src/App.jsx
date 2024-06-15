import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link, Route, Routes, useRoutes } from 'react-router-dom'
import Home from './components/Home'
// import Books from './components/Books'
import BooksRoute from './components/booksRoute'
import About from './components/About'
// import Book from './components/Book'
// import NewBook from './components/NewBook'
import NotFound from './components/NotFound'
// import BooksLayout from './components/BooksLayout'
function App() {
  // let element = useRoutes([
  //   {
  //     path: "/",
  //     element: <Home />
  //   }, {
  //     path: "*",
  //     element: <NotFound />
  //   }
  // ])
  return (
    <>
      <Routes location="/books">
        <Route path="/books" element={<h1>Extra content for books route</h1>} />
      </Routes>
      <nav>
        <ul>
          <li><Link to="/" >Home</Link></li>
          <li><Link to="/books" >Books</Link></li>
          <li><Link to="/About" >About</Link></li>
        </ul>
      </nav>
      {/* {element} */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path='/books/*' element={<BooksRoute />}>
          {/* <Route path='/books' element={<BooksLayout />}> */}
          {/* <Route index element={<Books />} />
          <Route path=":id" element={<Book />} />
          <Route path="new" element={<NewBook />} /> */}
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
