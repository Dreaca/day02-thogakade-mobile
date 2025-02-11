import {Stack} from "expo-router";

export default function PlaceOrderLayout() {
    return (
        <Stack>
            <Stack.Screen name="selectCustomer"/>
            <Stack.Screen name="selectItem"/>
            <Stack.Screen name="checkout"/>
        </Stack>
    );
}