"use client"
import Container from './ui/container'
import { Star } from 'lucide-react';


const Hero = () => {
    let width = window?.innerWidth
  return (
    <div className='h-screen w-full mt-24 mb-28'>
        <Container className="h-4/5">
            <div className='bg-purple-200 h-full rounded-[3rem] overflow-hidden'>
                <div className="h-full flex flex-col items-start justify-center w-3/4 pl-12">
                    <h3 className='mb-4'>Ahead app</h3>
                    <h1 className='text-6xl font-bold mb-5'>Master your life <br /> by mastering <br /> emotions</h1>
                    <div className="flex gap-6">
                        <div className="app">
                            app
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
                <div className="h-right"></div>
            </div>
            {width > 600
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