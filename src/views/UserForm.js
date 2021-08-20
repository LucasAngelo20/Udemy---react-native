import React from 'react';
import {useState} from 'react';
import {StyleSheet} from 'react-native';
import {View, Text, TextInput} from 'react-native';

export default ({route, navigation}) => {
  const [user, setUser] = useState(route.params ? route.params : {});

  return (
    <View style={styles.form}>
      <Text>Name</Text>
      <TextInput
        onChangeText={name => setUser({...user, name})}
        placeholder="Informe o nome"
        value={user.name}
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  form:{
    padding: 12,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
  },
});
