// "use client"

import Container from "./ui/container"


const Navbar = () => {
  return (
    <div className="w-full fixed z-10 bg-white mb-8 top-0 left-0">
        <Container>
          <nav className="flex items-center justify-between flex-wrap md:py-4 p-4">
            <div className="icon">
              <div className="logo h-12 w-12 rounded-lg overflow-hidden bg-[#6544F3] m-auto">
                <div className="bg-[#EEEBFE] h-14 w-full rounded-full mt-2"></div>
              </div>
            </div>
            <div className="flex items-center justify-end gap-10 w-4/5">
                <div className="hidden md:flex items-center justify-between w-2/4">
                    <a href="">Emotions</a>
                    <a href="">Manifesto</a>
                    <a href="">Self-awareness test</a>
                    <a href="">Wrok with us</a>
                </div>
                <button className="text-[0.8rem] p-3 bg-black rounded-3xl text-white">Download app</button>
            </div>
          </nav>
        </Container>
    </div>
  )
}

export default Navbar