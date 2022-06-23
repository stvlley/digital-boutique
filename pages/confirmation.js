import Image from 'next/image'
import React from 'react'
import Layout from '../components/Layout'
import dfh from '../public/dfh.gif'


export default function confirmation() {
  return (
    <div>
        <Layout>
        <Image
                        
                        className='justify-center'
                        src={dfh} height={500} width={1000} alt="about us" />
        </Layout>
    </div>
  )
}
