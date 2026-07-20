import { Image, StyleSheet, TouchableHighlight, View } from 'react-native';
import Swipeable from "react-native-gesture-handler/Swipeable";

import colors from '../config/colors';
import AppText from './AppText';

function ListItem({
  title,
  subtitle,
  image,
  ImageComponent,
  onPress,
  renderRightActions
}) {
  return (

    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight
        underlayColor={colors.light}
        onPress={onPress}
      >

        <View style={styles.container}>

          {ImageComponent}

          {image && (
            <Image
              source={image}
              style={styles.image}
            />
          )}

          <View style={styles.detailsContainer}>

            <AppText style={styles.title}>
              {title}
            </AppText>

            {subtitle && (
              <AppText style={styles.subtitle}>
                {subtitle}
              </AppText>
            )}

          </View>

        </View>

      </TouchableHighlight>

    </Swipeable>

  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
  },

  detailsContainer: {
    marginLeft: 10,
    justifyContent: "center",
  },

  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },

  title: {
    fontWeight: '500',
  },

  subtitle: {
    color: colors.medium,
  },

});

export default ListItem;
