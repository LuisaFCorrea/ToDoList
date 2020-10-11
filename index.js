import 'react-native-gesture-handler';
import React from 'react';
import {AppRegistry, SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import {initializeFirebaseApi} from './src/services/FirebaseApi';

import {name as appName} from './app.json';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import Routes from './src/services/Routes';

const wrappedRoutes = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={{flex: 1}}>
        <Routes />
      </SafeAreaView>
    </NavigationContainer>
  );
};

AppRegistry.registerComponent(appName, () => {
  initializeFirebaseApi();
  return wrappedRoutes;
});
