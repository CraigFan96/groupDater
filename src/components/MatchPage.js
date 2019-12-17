import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TouchableHighlight, TouchableOpacity, ScrollView, Button} from 'react-native';
import Profile from './Profile';

export default class MatchPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showText: "1"
        }
    }
    onPressButton_1 = () => {
        this.setState({
            showText: "Profile 1"
        }, () =>{
            this.props.navigation.navigate('Profile', {
                title: this.state.showText
            })
        });
    }
    onPressButton_2 = () => {
        this.setState({
            showText: "Profile 2"
        }, () =>{
            this.props.navigation.navigate('Profile', {
                title: this.state.showText
            })
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style = {styles.sample} onPress={this.onPressButton_1}>
                    <Image
                        source={require('./../../images/Craig.png')}
                    />
                    {/*<Text>{this.state.showText}</Text>*/}
                </TouchableOpacity>

                <View style = {styles.alignShip}>
                    <Button title = "Ship"/>
                    <Button title = "No Ship"/>
                </View>

                <TouchableOpacity style = {styles.sample} onPress={this.onPressButton_2}>
                    <Image
                        source={require('./../../images/Craig.png')}
                    />
                    {/*<Text>{this.state.showText}</Text>*/}
                </TouchableOpacity>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    alignShip: {
        flexDirection: 'row',
        height: 40,
        justifyContent: 'space-between',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lemonchiffon',
        flexDirection: 'column'
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5
    },
    sample: {
        padding: 50,
        flexDirection: 'row'
    },
    scrollView: {
        backgroundColor: 'pink',
    },
    text: {
        fontSize: 42,
    },
});
