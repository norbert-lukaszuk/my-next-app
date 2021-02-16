import React from "react";
import Head from "next/head";
import Image from "next/image";
import style from "../../styles/Home.module.css";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  Badge,
  Box,
  Button,
  Center,
  Container,
  Flex,
  Grid,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { AddIcon, SearchIcon } from "@chakra-ui/icons";

export const getServerSideProps = async () => {
  const collections = await fetch("http://localhost:3000/api/collections");
  const collectionsData = await collections.json();
  collectionsData.forEach((collection) => {
    fetch(`http://localhost:3000/api/collections/${collection}`).then((col) =>
      col.forEach((doc) => console.log(doc.data()))
    );
  });
  // ** fetch data using api/snippets
  // const resp = await fetch("http://localhost:3000/api/snippets");
  // const data = await resp.json();
  // ** fetch data directly from firestore
  // const resp = await db.collection("gitSnippets").get();
  // const data = resp.docs.map((snap) => ({
  // id: snap.id,
  // ...snap.data(),
  // }));
  return {
    props: {
      collections: collectionsData,
      /* projects: data */
    },
  };
};
const Snippets = ({ collections }) => {
  console.log(collections);
  return (
    <>
      <h2>Snippets</h2>
      <p>{collections}</p>
    </>
  );
};
// const Projects = ({ projects }) => {
//   const [list, setList] = useState([...projects]);
//   const [listToFilter, setListToFilter] = useState([...projects]);
//   // ** click on tag to filter by lang
//   const clickOnTag = (e) => {
//     const searchValue = e.target.innerText;
//     const currentList = [...list];
//     const matchingItems = currentList.filter((item) =>
//       // ** toString() method is necessary to startWith() to work
//       item.lang.toString().startsWith(searchValue)
//     );
//     setListToFilter(matchingItems);

//     console.log(searchValue);
//   };
//   const filterSnippets = (e) => {
//     const searchValue = e.target.value;
//     const currentList = [...list];
//     const matchingItems = currentList.filter((item) =>
//       // ** toString() method is necessary to startWith() to work
//       item.code.toString().startsWith(searchValue)
//     );

//     setListToFilter(matchingItems);
//     console.log(matchingItems);
//   };
//   console.log(list);
//   return (
//     <Center>
//       <Head>
//         <title>Create electronics blog | Projects</title>
//         <link rel="icon" href="/ic.png" />
//         <meta name="keywords" content="elctronics projects" />
//       </Head>
//       <main className={style.main}>
//         {/* <Image src="/ic_1.png" width={64} height={64} /> */}
//         <Flex justify="flex-start" align="start" width="90vw">
//           <HStack>
//             {/* <IconButton icon={<AddIcon />} /> */}
//             {/* <IconButton icon={<SearchIcon />} /> */}
//             <Button variant="ghost">Add</Button>
//             <Button variant="ghost" onClick={clickOnTag}>
//               JavaScript
//             </Button>
//             <Button variant="ghost" onClick={clickOnTag}>
//               CSS
//             </Button>
//             <Button variant="ghost" onClick={clickOnTag}>
//               /*
//             </Button>
//           </HStack>
//         </Flex>
//         <Box
//           as="h1"
//           fontSize="2rem"
//           borderRadius="lg"
//           // p="10px"
//           marginBottom="40px"
//           color="gray.600"
//         >
//           Snippets
//         </Box>
//         <InputGroup width="60%" m="10px">
//           <InputLeftElement
//             pointerEvents="none"
//             children={<SearchIcon color="gray.300" />}
//           />
//           <Input
//             placeholder="tap to filter"
//             variant="filled"
//             onChange={filterSnippets}
//           />
//         </InputGroup>
//         <Container centerContent="true"></Container>
//         <Grid templateColumns="repeat(2, 1fr)" gridGap="10px">
//           {listToFilter.map((project) => (
//             <Box
//               key={project.id}
//               p="6"
//               maxW="sm"
//               borderWidth="1px"
//               borderRadius="lg"
//               overflow="hidden"
//               className={style.Box}
//               bg="gray.100"
//             >
//               <Badge colorScheme="purple" variant="solid">
//                 {project.lang}
//               </Badge>
//               <Link href={`/snippets/${project.id}`}>
//                 <a>
//                   <h3>{`${project.code.slice(0, 40)} ...`}</h3>
//                 </a>
//               </Link>
//               {project.tags.map((tag) => (
//                 <Badge
//                   colorScheme="yellow"
//                   variant="outline"
//                   m="1"
//                   key={tag}
//                   sx={{
//                     "@media (max-width: 360px)": {
//                       display: "none",
//                     },
//                   }}
//                 >
//                   {tag}
//                 </Badge>
//               ))}
//             </Box>
//           ))}
//         </Grid>
//       </main>
//     </Center>
//   );
// };

export default Snippets;
