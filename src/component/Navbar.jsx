import React from "react";
import { Flex, Spacer, Image, Text, Icon } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { BsHandbag } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
const Navbar = () => {
  return (
    <Flex bg="offwhite"
    justify-content="cneter"
    align="center"
    borderBottom="1px solid lightgrey">
        <Spacer/>
        <Link to={"/"}>
      <Image
        src="https://cdn.shopify.com/s/files/1/0258/2485/4100/files/flatheads-logo-new-hotizontal_180x_2x_bf74c8db-79f1-4904-b343-3b0e2681ec07_192x32.png?v=1647508945"
        alt="flathead"
        height="25px"
        m={5}
      />
      </Link>
      <Spacer />
      <Link to="/collections">
        <Text px={4} py={2}>
          SHOP
        </Text>
      </Link>
      <Link to="/collections/women">
        <Text px={4} py={2}>
          WOMEN
        </Text>
      </Link>
      <Link to="/collections/men">
        <Text px={4} py={2}>
          MEN
        </Text>
      </Link>
      <Link to="/collections/newarrivals">
        <Text px={4} py={2}>
          NEW ARRIVALS
        </Text>
      </Link>
      <Link to="/collections/about">
        <Text px={4} py={2}>
          ABOUT
        </Text>
      </Link>
      <Link to="/collections/help">
        <Text px={4} py={2}>
          HELP
        </Text>
      </Link>
      <Spacer />
      <Icon boxsize="20px" mx={4}  as={BsSearch} />
      <Icon boxsize="20px" mx={4}   as={BiUser} />
      <Icon boxsize="20px" mx={4} as={BsHandbag} />
      <Text>0</Text>
      <Spacer/>
    </Flex>
  );
};

export default Navbar;
