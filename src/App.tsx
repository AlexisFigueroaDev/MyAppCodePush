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
        // const update = true;
        if (update) {
          showUpdateDialog();
        }
      } catch (error) {
        console.error('Error checking for update::', error);
      }
    };

    checkForUpdates();
  }, []);

  const updateCallback = status => {
    console.log('status', status);
    switch (status) {
      case codePush.SyncStatus.CHECKING_FOR_UPDATE:
        console.log('Verificando actualizaciones...');
        break;
      case codePush.SyncStatus.DOWNLOADING_PACKAGE:
        console.log('Descargando paquete...');
        break;
      case codePush.SyncStatus.INSTALLING_UPDATE:
        console.log('Instalando actualización...');
        break;
      case codePush.SyncStatus.UP_TO_DATE:
        console.log('La aplicación ya está actualizada.');
        break;
      case codePush.SyncStatus.UPDATE_INSTALLED:
        console.log('Actualización instalada correctamente.');
        break;
      case codePush.SyncStatus.UNKNOWN_ERROR:
        console.error('Error desconocido al sincronizar con CodePush.');
        break;
    }
  };

  const showUpdateDialog = () => {
    Alert.alert(
      'Actualización disponible',
      'Una nueva versión está disponible. ¿Quieres actualizar?',
      [
        {
          text: 'Actualizar',
          onPress: () =>
            codePush.sync(
              {
                updateDialog: {appendReleaseDescription: false},
                installMode: codePush.InstallMode.IMMEDIATE,
              },
              updateCallback,
            ),
        },
        {
          text: 'Cancelarr',
          onPress: () => {
            console.log('User cancel update');
          },
        },
      ],
    );
  };

  return (
    <View>
      <Text>hola ale 4</Text>
    </View>
  );
};

export default codePush({
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
})(App);
