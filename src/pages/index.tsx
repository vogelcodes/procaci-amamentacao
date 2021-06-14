import {
  Link as ChakraLink,
  Image,
  Text,
  Code,
  List,
  ListIcon,
  ListItem,
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
  <Container height="100vh">
    <Main>
    <Hero />
      <Text>
Consultora em Amamentação
      </Text>

      <List spacing={3} my={0}>
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
      <ChakraLink isExternal display="flex" alignItems="center" mr="1" href="https://www.instagram.com/carolina.procaci/" flexGrow={1}><RiInstagramLine/>@carolina.procaci</ChakraLink>
      <ChakraLink isExternal display="flex" alignItems="center" mr="1" href="https://br.pinterest.com/levecriar/" flexGrow={1}><RiPinterestLine/>levecriar</ChakraLink>
      <Text> - {new Date().getFullYear()}</Text>
    </Footer>
    <CTA />
  </Container>
)

export default Index
