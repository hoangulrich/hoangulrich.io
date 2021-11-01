import Layout from "../components/Layout";
import Introduction from "../components/Introduction";
import Works from "../components/Works";
import About from "../components/About";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <Layout>
      <Introduction />
      <About />
      <Works />
      <Contact />
    </Layout>
  );
}
