import Constants from "expo-constants";

const settings = {
  dev: {
    API_URL: "http://localhost:9000/api",
  },

  staging: {
    API_URL: "http://localhost:9000/api",
  },

  prod: {
    API_URL: "http://localhost:9000/api",
  },
};

const getCurrentSettings = () => {
  if (__DEV__) {
    return settings.dev;
  }

  if (Constants.manifest.releaseChannel === "staging") {
    return settings.staging;
  }

  return settings.prod;
};

export default getCurrentSettings();