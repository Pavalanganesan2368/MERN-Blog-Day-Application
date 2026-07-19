import React from 'react'
import useScreenView from '../../../Hooks/useScreenView'
import { FaTablet, FaMobile, FaLaptop } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { Link, useNavigate } from 'react-router-dom';
import useTheme from '../../../Hooks/useTheme';
import { FaSun, FaMoon} from "react-icons/fa";
import { toast } from 'react-toastify';

const Header = () => {
  const { screen } = useScreenView();
  const navigate = useNavigate();
  const { theme, setTheme } = useTheme();

  const handleLogout = () => {
    localStorage.removeItem('token');
    toast.success("Logout Successfully");
    navigate('/login');
  }
  return (
    <header className="flex justify-between p-3 bg-blue-500">
      <h1 className="font-bold text-2xl"><Link to="/">Blog App</Link></h1>
      <div className="flex flex-row items-center justify-center gap-3 h-full">
        <button className='btn bg-blue-400 border-none shadow-none' title={theme === "light" ? "dark" : "light"} onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>{theme === 'light' ? <FaSun/> : <FaMoon />}</button>
        <button className="btn bg-blue-400 border-none shadow-none font-bolder text-2xl" title={'Logout Button'} onClick={() => handleLogout()}><FiLogOut /></button>
        <h1 className="text-3xl">{screen.width >=768 ? <FaLaptop/> : screen.width >= 569 ? <FaTablet/> : <FaMobile />}</h1>
      </div>
    </header>
  )
}

export default Header