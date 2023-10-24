import { Apple, Mail, MapPin } from "lucide-react"
import Container from "./ui/container"

const Footer = () => {
  return (
    <>
        <hr className="w-full p-2 my-10"/>
        <Container>
            <div className="logo h-20 w-20 rounded-lg bg-[#6544F3] m-auto overflow-hidden">
              <div className="bg-[#EEEBFE] h-24 w-full rounded-full mt-5"></div>
            </div>
            <h2 className="text-[#6544F3] text-xl font-bold text-center mt-4">Ahead</h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-20 my-8">
                <h3 className="flex "><MapPin/>&nbsp;Address line</h3>
                <h3 className="flex "><Mail/>&nbsp;Email123@gmail.com</h3>
            </div>
            <div className="m-auto w-44 h-16 bg-black rounded-lg my-6 text-white text-2xl flex items-center justify-center"><Apple size={40} fill="white"/>&nbsp;App Store</div>
            <p className="text-center my-8">&copy; 2023 Ahead app. All rights reserved.</p>
        </Container>   
    </>
  )
}

export default Footer