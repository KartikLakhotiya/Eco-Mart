import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import myContext from '../../context/data/myContext';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import './SignUp.css';
import { auth, fireDB } from '../../firebase/FirebaseConfig';
import { addDoc, collection, Timestamp } from 'firebase/firestore';
import Loader from '../../components/loader/Loader';
import toast from 'react-hot-toast';
import LoginNav from '../../components/navbar/LoginNav';

function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const context = useContext(myContext);
    const { loading, setLoading } = context;

    const navigate = useNavigate();

    const signup = async (e) => {

        e.preventDefault();
        setLoading(true);

        if (name === "" || email === "" || password === "") {
            toast.error("All fields are required");
            setLoading(false);
            return;
        }

        var atIdx = email.indexOf("@");
        var dotIdx = email.indexOf(".");
        if (atIdx <= 0 || dotIdx <= atIdx + 1 || email.length <= dotIdx) {
            toast.error("Invalid Email.");
            setLoading(false);
            return;
        }

        try {
            const users = await createUserWithEmailAndPassword(auth, email, password);
            const user = {
                name: name,
                uid: users.user.uid,
                email: users.user.email,
                time: Timestamp.now()
            };

            const userRef = collection(fireDB, "users");
            await addDoc(userRef, user);

            toast.success("Signed Up Successful.");
            setName("");
            setEmail("");
            setPassword("");
            setTimeout(() => {
                navigate('/')
            }, 2000);

        } catch (error) {
            console.log(error);
            toast.error("Error signing up");
        } finally {
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
            <div className="login-card">


                <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <img class="rounded-t-lg" src="/login-img.jpg" alt="" />
                    </a>
                    <div class="p-5">
                        <a href="#">
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
                    <form onSubmit={signup} className='bg-gray-800 px-10 py-10 rounded-xl login-form'>
                        <div className="">
                            <h1 className='text-center text-white text-xl mb-4 font-bold'>Sign Up</h1>
                        </div>
                        <div>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                name='name'
                                className='bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                                placeholder='Name'
                            />
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
                                Sign Up
                            </button>
                        </div>
                        <div>
                            <h2 className='text-white'>
                                Don't have an account? <Link className='text-green-500 font-bold' to={'/login'}>Login</Link>
                            </h2>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Signup;
