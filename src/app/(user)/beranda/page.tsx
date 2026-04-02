import BerandaContainer from '@/feature/_user/beranda/container/BerandaContainer'
import NavLogin from '@/shared/components/NavLogin'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <section className='bg-bl-01 min-h-screen'>
          <BerandaContainer/>
      </section>
    </Suspense>
  )
}

export default page