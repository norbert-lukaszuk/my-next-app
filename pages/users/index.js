import { Box, color } from "@chakra-ui/react";
import React from "react";
import Link from "next/link";

export const getStaticProps = async () => {
  const resp = await fetch("http://localhost:3000/api/users");
  const data = await resp.json();
  console.log(data);
  return {
    props: { data },
  };
};

function index({ data }) {
  const users = data.users.map((user) => (
    <Box d="flex" alignItems="center" justifyContent="center" key={user.id}>
      <Box
        w="md"
        p={3}
        m={2}
        borderWidth="2px"
        borderColor="blue.200"
        borderRadius="md"
        d="flex"
        alignItems="centerssss"
        justifyContent="center"
      >
        <Link href={`/users/${user.id}`}>
          <Box
            as="button"
            fontWeight="bold"
            color="gray.600"
            _hover={{ color: "gray.300" }}
          >
            {user.name} {user.lastName}
          </Box>
        </Link>
      </Box>
    </Box>
  ));
  return (
    <div>
      <Box>{users}</Box>
    </div>
  );
}

export default index;
