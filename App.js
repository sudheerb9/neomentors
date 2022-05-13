import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import 'react-native-gesture-handler';
import AppWithAuth from './AppWithAuth';
import { StyleSheet, Text, View, TextInput, Alert, TouchableOpacity} from "react-native";

export default class App extends Component {

    constructor(props){
        super(props);
        this.state = {email: '', password: '', show: false};

        this.handleemailChange = this.handleemailChange.bind(this);
        this.handlepasswordChange = this.handlepasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleemailChange = (e) =>{
        this.setState({email: e.target.value});
    }

    handlepasswordChange = (e) =>{
        this.setState({password: e.target.value});
    }

    handleSubmit = (e) =>{
        if(this.state.email == 'chaitravardhan18@gmail.com' && this.state.password == 'admin_bms') {
            this.setState({show: true});
            e.preventDefault();
            return <AppWithAuth/>
        }
    }

    AppLogin = ()=>{
        <View style={styles.container}>
            <StatusBar style="auto" />
            <View style={styles.inputView}>
                <TextInput
                style={styles.TextInput}
                placeholder="Email."
                placeholderTextColor="#003f5c"
                value = {this.state.email}
                onChangeText={this.handleemailchange}
                />
            </View>
        
            <View style={styles.inputView}>
                <TextInput
                style={styles.TextInput}
                placeholder="Password."
                placeholderTextColor="#003f5c"
                secureTextEntry={true}
                onChangeText={(password) => setPassword(password)}
                />
            </View>
        
            <TouchableOpacity>
                <Text style={styles.forgot_button}>Forgot Password?</Text>
            </TouchableOpacity>
        
            <TouchableOpacity style={styles.loginBtn} onPress={(e) => {handleSubmit(e)}}>
                <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
        </View>
    }

    render() {

        const show = this.state.show;
    
        let content;
        if (show) {
          content = <this.AppLogin/>;
        } else {
          content = <AppWithAuth/>;
        }
    
        return <View>{content}</View>;
    }

}
    
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    
    inputView: {
        backgroundColor: "#FFC0CB",
        borderRadius: 30,
        width: "70%",
        height: 45,
        marginBottom: 20,
    
        alignItems: "center",
    },
    
    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
    },
    
    forgot_button: {
        height: 30,
        marginBottom: 30,
    },
    
    loginBtn: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#FF1493",
    },
});