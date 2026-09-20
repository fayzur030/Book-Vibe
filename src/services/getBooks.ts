import { BooksTypes } from '@/types/BooksType'

export const getBooks = async (): Promise<BooksTypes[]> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`
    )

    if (!response.ok) {
      throw new Error('Failed to fetch books data')
    }

    const books: BooksTypes[] = await response.json()

    return books
  } catch (error) {
    console.error('Error fetching books:', error)
    return []
  }
}

export const getBookById = async (
  id: string
): Promise<BooksTypes | undefined> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`
  )

  if (!response.ok) {
    throw new Error('Failed to fetch books data')
  }

  const books: BooksTypes[] = await response.json()

  return books.find((book) => book.bookId === Number(id))
}
