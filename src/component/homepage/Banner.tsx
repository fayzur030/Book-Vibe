import { PrimaryBtn } from '@/common/PrimaryBtn'
import bannerImg from '@/assets/banner-book.png'
import Image from 'next/image'

const Banner = () => {
  return (
    <section className=' bg-gray-100'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        <div className='flex flex-col-reverse lg:flex-row justify-between items-center gap-10 lg:gap-16'>
          {/* Content */}
          <div className='w-full lg:w-1/2 text-center lg:text-left'>
            <h1 className='text-[#131313] font-semibold text-4xl sm:text-5xl lg:text-6xl leading-tight max-w-xl mx-auto lg:mx-0'>
              Books to freshen up your bookshelf
            </h1>

            <div className='mt-8'>
              <PrimaryBtn>View The List</PrimaryBtn>
            </div>
          </div>

          {/* Banner Image */}
          <div className='w-full lg:w-1/2 flex justify-center'>
            <Image
              src={bannerImg}
              alt='Books'
              width={310}
              height={384}
              priority
              className='w-60 sm:w-72 lg:w-77.5 h-auto'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner
