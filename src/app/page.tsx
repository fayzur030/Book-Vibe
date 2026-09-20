import Banner from '@/component/homepage/Banner'
import Books from '@/component/homepage/Books'
import { Suspense } from 'react'
import Loading from './loading'

export default function Home() {
  return (
    <div>
      <Banner />
      <Suspense fallback={<Loading />}>
        <Books />
      </Suspense>
    </div>
  )
}
