import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Book from './Book';
import NewBook from './NewBook';
import Books from './Books';
import BooksLayout from './BooksLayout';

export default function BooksRoute() {
    return (
        <>
            <Routes>
                <Route element={<BooksLayout />}>
                    <Route index element={<Books />} />
                    <Route path=":id" element={<Book />} />
                    <Route path="new" element={<NewBook />} />
                </Route>
            </Routes>
        </>

    );
}

