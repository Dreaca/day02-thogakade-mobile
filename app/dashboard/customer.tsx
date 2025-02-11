import {DataTable} from 'react-native-paper';
import React from "react";
import {View} from "react-native";

export default function Customer() {
    const [page, setPage] = React.useState<number>(0);
    const [numberOfItemsPerPageList] = React.useState([2, 3, 4]);
    const [itemsPerPage, onItemsPerPageChange] = React.useState(
        numberOfItemsPerPageList[0]
    );
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
                    <DataTable.Title numeric>Address</DataTable.Title>
                    <DataTable.Title numeric>Phone</DataTable.Title>
                </DataTable.Header>

                {items.slice(from, to).map((item) => (
                    <DataTable.Row key={item.key}>
                        <DataTable.Cell>{item.name}</DataTable.Cell>
                        <DataTable.Cell numeric>{item.address}</DataTable.Cell>
                        <DataTable.Cell numeric>{item.phone}</DataTable.Cell>
                    </DataTable.Row>
                ))}

                {/*<DataTable.Pagination
                    page={page}
                    numberOfPages={Math.ceil(items.length / itemsPerPage)}
                    onPageChange={(page) => setPage(page)}
                    label={`${from + 1}-${to} of ${items.length}`}
                    numberOfItemsPerPageList={numberOfItemsPerPageList}
                    numberOfItemsPerPage={itemsPerPage}
                    onItemsPerPageChange={onItemsPerPageChange}
                    showFastPaginationControls
                    selectPageDropdownLabel={'Rows per page'}
                />*/}
            </DataTable>
        </View>
    );
}