'use client'

import { OutlineBtn } from '@/common/OutLIneBtn'
import { BooksContext } from '@/context/BooksContext'
import { BooksTypes } from '@/types/BooksType'
import { showInfoToast, showSuccessToast } from '@/utils/toast'
import { useContext } from 'react'
interface IBook {
  book: BooksTypes
}

const ReadBook = ({ book }: IBook) => {
  const { readBooks, setReadBooks } = useContext(BooksContext)

  const handelRead = () => {
    const alreadyRead = readBooks.some(
      (readBook) => readBook.bookId === book.bookId
    )
    if (alreadyRead) {
      showInfoToast('Already read')
      return
    }
    setReadBooks((prev: BooksTypes[]) => [...prev, book])

    showSuccessToast(`You have read ${book.bookName}`)
  }

  return <OutlineBtn onClick={handelRead}>Read</OutlineBtn>
}

export default ReadBook
