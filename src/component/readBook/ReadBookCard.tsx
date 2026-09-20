import { BooksTypes } from '@/types/BooksType'
import { CalendarDays, FileText, Users } from 'lucide-react'
import Image from 'next/image'

interface IReadBookProps {
  book: BooksTypes
}

const ReadBookCard = ({ book }: IReadBookProps) => {
  return (
    <div className='mx-auto mt-6 w-full max-w-7xl sm:mt-10'>
      <div className='flex w-full flex-col gap-4 rounded-xl border border-gray-200 bg-white p-3 transition-all duration-300 hover:shadow-md sm:flex-row sm:p-4'>
        {/* Book Image */}
        <div className='flex h-48 w-full shrink-0 items-center justify-center rounded-lg bg-[#F5F5F5] sm:h-43 sm:w-40'>
          <Image
            src={book.image}
            alt={book.bookName}
            width={129}
            height={172}
            className='h-40 w-auto object-contain sm:h-32 sm:w-32'
          />
        </div>

        {/* Book Information */}
        <div className='flex min-w-0 flex-1 flex-col'>
          {/* Title */}
          <h2 className='font-serif text-lg font-bold text-[#222222] sm:text-xl'>
            {book.bookName}
          </h2>

          {/* Author */}
          <p className='mt-1 text-sm text-[#444444]'>By : {book.author}</p>

          {/* Tags + Year */}
          <div className='mt-3 flex flex-wrap items-center gap-2 sm:gap-3'>
            <span className='text-sm font-bold text-[#222222]'>Tag</span>

            {book.tags.map((tag) => (
              <span
                key={tag}
                className='rounded-full bg-[#ECFDF3] px-3 py-1 text-xs font-medium text-[#16A34A]'
              >
                #{tag}
              </span>
            ))}

            <div className='flex items-center gap-1 text-xs text-gray-500'>
              <CalendarDays size={14} />
              <span>Year of Publishing: {book.yearOfPublishing}</span>
            </div>
          </div>

          {/* Publisher + Pages */}
          <div className='mt-3 flex flex-wrap items-center gap-3 text-xs text-gray-500 sm:gap-5'>
            <div className='flex items-center gap-1'>
              <Users size={15} />
              <span>Publisher: {book.publisher}</span>
            </div>

            <div className='flex items-center gap-1'>
              <FileText size={15} />
              <span>Page {book.totalPages}</span>
            </div>
          </div>

          {/* Divider */}
          <div className='my-3 border-t border-gray-200' />

          {/* Bottom */}
          <div className='flex flex-wrap items-center gap-2'>
            <span className='rounded-full bg-[#DBEEFF] px-3 py-2 text-xs font-medium text-[#2684FF] sm:px-4'>
              Category: {book.category}
            </span>

            <span className='rounded-full bg-[#FFF0D5] px-3 py-2 text-xs font-medium text-[#E99A19] sm:px-4'>
              Rating: {book.rating}
            </span>

            <button className='rounded-full bg-[#00B83D] px-4 py-2 text-xs font-medium text-white transition hover:bg-[#009F35] sm:px-5'>
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReadBookCard
