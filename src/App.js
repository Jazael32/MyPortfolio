import { VStack } from '@chakra-ui/layout';
import { Divider } from '@chakra-ui/react';
import React from 'react';
import Profile from './Components/Profile';
import Experience from './Components/Experience';
//import Projects from './Components/Testing';
import Navbar from './Components/Navbar/Navbar';
import { Projects } from './Components/Projects/Projects';
import FootButtons from './Components/FootButtons';

function App() {

  return (
    <VStack p={5}>
      <Navbar></Navbar>
      <Profile></Profile>
      <Divider orientation="horizontal" />
      <Experience></Experience>
      <Divider orientation="horizontal" />
      <Projects></Projects>
      <FootButtons></FootButtons>
    </VStack>
  );
}

export default App;
