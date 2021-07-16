import { Button, ButtonGroup, Stack } from '@chakra-ui/react';
import React from 'react'
import {FaFileAlt, FaGithub, FaLinkedin} from 'react-icons/fa';

function FootButtons() {

    return (
        <Stack direction="row" bottom='0px' w='100%' h={{md: '85px', base: '55px'}} justifyContent="flex-end"  position="fixed" alignItems="center">
            <ButtonGroup>
                <Button onClick={() => window.open("Assets/Jazael_cv.pdf", "_blank")} leftIcon={<FaFileAlt/>}>Resume</Button>
                <Button onClick={() => window.open("https://github.com/Jazael32", "_blank")} leftIcon={<FaGithub/>}>GitHub</Button>
                <Button onClick={() => window.open("https://www.linkedin.com/in/martin-jazael-moreno-macias-455572173/", "_blank")} mr={4} leftIcon={<FaLinkedin/>}>LinkedIn</Button>
            </ButtonGroup>
        </Stack>
    )
}

export default FootButtons
