import React from 'react'
import CartWidget from './CartWidget'
import { Menu, MenuButton, MenuList, MenuItem, Flex, Box, Spacer, Button, VStack, StackDivider } from '@chakra-ui/react'





const NavBar = () => {
    return (
        <div>


            <Flex>
                <Box>
                    <h1>Nullaby</h1>
                </Box>
                <Spacer />
                <Box>
                    <Button>Catalogo</Button>
                    <Button>Contacto</Button>
                    <Button>Nosotros</Button>  
                </Box>
                <Spacer />
                <Box>
                    <CartWidget />
                </Box>
            </Flex>





        </div>
    )
}

export default NavBar




