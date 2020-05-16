import React from 'react';
import { TextInput } from 'react-native';

export const MyTextInput = ({placeholder, ...rest}) => {

    return(

        <TextInput 
        placeholder={placeholder}
        {...rest}/>
    );
}