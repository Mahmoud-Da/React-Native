import { Image, StyleSheet, TouchableHighlight, View } from 'react-native';
import Swipeable from "react-native-gesture-handler/Swipeable";
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';
import AppText from './AppText';

function ListItem({
  title,
  subtitle,
  image,
  iconComponent,
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

          {iconComponent}

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

          <MaterialCommunityIcons
            name="chevron-right"
            size={25}
            color={colors.medium}
          />

        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: colors.white,
    alignItems: 'center',
  },

  detailsContainer: {
    marginLeft: 10,
    justifyContent: "center",
    flex: 1,
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
