import React, { Component } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Cards from './Cards'

export default class ViewCards extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cards: props.cards
        }
    }

    render() {
        const mappedCards = this.props.cards.map(card => {
            return (
                <Cards key={card.card_id} card={card} />
            )
        })
        return (
            <View style={styles.container}>
                <ScrollView contentContainerStyle={styles.scroll}>
                    <Text>Display Cards</Text>
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
        marginBottom: 0
    },
    scroll: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
