import { StyleSheet } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import AppForm from "../components/forms/AppForm";
import AppFormField from "../components/forms/AppFormField";
import AppFormPicker from "../components/forms/AppFormPicker";
import SubmitButton from "../components/forms/SubmitButton";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  category: Yup.object().required().nullable().label("Category"),
  description: Yup.string().label("Description"),
});

function ListingEditScreen() {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          category: null,
          description: "",
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          name="title"
          placeholder="Title"
        />

        <AppFormField
          name="price"
          placeholder="Price"
          keyboardType="numeric"
          width={120}
        />

        <AppFormPicker
          name="category"
          placeholder="Category"
          items={[]}
          width="50%"
        />

        <AppFormField
          name="description"
          placeholder="Description"
          multiline
          numberOfLines={3}
        />

        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default ListingEditScreen;
