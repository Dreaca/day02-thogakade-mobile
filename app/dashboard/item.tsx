import {DataTable,FAB} from "react-native-paper";
import {StyleSheet, View} from "react-native";
import React from "react";

export default function Item(){
    const [page, setPage] = React.useState<number>(0);
    const [numberOfItemsPerPageList] = React.useState([2, 3, 4]);
    const [itemsPerPage, onItemsPerPageChange] = React.useState(
        numberOfItemsPerPageList[0]
    );
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
    const from = page * itemsPerPage;
    const to = Math.min((page + 1) * itemsPerPage, items.length);

    React.useEffect(() => {
        setPage(0);
    }, [itemsPerPage]);

    return (
        <View>
            <DataTable>
                <DataTable.Header>
                    <DataTable.Title>Name</DataTable.Title>
                    <DataTable.Title numeric>Price</DataTable.Title>
                    <DataTable.Title numeric>QTO</DataTable.Title>
                </DataTable.Header>

                {items.slice(from, to).map((item) => (
                    <DataTable.Row key={item.key}>
                        <DataTable.Cell>{item.name}</DataTable.Cell>
                        <DataTable.Cell numeric>{item.price}</DataTable.Cell>
                        <DataTable.Cell numeric>{item.qto}</DataTable.Cell>
                    </DataTable.Row>
                ))}

            </DataTable>
            <FAB icon="plus" mode="elevated" style={styles.fab} onPress={() => {console.log("Clicked")}}/>
        </View>
    )
}
const styles = StyleSheet.create({
    fab: {
        backgroundColor: "lightgray",
        position: 'relative',
        margin: 16,
        height:60,
        width:60,
        right: 0,
        bottom: 0,
    },
})