import React,{Component} from 'react'
import { StyleSheet, Text, View } from 'react-native';

export default class War extends Component {
    render(){
        return(
            <View style={styles.container}>
                <Text>War</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
