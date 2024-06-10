import React from 'react'
import { Outlet, Link } from 'react-router-dom'

export default function BooksLayout() {
    return (
        <div className='booksParent'>

            <Link to="/books/1" className='BLink'><>Book 1</></Link>
            <Link to="/books/2" className='BLink'><>Book 2</></Link>
            <Link to="/books/3" className='BLink'><>Book 3</></Link>
            <Link to="/books/4" className='BLink'><>Book 4</></Link>
            <Link to="/books/new" className='BLink'><>New Book</></Link>
            <Outlet context={{ hello: "stark" }} />
        </div>
    )
}
