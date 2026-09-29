import React, { useState } from "react";

import AuthContext from "./app/auth/context";

import AppNavigator from "./app/navigation/AppNavigator";
import AuthNavigator from "./app/navigation/AuthNavigator";
import jwtDecode from "jwt-decode";
import authStorage from "./app/auth/storage";


function App() {
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);
  const restoreUser = async () => {
    const user = await authStorage.getUser();

    if (user)
      setUser(user);
  };

  if (!isReady)
    return (
      <AppLoading
        startAsync={restoreUser}
        onFinish={() => setIsReady(true)}
      />
    );

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