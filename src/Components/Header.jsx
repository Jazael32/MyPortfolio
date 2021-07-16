import { Circle, Flex, Stack, useColorMode, useMediaQuery, Box, Text, Button, Image, Spacer } from '@chakra-ui/react'
import React from 'react'

function Header() {

    const { colorMode } = useColorMode();
    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)")

    return (
        <Stack>
            <Circle position="absolute" bg="blue.100" opacity="0.1" w="300px" h="300px" alignSelf="flex-end"/>
            <Flex direction={isNotSmallerScreen ? "row" : "column"} spacing="200px" p={isNotSmallerScreen ? "32" : "0" } alignSelf="flex-start">
                <Box mt={isNotSmallerScreen ? "0" : 16} align="flex-start">
                    <Text fontSize="5xl" fontWeight="semibold">Hi, Im</Text>
                    <Text fontSize="6xl" fontWeight="bold" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip="text">Martin J. Moreno</Text>
                    <Text color={colorMode === "light" ? "gray.500" : "gray.200"}>I like programming I like programming I like programming I like programming I like programming
                    I like programming I like programming</Text>
                    <Button mt={8} colorScheme="blue">Hire me</Button>
                </Box>
                <Image alignSelf="center" mt={isNotSmallerScreen ? "0" : "12"} mb={isNotSmallerScreen ? "0" : "12"} borderRadius="full" backgroundColor="transparent" 
                boxShadow="lg" boxSize="300px" src="/Assets/MyFoto.jpg"/>
            </Flex>

        </Stack>
    )
}

export default Header
