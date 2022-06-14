import React, { useContext } from "react";
import { initializeApp, getApps } from "firebase/app";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthContext } from "../provider/AuthProvider";
import 'dotenv/config' 
import { REACT_APP_FIREBASE_API_KEY, REACT_APP_FIREBASE_APP_ID,
REACT_APP_FIREBASE_AUTH_DOMAIN, REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
 REACT_APP_FIREBASE_STORAGE_BUCKET, REACT_APP_FIREBASE_PROJECT_ID,
 REACT_APP_GWID} from '@env';
// Main
import Home from "../screens/Home";
import SecondScreen from "../screens/SecondScreen";

// Auth screens
import Login from "../screens/auth/Login";
import Register from "../screens/auth/Register";
import ForgetPassword from "../screens/auth/ForgetPassword";
import TabNavigation from './TabNavigation';
import Landing from "../screens/auth/Landing";


import Loading from "../screens/utils/Loading";

// Better put your these secret keys in .env file
// const firebaseConfig = {
//   apiKey: "AIzaSyDRvvv27wcqKC6z-p9HyO-p8zO6hclBvrc",
//   authDomain: "ntwaste-9cea1.firebaseapp.com",
//   projectId: "ntwaste-9cea1",
//   storageBucket: "ntwaste-9cea1.appspot.com",
//   messagingSenderId: "116325619105",
//   appId: "1:116325619105:web:fc80e7f72a347431e1a7e0",
//   measurementId: "G-5YNB564SRH"
// };

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_GWID
};

if (getApps().length === 0) {
  initializeApp(firebaseConfig);
}

const AuthStack = createNativeStackNavigator();

const Auth = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <AuthStack.Screen name="Landing" component={Landing} />
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="Register" component={Register} />
      <AuthStack.Screen name="ForgetPassword" component={ForgetPassword} />
    </AuthStack.Navigator>
  );
};

const MainStack = createNativeStackNavigator();

const Main = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <MainStack.Screen
        name="TabNavigation"
        component={TabNavigation}
        options={{
          headerShown: false
        }}
      />
      <MainStack.Screen name="Home" component={Home} />
      <MainStack.Screen name="SecondScreen" component={SecondScreen} />
    </MainStack.Navigator>
  );
};

export default () => {
  const auth = useContext(AuthContext);
  const user = auth.user;
  return (
    <NavigationContainer>
      {user == null && <Loading />}
      {user == false && <Auth />}
      {user == true && <Main />}
    </NavigationContainer>
  );
};
