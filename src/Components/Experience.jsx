import { Flex, Image,  Stack, Text, useMediaQuery } from '@chakra-ui/react'
import React from 'react'

function Experience() {
    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)")
    return (
        <div>
        <Stack>
        <Text id="Experience" fontSize="5xl" fontWeight="semibold" alignSelf="center">Skills</Text>
            <Flex direction="row" spacing="300px" p={isNotSmallerScreen ? "8" : "0" } alignSelf="center">
                <Image mr={5} align="center" boxSize={isNotSmallerScreen ? "10rem" : "5rem" } src="Assets/Python.svg"></Image>
                <Image mr={5} align="center" boxSize={isNotSmallerScreen ? "10rem" : "5rem" } src="Assets/Angular.svg"></Image>
                <Image mr={5} align="center" boxSize={isNotSmallerScreen ? "10rem" : "5rem" } src="Assets/Git.svg"></Image>
                <Image mr={5} align="center" boxSize={isNotSmallerScreen ? "10rem" : "5rem" } src="Assets/Laravel.svg"></Image>
            </Flex>
            <Flex direction="row" spacing="200px" p={isNotSmallerScreen ? "8" : "0" } alignSelf="center">
                <Image mr={2} align="center" boxSize={isNotSmallerScreen ? "10rem" : "5rem" } src="Assets/Mysql.svg"></Image>
                <Image mr={2} align="center" boxSize={isNotSmallerScreen ? "10rem" : "5rem" } src="Assets/NetCore.svg"></Image>
                <Image mr={2} align="center" boxSize={isNotSmallerScreen ? "10rem" : "5rem" } src="Assets/React.svg"></Image>
            </Flex>
        </Stack>
        </div>
    )
}

export default Experience
