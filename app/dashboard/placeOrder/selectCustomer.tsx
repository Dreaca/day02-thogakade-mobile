import React from "react";
import {FlatList, StyleSheet, TouchableOpacity, View} from "react-native";
import {Text} from "react-native-paper";
import {useRouter} from "expo-router";

export default function SelectCustomer() {
    const router = useRouter();
    const [items] = React.useState([
        {
            key: 1,
            name: 'Buddhika',
            address: "Godalawela",
            phone: "0711013020",
        },
        {
            key: 2,
            name: 'Pathum',
            address: "Godalawela",
            phone: "0711013020",
        },
    ]);
    return (
        <View>
            <Text variant='headlineMedium' style={{alignSelf:"center",fontFamily:"sans",marginTop:20}} >Select A Customer</Text>
            <FlatList
                data={items}
                keyExtractor={(item) => item.key}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={()=>{router.push({
                        pathname:"/dashboard/placeOrder/selectItem",
                        params:{customer:item.name},
                    }
                    )}} key={item.key}>
                        <Text style={styles.customer}>{item.name}</Text></TouchableOpacity>
                )}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    customer:{
        backgroundColor: "lightgray",
        margin: 10,
        padding: 10,
        borderRadius:50,
        textAlign: "center",
    }
})