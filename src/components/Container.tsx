import { Flex, useColorMode, FlexProps } from '@chakra-ui/react'

export const Container = (props: FlexProps) => {
  const { colorMode } = useColorMode()

  const bgColor = { light: '#fcfaef', dark: '#5b7e7a' }

  const color = { light: 'black', dark: 'white' }
  return (
    <Flex
      flex="1"
      direction="column"
      alignItems="center"
      justifyContent="space-between"
      bg={bgColor[colorMode]}
      color={color[colorMode]}
      {...props}
    />
  )
}
