import { Alert } from 'react-native';
import SQLite, { SQLiteDatabase } from 'react-native-sqlite-storage';

SQLite.enablePromise(true);

const getDBConnection = async (): Promise<SQLiteDatabase> => {
    try {
        console.log('Opening database...');
        const db = await SQLite.openDatabase({ name: 'myapp.db', location: 'default' });
        console.log('Database opened successfully');
        return db;
    } catch (error) {
        console.error('Error opening database:', error);
        throw error;
    }
};

const createTables = async (db: SQLiteDatabase): Promise<void> => {
    const query = `
        CREATE TABLE IF NOT EXISTS Users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            email TEXT,
            signupDate TEXT
        );
    `;
    try {
        console.log('Creating tables...');
        await db.executeSql(query);
        console.log('Tables created successfully');
    } catch (error) {
        console.error('Error creating table:', error);
        throw error;
    }
};

const addUser = async (
    db: SQLiteDatabase,
    name: string,
    email: string,
    signupDate: string
): Promise<void> => {
    const insertQuery = `
        INSERT INTO Users (name, email, signupDate) VALUES (?, ?, ?);
    `;
    try {
        console.log(`Adding user: ${name}, ${email}, ${signupDate}`);
        await db.executeSql(insertQuery, [name, email, signupDate], (result) => {
            Alert.alert("Success", "User created successfully.");
        });
        console.log('User added successfully');
    } catch (error) {
        console.error('Error adding user:', error);
        throw error;
    }
};

const getUsers = async (db: SQLiteDatabase): Promise<any[]> => {
    try {
        const users: any[] = [];
        const results = await db.executeSql('SELECT * FROM Users');
        results.forEach(result => {
            for (let index = 0; index < result.rows.length; index++) {
                users.push(result.rows.item(index));
            }
        });
        return users;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw Error('Failed to fetch users');
    }
};

export { getDBConnection, createTables, addUser, getUsers };
