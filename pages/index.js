// @generated: @expo/next-adapter@2.1.52
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AuthStatusView from "../components/AuthStatusView";
import { IdentityContextProvider } from 'react-netlify-identity'
import "react-netlify-identity-widget/styles.css";
import "@reach/tabs/styles.css";

export default function App() {
  const url = process.env.REACT_APP_NETLIFY_IDENTITY_URL;
console.log(process.env.REACT_APP_NETLIFY_IDENTITY_URL);
  return (
    <IdentityContextProvider url="https://youthful-tesla-6a4b5a.netlify.app">
      <View style={styles.container}>
        <Text style={styles.text}>Welcome to Blossom! </Text>
        <AuthStatusView/>
      </View>
    </IdentityContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
  },
});
