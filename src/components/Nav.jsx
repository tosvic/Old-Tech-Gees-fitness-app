import { useState } from "react"
import { Link } from "react-scroll"
import { FaTimes } from "react-icons/fa"
import { CiMenuFries } from "react-icons/ci"
import { useNavigate } from "react-router-dom";

function Nav() {

  const navigate = useNavigate()

  const [click, setClick] = useState(false); 

  const handleClick = ()=> {
    setClick(!click);  
  }

  const content = [
    <>
      <div className="lg:hidden block absolute top-28 w-full left-0 right-0 bg-black transition">
        <ul className="text-center text-2xl p-20">
          <Link spy={true} smooth={true} to="Home">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-button hover:text-black hover:rounded">Home</li>
          </Link>

          <Link spy={true} smooth={true} to="About">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-button hover:text-black hover:rounded">Exercise</li>
          </Link>

          <Link spy={true} smooth={true} to="Projects">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-button hover:text-black hover:rounded">Articles</li>
          </Link>

          <Link onClick={()=>navigate('./Signup')} spy={true} smooth={true} to="Contact">
            <li  className="my-4 py-4 border-b border-slate-800 hover:bg-button hover:text-black hover:rounded">Download App</li>
          </Link>
        </ul>
      </div>
    </>
  ]

  return (
    <nav  data-aos="fade-left"
    data-aos-duration="1000"
    data-aos-easing="ease-in-sine" className="main-font">
      <div className="w-full fixed h-30 flex items-center justify-betwee lg:py-5 px-20 py-8 bg-black text-white">
        
        <div className="flex-1">
          <a href="" className="text-md text-button font-bold tracking-[.3rem]">Vitality <br /> logo</a>
        </div>

        <div className="text-text-color lg:flex md:flex flex-1  justify-end  hidden">

          <div> 
            <ul className="flex gap-8 mr-16">
              <Link spy={true} smooth={true} to="Home">
                <li className="hover:text-white transition border-b-2 border-bg-color hover:border-button cursor-pointer">Home</li>
              </Link>

              <Link spy={true} smooth={true} to="About">
                <li className="hover:text-white transition border-b-2 border-bg-color hover:border-button cursor-pointer">Exercise</li>
              </Link>

              <Link spy={true} smooth={true} to="Skills">
                <li className="hover:text-white transition border-b-2 border-bg-color hover:border-button cursor-pointer">Articles</li>
              </Link>

              <Link spy={true} smooth={true} to="Contact">
                <li onClick={()=>navigate('./Signup')} className="hover:text-white transition border-b-2 border-bg-color hover:border-button cursor-pointer">Download App</li>
              </Link>
            </ul>
          </div>
        </div>

          <div>
            {click && content}
          </div>

          <button className="block sm:hidden transition" onClick={handleClick}> 
               {click ? <FaTimes /> : <CiMenuFries /> } 
          </button>

      </div>
    </nav>
  )
}

export default Nav