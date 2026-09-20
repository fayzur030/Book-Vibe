import { BooksTypes } from '@/types/BooksType'
const Base_URL = 'http://localhost:3000'

export const getBooks = async (): Promise<BooksTypes[]> => {
  try {
    const response = await fetch(`${Base_URL}/booksData.json`)
    if (!response.ok) {
      throw new Error('Failed to fetch books data')
    }
    const books: BooksTypes[] = await response.json()
    return books
  } catch (error) {
    console.error('Error fetching books:', error)
  }
  return []
}
