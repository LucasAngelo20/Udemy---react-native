import React, {useContext} from 'react';
import {View, FlatList, Alert} from 'react-native';
import {Avatar, ListItem} from 'react-native-elements';
import UsersContext from '../context/UsersContext';

export default props => {
  const {state, dispatch} = useContext(UsersContext);

  function confirmUserDeletion(user) {
    Alert.alert('Excluir Usuário', 'Deseja excluir o usuário?', [
      {
        text: 'Sim',
        onPress() {
          dispatch({
            type: 'deleteUser',
            payload: user,
          });
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
          onPress={() => props.navigation.navigate('UserForm', user)}
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
        data={state.users}
        keyExtractor={user => user.id.toString()}
        renderItem={getUserItem}
      />
    </View>
  );
};
