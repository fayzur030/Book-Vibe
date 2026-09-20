import { OutlineBtn } from '@/common/OutLIneBtn'
import { PrimaryBtn } from '@/common/PrimaryBtn'
import { SecondaryBtn } from '@/common/SecondaryBtn'
import { BooksTypes } from '@/types/BooksType'
import { Star } from 'lucide-react'
import Image from 'next/image'

interface BooksProps {
  books: BooksTypes
}

const BooksCard = ({ books }: BooksProps) => {
  return (
    <div className='rounded-2xl border border-gray-200 bg-white p-4.5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg'>
      {/* Image */}
      <div className='flex h-47 items-center justify-center rounded-xl bg-[#F5F5F5]'>
        <Image
          src={books.image}
          alt={books.bookName}
          width={150}
          height={170}
          className='h-41.25 w-auto object-contain'
        />
      </div>

      {/* Tags */}
      <div className='mt-5 flex flex-wrap gap-2'>
        {books.tags.map((tag) => (
          <span
            key={tag}
            className='rounded-full bg-[#ECFDF3] px-3 py-1 text-xs font-medium text-[#16A34A]'
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Book Info */}
      <div className='mt-4'>
        <h2 className='line-clamp-1 font-serif text-[21px] font-bold text-[#222222]'>
          {books.bookName}
        </h2>

        <p className='mt-2 text-sm text-[#444444]'>By : {books.author}</p>
      </div>

      {/* Divider */}
      <div className='my-4 border-t border-dashed border-gray-200' />

      {/* Bottom Info */}
      <div className='flex items-center justify-between'>
        <span className='text-sm font-medium text-[#444444]'>
          {books.category}
        </span>

        <div className='flex items-center gap-2'>
          <span className='text-sm text-[#444444]'>
            {books.rating.toFixed(2)}
          </span>

          <Star size={19} strokeWidth={1.5} className='text-[#444444]' />
        </div>
      </div>
      <div className='mt-4'>
        <PrimaryBtn>Details</PrimaryBtn>
      </div>
    </div>
  )
}

export default BooksCard
