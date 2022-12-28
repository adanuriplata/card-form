import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import { FormCard } from '../components';
import Footer from '../components/Footer';

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Credit Card Form - Adan Uri Plata</title>
        <meta
          name="description"
          content="Fancy form for credit cards - @adanuriplata"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
        <h1 className=" p-4 mt-1 text-4xl font-extrabold text-transparent uppercase tracking-tighest  bg-gradient-to-r from-gray-200 to-purple-200 bg-clip-text ">
          Credit Card Form - REACT
        </h1>
        <FormCard />
        <Footer />
      </main>
    </>
  );
}
