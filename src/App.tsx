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
import React, {useState, useEffect} from 'react';
import {
  Modal,
  View,
  Text,
  Button,
  Alert,
  Platform,
  ProgressBarAndroid,
  ProgressViewIOS,
} from 'react-native';
import codePush from 'react-native-code-push';

const UpdateChecker = () => {
  const [updateAvailable, setUpdateAvailable] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);

  useEffect(() => {
    const checkForUpdates = async () => {
      try {
        const update = await codePush.checkForUpdate();
        if (update) {
          setUpdateAvailable(true);

          const syncStatus = await codePush.sync(
            {installMode: codePush.InstallMode.IMMEDIATE},
            status => {
              if (status === codePush.SyncStatus.DOWNLOADING_PACKAGE) {
                setDownloadProgress(codePush.getDownloadProgress());
              }
            },
          );

          if (syncStatus === codePush.SyncStatus.UPDATE_INSTALLED) {
            // La actualización se instaló, puedes reiniciar la aplicación si es necesario
          }
        }
      } catch (error) {
        console.error('Error checking for update:', error);
      }
    };

    checkForUpdates();
  }, []);

  const showUpdateDialog = () => {
    Alert.alert(
      'Actualización disponible',
      'Una nueva versión está disponible. ¿Quieres actualizar?',
      [
        {
          text: 'Actualizar',
          onPress: async () => {
            setUpdateAvailable(false);
            await codePush.sync({installMode: codePush.InstallMode.IMMEDIATE});
          },
        },
        {
          text: 'Cancelar',
          onPress: () => {
            setUpdateAvailable(false);
          },
        },
      ],
    );
  };

  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={updateAvailable}
      onRequestClose={() => {
        setUpdateAvailable(false);
      }}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View style={{backgroundColor: 'white', padding: 20, borderRadius: 10}}>
          <Text>¡Hay una actualización disponible!</Text>
          {downloadProgress > 0 ? (
            <>
              <Text>Descargando: {Math.round(downloadProgress * 100)}%</Text>
              {Platform.OS === 'android' ? (
                <ProgressBarAndroid
                  styleAttr="Horizontal"
                  indeterminate={false}
                  progress={downloadProgress}
                  style={{width: 200}}
                />
              ) : (
                <ProgressViewIOS
                  progress={downloadProgress}
                  style={{width: 200}}
                />
              )}
            </>
          ) : null}
          <Button title="Actualizar" onPress={showUpdateDialog} />
        </View>
      </View>
    </Modal>
  );
};

export default codePush(UpdateChecker);
