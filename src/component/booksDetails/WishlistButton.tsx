'use client'

import { SecondaryBtn } from '@/common/SecondaryBtn'
import { BooksContext } from '@/context/BooksContext'
import { BooksTypes } from '@/types/BooksType'
import { showSuccessToast, showWarningTost } from '@/utils/toast'
import { useContext } from 'react'
interface IBook {
  book: BooksTypes
}

const WishlistButton = ({ book }: IBook) => {
  const { wishlist, setWishlist } = useContext(BooksContext)

  const handelWishlist = () => {
    console.log('button click')
    const alreadyRead = wishlist.some(
      (wishlist) => wishlist.bookId === book.bookId
    )
    if (alreadyRead) {
      showWarningTost('Already added to your wishlist')
      return
    }
    setWishlist((prev: BooksTypes[]) => [...prev, book])

    showSuccessToast(`You have added ${book.bookName} to your wishlist`)
  }

  return <SecondaryBtn onCLick={handelWishlist}>Wishlist</SecondaryBtn>
}

export default WishlistButton
