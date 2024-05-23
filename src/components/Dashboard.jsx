import React, { useEffect, useState } from 'react';
import { Box, Button, Flex, Heading, VStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient';
import Clock from './Clock';

const Dashboard = () => {
  const [clocks, setClocks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchClocks();
  }, []);

  const fetchClocks = async () => {
    const { data, error } = await supabase.from('Clocks').select('*');
    if (error) {
      console.error('Error fetching clocks:', error);
    } else {
      setClocks(data);
    }
  };

  const handleDelete = async (id) => {
    const { error } = await supabase.from('Clocks').delete().eq('id', id);
    if (error) {
      console.error('Error deleting clock:', error);
    } else {
      fetchClocks();
    }
  };

  return (
    <Box p={4}>
      <Flex justify="space-between" align="center" mb={4}>
        <Heading size="lg">Clocks Dashboard</Heading>
        <Button colorScheme="teal" onClick={() => navigate('/create')}>Create Clock</Button>
      </Flex>
      <VStack spacing={4}>
        {clocks.map(clock => (
          <Clock key={clock.id} clock={clock} onDelete={handleDelete} />
        ))}
      </VStack>
    </Box>
  );
};

export default Dashboard;