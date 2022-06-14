import { Text, View, StyleSheet, Image, Button } from 'react-native'
import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';



const AppButton = ({ onPress, icon, title, backgroundColor }) => (
    <View style={styles.appButtonContainer}>
      <Icon.Button
        name={icon}
        backgroundColor={backgroundColor}
        onPress={onPress}
        style={styles.appButton}

      >
        <Text style={styles.appButtonText}>{title}</Text>
      </Icon.Button>
    </View>
  );

export default function ({ navigation }) {
    return (
      <View
        style={{ 
            marginTop: 120,
        }}
      >
        <View
             style={{ 
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
            }}
        >
        <Image
              resizeMode="contain"
              style={{
                height: 250,
                width: 290,
              }}
              source={require("../../../assets/splash.png")}
            />
        <View
            style={{ 
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                marginTop: 200
            }}
        >
        <View style={styles.screenContainer}>
            <AppButton icon="sign-in" title="Continue with Email" backgroundColor="#777" onPress={() => { navigation.navigate("Register");}}/>
            <AppButton icon="facebook" title="Continue with Facebook" backgroundColor="#3b5998" onPress={() => { navigation.navigate("Register");}}/>
            <AppButton icon="google" title="Continue with Google" backgroundColor="#14191e" onPress={() => { navigation.navigate("Register");}}/>
        </View>
            
        </View>
        </View>
      </View>
    )
}


const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        justifyContent: "center",
      },
      appButton: {
        padding: 14,
        paddingLeft: 60,
        paddingRight: 60,
        borderRadius: 40,
      },
      appButtonText: {
        fontSize: 17,
        color: 'white'
      },
      appButtonContainer: {
        paddingVertical: 10,
        paddingHorizontal: 26,
      },
})