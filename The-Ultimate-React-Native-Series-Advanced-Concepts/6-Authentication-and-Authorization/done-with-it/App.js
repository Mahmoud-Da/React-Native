import React, { useState } from "react";

import AuthContext from "./app/auth/context";

import AppNavigator from "./app/navigation/AppNavigator";
import AuthNavigator from "./app/navigation/AuthNavigator";

function App() {
  const [user, setUser] = useState();

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