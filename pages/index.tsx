import Head from "next/head";
import Image from "next/image";
// import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Link from "next/link";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>Ranko</p>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{" "}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/images/ranko.svg"
            alt="Next.js Logo"
            width={280}
            height={137}
            priority
          />
          {/* <div className={styles.thirteen}>
            <Image
              src="/thirteen.svg"
              alt="13"
              width={40}
              height={31}
              priority
            />
          </div> */}
        </div>

        <div className={styles.grid}>
          <Link href="/loan/consumer" className={styles.card}>
            <h2 >
              სამომხმარებლო სესხი<span>-&gt;</span>
            </h2>
            <p >
              მოგზაურობა, ნივთის შეძენა, გართობა
            </p>
          </Link>

          <Link href="/loan/mortgage" className={styles.card}>
            <h2 >
              იპოთეკური სესხი <span>-&gt;</span>
            </h2>
            <p >
              რემონტი, მშენებლობა, სახლის შეძენა
            </p>
          </Link>

          <Link href="/loan/business" className={styles.card}>
            <h2 >
              ბიზნეს სესხი <span>-&gt;</span>
            </h2>
            <p >
              ძირითადი საშუალებები, საბრუნავი საშუალებები
            </p>
          </Link>

          <Link href="/loan/credit" className={styles.card}>
            <h2 >
              საკრედიტო ბარათები <span>-&gt;</span>
            </h2>
            <p >საკრედიტო ბარათები</p>
          </Link>
        </div>
      </main>
    </>
  );
}
