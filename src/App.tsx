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
import React from 'react';
import codePush from 'react-native-code-push';
import {Text, View, Alert} from 'react-native';

const App = () => {
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
      <Text>Hola a todo el mundo release 2</Text>
    </View>
  );
};

export default codePush({
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
  updateDialog: {
    appendReleaseDescription: true,
    descriptionPrefix: '\n\nCambios:\n',
    mandatoryContinueButtonLabel: 'Actualizar',
    mandatoryUpdateMessage:
      'Hay una actualización disponible que debes instalar.',
    optionalIgnoreButtonLabel: 'Cancelar',
    optionalInstallButtonLabel: 'Actualizar',
    optionalUpdateMessage:
      'Hay una actualización disponible. ¿Quieres instalarla?',
    title: 'Actualización disponible',
    updateDescription: 'Descripción de la actualización aquí.',
  },
  installMode: codePush.InstallMode.IMMEDIATE,
  mandatoryInstallMode: codePush.InstallMode.IMMEDIATE,
})(App);
