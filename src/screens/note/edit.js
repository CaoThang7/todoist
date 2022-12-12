import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Input } from "react-native-elements"
import Color from "../../common/color"
import Icons from "../../common/icon"
import DropdownMenuItem from '../../components/dropdown'
import ButtonCreate from "../../components/button"
import Loading from '../../components/loading'
import { useDispatch } from "react-redux"
import { editTodo } from "../../redux/actions"
import { useNavigation } from "@react-navigation/native"

const EditScreen = ({ route }) => {
    const item = route.params.item;
    const [todoName, setTodoName] = useState(item.name)
    const [value, setValue] = useState(null);
    const [priority, setPriority] = useState(null);
    const [txtError, setTxtError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const dispatch = useDispatch()
    const navigation = useNavigation();

    const data = [
        { label: 'High', value: '1' },
        { label: 'Medium', value: '2' },
        { label: 'Low', value: '3' },
    ];

    const handleInputChange = (value) => {
        setTodoName(value)
    }

    const handleSubmitCreateTodo = () => {
        if (todoName == "" || priority == null) {
            setTxtError(true);
        } else {
            dispatch(editTodo({
                id: item.id,
                name: todoName,
                completed: false,
                priority: priority
            }))
            setTxtError(false);
            setLoading(true);
            setSuccess(true);
            setTimeout(() => {
                setLoading(false)
                navigation.goBack();
            }, 2000)
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <Input
                    // autoFocus
                    placeholder="Name"
                    inputContainerStyle={styles.inputStyle}
                    containerStyle={styles.inputContainerStyle}
                    leftIcon={{
                        type: 'font-awesome',
                        name: Icons.EvilIcons.search
                    }}
                    value={todoName}
                    onChangeText={handleInputChange}
                />
                <DropdownMenuItem
                    placeholder={item.priority}
                    data={data}
                    value={value}
                    onChange={item => {
                        setValue(item.value);
                        setPriority(item.label);
                    }}
                />
                {txtError ? <Text style={styles.txtError}>Không được bỏ trống</Text> : null}
                {
                    loading ?
                        <Loading /> :
                        <ButtonCreate.Button
                            style={styles.btnCreate}
                            color={success ? Color.green : Color.magenta}
                            title={success ? 'Thành công' : 'Chỉnh sửa'}
                            onPress={handleSubmitCreateTodo}
                        />
                }
            </View>
        </View>
    )
}

export default EditScreen;

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
    txtError: {
        color: Color.red,
        fontSize: 18,
        marginLeft: 5,
        marginTop: 5
    },
    btnCreate: { marginTop: 20 },
})