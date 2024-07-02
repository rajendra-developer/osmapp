import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
// import { firebase } from '../firebaseConfig';

const ProfileScreen = () => {
    const [user, setUser] = useState(null);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    // useEffect(() => {
    //     const currentUser = firebase.auth().currentUser;
    //     if (currentUser) {
    //         setUser(currentUser);
    //         setName(currentUser.displayName);
    //         setEmail(currentUser.email);
    //     }
    // }, []);

    // const handleUpdate = async () => {
    //     if (user) {
    //         await user.updateProfile({ displayName: name });
    //         await user.updateEmail(email);
    //         setUser({ ...user, displayName: name, email });
    //     }
    // };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Name:</Text>
            <TextInput
                style={styles.input}
                value={name}
                onChangeText={setName}
            />
            <Text style={styles.label}>Email:</Text>
            <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
            />
            {/* <Button title="Update Profile" onPress={handleUpdate} /> */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    label: {
        fontSize: 18,
        marginVertical: 10
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
        marginBottom: 20
    }
});

export default ProfileScreen;
