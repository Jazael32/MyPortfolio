import React from 'react'
import { Link, useColorModeValue } from '@chakra-ui/react'
import { Link as ScrollLink } from "react-scroll";

function Navlink({to}) {

    return (
        <ScrollLink activeClass='active' to={to} spy={true} smooth={true} duration={1000} offset={-90}>
            <Link px={2} py={1} rounded={'md'} fontWeight="bold"  _hover={{textDecoration: 'none', bg: useColorModeValue('#b5d0da', 'gray.700'),}}>{to}</Link>
        </ScrollLink>
    )
}

export default Navlink
