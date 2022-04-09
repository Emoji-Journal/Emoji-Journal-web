import React, { useState, useEffect } from "react";
import {
  Flex,
  Heading,
  Box,
  Button,
  Text,
  IconButton,
  Stack,
  Spacer,
  Menu,
  Avatar,
  useColorModeValue,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Link,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
} from "@chakra-ui/react";
import {
  AddIcon,
  DeleteIcon,
  ExternalLinkIcon,
  QuestionOutlineIcon,
} from "@chakra-ui/icons";
import DarkModeSwitch from "../components/DarkModeSwitch";

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      id="navbar"
      position="fixed"
      bg={useColorModeValue("gray.100", "gray.800")}
      px={4}
      borderBottom="1px"
      borderColor={useColorModeValue("gray.200", "gray.700")}
      w="100%"
      backdropFilter="saturate(180%) blur(5px)"
    >
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Box fontFamily="'Fredoka One', cursive" fontSize="3xl">
          dailymoji
        </Box>

        <Heading id="welcomeText">
          {/* {"Welcome back, " + AuthUser.displayName} */}
        </Heading>
        <Flex alignItems={"center"}>
          <Menu>
            <Flex justify="space-between" w="100%" align="center">
              <Flex>
                <DarkModeSwitch />
                <IconButton
                  ml={2}
                  onClick={onOpen}
                  icon={<QuestionOutlineIcon />}
                />
                <Modal isOpen={isOpen} onClose={onClose}>
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader>
                      Dailymoji is developed by{" "}
                      <Link href="https://virejdasani.github.io/">
                        Virej Dasani
                      </Link>
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                      Check it out on GitHub{" "}
                      <Link href="https://github.com/virejdasani/Dailymoji">
                        here
                      </Link>
                    </ModalBody>

                    <ModalFooter>
                      <Button colorScheme="blue" mr={3} onClick={onClose}>
                        Close
                      </Button>
                    </ModalFooter>
                  </ModalContent>
                </Modal>
                <IconButton
                  ml={2}
                  // onClick={AuthUser.signOut}
                  icon={<ExternalLinkIcon />}
                />
              </Flex>
            </Flex>

            <Flex alignItems={"center"} ml={3}>
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar
                    size={"sm"}
                    src={
                      "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                    }
                    // src={
                    //   // get user image from firebase
                    //   AuthUser.photoURL
                    // }
                  />
                </MenuButton>
                <MenuList>
                  <MenuItem>Link 1</MenuItem>
                  <MenuItem>Link 2</MenuItem>
                  <MenuDivider />
                  <MenuItem>Link 3</MenuItem>
                </MenuList>
              </Menu>
            </Flex>
          </Menu>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Navbar;