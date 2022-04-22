import React from "react";
import { Container, Stack, Box, Image, Text, Input, Icon, StackDivider } from "@chakra-ui/react";
import { AiOutlineSearch } from "react-icons/ai"
import { GrLocation } from "react-icons/gr"
import { CgShoppingCart } from "react-icons/cg"
import logo from "../../assets/logo.png"
import nivelImg from "../../assets/nivel.png"

import Routes from "../routes";

const Navbar: React.FC = () => {
  return (
    <Stack>
        <Box backgroundColor={"primary.500"} boxShadow="sm" padding={4}>
          <Container maxWidth="container.xl" paddingX={0}>
            <Stack spacing={2}>
              <Stack direction="row" justifyContent="space-between">
                <Stack direction="row" spacing={12} flex={1}>
                  <Image objectFit="contain" src={logo} />
                  <Stack
                    direction="row"
                    divider={<StackDivider />}
                    maxWidth={600}
                    width="100%"
                    backgroundColor="white"
                    padding={2}
                    borderRadius="sm"
                    boxShadow="sm"
                    alignItems="center"
                  >
                    <Input variant="unstyled"paddingX={2} placeholder="Buscar productos, marcas y más..."/>
                    <Icon as={AiOutlineSearch} width={5} height={5} color="gray.400"></Icon>
                  </Stack>
                </Stack>
                <Stack direction="row">
                  <Image objectFit="contain" maxWidth={340} maxHeight={39} src={nivelImg} cursor="pointer"></Image>
                </Stack>
              </Stack>
              <Stack direction="row" justifyContent="space-between" alignItems="baseline">
                <Stack direction="row" spacing={16} alignItems="baseline">
                  <Stack alignItems="center" direction="row" spacing={1}>
                    <Icon as={GrLocation} width={6} height={6} />
                    <Stack spacing={0} cursor="pointer">
                      <Text lineHeight="normal" color="blackAlpha.700" fontSize="xs">Enviar a</Text>
                      <Text lineHeight="normal" fontSize="sm">Capital Federal</Text>
                    </Stack>
                  </Stack>
                  <Stack direction="row" fontSize="sm" color="blackAlpha.700" spacing={5}>
                    <Text cursor="pointer">Categorías</Text>
                    <Text cursor="pointer">Ofertas</Text>
                    <Text cursor="pointer">Historial</Text>
                    <Text cursor="pointer">Supermercado</Text>
                    <Text cursor="pointer">Moda</Text>
                    <Text cursor="pointer">Vender</Text>
                    <Text cursor="pointer">Ayuda</Text>
                  </Stack>
                </Stack>
                <Stack direction="row" fontSize="sm" spacing={5} alignItems="center">
                  <Text cursor="pointer">Creá tu cuenta</Text>
                  <Text cursor="pointer">Ingresá</Text>
                  <Text cursor="pointer">Mis compras</Text>
                  <Icon as={CgShoppingCart} height={6} width={5} cursor="pointer"/>
                </Stack>
              </Stack>
            </Stack>
          </Container>
        </Box>
          <Container alignSelf="center" maxWidth="container.xl" paddingX={0}>
            <Routes />
          </Container>
      </Stack>
  );
};

export default Navbar;
