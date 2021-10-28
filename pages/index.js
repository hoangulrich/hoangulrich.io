import Head from "next/head";
import Layout from "../components/Layout";
import Introduction from "../components/Introduction";
import Works from "../components/Works";
import About from "../components/About";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Hoang Le - hoangulrich.io</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Introduction />
      <About />
      <Works />
      <Contact />
    </Layout>
  );
}
