import React from 'react';
import {View, Text, FlatList, Alert} from 'react-native';
import {Avatar, ListItem, Button, Icon} from 'react-native-elements';
import users from '../data/users';

export default props => {
  function confirmUserDeletion(user) {
    Alert.alert('Excluir Usuário', 'Deseja excluir o usuário?', [
      {
        text: 'Sim',
        onPress() {
          console.warn('delete', user.id);
        },
      },
      {
        text: 'Não',
      },
    ]);
  }

  function getUserItem({item: user}) {
    return (
      <ListItem
        bottomDivider
        onPress={() => props.navigation.navigate('UserForm', user)}>
        <Avatar title={user.name} source={{uri: user.avatarUrl}} />
        <ListItem.Content>
          <ListItem.Title>{user.name}</ListItem.Title>
          <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron
          name="edit"
          size={25}
          color="orange"
          onPress={() => console.warn('foi')}
        />
        <ListItem.Chevron
          name="delete"
          size={25}
          color="red"
          onPress={() => confirmUserDeletion(user)}
        />
      </ListItem>
    );
  }

  return (
    <View>
      <FlatList
        data={users}
        keyExtractor={user => user.id.toString()}
        renderItem={getUserItem}
      />
    </View>
  );
};
