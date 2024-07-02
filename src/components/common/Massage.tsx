import React from 'react';
import { ToastAndroid } from 'react-native';

const Massage = (msg: string) => {
    ToastAndroid.show(msg, ToastAndroid.SHORT);
};

export default Massage;