import { useColorMode, Switch, Box } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === 'dark'
  return (
    <Box       position="fixed"
  top="1rem"
  right="1rem"
>
<SunIcon/>
    <Switch
      color="green"
      isChecked={isDark}
      onChange={toggleColorMode}
      px="2"
      />
      <MoonIcon/>
      </Box>
  )
}
