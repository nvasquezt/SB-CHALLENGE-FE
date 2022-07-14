import { useState } from 'react';
import React from 'react';
import Head from 'next/head';
import styles from '../../../styles/Signup.module.css';
import Link from 'next/link';
import { createUser } from '../../../api/userServices';

const Register = () => {
    const [signup, setSignup] = useState({
        fullName: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setSignup({
            ...signup,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        const user = await createUser(signup);
        if (user) {
            window.location.href = '/';
        } else {
            alert('User creation failed');
        }
    }
    
    return (
        <div className={styles.signup}>
            <Head>
            <title>Spy Bee Challenge - Signup</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
            <main className={styles.containerSignup}>
                <h1 className={styles.title}>
                    Register
                </h1>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <label className={styles.label}>
                        Email
                        <input
                            className={styles.input}
                            type="email"
                            name="email"
                            placeholder="Email"
                            onChange={handleChange}
                        />
                    </label>
                    <label className={styles.label}>
                        Password
                        <input
                            className={styles.input}
                            type="password"
                            name="password"
                            placeholder="Password"
                            onChange={handleChange}
                        />
                    </label>
                    <label className={styles.label}>
                        Full Name
                        <input
                            className={styles.input}
                            type="text"
                            name="fullName"
                            placeholder="Full Name"
                            onChange={handleChange}
                        />
                    </label>
                    <button className={styles.button} type="submit">
                        Signup
                    </button>
                </form>
                <div>
                    <p className={styles.text}>
                        Already have an account?
                        <Link className={styles.link} href="/">
                            Login
                        </Link>
                    </p>
                </div>
            </main>
        </div>
    )
}

export default Register