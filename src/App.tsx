// import React from 'react';
// import codePush from 'react-native-code-push';
// import {Text, View} from 'react-native';

// const App = () => {
//   return (
//     <View>
//       <Text>Hola a todo el mundo release 1</Text>
//     </View>
//   );
// };

// export default codePush({
//   checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
//   updateDialog: true,
//   installMode: codePush.InstallMode.IMMEDIATE,
// })(App);

import React, {useEffect} from 'react';
import codePush from 'react-native-code-push';
import {Text, View, Alert} from 'react-native';

const App = () => {
  useEffect(() => {
    const checkForUpdates = async () => {
      try {
        const update = await codePush.checkForUpdate();
        if (update) {
          showUpdateDialog(update);
        }
      } catch (error) {
        console.error('Error checking for update:', error);
      }
    };

    checkForUpdates();
  }, []);

  const showUpdateDialog = updateInfo => {
    Alert.alert(
      'Actualización disponible',
      'Una nueva versión está disponible. ¿Quieres actualizar?',
      [
        {
          text: 'Actualizar',
          onPress: () =>
            codePush.sync({installMode: codePush.InstallMode.IMMEDIATE}),
        },
        {
          text: 'Cancelar',
          onPress: () => {},
        },
      ],
    );
  };

  return (
    <View>
      <Text>Hola Lisbeth 3</Text>
    </View>
  );
};

export default codePush({
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
  updateDialog: true,
  installMode: codePush.InstallMode.IMMEDIATE,
})(App);
