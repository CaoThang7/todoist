import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import Color from "../../common/color"
import { Input } from "react-native-elements"
import Icons from "../../common/icon"
import FloatingButton from "../../components/button"
import DialogCustom from '../../components/dialog'
import NoteList from './components/noteList'

const Note = () => {
    const [isFailure, setIsFailure] = useState(false)

    const toggleDialog = () => {
        setIsFailure(!isFailure)
    }

    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <Input
                    autoFocus
                    placeholder="Tìm kiếm"
                    inputContainerStyle={styles.inputStyle}
                    containerStyle={styles.inputContainerStyle}
                    leftIcon={{
                        type: 'font-awesome',
                        name: Icons.EvilIcons.search
                    }}
                />
                <NoteList />
                <FloatingButton.FloatingButton
                    style={styles.btnFloating}
                    color={Color.magenta}
                    image={require('../../assets/plus.png')}
                    onPress={toggleDialog}
                />
                <DialogCustom
                    isVisible={isFailure}
                    onBackdropPress={toggleDialog}
                />
            </View>
        </View>
    )
}

export default Note;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        backgroundColor: 'white'
    },
    body: {
        flex: 1,
        marginHorizontal: 20
    },
    inputContainerStyle: {
        borderColor: Color.black,
        borderWidth: 0.5,
        height: 55,
        borderRadius: 10,
        marginTop: 20,
    },
    inputStyle: {
        borderBottomWidth: 0,
        top: 3
    },
    btnFloating: {
        position: 'absolute',
        display: 'flex',
        width: 60,
        height: 117,
        alignItems: 'center',
        justifyContent: 'center',
        right: 0,
        bottom: 0
    },
})