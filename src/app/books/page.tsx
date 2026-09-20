import BooksCard from '@/component/homepage/BooksCard'
import { getBooks } from '@/services/getBooks'

const Books = async () => {
  const fetchBooks = await getBooks()
  return (
    <div className='mt-10'>
      <div className='mb-10'>
        <h1 className='text-3xl font-semibold text-center'>
          Explore All Books
        </h1>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto gap-6'>
        {fetchBooks.map((book) => (
          <BooksCard key={book.bookId} books={book} />
        ))}
      </div>
    </div>
  )
}

export default Books
