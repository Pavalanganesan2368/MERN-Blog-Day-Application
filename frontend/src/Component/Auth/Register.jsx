import { useState } from 'react';
import api from "../../data/db";
import { FaEye, FaEyeSlash } from "react-icons/fa6"
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Register = () => {
  const [form, setForm] = useState({
    userName: "",
    userEmail: "",
    userPassword: "",
  });

  const [togglePassword, setTogglePassword] = useState(true);
  const navigate = useNavigate();

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    const newForm = { ...form, [name]: value };

    setForm(newForm);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/api/auth/register', form);
      const dataMessage = response.data.message;
      setMessage(dataMessage);
      toast.success("Register Successfully")
      navigate("/login");
    } catch (error) {
      toast.error(error.response?.data?.message);
    }
  }

  const isValid = form.userName >= 5;

  return (
    <section className="h-screen w-full flex justify-center items-center">
      <form className='border-2 border-gray-500 rounded-lg p-6 w-100 text-lg' onSubmit={handleSubmit}>
        <h1 className="text-3xl text-white text mb-1 text-center font-bold">Register</h1>
        <div className="form-section flex flex-col">
          <label className="my-2 font-bold" htmlFor="userName">Username:</label>
          <input 
            type="text" 
            name='userName' 
            id='userName'
            onChange={handleChange}
            className={`input w-full text-lg` } 
            placeholder="Enter your username..."
            autoComplete='username'
            required
          />
        </div>

        <div className="form-section flex flex-col gap-3">
          <label className="mt-3 font-bold" htmlFor="userEmail">Email:</label>
          <input 
            type="email" 
            name='userEmail' 
            id='userEmail' 
            onChange={handleChange}
            className="input w-full text-lg"
            placeholder="Enter your Email..."
            required
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
            autoComplete="current-password"
            required
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

        <button className="btn bg-blue-500 w-full font-bold mt-6 text-xl">Register</button>
        { message && <p className="text-center mt-2 py-2 text-green-500">{message}</p> }
        <p className="text-center mt-3">Already I have an account <Link to='/login' className='text-blue-400'>Login</Link></p>

      </form>
    </section>
  )
}

export default Register