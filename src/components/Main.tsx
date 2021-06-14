import { Stack, StackProps } from '@chakra-ui/react'

export const Main = (props: StackProps) => (
  <Stack
    spacing="1.5rem"
    width="100%"
    maxWidth="60rem"
    pt={{base:"4rem", md:"8rem"}}
    px="1rem"
    {...props}
  />
)
