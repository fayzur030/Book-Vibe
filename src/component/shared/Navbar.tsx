'use client'

import { PrimaryBtn } from '@/common/PrimaryBtn'
import { SecondaryBtn } from '@/common/SecondaryBtn'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const navLinks = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Books',
    href: '/books',
  },
  {
    name: 'Listed-Books',
    href: '/listed_books',
  },

  {
    name: 'Pages to Read',
    href: '/pages_to_read',
  },
]

const Navbar = () => {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <nav className='sticky top-0 z-50 border-b border-gray-200/70 bg-white/90 backdrop-blur-md'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className=' py-4 flex items-center justify-between'>
          {/* Logo */}
          <Link href='/' className='text-2xl font-bold '>
            Book Vibe
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center gap-6'>
            {navLinks.map((item) => {
              const active = pathname === item.href

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative  rounded-lg text-sm lg:text-base font-semibold transition-all duration-300 ${
                    active
                      ? 'text-[#23BE0A]'
                      : 'text-[#131313] hover:text-blue-500 '
                  }`}
                >
                  {item.name}
                </Link>
              )
            })}
          </div>

          {/* Desktop Buttons */}
          <div className='hidden md:flex items-center gap-3'>
            <Link href={'/sign-in'}>
              <PrimaryBtn>Sign In</PrimaryBtn>
            </Link>
            <Link href={'/sign-up'}>
              <SecondaryBtn>Sign Up</SecondaryBtn>
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className='md:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-gray-100 hover:bg-[#23BE0A]/10 text-xl text-[#131313] transition-all duration-300 cursor-pointer'
            aria-label='Toggle menu'
          >
            {open ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            open ? 'max-h-96 opacity-100 pb-5' : 'max-h-0 opacity-0'
          }`}
        >
          <div className='border-t border-gray-200 pt-4 space-y-2'>
            {/* Mobile Links */}
            {navLinks.map((item) => {
              const active = pathname === item.href

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                    active
                      ? 'text-[#23BE0A] bg-[#23BE0A]/10'
                      : 'text-[#131313] hover:text-[#23BE0A] hover:bg-gray-100'
                  }`}
                >
                  {item.name}
                </Link>
              )
            })}

            {/* Mobile Buttons */}
            <div className='flex flex-col sm:flex-row gap-3 pt-3'>
              <Link href={'/sign-in'}>
                <PrimaryBtn>Sign In</PrimaryBtn>
              </Link>
              <Link href={'/sign-up'}>
                <SecondaryBtn>Sign Up</SecondaryBtn>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
