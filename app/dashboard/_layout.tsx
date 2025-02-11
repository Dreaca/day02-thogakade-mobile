import {Drawer} from "expo-router/drawer";

export default function DashBoardLayout() {
    return (
        <Drawer initialRouteName="customer">
            <Drawer.Screen name="customer" options={{title:"Customer Dashboard"}} />
            <Drawer.Screen name="item" options={{title:"Item Dashboard"}} />
            <Drawer.Screen name="placeOrder" options={{title:"Place Order"}} />
        </Drawer>
    );
}