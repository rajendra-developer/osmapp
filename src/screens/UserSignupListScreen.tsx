import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
// import { firebase } from '../firebaseConfig';
// import { getUsers } from '../services/dbService';

const UserSignupListScreen = () => {
    const [users, setUsers] = useState([]);

    // useEffect(() => {
    //     getUsers(users => setUsers(users));
    // }, []);

    return (
        <View style={styles.container}>
            <FlatList
                data={users}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        {/* <Text>{item?.name}</Text>
                        <Text>{item?.email}</Text> */}
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    item: {
        padding: 10,
        borderBottomColor: 'gray',
        borderBottomWidth: 1
    }
});

export default UserSignupListScreen;
