import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
// import { firebase } from '../firebaseConfig';
// import { VictoryBar, VictoryChart, VictoryAxis } from 'victory-native';
// import { getUsers } from '../services/dbService';

const DashboardScreen = () => {
    const [data, setData] = useState([]);

    // useEffect(() => {
    //     getUsers(users => {
    //         const groupedData = users.reduce((acc, user) => {
    //             const month = new Date(user.signupDate).getMonth();
    //             if (!acc[month]) acc[month] = 0;
    //             acc[month]++;
    //             return acc;
    //         }, {});

    //         const formattedData = Object.keys(groupedData).map(month => ({
    //             month,
    //             count: groupedData[month]
    //         }));

    //         setData(formattedData);
    //     });
    // }, []);

    return (
        <View style={styles.container}>
            {/* <VictoryChart>
                <VictoryAxis tickValues={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]} />
                <VictoryAxis dependentAxis />
                <VictoryBar data={data} x="month" y="count" />
            </VictoryChart> */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default DashboardScreen;
