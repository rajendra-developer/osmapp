import React, { useEffect, useState } from 'react';
import AppNavigator from './src/navigation/StackNavigator';
import auth from '@react-native-firebase/auth';
import { createTables, getDBConnection } from './src/services/db-service';
import { requestStoragePermission } from './src/utils/helpers';

const App: React.FC = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(null);

  function onAuthStateChanged(user: any) {
    setUser(user);
    if (initializing) setInitializing(false);
  };

  const initializeDB = async () => {
    try {
      const db = await getDBConnection();
      await createTables(db);
    } catch (error) {
      console.error('Database initialization failed:', error);
    }
  };

  useEffect(() => {
    requestStoragePermission();
    initializeDB();
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (initializing) return null;

  return <AppNavigator />;
};

export default App;