import React, {Component} from 'react';

import {StyleSheet, Text, View, Image, TouchableHighlight, TouchableOpacity, ScrollView, TextInput} from 'react-native';
import { db } from './../config';

let itemsRef = db.ref('/other');

let addItem = item => {
    db.ref('/other').push({
        name: "Kenny",
        picture: "https://groupdater123.s3.amazonaws.com/kenny.png"
    });
};

export default class Profile extends Component {
    constructor(props) {
        super();
        this.state = {
            name: "https://groupdater123.s3.amazonaws.com/kenny.png",
            img: "",
            the_val: ""
        }
    }

    componentDidMount(): void {
        let temp = "";
        let entry = itemsRef.orderByChild("name").equalTo("Kenny").on('value', function(snapshot){
            temp = snapshot.val();
        });
        var indexed_in = temp["-LwB8Tzs7ePT89c-snaR"];
        console.log(indexed_in['picture']);
        this.setState({
            the_val: indexed_in['picture']
        });
        console.log('!!!!');
        console.log(this.state.the_val);
    };


    handleChange = e => {
        this.setState({
            name: e.nativeEvent.text
        });
    };

    handleSubmit = () => {
        addItem(this.state.name);
    };

    render(){
        //Later need to make images grab from s3 database. Think about this logic later
        return (
            <ScrollView contentContainerStyle={[styles.container]}>

                <Image source={require('./../../images/Craig.png')}/>
                <Image source={require('./../../images/Craig.png')}/>
                <Image source={require('./../../images/Craig.png')}/>

                <Text style = {styles.text}>Bio</Text>
                <Text>Bio about {this.props.navigation.getParam("title")} {"\n"}{"\n"}</Text>

                <TextInput style={styles.itemInput} onChange={this.handleChange} />
                <TouchableHighlight
                    style={styles.button}
                    underlayColor="white"
                    onPress={this.handleSubmit}
                >
                    <Text style={styles.buttonText}>Add {"\n"}{"\n"}</Text>
                </TouchableHighlight>

                <Image source = {{uri: this.state.the_val}}/>

            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
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
    fixAlignment: {
        flex: 1
    },
    main: {
        flex: 1,
        padding: 30,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#6565fc'
    },
    title: {
        marginBottom: 20,
        fontSize: 25,
        textAlign: 'center'
    },
    itemInput: {
        height: 50,
        padding: 4,
        marginRight: 5,
        fontSize: 23,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 8,
        color: 'white'
    },
    buttonText: {
        fontSize: 18,
        color: '#111',
        alignSelf: 'center'
    },
    button: {
        height: 45,
        flexDirection: 'row',
        backgroundColor: 'white',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
        marginTop: 10,
        alignSelf: 'stretch',
        justifyContent: 'center'
    }
});
