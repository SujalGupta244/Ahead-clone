"use client"

import Container from './container'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import {fadeIn, textVariant} from '../../utils/motion'

interface SizeProps{
    width: number | undefined,
    height: number | undefined
}



const Carasoul = () => {

    const size = useWindowSize();
  return (
    <motion.div 
    initial="hidden"
    whileInView="show"
    viewport={{once: true, amount: 0.25}} 
    variants={fadeIn('left','spring', 0.1, 1)}
    className='mt-12'>
        <Container>
            <h1 className='font-bold text-4xl mb-8'>Does this sound familiar...</h1>
        </Container>

        <Swiper
            slidesPerView={size.width && size.width < 600 ? 1: 4}
            spaceBetween={30}
            pagination={{
            clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
        >
        <SwiperSlide className="w-full m-2 p-8 bg-indigo-300 sm:w-1/5 rounded-3xl">
            <div className="img mb-3 text-4xl">😉</div>
            <h4 className="font-bold mb-2 text-2xl">you argue with a colleague</h4>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis at officiis qui debitis itaque delectus reiciendis, ducimus laudantium quam asperiores!</p>
        </SwiperSlide>
        <SwiperSlide className="w-full m-2 p-8 bg-yellow-300 sm:w-1/5 rounded-3xl">
            <div className="img mb-3 text-4xl">😉</div>
            <h4 className="font-bold mb-2 text-2xl">you argue with a colleague</h4>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis at officiis qui debitis itaque delectus reiciendis, ducimus laudantium quam asperiores!</p>
        </SwiperSlide>
        <SwiperSlide className="w-full m-2 p-8 bg-sky-300 sm:w-1/5 rounded-3xl">
                <div className="img mb-3 text-4xl">😉</div>
                <h4 className="font-bold mb-2 text-2xl">you argue with a colleague</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis at officiis qui debitis itaque delectus reiciendis, ducimus laudantium quam asperiores!</p>
        </SwiperSlide>
        <SwiperSlide className="w-full m-2 p-8 bg-pink-300 sm:w-1/5 rounded-3xl">
            <div className="img mb-3 text-4xl">😉</div>
            <h4 className="font-bold mb-2 text-2xl">you argue with a colleague</h4>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis at officiis qui debitis itaque delectus reiciendis, ducimus laudantium quam asperiores!</p>
        </SwiperSlide>
        <SwiperSlide className="w-full m-2 p-8 bg-blue-300 sm:w-1/5 rounded-3xl">
            <div className="img mb-3 text-4xl">😉</div>
            <h4 className="font-bold mb-2 text-2xl">you argue with a colleague</h4>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis at officiis qui debitis itaque delectus reiciendis, ducimus laudantium quam asperiores!</p>
        </SwiperSlide>
        <SwiperSlide className="w-full m-2 p-8 bg-yellow-300 sm:w-1/5 rounded-3xl">
            <div className="img mb-3 text-4xl">😉</div>
            <h4 className="font-bold mb-2 text-2xl">you argue with a colleague</h4>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis at officiis qui debitis itaque delectus reiciendis, ducimus laudantium quam asperiores!</p>
        </SwiperSlide>
      </Swiper>
    </motion.div>
  )
}

export default Carasoul


function useWindowSize() {
    const [windowSize, setWindowSize] = useState<SizeProps>({
      width: undefined,
      height: undefined,
    });
  
    useEffect(() => {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      
      window.addEventListener("resize", handleResize);
       
      handleResize();
      
      return () => window.removeEventListener("resize", handleResize);
    }, []); 
    return windowSize;
  }