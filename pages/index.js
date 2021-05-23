import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { signIn, signOut, useSession } from 'next-auth/client';

export default function Home() {
  const [session] = useSession();

  const handleLogin = (e) => {
    e.preventDefault();
    signIn('spotify');
  };

  const handleLogout = (e) => {
    e.preventDefault();
    signOut();
  };
  return (
    <div className={styles.container}>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </div>
  );
}
