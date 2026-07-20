import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import AppText from '../components/AppText';
import ListItem from '../components/ListItem';
import colors from '../config/colors';

function ListingDetailsScreen() {
  return (
    <View>
      <Image
        source={require('../assets/jacket.jpg')}
        style={styles.image}
      />

      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>
          Red jacket for sale
        </AppText>

        <AppText style={styles.price}>
          $100
        </AppText>
      </View>

      <View style={styles.userContainer}>
        <ListItem
          image={require('../assets/mosh.jpg')}
          title="Mosh Hamedani"
          subtitle="5 Listings"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
  },
  price: {
    color: colors.secondary,
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  userContainer: {
    marginVertical: 40,
  },
});

export default ListingDetailsScreen;
