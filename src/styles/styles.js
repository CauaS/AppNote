import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    //Home
    HomeBg: {
        flex: 1,
        padding: 20,
        backgroundColor: 'black'
    }, 
    HeaderHome: {
        flexDirection: 'row', justifyContent: 'space-between'
    }, 
    iconHomeSearch: {
        backgroundColor: 'rgba(46, 49, 49, 0.8)',
        padding: 7,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconHomePlus: {
        padding: 7,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center'
    },

    //Deck 
    deckText: {
        color: '#fff', 
        fontSize: 23
    }
});

export default styles;