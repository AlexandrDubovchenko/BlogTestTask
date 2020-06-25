import React, { useState, useEffect } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Platform, StyleSheet, Image } from 'react-native';
import { HomeScreen } from './screens/Home';
import { Profile } from './screens/Profile';
import { PostScreen } from './screens/Post';
import { AuthorScreen } from './screens/Author';
import { ApplicationProvider } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Stack = createStackNavigator();

export default function App() {
  const [currentUser, setCurrentUser] = useState();
  useEffect(() => {
    fetch('http://my-json-server.typicode.com/orlovskyalex/jellyfish-fake-rest-server/users')
      .then(res => res.json())
      .then(res => setCurrentUser(res[0].id));
  }, [])
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={({ route, navigation }) => (
            {
              headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate('Profile', { user: currentUser })}>
                  <Image style={{ width: 40, height: 40 }} source={require('./assets/people-outline.png')} />
                </TouchableOpacity>
              ),
            }
          )}
        >
          <Stack.Screen
            name="Home"
            component={HomeScreen}
          />
          <Stack.Screen
            name="Profile"
            component={Profile}
          />
          <Stack.Screen
            name="Post"
            component={PostScreen}
          />
          <Stack.Screen
            name="Author"
            component={AuthorScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ApplicationProvider>
  );
}

