import React from 'react'
import dynamic from 'next/dynamic'
import { NextPageWithLayout } from '@/interfaces/layout'
import { MainLayout } from '@/components/layout'

const DynamicHomeHero = dynamic(() => import('../components/home/hero'))
const DynamicAboutFeature = dynamic(() => import('../components/home/about'))
const DynamicHomePopularService = dynamic(() => import('../components/home/services'))
const DynamicHomePopularGallery = dynamic(() => import('../components/home/gallery'))
const DynamicHomePopularKnowledge = dynamic(() => import('../components/home/knowledge'))
const DynamicHomePopularChoose = dynamic(() => import('../components/home/choose'))
const DynamicHomePopularTrust = dynamic(() => import('../components/home/trust'))

const Home: NextPageWithLayout = () => {
  return (
    <>
      <DynamicHomeHero />
      <DynamicAboutFeature />
      <DynamicHomePopularService />
      <DynamicHomePopularGallery />
      <DynamicHomePopularKnowledge />
      <DynamicHomePopularChoose />
      <DynamicHomePopularTrust />
    </>
  )
}

Home.getLayout = (page) => <MainLayout>{page}</MainLayout>

export default Home
