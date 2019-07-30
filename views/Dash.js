import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class Dash extends Component {
    constructor() {
        super()
        this.state = {
            selectedGame: ''
        }
    }

    async changeView(game) {
        await this.setState({
            selectedGame: game
        })
        this.props.navigation.navigate('GAME',{selectedGame:this.state.selectedGame})
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => this.changeView('Blackjack')}><Text>Black Jack</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => this.changeView('GoFish')}><Text>Go Fish!</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => this.changeView('War')}><Text>War!</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => this.changeView('OldMaid')}><Text>Old Maid</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => this.changeView('Solitaire')}><Text>Solitaire</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => this.changeView('TicTacToe')}><Text>Tic Tac Toe</Text></TouchableOpacity>
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

// AppRegistry.registerComponent('',()=> Dash)