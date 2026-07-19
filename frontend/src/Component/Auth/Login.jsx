import { useContext, useState } from 'react';
import api from "../../data/db"
import { FaEye, FaEyeSlash } from 'react-icons/fa6';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { DataContext } from '../../Context/ContextData';

const Login = () => {
  const [formUser, setFormUser] = useState({
    userName: "",
    userPassword: ""
  });

  const [message, setMessage] = useState("");
  const [togglePassword, setTogglePassword] = useState(true);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    const userLogin = { ...formUser, [name]: value };
    setFormUser(userLogin);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/api/auth/login", formUser);
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      setMessage('Login Successfully');
      toast.success("Login Successfully");
      navigate("/");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  }

  return (
    <section className="h-screen w-full flex justify-center items-center">
      <form className='border-2 border-gray-500 rounded-lg p-6 w-100 text-lg' onSubmit={handleSubmit}>
        <h1 className="text-3xl text-white text mb-1 text-center font-bold">Login</h1>
          <div className="form-section flex flex-col">
            <label className="my-2 font-bold" htmlFor="userName">Username:</label>
            <input 
              type="text" 
              name='userName' 
              id='userName'
              onChange={handleChange}
              className="input w-full text-lg" 
              placeholder="Enter your username..."
              required
              autoComplete={false}
            />
          </div>
  
          <div className="form-section relative flex flex-col gap-3">
            <label className="mt-3 font-bold" htmlFor="userName">Password:</label>
            <input 
              type={togglePassword ? "password" : "text"} 
              name='userPassword' 
              id='userPassword'
              onChange={handleChange}
              className='input w-full text-lg'
              placeholder="Enter your Password..." 
              required
              autoComplete={false}
            />
  
            {
              togglePassword ? (
                <FaEye 
                  size={20} 
                  className='absolute right-3 top-15.5'
                  onClick={() => setTogglePassword(!togglePassword)}
                />
              ) : (
                <FaEyeSlash
                  size={20} 
                  className='absolute right-3 top-15.5'
                  onClick={() => setTogglePassword(!togglePassword)}
                />
              )
            }
          </div>
    
          <button className="btn bg-blue-500 w-full font-bold mt-6 text-xl">Login</button>
          { message && <p className="text-center text-green-500 mt-2 py-2">{message}</p> }
          <p className="text-center mt-3">I don't have an account <Link to='/register' className='text-blue-400'>Register</Link></p>
        </form>
      </section>
  )
}

export default Login