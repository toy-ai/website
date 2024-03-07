'use client'

import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Icon,
  IconProps,
} from '@chakra-ui/react'
import Image from "next/image";
import ToyAIMember from "@/app/components/ToyAIMember";


export default function LandingPage() {
  return (
    <>
    <Container maxW={'5xl'}>
      <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}>
        <Heading
          fontWeight={600}
          fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
          lineHeight={'110%'}>
          Learning data science <br />
          <Text as={'span'} color={'orange.400'}>
           from scratch
          </Text>
        </Heading>
        <Text color={'gray.500'} maxW={'3xl'}>
          Learning statistics, machine learning and deep learning from scratch!
        </Text>
          {/* <div className="relative place-items-center">
            <Image
              className="relative"
              src="/toyai.png"
              alt="ToyAI"
              width={150}
              height={100}
              priority
            />
          </div> */}

        {/*<Stack spacing={6} direction={'row'}>*/}
        {/*  <Button*/}
        {/*    rounded={'full'}*/}
        {/*    px={6}*/}
        {/*    // colorScheme={'green'}*/}
        {/*    // bg={'green.400'}*/}
        {/*    _hover={{ bg: 'green.500' }}*/}
        {/*  >*/}
        {/*    Get started*/}
        {/*  </Button>*/}
        {/*  <Button rounded={'full'} px={6}>*/}
        {/*    Learn more*/}
        {/*  </Button>*/}
        {/*</Stack>*/}
        {/*<Flex w={'full'}>*/}
        {/*  <Illustration height={{ sm: '24rem', lg: '28rem' }} mt={{ base: 12, sm: 16 }} />*/}
        {/*</Flex>*/}
      </Stack>
    </Container>
    <ToyAIMember />
    </>
  )
}
