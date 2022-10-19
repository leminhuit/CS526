// import React, { useState } from 'react';
// import { Text, TextInput, View } from 'react-native';

// const isNumber = (char) => {
//   if (typeof char !== 'string') {
//     return false;
//   }

//   if (char.trim() === '') {
//     return false;
//   }

//   return !isNaN(char);
// }

// const CheckString = (s, text) => {
//   if(s.slice(-1) === " ")
//   {
//     //thog bao loi
//     alert('ky tu ko hop le')
//     //xoa khoang trang
//   }
//   if (isNumber(s.slice(-1)))
//     return eval(text);
//   return text;
// }

// const PizzaTranslator = () => {
//   const [text, setText] = useState('');
//   return (
//     <View style={{padding: 10}}>
//       <TextInput
//         style={{height: 40}}
//         placeholder="Type here to translate!"
//         onChangeText={newText => setText(newText)}
//         defaultValue={text}
//       />
//       <Text style={{padding: 10, fontSize: 42}}>
//         {CheckString(text,text)}
//       </Text>
//     </View>
//   );
// }

// export default PizzaTranslator;

import React from "react";
import react from "react";
import { StyleSheet, Text, View } from "react-native";
import CalculatorScreen from "./screens/CalculatorScreen";

export default class App extends React.Component {
  render() {
    return <CalculatorScreen />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});