'use client';


import Link from "next/link";


import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react'
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons'

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Box>
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}
      >
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }} >
          <Link href={'/'}>
            <Button
              textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
              fontFamily={'heading'}
              color={useColorModeValue('gray.800', 'white')}
              fontSize={{ base: 'sm', sm: 'sm', md: 'lg' }}
              _hover={{
                bg: useColorModeValue('gray.100', 'white'),
              }}
            >
              Toy AI
            </Button>
          </Link>
          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 5, md: 7 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}>
          <Button
            as={'a'}
            size={'sm'}
            fontSize={'sm'}
            fontWeight={400}
            color={'black'}
            bg={'gray.100'}
            href={'#'}
            _hover={{
              bg: 'gray.400',
            }}
            // variant={'link'}
          >
            Sign In
          </Button>
          <Button
            as={'a'}
            // display={{ base: 'none', md: 'inline-flex' }}
            size={'sm'}
            fontSize={'sm'}
            fontWeight={400}
            color={'black'}
            bg={'gray.100'}
            href={'#'}
            _hover={{
              bg: 'gray.400',
            }}
          >
            Sign Up
          </Button>
        </Stack>
      </Flex>
    </Box>
  )
}

const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200')
  const linkHoverColor = useColorModeValue('gray.800', 'white')
  const popoverContentBgColor = useColorModeValue('white', 'gray.800')

  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label} alignSelf={"center"}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Button
                as="a"
                p={2}
                href={navItem.href ?? '#'}
                fontSize={{ base: 'sm', sm: 'sm', md: 'lg' }}
                fontWeight={500}
                color={linkColor}
                bgColor={"white"}
                _hover={{
                  bg: 'gray.100',
                }}
                >
                {navItem.label}
              </Button>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'sm'}>
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  )
}

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Box
      as="a"
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'pink.400' }}
            fontWeight={500}>
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}>
          <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Box>
  )
}


interface NavItem {
  label: string
  subLabel?: string
  children?: Array<NavItem>
  href?: string
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Toys',
    children: [
      {
        label: 'ToyML',
        subLabel: 'Machine Learning Algorithms',
        href: '/toyml',
      },
      {
        label: 'ToyDL',
        subLabel: 'Neural Networks in Deep Learning',
        href: '/toydl',
      },
      {
        label: 'ToyStat',
        subLabel: 'Methods in Statistics',
        href: '/toystat',
      },
    ],
  },
  {
    label: 'Contact',
    children: [
      {
        label: 'Github',
        subLabel: 'https://github.com/shenxiangzhuang',
        href: 'https://github.com/shenxiangzhuang',
      },
      {
        label: 'Blog',
        subLabel: 'datahonor.com',
        href: 'datahonor.com',
      }
    ]
  },
  // {
  //   label: 'Github',
  //   href: '#',
  // },
]

