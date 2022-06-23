import React from 'react'
import Layout from '../components/Layout'
import Image from 'next/image'
import About from '../public/about.gif'
import DFHabout from '../public/dfhabout.png'
import { Typography } from '@material-ui/core'
function about() {
    return (
        <div >
            <Layout>
                <div >
                    <Image
                        
                        className='justify-center'
                        src={DFHabout} height={500} width={1000} alt="about us" />
                </div>
                <div>
                <Typography component="h1" variant="h1">
          Digital Fashion house is Upcycle-Focused Designer and vendor platform for independent designers and small brands. With a simple and intuitive UI, designers can focus on their projects and leave the hassle of running an online store up to us. With Digital Fashion House designers come first. </Typography>
          <Image
                        
                        className='justify-center'
                        src={About} height={500} width={1000} alt="about us" />
                </div>
            </Layout>
        </div>
    )
}

export default about