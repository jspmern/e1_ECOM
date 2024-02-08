import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Helmet } from "react-helmet";
import { Toaster } from 'react-hot-toast';

function Layout({ children,description,keywords,author,title }) {
  return (
    <>
      <Toaster />
      <Helmet>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <Header />
      <main style={{ height: "80vh" }}>{children}</main>
      <Footer />
    </>
  );
}
Layout.defaultProps={
  description:"Best app for online shopping",
  keywords:"online shopping || elcotrnic",
  author:"utsav",
  title:"Eocomm-utsav"
}

export default Layout;
