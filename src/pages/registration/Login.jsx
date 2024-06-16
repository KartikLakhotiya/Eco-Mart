import { Link, useNavigate } from 'react-router-dom'
import './Login.css'
import { useContext, useEffect, useState } from 'react';
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
  const { loading, setLoading } = context




  const signin = async (e) => {

    e.preventDefault();

    if (email === "" || password === "") {
      return toast.error("All fields are required")
    }

    //email
    var atIdx = email.indexOf("@")
    var dotIdx = email.indexOf(".")
    if (atIdx > 0 && dotIdx > atIdx + 1 && email.length > dotIdx) {
      console.log('correct')
    }
    else {
      return toast.error("Invalid Email.")
    }

    setLoading(true);
    try {
      const result = await signInWithEmailAndPassword(auth, email, password)
      // console.log("login", result)
      localStorage.setItem('user', JSON.stringify({ result }));

      toast.success('Logged in Successfully', { duration: 4000 });
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

  useEffect(() => {
    // Applying on mount
    document.body.style.overflow = "hidden";
    // Applying on unmount
    return () => {
      document.body.style.overflow = "scroll";
    };
  }, []);

  return (
    <>
      <LoginNav />
      <div className="login-card" >


        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 custom-card">
          <a>
            <img class="rounded-t-lg" src="/login-img.jpg" alt="" onClick={() => { return toast.error("Login First.") }} />
          </a>
          <div class="p-5">
            <a>
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Welcome to Eco Mart</h5>
            </a>
            <p class="mb-3 font-normal text-white dark:text-gray-400">Expirence Lightning Fast Delivery with Us.</p>
            <p class="mb-3 font-normal text-white dark:text-gray-400">Products At Afordable Rates.</p>
            <p class="mb-3 font-normal text-white dark:text-gray-400">24 x 7 Customer Care Support.</p>
          </div>
        </div>

      </div>
      <div className="login">
        <div className='flex justify-center items-center h-screen login'>
          {loading && <Loader />}
          <form onSubmit={signin} className='bg-gray-800 px-10 py-10 rounded-xl login-form'>
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

              />
            </div>
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                placeholder='Password'

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
    </>
  )
}

export default Login