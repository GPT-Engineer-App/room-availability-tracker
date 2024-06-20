import React from "react";
import { Container, Text, VStack, HStack, Box, Badge } from "@chakra-ui/react";

interface Room {
  name: string;
  isAvailable: boolean;
}

const rooms: Room[] = [
  { name: "Room A", isAvailable: true },
  { name: "Room B", isAvailable: false },
  { name: "Room C", isAvailable: true },
  { name: "Room D", isAvailable: false },
];

const Index: React.FC = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Meeting Rooms Availability</Text>
        <HStack spacing={4}>
          {rooms.map((room) => (
            <Box key={room.name} p={4} borderWidth="1px" borderRadius="lg">
              <Text>{room.name}</Text>
              <Badge colorScheme={room.isAvailable ? "green" : "red"}>
                {room.isAvailable ? "Available" : "Occupied"}
              </Badge>
            </Box>
          ))}
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;