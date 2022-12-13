import { StyleSheet, View, Text } from 'react-native'
import React, { useState } from 'react'
import Color from "../../../common/color"
import { Input } from "react-native-elements"
import ButtonCreate from "../../../components/button"
import DropdownMenuItem from '../../../components/dropdown'
import { useDispatch } from "react-redux"
import uuid from 'react-native-uuid';
import Loading from '../../../components/loading'
import { createTodo } from "../../../redux/actions" // action create redux basic
import { todoListSlice } from "../../../redux/toolkit/slices/todo" // action create redux toolkit

const FormCreate = () => {
    const [value, setValue] = useState(null);
    const [priority, setPriority] = useState(null);
    const [todoName, setTodoName] = useState("");
    const [txtError, setTxtError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const dispatch = useDispatch()

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
            // dispatch action createTodo with redux basic:
            /* dispatch(createTodo({
                 id: uuid.v4(),
                 name: todoName,
                 completed: false,
                 priority: priority
             })) */
            dispatch(todoListSlice.actions.createTodo({
                id: uuid.v4(),
                name: todoName,
                completed: false,
                priority: priority
            })) // now we use dispatch action createTodo with redux toolkit
            setTodoName(""); //clear form 
            setTxtError(false);
            setLoading(true);
            setSuccess(true);
            setTimeout(() => {
                setLoading(false)
            }, 2000)
        }
    }

    return (
        <View style={styles.container}>
            <Input
                placeholder="Nội dung"
                inputContainerStyle={styles.inputStyle}
                containerStyle={styles.inputContainerStyle}
                value={todoName}
                onChangeText={handleInputChange}
            />
            <DropdownMenuItem
                placeholder="Mức độ ưu tiên"
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
                        title={success ? 'Thành công' : 'Thêm'}
                        onPress={handleSubmitCreateTodo}
                    />
            }
        </View>
    )
}

export default FormCreate;

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        justifyContent: 'center',
        flexDirection: 'column',
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