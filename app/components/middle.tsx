import Image from "next/image"
import Container from "./ui/container"

const Middle = () => {
  return (
    <div className='h-screen w-full mt-24 mb-28'>
        <Container className="h-4/5">
            <div className='bg-[#EEEBFE] h-full rounded-[3rem] overflow-hidden md:flex gap-6 relative'>
                <div className="md:h-full flex flex-col items-start justify-start md:w-2/3 pl-12 pt-20">
                    <h3 className='mb-4'>Built out of frustation</h3>
                    <h1 className='text-6xl font-bold mb-5'>Meet the ahead app</h1>
                    <div className="hidden md:block h-full relative w-full">
                        <Image src={"undraw_image_post_re_25wd.svg"} alt="Middle Image" fill />
                    </div>
                </div>
                <div className="md:h-full md:flex flex-col items-start justify-center p-12 pr-20 md:w-1/2">
                    <p className="text-gray-700 mb-4 text-lg leading-8 sm:w-4/5">A personlized pocket coach that provides bitesized, science-driven tools to boost emotional intelligence.</p>
                    <p className="text-gray-700 mb-4 text-lg leading-8 sm:w-4/5">Think of it as a pocket cheerleader towards a better, more fulfilling.</p>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Middle