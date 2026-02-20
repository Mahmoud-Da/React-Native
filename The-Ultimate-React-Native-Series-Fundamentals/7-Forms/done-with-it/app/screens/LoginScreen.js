import { Formik } from "formik";
import {
  Image,
  StyleSheet
} from "react-native";
import AppButton from "../components/AppButton";
import AppTextInput from "../components/AppTextInput";
import Screen from "../components/Screen";

function LoginScreen() {
  return (
    <Screen style={styles.container}>
      <Image
        source={require("../assets/logo-red.png")}
        style={styles.logo}
      />
      <Formik
        initialValues={{
          email: "",
          password: ""
        }}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleSubmit }) => (
          <>
            <AppTextInput
              icon="email"
              placeholder="Email"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              textContentType="emailAddress"
              onChangeText={handleChange("email")}
            />
            <AppTextInput
              icon="lock"
              placeholder="Password"
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry
              textContentType="password"
              onChangeText={handleChange("password")}
            />
            <AppButton
              title="Login"
              onPress={handleSubmit}
            />
          </>
        )}
      </Formik>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20
  }
});

export default LoginScreen;