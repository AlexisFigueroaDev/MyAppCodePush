import React from 'react';
import codePush from 'react-native-code-push';
import {Text, View} from 'react-native';

const App = () => {
  return (
    <View>
      <Text>Hola a todo el mundo release 1</Text>
    </View>
  );
};

export default codePush({
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
  updateDialog: true,
  installMode: codePush.InstallMode.IMMEDIATE,
})(App);
