import React from 'react';
import { Text, View, Button } from 'react-native';
import styled from 'styled-components/native';

const TodoItem = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Item = ({ item, remove }) => {
  return (
    <>
      <TodoItem>
        <Text>{item.content}</Text>
        <Button title=" X " onPress={() => { remove(item.id) }} />
      </TodoItem>
    </>

  )
}
