import React, { useState } from 'react';
import { Platform, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View, Button, StatusBar } from 'react-native';
import _ from 'underscore';
import styled from 'styled-components/native';
// import Constants from 'expo-constants';

const StyledView = styled.View`
  background-color: papayawhip;
`
export default function App() {
  const [content, setContent] = useState('');
  const [list, setList] = useState([]);
  const addItem = () => {
    const item = {
      id: new Date().getTime().toString(),
      content: content,
    }
    setList([...list, item]);
  }

  const remove = id => {
    // setList(list.filter(item => {
    //   item.id !== id;
    // console.log(item.id !== id);
    // }));

    setList(_.reject(list, item => item.id === id));

  }

  return (
    <SafeAreaView style={[styles.container, styles.AndroidSafeArea]}>
      <ScrollView>
        <StyledView>
          <TextInput
            style={[styles.inputStyle, { marginBottom: 10 }]}
            value={content}
            onChangeText={text => { setContent(text) }}
          />
        </StyledView>
        <Button title="Add To do" onPress={addItem} />
        {list.map(item => (
          <View key={item.id} style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
            <Text>{item.content}</Text>
            <Button title=" X " onPress={() => { remove(item.id) }} />
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>

  );
}

const style2 = {

}
const styles = StyleSheet.create({
  AndroidSafeArea: {
    // marginTop: Platform.OS === 'android' ? Constants.statusBarHeight : 0
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
  container: {
    ...style2,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputStyle: {
    width: 300,
    textAlign: "center",
    borderColor: "#000",
    borderBottomWidth: 1,
  },
});
