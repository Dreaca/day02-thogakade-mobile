import {View} from "react-native";
import {TextInput, Text, Button} from "react-native-paper";
import {useRouter} from "expo-router";
import {useState} from "react";

export default function index(){
    const router = useRouter();
    const [userName, setUserName] = useState("");
    const [passWord, setPassWord] = useState("");

    function handleSubmit(){

        if(userName == "user"&&passWord == "1234"){
            router.push("/dashboard");
            setPassWord("")
            setUserName("")
        }
    }
    return (
        <View>
            <Text>Login</Text>
            <TextInput mode="outlined" placeholder="User name" onChangeText={(e)=>setUserName(e)}></TextInput>
            <TextInput placeholder="Password" secureTextEntry onChangeText={(e)=>setPassWord(e)}></TextInput>
            <Button onPress={handleSubmit} mode='outlined'>Login</Button>
        </View>
    )
}
