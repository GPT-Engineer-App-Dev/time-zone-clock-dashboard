import React, { useEffect, useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Select, VStack } from '@chakra-ui/react';
import { useNavigate, useParams } from 'react-router-dom';
import { supabase } from '../supabaseClient';

const EditClock = () => {
  const { id } = useParams();
  const [city, setCity] = useState('');
  const [color, setColor] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchClock();
  }, [id]);

  const fetchClock = async () => {
    const { data, error } = await supabase.from('Clocks').select('*').eq('id', id).single();
    if (error) {
      console.error('Error fetching clock:', error);
    } else {
      setCity(data.city);
      setColor(data.color);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error } = await supabase.from('Clocks').update({ city, color }).eq('id', id);
    if (error) {
      console.error('Error updating clock:', error);
    } else {
      navigate('/');
    }
  };

  return (
    <Box p={4}>
      <VStack as="form" spacing={4} onSubmit={handleSubmit}>
        <FormControl id="city" isRequired>
          <FormLabel>City</FormLabel>
          <Input value={city} onChange={(e) => setCity(e.target.value)} />
        </FormControl>
        <FormControl id="color" isRequired>
          <FormLabel>Card Color</FormLabel>
          <Select value={color} onChange={(e) => setColor(e.target.value)}>
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
            <option value="yellow">Yellow</option>
          </Select>
        </FormControl>
        <Button type="submit" colorScheme="teal">Update Clock</Button>
      </VStack>
    </Box>
  );
};

export default EditClock;