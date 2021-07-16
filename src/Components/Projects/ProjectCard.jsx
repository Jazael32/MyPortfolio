import {ExternalLinkIcon} from '@chakra-ui/icons';
import {
  Text,
  Box,
  Image,
  Heading,
  Flex,
  IconButton,
  Tooltip,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';
import React from 'react';

export const ProjectCard = ({photo, title, content, github, project}) => {
  return (
    <Box bg={useColorModeValue('gray.200', 'gray.900')} borderRadius='xl' borderWidth='1px' borderColor={useColorModeValue('black', 'gray100')} maxW={['sm', 'sm', '45%', 'md']}
      h='xl' overflow='hidden' alignItems='center' my='25px' mx='15px'>
      <Image src={photo} w='450px' h='250px' fit='cover'/>
      <Flex flexDir='column' justifyContent='space-around' h='58%'>
        <Heading size='xl' align='center' as='h2'>
          {title}
        </Heading>
        <Text mx='15px' fontSize={['lg', 'lg', 'xl', 'xl']} px={['5px', '5px', '15px', '15px']}>
          {content}
        </Text>
        <Flex mb='15px' justifyContent='space-evenly'
        >
          <Tooltip hasArrow label='Source Code'>
            <IconButton
              icon={<FaGithub />}
              onClick={() => window.open(github, "_blank")}
              display={github ? 'flex' : 'none'}
            />
          </Tooltip>
          <Tooltip
            hasArrow
            label={title}
          >
            <IconButton
              icon={<ExternalLinkIcon />}
              onClick={() => window.open(project, "_blank")}
              display={project ? 'flex' : 'none'}
            />
          </Tooltip>
        </Flex>
      </Flex>
    </Box>
  )
}