import React from 'react';
import { Box, Button, Flex, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const Clock = ({ clock, onDelete }) => {
  const navigate = useNavigate();

  return (
    <Box p={4} bg={clock.color} borderRadius="md" width="100%">
      <Flex justify="space-between" align="center">
        <Text fontSize="xl">{clock.city}</Text>
        <Flex>
          <Button colorScheme="yellow" mr={2} onClick={() => navigate(`/edit/${clock.id}`)}>Edit</Button>
          <Button colorScheme="red" onClick={() => onDelete(clock.id)}>Delete</Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Clock;