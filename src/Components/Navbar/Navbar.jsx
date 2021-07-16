import { Flex, Heading, HStack, IconButton, Spacer, useColorMode, useColorModeValue, useMediaQuery } from '@chakra-ui/react'
import { FaSun, FaMoon} from 'react-icons/fa';
import React, {Fragment} from 'react'
import Navlink from './Navlink';

function Navbar() {

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)")
    const {colorMode, toggleColorMode} = useColorMode();
    const links = ["Profile", "Experience", "Projects"];

    return (
        <Fragment>
        <Flex top='0px' w="100%" zIndex='5' position="fixed" p="4" bg={useColorModeValue('gray.300', 'gray.900')}>
        { isNotSmallerScreen === true &&
        <Heading ml="8" mr="8" size="md" fontWeight="semibold" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip="text" mt="1">Welcome</Heading>
        }
        <HStack ml={isNotSmallerScreen ? "0" : "8"} spacing={isNotSmallerScreen ? 8 : 2}>
            {
                links.map(link => (
                    <Navlink key={link} to={link}/>
                ))
            }
        </HStack>
        <Spacer></Spacer>
            <IconButton mr={3} onClick={toggleColorMode} ml={8} icon={colorMode === "light" ? <FaSun/> : <FaMoon/>}></IconButton>
        </Flex>
        </Fragment>
    )
}

export default Navbar