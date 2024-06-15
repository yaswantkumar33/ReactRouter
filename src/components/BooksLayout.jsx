import React from 'react'
import { Outlet, Link, useSearchParams } from 'react-router-dom'

export default function BooksLayout() {
    const [SearchParamas, setSearchParams] = useSearchParams({ n: 5 })
    console.log(SearchParamas.get("n"))
    const number = SearchParamas.get("n")
    return (
        <div className='booksParent'>

            <Link to="/books/1" className='BLink'><>Book 1</></Link>
            <Link to="/books/2" className='BLink'><>Book 2</></Link>
            <Link to="/books/3" className='BLink'><>Book 3</></Link>
            <Link to="/books/4" className='BLink'><>Book 4</></Link>
            <Link to={`/books/${SearchParamas}`} className='BLink'>book {number}</Link>
            <Link to="/books/new" className='BLink'><>New Book</></Link>
            <input type="number" value={number} onChange={(e) => {
                setSearchParams({ n: e.target.value })
                // console.log(e.target.value)
            }} />
            <Outlet context={{ hello: "stark" }} />
        </div>
    )
}
