'use client'
import ReadBookCard from '@/component/readBook/ReadBookCard'
import { BooksContext } from '@/context/BooksContext'
import { useContext } from 'react'

const ListedBooks = () => {
  const { readBooks } = useContext(BooksContext)
  console.log(readBooks)
  return (
    <div>
      {readBooks.map((book) => (
        <ReadBookCard key={book.bookId} book={book} />
      ))}
    </div>
  )
}

export default ListedBooks
