'use client'

import WishListBooksCard from '@/component/wishlistBooks/WishListBookCard'
import { BooksContext } from '@/context/BooksContext'
import { useContext } from 'react'

const WishListBooks = () => {
  const { wishlist } = useContext(BooksContext)
  console.log(wishlist)
  return (
    <div>
      {wishlist.map((book) => (
        <WishListBooksCard key={book.bookId} book={book} />
      ))}
    </div>
  )
}

export default WishListBooks
