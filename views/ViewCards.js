import React, { Component } from 'react'
import { ScrollView, StyleSheet, Text, View, Button } from 'react-native';
import Cards from './Cards'

export default class ViewCards extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cards: props.cards
        }
    }

    // componentDidMount(){
    //     this.setState({
    //         cards:this.props.cards
    //     })
    // }

    shuffle=async()=>{
        const cards = [...this.props.cards]
        for(var i = cards.length-1; i>0; i--){
            var j = Math.floor(Math.random()*(i+1))
            var temp = cards[i]
            cards[i] = cards[j]
            cards[j] = temp 
        }
        this.setState({cards})
    }

    render() {
        const mappedCards = this.state.cards.map(card => {
            return (
                <Cards key={card.card_id} card={card} />
            )
        })
        return (
            <View style={styles.container}>
                <ScrollView contentContainerStyle={styles.scroll}>
                    <Button onPress={this.shuffle} style={{marginVertical:100}} title='Shuffle'/>
                    {mappedCards}
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'silver',
        marginVertical: 40,
        marginBottom: 0,
        height:'100%'
    },
    scroll: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
