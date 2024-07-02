import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';
import Massage from '../components/common/Massage';
import Loader from '../components/common/Loader';
import { addUser, getDBConnection } from '../services/db-service';

const SignUpScreen = ({ navigation }: any) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSignup = async () => {
        setLoading(true);
        try {
            const db = await getDBConnection();
            console.log("db ==> ", db);

            await auth().createUserWithEmailAndPassword(email, password);
            const user = auth().currentUser;

            if (user) {
                await user.updateProfile({ displayName: name });
            }
            console.log("user===", user);

            const signupDate = new Date().toISOString();
            console.log("signupDate===", name, email, signupDate);

            await addUser(db, name, email, signupDate);

            Massage('Signup successful!');
            navigation.navigate('Login');
        } catch (error: any) {
            console.error('Signup failed:', error);
            Massage('Signup failed');
        } finally {
            setLoading(false);
        }
    };

    return (
        <View style={styles.container}>
            <Loader visible={loading} />
            <Text style={styles.label}>Name:</Text>
            <TextInput style={styles.input} value={name} onChangeText={setName} />
            <Text style={styles.label}>Email:</Text>
            <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <Text style={styles.label}>Password:</Text>
            <TextInput
                style={styles.input}
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <Button title="Sign Up" onPress={handleSignup} />
            <Text style={styles.link} onPress={() => navigation.navigate('Login')}>
                Already have an account? Login
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
    },
    label: {
        fontSize: 18,
        marginVertical: 10,
        color: '#000',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
        width: '100%',
        marginBottom: 20,
        color: '#000',
    },
    link: {
        color: 'blue',
        marginTop: 20,
        textAlign: 'center',
    },
});

export default SignUpScreen;
