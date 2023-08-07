"use client"
import { UserAuth } from '@/context/Context'
import Image from 'next/image'
import HomeHeader from './components/HomeHeader';
import TrendingCollection from './components/TrendingCollection';
import TopCreators from './components/TopCreators';
import Categories from './components/Categories';
import DiscoverMoreNft from './components/DiscoverMoreNft';
import NftHighlight from './components/NftHighlight';
import HowItWork from './components/HowItWork';
import Subscribe from './components/Subscribe';



export default function Home() {
  const { user } = UserAuth()
  return (
    <>
      <section className='px-48 py-20 h-full'>
        <HomeHeader />
        <TrendingCollection />
        <TopCreators />
        <Categories />
        <DiscoverMoreNft />
      </section>
      <section className='py-12'>
        <NftHighlight />
      </section>
      <section className='px-48 py-20 h-full'>
        <HowItWork />
        <Subscribe />
      </section>
    </>
  )
}
