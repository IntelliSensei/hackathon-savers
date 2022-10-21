import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { Button, Flex, Heading, Input, InputGroup, InputLeftAddon, HStack, Stack, Text } from '@chakra-ui/react'

export default function Login() {
    return (

        <Flex gap={4} direction="column" justify="center" align="center" h="100vh">

            <Heading as='h1' size='xl'>Logga in</Heading>

            <HStack>
                <Text>Har du inte ett konto?</Text>
                <Link href="/signup">
                    Skapa konto
                </Link>
            </HStack>

            <Stack>
                <Text>Telefonnummer</Text>
                <InputGroup>
                    <InputLeftAddon children='+46' />
                    <Input type='tel' />
                </InputGroup>

                <Text>Lösenord</Text>
                <Input type="password" />

                <Button>Logga in</Button>
            </Stack>

        </Flex>
    )
}