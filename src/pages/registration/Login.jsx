import { Link, useNavigate } from 'react-router-dom'
import './Login.css'
import { useContext, useState } from 'react';
import myContext from '../../context/data/myContext';
import { auth } from '../../firebase/FirebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import Loader from '../../components/loader/Loader';
import toast from 'react-hot-toast';
import Navbar from '../../components/navbar/Navbar';
import LoginNav from '../../components/navbar/LoginNav';
import Footer from '../../components/footer/Footer';


function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    
    const context = useContext(myContext)
    const { loading,setLoading} = context

    
    

    const signin = async (e) => {

        e.preventDefault();

        if (email === "" || password === "") {
            return toast.error("All fields are required")
        }
    
        //email
        var atIdx = email.indexOf("@")
        var dotIdx = email.indexOf(".")
        if(atIdx > 0 && dotIdx > atIdx + 1 && email.length > dotIdx){
            console.log('correct')
        }
        else{
            return toast.error("Invalid Email.")
        }

        setLoading(true);
        try {
          const result = await signInWithEmailAndPassword(auth, email, password)
          console.log("login",result)
          localStorage.setItem('user',JSON.stringify({result}));

          toast.success('Login Successfully',{duration:4000});
          setTimeout(() => {
            navigate('/home');
            }, 2000);
          setLoading(false);
        } 
        catch (error) {
          toast.error('Invalid Credentials');
          console.log(error)
          setLoading(false);
        }
      }
   
    return (
    <div className="login">
      <LoginNav />
      <div className='flex justify-center items-center h-screen login'>
        {loading && <Loader />}
        <form onSubmit={signin} className='bg-gray-800 px-10 py-10 rounded-xl'>
          <div className="">
            <h1 className='text-center text-white text-xl mb-4 font-bold'>Login</h1>
          </div>
          <div>
            <input
              type="email"
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
              placeholder='Email'
              required
            />
          </div>
          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
              placeholder='Password'
              required
            />
          </div>
          <div className='flex justify-center mb-3'>
            <button
              type="submit"
              className='bg-blue-500 w-full text-white font-bold px-2 py-2 rounded-lg'>
              Login
            </button>
          </div>
          <div>
            <h2 className='text-white'>
              Don't have an account? <Link className='text-green-500 font-bold' to={'/signup'}>Signup</Link>
            </h2>
          </div>
        </form>
      </div>
    </div>
    )
}

export default Login