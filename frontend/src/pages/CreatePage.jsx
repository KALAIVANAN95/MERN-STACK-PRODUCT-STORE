import {
  Box,
  Button,
  Container,
  Heading,
  Input,
  useColorModeValue,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { useProductStore } from "../../store/product";

const CreatePage = () => {
    const toast = useToast()
    const {createProduct}=useProductStore()
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });
  
  const handleAddProduct=async()=>{
    const {success,message}=await createProduct(newProduct)
    console.log(success,message);
    if(!success){
        toast({
            "title":"Error",
            description:message,
            status:"error",
            isClosable:true
        })
    }else{
        toast({
            "title":"Success",
            description:message,
            status:"success",
            isClosable:true
        })
    }
    setNewProduct({name:"",price:"",image:""})
  }
  return (
    <>
      <Container maxW={"container.sm"}>
        <VStack spacing={8}>
          <Heading as={"h1"}>Create New Product</Heading>

          <Box
            w={"full"}
            bg={useColorModeValue("white", "gray.800")}
            p={6}
            rounded={"lg"}
            shadow={"md"}
          >
            <VStack spacing={4}>
              <Input
                name="name"
                value={newProduct.name}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, name: e.target.value })
                }
                placeholder="Product Name"
              />
              <Input
                name="price"
                value={newProduct.price}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, price: e.target.value })
                }
                placeholder="Price"
              />
              <Input
                name="image"
                value={newProduct.image}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, image: e.target.value })
                }
                placeholder="Image URL"
              />
              <Button colorScheme="blue" onClick={handleAddProduct} w={"full"}>Add product</Button>
            </VStack>
          </Box>
        </VStack>
      </Container>
    </>
  );
};

export default CreatePage;
