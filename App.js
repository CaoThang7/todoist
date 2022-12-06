import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import Router from "./src/navigation/rootSwitch"

const App = () => {
  return (
    // <Provider store={store}>
    <NavigationContainer>
      <Router />
    </NavigationContainer>
    // </Provider>
  )
}

export default App