import Link from "next/link";
import Head from "next/head";
import Script from "next/script";

export default function Consumer() {
  return (
    <>
      <Head>
        <title>სამომხმარებლო სესხი</title>

      </Head>

      <h1>სამომხმარებლო სესხი</h1>
      <h2>
      <Link href="/">← უკან დაბრუნება</Link>
      </h2>
    </>
  );
}
