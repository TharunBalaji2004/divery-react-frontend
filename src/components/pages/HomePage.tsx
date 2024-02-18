import { Box, Container, Tab, TabList, TabPanels, Tabs, Text, TabPanel } from "@chakra-ui/react";
import InventoryLogin from "../auth/InventoryLogin";
import DeliveryLogin from "../auth/DeliveryLogin";

const HomePage = () => {
    document.title="DIVery Logistics";
    return(
        <main className="Home" >
            <Container maxW={"xl"}>
                <Box
                    display={"flex"}
                    justifyContent={"center"}
                    bg={"white"}
                    p={3}
                    m={"50px 0 15px 0"}
                    borderRadius={"lg"}
                    borderWidth={"1px"}
                >
                    <Text fontSize={"xl"} color={"black"} fontWeight={"bold"}>DIVery Logistics</Text>
                </Box>
                <Box
                    bg={"white"}
                    w={"100%"}
                    p={3}
                    borderRadius={"lg"}
                    borderWidth={"1px"}
                >
                    <Tabs variant='soft-rounded' colorScheme='blue'>
                    <TabList mb={"1em"}>
                        <Tab width={"50%"}>Inventory Login</Tab>
                        <Tab width={"50%"}>Delivery Login</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <InventoryLogin />
                        </TabPanel>
                        <TabPanel>
                            <DeliveryLogin />
                        </TabPanel>
                    </TabPanels>
                </Tabs>

                </Box>
            </Container>
        </main>
    )
}


export default HomePage;