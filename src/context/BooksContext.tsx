'use client'
import { BooksTypes } from '@/types/BooksType'
import React, { createContext, useState } from 'react'

interface BooksContextType {
  readBooks: BooksTypes[]
  setReadBooks: React.Dispatch<React.SetStateAction<BooksTypes[]>>
}

export const BooksContext = createContext<BooksContextType>({
  readBooks: [],
  setReadBooks: () => {},
 })

export const BookProvider = ({ children }: { children: React.ReactNode }) => {
  const [readBooks, setReadBooks] = useState<BooksTypes[]>([])
  const [wishlist, setWishlist] = useState([])

  const shareData = {
    readBooks,
    setReadBooks,
    wishlist,
    setWishlist,
  }

  return (
    <BooksContext.Provider value={shareData}>{children}</BooksContext.Provider>
  )
}
