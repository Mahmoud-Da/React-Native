function AppPicker({
  icon,
  items,
  placeholder,
  PickerItemComponent = PickerItem,
  selectedItem,
  onSelectItem,
  width = "100%"
}) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback
        onPress={() => setModalVisible(true)}
      >
        <View style={[styles.container, { width }]}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={colors.medium}
              style={styles.icon}
            />
          )}

          {selectedItem ? (
            <AppText style={styles.text}>
              {selectedItem.label}
            </AppText>
          ) : (
            <AppText style={styles.placeholder}>
              {placeholder}
            </AppText>
          )}

          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>

      <Modal visible={modalVisible} animationType="slide">
        <Screen>
          <Button
            title="Close"
            onPress={() => setModalVisible(false)}
          />
          <FlatList
            data={items}
            keyExtractor={(item) =>
              item.value.toString()
            }
            renderItem={({ item }) => (
              <PickerItemComponent
                label={item.label}
                onPress={() => {
                  setModalVisible(false);
                  onSelectItem(item);
                }}
              />
            )}
          />
        </Screen>
      </Modal>
    </>
  );
}
