import { Box, Text, Center, Heading, Flex, Divider } from '@chakra-ui/react';
import Typewriter from 'typewriter-effect';

const LayoutPage = () => {
  //   const typewriterDescription = new Typewriter('#typewriter', {
  //     strings: ['Hello', 'World'],
  //     autoStart: true,
  //   });

  return (
    <>
      <Box w={'100%'} fontSize="xl" bg={'#2D142C'}>
        <Center h={'100vh'}>
          <Flex flexDirection={'column'} textAlign={'center'} color={'white'}>
            <Heading size={'4xl'} color="#EE454C">
              Hi !
            </Heading>
            <Heading mt={2}>I'm TJ Amit</Heading>
            <Flex justifyContent={'space-evenly'} mt={2}>
              <Divider w={'8rem'} />
              <Divider w={'3rem'} />
              <Divider w={'5rem'} />
            </Flex>
            <Text color={'#C72C41'} mt={2}>
              <Typewriter
                onInit={typewriter => {
                  typewriter
                    .typeString('WEB AND MOBILE DEVELOPER')
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString('Read learn and listen')
                    .start();
                }}
              ></Typewriter>
            </Text>
          </Flex>
        </Center>
      </Box>
    </>
  );
};

export default LayoutPage;
