import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='mt-16 border-t border-gray-200 bg-gray-50'>
      <div className='mx-auto max-w-7xl px-4 py-12'>
        <div className='grid gap-10 sm:grid-cols-2 lg:grid-cols-4'>
          {/* Brand */}
          <div>
            <h2 className='text-2xl font-bold text-gray-900'>Book Vibe</h2>
            <p className='mt-3 max-w-xs text-sm leading-6 text-gray-600'>
              Discover your next favorite book, explore new stories, and build
              your personal reading collection.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className='mb-4 font-semibold text-gray-900'>Quick Links</h3>
            <ul className='space-y-3 text-sm text-gray-600'>
              <li>
                <Link href='/' className='transition hover:text-[#23BE0A]'>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href='/listed_books'
                  className='transition hover:text-[#23BE0A]'
                >
                  Listed Books
                </Link>
              </li>
              <li>
                <Link
                  href='/pages-to-read'
                  className='transition hover:text-[#23BE0A]'
                >
                  Pages to Read
                </Link>
              </li>
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h3 className='mb-4 font-semibold text-gray-900'>Explore</h3>
            <ul className='space-y-3 text-sm text-gray-600'>
              <li>
                <Link href='#' className='transition hover:text-[#23BE0A]'>
                  Popular Books
                </Link>
              </li>
              <li>
                <Link href='#' className='transition hover:text-[#23BE0A]'>
                  New Releases
                </Link>
              </li>
              <li>
                <Link href='#' className='transition hover:text-[#23BE0A]'>
                  Best Sellers
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className='mb-4 font-semibold text-gray-900'>Contact</h3>
            <ul className='space-y-3 text-sm text-gray-600'>
              <li>📧 hello@bookvibe.com</li>
              <li>📍 Dhaka, Bangladesh</li>
              <li>📚 Read. Explore. Enjoy.</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className='mt-10 flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-6 text-sm text-gray-500 md:flex-row'>
          <p>© {new Date().getFullYear()} Book Vibe. All rights reserved.</p>

          <div className='flex gap-5'>
            <Link href='#' className='hover:text-[#23BE0A]'>
              Privacy Policy
            </Link>
            <Link href='#' className='hover:text-[#23BE0A]'>
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
