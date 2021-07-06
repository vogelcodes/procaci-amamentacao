import {
  Link as ChakraLink,
  Image,
  Text,
  Code,
  List,
  ListIcon,
  ListItem,
  Spacer,
} from '@chakra-ui/react'
import { CheckCircleIcon, LinkIcon  } from '@chakra-ui/icons'
import { ImWhatsapp} from 'react-icons/im'
import { RiPinterestLine, RiInstagramLine} from 'react-icons/ri'

import { Hero } from '../components/Hero'
import { Container } from '../components/Container'
import { Main } from '../components/Main'
import { DarkModeSwitch } from '../components/DarkModeSwitch'
import { CTA } from '../components/CTA'
import { Footer } from '../components/Footer'

const Index = () => (
  <Container minH="100vh">
    <Main flex="1">
    <Hero />

      <List py="4rem" spacing={3} my={0}>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          <ChakraLink
            isExternal
            href="https://rblh.fiocruz.br/localizacao-dos-blhs"
            flexGrow={1}
            mr={2}
          >
            Encontre o Banco de Leite Humano mais próximo de você <LinkIcon />
          </ChakraLink>
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          <ChakraLink isExternal href="http://gruposdepesquisa.eerp.usp.br/gpecca/cartilha_sabrina_Final_Para_distribuicao.pdf" flexGrow={1} mr={2}>
          Cartilha da USP ensinando como desengasgar bebês e crianças pequenas <LinkIcon />
          </ChakraLink>
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          <ChakraLink isExternal href="https://wa.me/5521986388688" flexGrow={1} mr={2}>
          Fale Comigo pelo Whatsapp <ListIcon as={ImWhatsapp}></ListIcon>
          </ChakraLink>
        </ListItem>
      </List>
    </Main>

    <DarkModeSwitch />
    <Footer>
      <ChakraLink isExternal display="flex" alignItems="center" mr="1" href="https://www.instagram.com/carolina.procaci/" flexGrow={1}><RiInstagramLine/><Text>@carolina.procaci</Text></ChakraLink>
      <ChakraLink isExternal display="flex" alignItems="center" mr="1" href="https://br.pinterest.com/levecriar/" flexGrow={1}><RiPinterestLine/><Text>levecriar</Text></ChakraLink>
      <Text> - {new Date().getFullYear()}</Text>
    </Footer>
  </Container>
)

export default Index
