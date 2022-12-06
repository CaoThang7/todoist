import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Icon, Header } from "react-native-elements"
import Color from "../../common/color"
import Icons from "../../common/icon"
import Infomation from './components/infomation'

const Profile = () => {
    return (
        <View style={styles.container}>
            <Header
                containerStyle={styles.header}
                rightComponent={
                    <Icon
                        name={Icons.Feather.menu}
                        type="ionicon"
                        color="black"
                        size={36}
                    />
                }
                backgroundColor={Color.white}
            />
            <View style={styles.body}>
                <Infomation />
            </View>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    header: { borderBottomWidth: 0 },
    body: {
        flex: 1,
        marginHorizontal: 20,
    },
})


