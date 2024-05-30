import React, { useEffect, useState } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { firestore } from '../../firebase/FirebaseConfig';
import Layout from '../../components/layout/Layout';
import './UserInfo.css';
import Loader from '../../components/loader/Loader';
import Navbar from '../../components/navbar/Navbar';

const UsersList = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const emailNav = JSON.parse(localStorage.getItem("user")).result.user.email;
                console.log("emailNav", emailNav);

                const usersCollection = collection(firestore, 'users');
                const usersSnapshot = await getDocs(usersCollection);
                const usersList = usersSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

                // Find the user whose email matches emailNav
                const currentUser = usersList.find(user => user.email === emailNav);

                // Set the user state to the matched user
                setUser(currentUser);
                console.log('current user details displayed');
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, []);

    if (loading) {
        return <div><Navbar /><Loader /></div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (!user) {
        return <div>No user found</div>;
    }

    return (
        <Layout>
            <div className="user-details-container ">
                <div className="user-details bg-white p-6 rounded-lg shadow-md dark:bg-gray-800 hover:scale-110 transition-scale-110 duration-300 ease-in-out">
                    <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">User Details</h2>
                    <div className="mb-4 text-gray-700 dark:text-gray-300">
                        <strong>Name:</strong> {user.name} <br />
                        <strong>Email:</strong> {user.email} <br />
                        <strong>Joined:</strong> {new Date(user.time.seconds * 1000).toLocaleDateString()}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default UsersList;
