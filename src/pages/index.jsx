import { useState } from 'react';
import Head from 'next/head';
import {login} from '../../api/loginServices'
import styles from '../../styles/Home.module.css';
import Link from 'next/link';


export default function Home() {
  const [payload, setPayload] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setPayload({
      ...payload,
      [e.target.name]: e.target.value
    });
  }
  const handleSubmit = async(e) => {
    e.preventDefault();
    const response = await login(payload);
    console.log(response);
    if (response.token){
      sessionStorage.setItem('token', response.token);
      window.location.href = '/location';
    } else {
      alert('Invalid email or password');
    }
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Spy Bee Challenge - Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <article className={styles.containerLeftLogin}>
          <h1 className={styles.title}>
            Login Spy Bee Challenge
          </h1>
        </article>
        <article className={styles.containerRightLogin}>
          <div className={styles.containerRightLoginForm}>
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
                onChange={handleChange}/>
              </label>
              <button className={styles.button} type="submit">
                Login
              </button>
            </form>
            <div>
              <p className={styles.text}>
                Don&apos;t have an account? <Link className={styles.link} href="/register">
                Register
              </Link>
              </p>
              
            </div>
          </div>
        </article>
        
      </main>
    </div>
  )
}
