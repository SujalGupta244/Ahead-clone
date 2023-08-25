import Image from "next/image"
import Container from "./ui/container"

const MiddleSec = () => {
  return (
    <div className=' w-full mt-24 mb-28'>
        <Container className="h-4/5">
            <div className=" flex flex-col items-center justify-center p-8 my-8">
                <p className="mb-1 font-semibold">We take privacy seriously</p>
                <h3 className="mb-3 font-bold text-2xl">Before you get Started</h3>
                <h4 className="w-1/2 text-center mb-2 text-gray-700">"We won't share your answers wit anyone (and won't ever tell you which friends said what about you)"</h4>
                <p className="font-semibold mb-2">with love, <span className="font-light italic text-2xl">Sujal Gupta</span></p>
                <button className="text-[0.8rem] p-2.5 mt-4 mb-2 bg-black rounded-3xl text-white">Start a test</button>
                <p className="text-[0.6rem] text-gray-600 font-semibold">Take only 5 minutes</p>
            </div>


            <div className='h-screen bg-[#EDF8FE] rounded-[3rem] overflow-hidden md:flex gap-6 relative'>
                <div className="md:h-full flex flex-col items-start justify-start md:w-2/3 md:pl-12 pt-20">
                    <h1 className='text-5xl font-bold mb-5'>Work with us</h1>
                    <div className=" overflow-auto shadow-xl md:block w-full md:w-4/5 mb-8 bg-white rounded-lg mt-8">
                        <div className="p-8">
                            <div className="logo h-12 w-12 rounded-lg overflow-hidden bg-[#6544F3] mb-4">
                                <div className="bg-[#EEEBFE] h-14 w-full rounded-full mt-2"></div>
                            </div>
                            <h3 className="text-bold text-2xl font-semibold">About</h3>
                            <p className="leading-7 w-[90%]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae nisi ex asperiores enim ab laborum quo, et voluptate atque, amet culpa, voluptatibus eos modi perferendis repudiandae distinctio non itaque excepturi.</p>
                        </div>
                        <div className="p-8 bg-[#FEF7F1] rounded-xl">
                            <h3 className="text-bold text-2xl font-semibold">Product</h3>
                            <p className="leading-7 w-[90%]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae nisi ex asperiores enim ab laborum quo, et voluptate atque, amet culpa, voluptatibus eos modi perferendis repudiandae distinctio non itaque excepturi.</p>
                        </div>
                    </div>
                </div>
                <div className="hidden items-end p-12 pr-20 md:w-1/2">
                    <h2 className="text-[#6544F3] text-6xl text-right font-semibold">ahead</h2>
                    <div className="h-full overflow-auto pb-4 no-scrollbar">
                        <div className="bg-white rounded-xl p-8 my-4">
                            <h4 className="font-bold mb-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero aspernatur impedit repellendus reprehenderit eius ipsa accusantium earum.</p>
                        </div>
                        <div className="bg-white rounded-xl p-8 my-4">
                            <h4>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero aspernatur impedit repellendus reprehenderit eius ipsa accusantium earum.</p>
                        </div>
                        <div className="bg-white rounded-xl p-8 my-4">
                            <h4 className="font-bold mb-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero aspernatur impedit repellendus reprehenderit eius ipsa accusantium earum.</p>
                        </div>
                        <div className="bg-white rounded-xl p-8 my-4">
                            <h4>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero aspernatur impedit repellendus reprehenderit eius ipsa accusantium earum.</p>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default MiddleSec