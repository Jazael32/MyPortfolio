import {Text, Box, Flex, Heading,} from '@chakra-ui/react';
import { ProjectsInformation } from './ProjectsInformation';
import React from 'react';
import { ProjectCard } from './ProjectCard';
  
  export const Projects = () => {
    return (
      <Box mb={{base:'30px', md:'60px'}}>
        <Text fontSize='5xl' align='center' id='Projects' mb='25px'>
          Projects
        </Text>
        <Box alignSelf="center">
            <Heading align="center" fontWeight="extrabold" color="cyan.500" size="4xl">
                2+
            </Heading>
            <Text align="center" fontSize="2xl" color="gray.400" mb="3">Years of Experience</Text>
        </Box>
        <Flex mx='5%' flexWrap='wrap' justifyContent='space-evenly' alignItems='center'>
        {
            ProjectsInformation.map((projectInfo) => {

                return <ProjectCard
                  photo={projectInfo.photo}
                  title={projectInfo.title}
                  content={projectInfo.content}
                  github={projectInfo.github}
                  key={projectInfo.title}
                />
            })
          }
        </Flex>
      </Box>
    )
  }