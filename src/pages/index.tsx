import React from 'react'
import dynamic from 'next/dynamic'
import { NextPageWithLayout } from '@/interfaces/layout'
import { MainLayout } from '@/components/layout'
// import { HomeFeature, HomeHero, HomePopularCourse, HomeTestimonial, HomeOurMentors, DynamicHomeNewsLetter } from '@/components/home'

const DynamicHomeHero = dynamic(() => import('../components/home/hero'))
const DynamicHomeFeature = dynamic(() => import('../components/home/feature'))
const DynamicAboutFeature = dynamic(() => import('../components/home/about'))
const DynamicHomePopularCourse = dynamic(() => import('../components/home/popular-courses'))
const DynamicHomePopularService = dynamic(() => import('../components/home/services'))
const DynamicHomePopularGallery = dynamic(() => import('../components/home/gallery'))
const DynamicHomePopularKnowledge = dynamic(() => import('../components/home/knowledge'))
const DynamicHomePopularChoose = dynamic(() => import('../components/home/choose'))
const DynamicHomePopularTrust = dynamic(() => import('../components/home/trust'))
const DynamicHomeTestimonial = dynamic(() => import('../components/home/testimonial'))
const DynamicHomeOurMentors = dynamic(() => import('../components/home/mentors'))
const DynamicHomeNewsLetter = dynamic(() => import('../components/home/newsletter'))

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
      {/* <DynamicHomePopularCourse />
      <DynamicHomeFeature />
      <DynamicHomeTestimonial />
      <DynamicHomeOurMentors />
      <DynamicHomeNewsLetter /> */}
    </>
  )
}

Home.getLayout = (page) => <MainLayout>{page}</MainLayout>

export default Home
