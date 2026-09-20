'use client'

import { useContext, useState } from 'react'

import { BooksContext } from '@/context/BooksContext'
import ReadBookCard from '../readBook/ReadBookCard'
import WishListBooksCard from '../wishlistBooks/WishListBookCard'
import { BooksTypes } from '@/types/BooksType'

// type
type ButtonTypeProps = 'readBooks' | 'wishListBooks'
type SortProps = 'Sort By' | 'Rating' | 'Pages' | 'Year'

// data
const sortOptions: SortProps[] = ['Sort By', 'Rating', 'Pages', 'Year']

export default function ListedBooks() {
  // context
  const { readBooks, wishlist } = useContext(BooksContext)

  // state
  const [buttonType, setButtonType] = useState<ButtonTypeProps>('readBooks')
  const handleUpdateBtnType = (type: ButtonTypeProps) => {
    setButtonType(type)
  }
  const [sortBy, setSortBy] = useState<SortProps>('Sort By')
  //handleSortChange
  const sortBooks = (books: BooksTypes[]) => {
    const sortedBooks = [...books]
    if (sortBy === 'Sort By') {
      return books
    } else if (sortBy === 'Rating') {
      sortedBooks.sort((a, b) => b.rating - a.rating)
    } else if (sortBy === 'Pages') {
      sortedBooks.sort((a, b) => b.totalPages - a.totalPages)
    } else if (sortBy === 'Year') {
      sortedBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing)
    }
    return sortedBooks
  }

  const sortedReadBooks = sortBooks(readBooks)
  const sortedWishBooks = sortBooks(wishlist)

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(event.target.value as SortProps)
  }

  return (
    <div className='max-w-7xl mx-auto'>
      <div className='bg-gray-100 w-full py-6 mt-10 rounded-md'>
        <h1 className='text-3xl text-center font-bold mt-10'>Books</h1>
      </div>
      {/* Sort by */}
      <div className='flex justify-center mt-10'>
        <div className='flex items-center gap-2'>
          {/* <label className='text-sm font-medium text-gray-600'>Sort By</label> */}

          <select
            value={sortBy}
            onChange={handleSortChange}
            className='rounded-md border border-gray-300 bg-[#23BE0A]  text-white px-3 cursor-pointer py-2 text-base outline-none'
          >
            {sortOptions.map((option) => (
              <option
                key={option}
                value={option}
                className='bg-gray-100 text-[#131313] '
              >
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
      {/* Tabs */}
      <div className='w-full mt-14'>
        <div className='flex border-b border-gray-300'>
          <button
            className={`-mb-px rounded-t-md px-4 py-2.5 text-base ${buttonType === 'readBooks' ? 'border border-b-white border-gray-300 bg-white text-gray-700' : 'text-gray-400 hover:text-gray-600'}`}
            onClick={() => handleUpdateBtnType('readBooks')}
          >
            Read Books ({readBooks.length})
          </button>

          <button
            className={`-mb-px rounded-t-md px-5 py-2.5 text-base ${buttonType === 'wishListBooks' ? 'border border-b-white border-gray-300 bg-white text-gray-700' : 'text-gray-400 hover:text-gray-600'}`}
            onClick={() => handleUpdateBtnType('wishListBooks')}
          >
            Wishlist Books ({wishlist.length})
          </button>
        </div>
      </div>
      {buttonType === 'readBooks' ? (
        readBooks.length === 0 ? (
          <p className='text-center text-red-500 flex items-center justify-center h-screen'>
            No read books found
          </p>
        ) : (
          sortedReadBooks.map((book) => (
            <ReadBookCard key={book.bookId} book={book} />
          ))
        )
      ) : wishlist.length === 0 ? (
        <p className='text-center text-red-500 flex items-center justify-center h-screen'>
          No wishlist books found
        </p>
      ) : (
        sortedWishBooks.map((wishBook) => (
          <WishListBooksCard key={wishBook.bookId} book={wishBook} />
        ))
      )}
    </div>
  )
}
