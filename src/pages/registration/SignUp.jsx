import { useContext, useState } from 'react';
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
        if(atIdx <= 0 || dotIdx <= atIdx + 1 || email.length <= dotIdx){
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

            const userRef = collection(fireDB,"users");
            await addDoc(userRef, user);

            toast.success("Sign Up Successful now you can Login.");
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

    return (
        <div className='signup'>
            <form onSubmit={signup}>
            <LoginNav/>
        <div className='flex justify-center items-center h-screen signup'>
            {loading && <Loader />}
            <div className='bg-gray-800 px-10 py-10 rounded-xl'>
                <div>
                    <h1 className='text-center text-white text-xl mb-4 font-bold'>Signup</h1>
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
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        name='email'
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
                    <input type="submit" className='bg-blue-500 w-full text-white font-bold px-2 py-2 rounded-lg'/>
                   
                </div>
                <div>
                    <h2 className='text-white'>Have an account <Link className='text-green-500 font-bold' to={'/login'}>Login</Link></h2>
                </div>
            </div>
        </div>
        </form>
        </div>
    );
}

export default Signup;
