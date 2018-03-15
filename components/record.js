import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

export default class Card extends React.Component {



    render() {


        return (

            <View style={styles.container}>
                <Text style={styles.appName}>hello there</Text>
                <Text>hello there again </Text>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        padding: 20,
        backgroundColor: 'hotpink',
        width: 300,
        // height: 100,
        borderRadius: 10,
        
    },
    appName: {
        fontSize: 18,
    }
})