import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import { mainStack } from "../common/navigator"
import homeTabs from "./homeTabs"
import EditScreen from "../screens/note/edit"

const Stack = createStackNavigator()

const MainStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{ gestureEnabled: false }}
            initialRouteName={mainStack.homeTab}>
            <Stack.Group>
                <Stack.Screen
                    options={{ headerShown: false }}
                    name={mainStack.homeTab}
                    component={homeTabs}
                />
                <Stack.Screen
                    options={{ headerShown: false }}
                    name={mainStack.edit}
                    component={EditScreen}
                />
            </Stack.Group>
        </Stack.Navigator>
    )
}

export default MainStack