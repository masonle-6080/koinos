import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center', 
    },
    navbar: {
        flexDirection: 'row',
        gap: 20
    },
    title: {
        fontWeight:'bold',
    },
    text: {
        fontFamily: 'Menlo'
    },
    center: {
        justifyCenter: "center",
        alignItems: 'center',
        gap: '20'
    }
})