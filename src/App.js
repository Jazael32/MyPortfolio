import { Flex, Heading, VStack } from '@chakra-ui/layout';
import { Button, ButtonGroup, Divider, IconButton, Spacer, Stack, useColorMode } from '@chakra-ui/react';
import React from 'react';
import {FaSun, FaMoon, FaFileAlt, FaGithub, FaLinkedin} from 'react-icons/fa';
import Header from './Components/Header';
import Profile from './Components/Profile';
import Social from './Components/Social';

function App() {

  const {colorMode, toggleColorMode} = useColorMode();
  
  const testing = () => {
    console.log(colorMode);
  }

  return (
    <VStack p={5}>
      <Flex w="100%">
        <Heading ml="8" size="md" fontWeight="semibold" color="cyan.400">Welcome</Heading>
      <Spacer></Spacer>
      <IconButton ml={2} icon={<FaFileAlt/>}></IconButton>
      <IconButton ml={2} icon={<FaGithub/>}></IconButton>
      <IconButton ml={2} icon={<FaLinkedin/>}></IconButton>
      <IconButton onClick={toggleColorMode} ml={8} icon={colorMode === "light" ? <FaSun/> : <FaMoon/>}></IconButton>
      </Flex>
      <Header></Header>
      <Divider orientation="horizontal" />
      <Social></Social>
      <Divider orientation="horizontal" />
      <Profile></Profile>

      <Stack direction="row" spacing={2} align="right">
      <ButtonGroup>
        <Button leftIcon={<FaFileAlt/>}>Resume</Button>
      </ButtonGroup>
      </Stack>

    </VStack>
  );
}

export default App;
