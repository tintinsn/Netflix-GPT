import { useEffect, useState } from 'react'
import MobileMenu from './MobileMenu'
import NavbarItem from './NavbarItem'
import { BsBell, BsChevronDown, BsSearch } from 'react-icons/bs'
import AccountMenu from './AccountMenu'
import { auth } from '../utils/firebase'
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

import imgProfile from '../../public/images/netflix-profile-blue.jpg'

const TOP_OFSET = 66

const Navbar = () => {
  const navigate = useNavigate()

  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [showAccountMenu, setShowAccountMenu] = useState(false)
  const [showBackground, setShowBackground] = useState(false)

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu)
  }
  const toggleAccountMenu = () => {
    setShowAccountMenu(!showAccountMenu)
  }

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        // console.log('sign-out')
        navigate('/')
      })
      .catch((error) => {
        navigate('/error')
      })
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= TOP_OFSET) {
        setShowBackground(true)
      } else {
        setShowBackground(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <nav className="w-full fixed z-40">
      <div
        className={` px-4 md:px-16 py-6 flex flex-row items-center  transition duration-500 ${
          showBackground ? 'bg-zinc-900 bg-opacity-90' : ''
        } `}
      >
        <img
          className="w-40 lg:w-44"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo"
        />
        {/* <div className="flex-row ml-8 gap-7 hidden lg:flex"> */}
        <div className="flex-row ml-8 gap-7 hidden lg:flex">
          <NavbarItem label="Home" />
          <NavbarItem label="Series" />
          <NavbarItem label="Films" />
          <NavbarItem label="New & Popular" />
          <NavbarItem label="My List" />
          <NavbarItem label="Browse by languages" />
        </div>
        <div
          onClick={toggleMobileMenu}
          className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative"
        >
          <p className="text-white text-sm">Browse</p>
          <BsChevronDown className={`text-white transition ${showMobileMenu ? 'rotate-180' : 'rotate-0'}`} />
          <MobileMenu visible={showMobileMenu} />
        </div>
        <div className="flex flex-row ml-auto gap-7 items-center">
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer">
            <BsSearch />
          </div>
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer">
            <BsBell />
          </div>
          <div onClick={toggleAccountMenu} className="flex flex-row items-center gap-2 cursor-pointer relative">
            <div className="w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden">
              <img src={imgProfile} alt="" />
            </div>
            <BsChevronDown className={`text-white transition ${showAccountMenu ? 'rotate-180' : 'rotate-0'}`} />
            <AccountMenu onSignOut={handleSignOut} visible={showAccountMenu} />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
