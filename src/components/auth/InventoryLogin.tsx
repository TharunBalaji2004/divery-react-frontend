import React, { useState, useEffect, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import {
  FormControl,
  FormLabel,
  Input,
  VStack,
  InputGroup,
  InputRightElement,
  Button,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import axios from "axios";

const InventoryLogin: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");

  const navigate = useNavigate();
  const toast = useToast();

  const formValidation = (): boolean => {
    let isValid = true;
    setEmailError("");
    setPasswordError("");

    if (!email) {
      setEmailError("Email is required");
      isValid = false;
    }

    if (!password) {
      setPasswordError("Password is required");
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const validate = formValidation();

    if (validate) {
      try {
        const { data } = await axios.post(
          "http://localhost:8000/api/auth/login",
          {
            email,
            password,
            role: "inventory",
          }, {withCredentials: true}
        );

        setLoading(false);

        if (data.success) {
          toast({
            title: "User loggedin successfully",
            status: "success",
            duration: 2000,
            isClosable: true,
          });
        } else {
          setLoading(false);

          toast({
            title: data.message,
            status: "error",
            duration: 2000,
            isClosable: true,
          });
        }

        console.log(data);
      } catch (err: any) {
        console.error("Error occurred when hitting API: ", err.message);
      }
    } else {
      toast({
        title: "Please fill all fields",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  return (
    <VStack spacing={"1em"} align="stretch">
      <FormControl id="email" isRequired isInvalid={!!emailError}>
        <FormLabel fontWeight={"bold"}>Email</FormLabel>
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <FormErrorMessage>{emailError}</FormErrorMessage>
      </FormControl>

      <FormControl id="password" isRequired isInvalid={!!passwordError}>
        <FormLabel fontWeight={"bold"}>Password</FormLabel>
        <InputGroup>
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputRightElement width={"4.5rem"}>
            <Button
              h="1.75rem"
              size="sm"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
        <FormErrorMessage>{passwordError}</FormErrorMessage>
      </FormControl>

      <Button
        colorScheme="blue"
        width={"100%"}
        mt={15}
        isLoading={loading}
        onClick={handleSubmit}
      >
        Login
      </Button>
    </VStack>
  );
};

export default InventoryLogin;
