import React, {useState} from "react";
import {useLocalSearchParams, useRouter} from "expo-router";
import {Text} from "react-native-paper";
import {FlatList, StyleSheet, TouchableOpacity, View} from "react-native";

export default function SelectItem() {
    const {customer} =useLocalSearchParams();
    const router = useRouter()
    const key = 0;
    const [items] = React.useState([
        {
            key: 1,
            name: 'Sunlight',
            price: 200.00,
            qto: 40,
        },
        {
            key: 2,
            name: 'Lux',
            price: 250.00,
            qto: 40,
        },
    ]);
    class BasketItem{
        key!: number;
        itemName!: string;
    }
    const basket : BasketItem []=[]
    function handleSubmit() {
        if (!customer) {
            alert("Please select a customer!")
        }else{
            router.push({
                    pathname:"/dashboard/placeOrder/checkout",
                }
            )
        }
    }
    function handleBasket(item){
        const b = new BasketItem();
        b.key = item.key;
        b.itemName = item.itemName;

        basket.push(item);
    }
    return (
        <View>
            <Text variant='headlineMedium' style={{alignSelf:"center",fontFamily:"sans",marginTop:20}} >Select An Item</Text>
            <Text variant='bodyLarge'>Customer Name :{customer}</Text>
            <FlatList
                data={items}
                keyExtractor={(item) => item.key}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={()=>{handleBasket(item)}} key={item.key}>
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