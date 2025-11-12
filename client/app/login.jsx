import {View, Text, TextInput} from 'react-native'
import { useState, useEffect } from 'react'

import {styles} from '../styles'
import {Link} from 'expo-router'



export default function Login () {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    return (
        <View style={styles.container}>
            <Text  style={styles.title}>login</Text>
            <View style={styles.center}>
                <TextInput onChangeText={(text)=>setEmail(text)} placeholder="enter email"></TextInput>
                <TextInput onChangeText={(text)=>setPassword(text)} placeholder="enter password"></TextInput>
                <Text>inputs: {email} {password}</Text>

            </View>


            <Link href='/'>continue</Link>
        </View>
    );
}