"use client"

import Container from './container'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';




const Carasoul = () => {


  return (
    <div  className='mt-12'>
        <Container>
            <h1 className='font-bold text-4xl mb-8'>Does this sound familiar...</h1>
        </Container>

        <Swiper
            slidesPerView={window.innerWidth < 600 ? 1: 4}
            // slidesPerView={'auto'}
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
    </div>
  )
}

export default Carasoul