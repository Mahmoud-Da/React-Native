import React, { useState } from "react";

import AuthContext from "./app/auth/context";

import AppNavigator from "./app/navigation/AppNavigator";
import AuthNavigator from "./app/navigation/AuthNavigator";
import jwtDecode from "jwt-decode";
import authStorage from "./app/auth/storage";


function App() {
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);

  if (!isReady)
    return (
      <AppLoading
        startAsync={restoreToken}
        onFinish={() => setIsReady(true)}
      />
    );

  const restoreToken = async () => {
    const token = await authStorage.getToken();

    if (!token) return;

    setUser(jwtDecode(token));
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {user ? (
        <AppNavigator />
      ) : (
        <AuthNavigator />
      )}
    </AuthContext.Provider>
  );
}

export default App;