"use client"
import Image from 'next/image';
import Container from './ui/container'
import { Apple, Star } from 'lucide-react';
import { useEffect, useState } from 'react';

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
            <div className='bg-purple-200 h-full rounded-[3rem] overflow-hidden flex '>
                <div className="h-full flex flex-col items-start justify-center md:w-2/4 pl-12">
                    <h3 className='mb-4'>Ahead app</h3>
                    <h1 className='text-6xl font-bold mb-5'>Master your life <br /> by mastering <br /> emotions</h1>
                    <div className="flex gap-6 items-center">
                        <div className="app">
                            <div className="m-auto w-44 h-16 bg-black rounded-lg my-6 text-white text-2xl flex items-center justify-center"><Apple size={40}/>&nbsp;App Store</div>
                        </div>
                        <div className="stars">
                            <div className="flex gap-2">
                                <Star/>
                                <Star/>
                                <Star/>
                                <Star/>
                                <Star/>
                            </div>
                            <p>100+ Appstore reviews</p>
                        </div>
                    </div>
                </div>
                <div className="h-full hidden md:flex flex-col items-start justify-center w-2/4 pr-10 relative">
                    <Image src={"undraw_home_screen_re_640d.svg"} alt="Hero Image" fill/>
                </div>
            </div>
            {size.width && size.width > 600
            ?
            <div className="mt-20 flex gap-32 p-6">
                <h2 className='font-bold w-1/3 text-2xl'>EQ beats IQ</h2>
                <p>People with high emotions intelligence (EQ) live more fulfilled life. They tend to be happier and have healthier relationship.</p>
                <p>Tehy are successful in their pursuits and make for inspiring leaders. According to science, they earn $29k a year.</p>
            </div>
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