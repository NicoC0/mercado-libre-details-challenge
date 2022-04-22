import React from "react";
import {Container, Stack, Box} from "@chakra-ui/react";

import Routes from "./routes";

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

const App: React.FC = () => {
  return (
    <>
    <Navbar />
    <Footer />
    </>
  );
};

export default App;