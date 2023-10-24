"use client"
import Image from 'next/image';
import Container from './ui/container'
import { Apple, Star } from 'lucide-react';
import { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import {fadeIn, textVariant} from '../utils/motion'

interface SizeProps{
    width: number | undefined,
    height: number | undefined
}

const Hero = () => {

    const size = useWindowSize();
    // let width = size.width
  return (
    <div className='h-screen w-full mt-24 mb-28'>
        <Container className="h-4/5">
            <div className='bg-[#EEEBFE] h-full rounded-[3rem] overflow-hidden flex '>
              <motion.div 
                initial="hidden"
                whileInView="show"
                viewport={{once: true, amount: 0.25}} 
                variants={fadeIn('right','spring', 1.5, 1)}  className="h-full flex flex-col items-start justify-center md:w-2/4 pl-12">
                    <h3 className='mb-4 text-2xl font-semibold'>Ahead app</h3>
                    <h1 className='text-4xl md:text-6xl font-bold mb-5'>Master your life <br /> by mastering <br /> emotions</h1>
                    <div className="flex flex-col md:flex-row gap-6 items-center">
                        <div className="app">
                            <div className="m-auto w-44 h-16 bg-black rounded-lg my-6 text-white text-2xl flex items-center justify-center"><Apple size={40} fill="white"/>&nbsp;App Store</div>
                        </div>
                        <div className="stars">
                            <div className="flex gap-2">
                                <Star fill='gold' strokeWidth='0' size={40}/>
                                <Star fill='gold' strokeWidth='0' size={40}/>
                                <Star fill='gold' strokeWidth='0' size={40}/>
                                <Star fill='gold' strokeWidth='0' size={40}/>
                                <Star fill='gold' strokeWidth='0' size={40}/>
                            </div>
                            <p>100+ Appstore reviews</p>
                        </div>
                    </div>
                </motion.div>
                <motion.div initial="hidden"
                whileInView="show"
                viewport={{once: true, amount: 0.25}} 
                variants={fadeIn('left','spring', 1, 1)} className="h-full hidden md:flex flex-col items-start justify-center w-2/4 pr-10 relative">
                    <Image src={"undraw_home_screen_re_640d.svg"} alt="Hero Image" fill/>
                </motion.div>
            </div>
            {size.width && size.width > 600
            ?
            <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{once: true, amount: 0.25}} 
            variants={textVariant(0.6)}
            className="mt-20 flex gap-32 p-6">
                <h2 className='font-bold w-1/3 text-2xl'>EQ beats IQ</h2>
                <p>People with high emotions intelligence (EQ) live more fulfilled life. They tend to be happier and have healthier relationship.</p>
                <p>Tehy are successful in their pursuits and make for inspiring leaders. According to science, they earn $29k a year.</p>
            </motion.div>
            : <></>
            }
        </Container>
    </div>
  )
}

export default Hero



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