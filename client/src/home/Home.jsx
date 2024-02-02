import React from 'react'
import Banner from '../components/Banner'
import BestSellerBooks from './BestSellerBooks'
import FavoriteBook from './FavoriteBook'
import PromoBanner from './PromoBanner'
import OtherBooks from './OtherBooks'
import Review from './Review'
import Footer from '../components/MyFooter';

const Home = () => {
  return (
    <div>
      <Banner/>
      <BestSellerBooks/>
      <FavoriteBook/>
      <PromoBanner/>
      <OtherBooks/>
      <Review/>
      
    </div>
  )
}

export default Home