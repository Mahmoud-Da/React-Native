import React from 'react';
import { View, StyleSheet } from 'react-native';
import Card from './app/components/Card';

export default function App() {
  return (
    <View style={styles.container}>
      <Card
        title="Red jacket for sale"
        subtitle="$100"
        image={require('./app/assets/jacket.jpg')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f8f4f4',
    padding: 20,
    paddingTop: 100,
  },
});
