import {Text, View} from 'react-native'
import {styles} from '../styles'
import Navbar from '../components/Navbar'

export default function List() {
    return(
        <View style={styles.container}>
            <Text style={styles.text, styles.title}>list</Text> 
            <View>
                <Text>hi</Text>
                <Text>to</Text>
            </View>
            <Navbar></Navbar>

        </View>
    )
}