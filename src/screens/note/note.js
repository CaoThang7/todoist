import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import Color from "../../common/color"
import { Input } from "react-native-elements"
import Icons from "../../common/icon"
import FloatingButton from "../../components/button"
import DialogCustom from '../../components/dialog'
import NoteList from './components/noteList'
import { useDispatch } from "react-redux"
import { searchTodo } from "../../redux/actions" //action search redux basic
import { filtersSlice } from "../../redux/toolkit/slices/filters" //action search redux toolkit

const Note = () => {
    const [isFailure, setIsFailure] = useState(false);
    const [search, setSeach] = useState("");
    const dispatch = useDispatch();

    const toggleDialog = () => {
        setIsFailure(!isFailure)
    }

    const handleInputChange = (value) => {
        setSeach(value)
        // dispatch action search with redux basic:
        /* dispatch(searchTodo(value)) */
        dispatch(filtersSlice.actions.searchTodo(value)) // now use with redux toolkit better than.
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
                    value={search}
                    onChangeText={handleInputChange}
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