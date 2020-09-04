// vendors
import React from 'react';
import { View } from 'react-native';
import { ApolloProvider } from '@apollo/client';

// apollo
import client from './src/api/graphql/config';

// screens
import MainScreen from './src/screens/mainScreen/MainScreen.container';

// styles
import componentStyles from './App.styles';

export default function App() {
  return (
    <ApolloProvider client={client}>
      <View style={componentStyles.container}>
        <MainScreen />
      </View>
    </ApolloProvider>
  );
}
