import React from 'react';

import {Text, View} from 'react-native';
import codePush from 'react-native-code-push';
const App = () => {
  return (
    <View>
      <Text>Hola a todo el mundo</Text>
    </View>
  );
};

export default codePush(App);
