import { useEffect } from "react";
import splitbee from "@splitbee/web";
import Footer from "../components/Footer";
import Header from "../components/Header";

import "../styles/global.css";

const App = ({ Component, pageProps }) => {
  useEffect(() => {
    splitbee.init({
      scriptUrl: "/sb.js",
      apiUrl: "/_hive",
    });
  });

  return (
    <div className="wrapper">
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
