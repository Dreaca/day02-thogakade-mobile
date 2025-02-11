import {Stack, Tabs} from "expo-router";
import React from "react";
import { Ionicons } from '@expo/vector-icons';

export default function PlaceOrderLayout() {
    return (
        <Tabs>
            <Tabs.Screen name="selectCustomer" options={{headerShown: false,tabBarIcon: ({ color, size }) => (
                    <Ionicons name="person" size={size} color={color} />
                ),}} />
            <Tabs.Screen name="selectItem" options={{headerShown: false,tabBarIcon: ({ color, size }) => (
                    <Ionicons name="cart" size={size} color={color} />
                ),}} />
            <Tabs.Screen name="checkout" options={{headerShown: false,tabBarIcon: ({ color, size }) => (
                    <Ionicons name="checkmark-circle" size={size} color={color} />
                ),}} />
        </Tabs>
    );
}