import React from "react";
import { Text } from "react-native-rapi-ui";
import AppNavigator from "./src/navigation/AppNavigator";
import { AuthProvider } from "./src/provider/AuthProvider";
import { ThemeProvider } from "react-native-rapi-ui";
import { LogBox } from "react-native";
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Home from "./src/screens/Home";
import SecondScreen from "./src/screens/SecondScreen";

const Tab = createMaterialTopTabNavigator();

export default function App(props) {
  const [isLoading, setIsLoading] = React.useState(true);


  const images = [
    require("./assets/icon.png"),
    require("./assets/splash.png"),
    require("./assets/login.png"),
    require("./assets/register.png"),
    require("./assets/forget.png"),
  ];

  // React.useEffect(() => {
  //   async function prepare() {
  //     try {
  //       // keeps the splash screen visible while assets are cached
  //       await SplashScreen.preventAutoHideAsync();

  //       // pre-load/cache assets: images, fonts, and videos
  //       await func.loadAssetsAsync();
  //     } catch (e) {
  //       // console.warn(e);
  //     } finally {
  //       // loading is complete
  //       setIsLoading(false);
  //     }
  //   }

  //   prepare();
  // }, []);

  // React.useEffect(() => {
  //   // when loading is complete
  //   if (isLoading === false) {
  //     // hide splash function
  //     const hideSplash = async () => SplashScreen.hideAsync();

  //     // hide splash screen to show app
  //     hideSplash();
  //   }
  // }, [isLoading]);

  // if (isLoading) {
  //   return null;
  // }

  // // Ignore firebase v9 AsyncStorage warning
  // React.useEffect(() => {
  //   LogBox.ignoreLogs([
  //     "AsyncStorage has been extracted from react-native core and will be removed in a future release. It can now be installed and imported from '@react-native-async-storage/async-storage' instead of 'react-native'. See https://github.com/react-native-async-storage/async-storage",
  //   ]);
  // }, []);

  return (
    <ThemeProvider images={images}>
      <AuthProvider>
        <AppNavigator />
      </AuthProvider>
    </ThemeProvider>
  );
}
