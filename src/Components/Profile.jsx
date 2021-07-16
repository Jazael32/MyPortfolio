import { Flex, Stack, useMediaQuery, Box, Text, Button, Image, Icon } from '@chakra-ui/react';
import { FaHeart } from 'react-icons/fa';
import React from 'react';

function Profile() {

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)")

    return (
        <Stack>
            <Flex id="Profile" direction={isNotSmallerScreen ? "row" : "column"} spacing="200px" p={isNotSmallerScreen ? "32" : "0" } alignSelf="flex-start">
                <Box mt={isNotSmallerScreen ? "0" : 16} align="flex-start">
                    <Text fontSize="5xl" fontWeight="semibold">Hi, Im</Text>
                    <Text fontSize="6xl" fontWeight="bold" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip="text">Martin J. Moreno</Text>
                    <Text fontSize= {isNotSmallerScreen ? "3xl" : ""} fontWeight="bold">Full Stack developer, Experience with a few front end frameworks, and .Net Core, Laravel and Django for Backend.
                    <br/>
                    Feel free to send me a message. Also right now in love with React <Icon as={FaHeart}></Icon> </Text>
                    <Button onClick={() => window.open("Assets/Jazael_cv.pdf", "_blank")} mt={8} colorScheme="blue">My Info</Button>
                </Box>
                <Image alignSelf="center" mt={isNotSmallerScreen ? "0" : "12"} mb={isNotSmallerScreen ? "0" : "12"} borderRadius="full" backgroundColor="transparent" 
                boxShadow="lg" boxSize="300px" src="/Assets/MyFoto.jpg"/>
            </Flex>

        </Stack>
    )
}

export default Profile
