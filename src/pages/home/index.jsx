import { 
  Center,
  ChakraProvider,
  Input,
  Button,
  background,Box, Heading, Text, VStack, UnorderedList, ListItem, Code
} from '@chakra-ui/react'
import { login } from '../../services/login';
import { Header } from '../../components/Header/Header';
import { Layout } from '../../components/Layout';
import styled from 'styled-components';
import { AbsoluteCenter } from "@chakra-ui/react"
import { useState } from 'react';
import Desing from '../../imagens/Design ti.png'

// const Box = styled.div`
// background-color: orange;
// border-radius: 25px;
// padding-left: 15px;
// `
function Home() {
  const [guiaAtiva, setGuiaAtiva] = useState('iniciar');

  return (
    <>
      <ChakraProvider>
        <Layout>
          <vertical>
            <Box>
              <h1>Faça login</h1>
            </Box>
            <label htmlFor='emailInput'>Email</label>
            <input placeholder='email' />
            <input placeholder='password' />
            <button>Login</button>
          </vertical>

          <div className="container">
            <nav className="menu">
              <Button onClick={() => setGuiaAtiva('iniciar')}>Início</Button>
              <Button onClick={() => setGuiaAtiva('cards')}>Cards</Button>
              <Button onClick={() => setGuiaAtiva('sobre')}>Sobre</Button>
            </nav>

            <hr />

            <main className="conteudo">
              {guiaAtiva === 'iniciar' && (
                <div className="iniciar">
                  <h2>Bem-vindo à Página Inicial</h2>
                  <Box p={5} textAlign="left" maxWidth="800px">
  <Heading as="h2" size="xl" mb={4}>
    🚀 Minha Jornada com React
  </Heading>
  
  <Text fontSize="lg" mb={4}>
    Seja bem-vindo ao meu espaço de aprendizado e criação!
  </Text>

  <Text mb={4}>
    Atualmente, estou mergulhando no ecossistema do <Code colorScheme="teal">React</Code>, 
    transformando linhas de código em interfaces interativas...
  </Text>

  <Heading as="h3" size="md" mb={2}>
    O que estou explorando agora:
  </Heading>
  
  <UnorderedList spacing={2} mb={6}>
    <ListItem>Componentização e Reutilização.</ListItem>
    <ListItem>Gerenciamento de Estado com Hooks.</ListItem>
    <ListItem>Integração com TypeScript e Bibliotecas de UI.</ListItem>
  </UnorderedList>

  <Box p={4} bg="gray.100" borderRadius="md" fontStyle="italic" borderLeft="4px solid teal">
    "A programação, assim como o Direito, exige precisão e lógica..."
  </Box>
</Box>
                </div>
              )}

              {guiaAtiva === 'cards' && (
                  <div className="Cards">
  <h2>Meus Projetos</h2>
  
  {/* Use a variável Desing entre chaves no src */}
  <img 
    src={Desing} 
    alt="Preview do Projeto" 
    style={{ width: '300px', borderRadius: '8px' }} 
  />
  
  <p>Aqui aparecerão os cards do seu portfólio.</p>
</div>
              )}

              {guiaAtiva === 'sobre' && (
                <div className="Sobre">
                  <h2>Sobre Mim</h2>
                  <p>What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

Why do we use it?
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


Where does it come from?
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
                </div>
              )} 
            </main> 
          </div> 
        </Layout>
      </ChakraProvider>
    </>
  );
}

export default Home;
