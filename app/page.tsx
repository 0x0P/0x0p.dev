import styles from './main.module.css';
import Image from 'next/image';

export default function Home() {
  return (
    <main className={styles.main}>
      <img src={'/me2.png'} alt='me' />
      <h1>PERCENTZERO</h1>

    </main>
  );
}
