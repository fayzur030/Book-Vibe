import { OutlineBtn } from '@/common/OutLIneBtn'
import { SecondaryBtn } from '@/common/SecondaryBtn'
import { getBookById } from '@/services/getBooks'
import Image from 'next/image'

interface DetailsProps {
  params: Promise<{ bookId: string }>
}

const BookDetailsPage = async ({ params }: DetailsProps) => {
  const { bookId } = await params
  const book = await getBookById(bookId)

  if (!book) {
    return (
      <div className='flex min-h-[60vh] items-center justify-center'>
        <p className='text-red-500'>Book not found</p>
      </div>
    )
  }

  return (
    <div className='mx-auto grid max-w-7xl grid-cols-1 items-stretch gap-8 px-5 py-16 md:grid-cols-2'>
      {/* Left Side */}
      <div className='flex h-full min-h-[550px] items-center justify-center rounded-xl bg-[#F5F5F5]'>
        <Image
          src={book.image}
          alt={book.bookName}
          width={425}
          height={564}
          className='h-[500px] w-auto object-contain'
        />
      </div>

      {/* Right Side */}
      <div className='flex h-full min-h-[550px] flex-col'>
        <h1 className='font-serif text-3xl font-bold leading-tight text-[#222222]'>
          {book.bookName}
        </h1>

        <p className='mt-2 text-sm md:text-base  text-[#131313]'>
          By : {book.author}
        </p>

        {/* Category */}
        <div className='mt-5 border-y border-gray-200 py-3'>
          <p className='text-sm text-[#131313 ] md:text-base'>{book.category}</p>
        </div>

        {/* Review */}
        <div className='mt-5 text-sm md:text-base leading-6 text-[#777777]'>
          <p>
            <span className='font-bold text-[#222222]'>Review : </span>
            {book.review}
          </p>
        </div>

        {/* Tags */}
        <div className='mt-5 flex items-center gap-3'>
          <span className='text-sm font-bold text-[#222222]'>Tag</span>

          <div className='flex flex-wrap gap-2'>
            {book.tags.map((tag) => (
              <span
                key={tag}
                className='rounded-full bg-[#ECFDF3] px-3 py-1 text-xs font-medium text-[#16A34A]'
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Details */}
        <div className='mt-5 border-t border-gray-200 pt-4'>
          <div className='grid grid-cols-[145px_1fr] gap-y-3 text-sm'>
            <span className='text-[#777777] md:text-base'>
              Number of Pages:
            </span>
            <span className='font-semibold text-[#131313] md:text-base'>
              {book.totalPages}
            </span>

            <span className='text-[#777777] md:text-base'>Publisher:</span>
            <span className='font-semibold text-[#131313] md:text-base'>
              {book.publisher}
            </span>

            <span className='text-[#777777] md:text-base'>
              Year of Publishing:
            </span>
            <span className='font-semibold text-[#131313] md:text-base'>
              {book.yearOfPublishing}
            </span>

            <span className='text-[#777777] md:text-base'>Rating:</span>
            <span className='font-semibold text-[#131313] md:text-base'>
              {book.rating}
            </span>
          </div>
        </div>

        {/* Buttons */}
        <div className='mt-auto flex gap-3 pt-7'>
          {/* <button className='rounded-md border border-gray-300 cursor-pointer bg-white px-6 py-2.5 text-sm font-medium text-[#333333] transition hover:bg-gray-50'>
            Read
          </button> */}
          <OutlineBtn>Read</OutlineBtn>
          <SecondaryBtn>Wishlist</SecondaryBtn>
          {/* <button className='rounded-md bg-[#2CAED3] px-6 py-2.5 text-sm cursor-pointer font-medium text-white transition hover:bg-[#2299BA]'>
            Wishlist
          </button> */}
        </div>
      </div>
    </div>
  )
}

export default BookDetailsPage
