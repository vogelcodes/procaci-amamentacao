import { Flex, Heading, Image, Img } from '@chakra-ui/react'
// import Image from 'next/image'
export const Hero = ({ title }: { title: string }) => (
  <Flex
    direction="column"
    justifyContent="center"
    alignItems="center"
    bgGradient="linear(to-l, #7928CA, #FF0080)"
    bgClip="text"
    pb="8"
  >
        {/* <Image width="150px" height="150px" borderRadius="full" src="https://images.prismic.io/carolinaprocaci-levecriar/e3fedded-bd6c-4af9-9aa3-9625bcc57968_187812270_371317947654797_506182409226668856_n.jpg?auto=compress,format" alt="CarolinaProcaci"/> */}
<Img borderRadius="full" src="https://images.prismic.io/carolinaprocaci-levecriar/e3fedded-bd6c-4af9-9aa3-9625bcc57968_187812270_371317947654797_506182409226668856_n.jpg?auto=compress,format" boxSize="150px"/>
    <Heading fontSize="5vw">{title}</Heading>
  </Flex>
)

Hero.defaultProps = {
  title: 'Carolina Procaci',
}
