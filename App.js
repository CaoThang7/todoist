import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import Router from "./src/navigation/rootSwitch"
// import store from "./src/redux/store" /*call store redux basic*/
import store from "./src/redux/toolkit/store" // now use store redux toolkit
import { Provider } from "react-redux"

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </Provider>
  )
}

export default App