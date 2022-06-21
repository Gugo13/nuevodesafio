/* eslint-disable @next/next/no-document-import-in-page */
/* eslint-disable @next/next/no-page-custom-font */

import React from "react";
import Main from "../components/Main";
import Footer from "../components/Footer";
import Head from "next/head";
import Navbar from "../components/Navbar";
import CssBaseline from "@mui/material/CssBaseline";

const Home = () => (
  <>
    <CssBaseline />
    <Navbar></Navbar>
    <Head>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
    </Head>

    <Main></Main>
    <Footer></Footer>
  </>
);

export default Home;
