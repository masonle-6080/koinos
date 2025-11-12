import {Text, View} from 'react-native'
import Navbar from '../components/Navbar'
import {Link} from 'expo-router'

import {styles} from '../styles'

export default function Root() {
    return (
        <View style={styles.container}>
            <Text style={styles.text, styles.title}>home</Text>
            <Link href='/login'>login</Link>
            <Navbar></Navbar>
        </View>
    );
}