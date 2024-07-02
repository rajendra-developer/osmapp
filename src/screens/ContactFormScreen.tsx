import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
// import { firebase } from '../firebaseConfig';

const ContactFormScreen = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    // const handleSubmit = async () => {
    //     await firebase.firestore().collection('contacts').add({
    //         name,
    //         email,
    //         message,
    //         submittedAt: firebase.firestore.FieldValue.serverTimestamp()
    //     });
    //     setName('');
    //     setEmail('');
    //     setMessage('');
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
            <Text style={styles.label}>Message:</Text>
            <TextInput
                style={styles.input}
                value={message}
                onChangeText={setMessage}
                multiline
            />
            {/* <Button title="Submit" onPress={handleSubmit} /> */}
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

export default ContactFormScreen;
