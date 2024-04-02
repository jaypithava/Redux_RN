import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getUserList} from './Redux/action';

const UserList = () => {
  const dispatch = useDispatch();
  const userList = useSelector(state => state.reducer);

  useEffect(() => {
    dispatch(getUserList());
  }, [userList, dispatch]);
  return (
    <View>
      {userList.length
        ? userList.map(item => (
            <Text style={{fontSize: 20, color: 'black'}}>
              {item.users[0].firstName}
            </Text>
          ))
        : null}
    </View>
  );
};

export default UserList;

const styles = StyleSheet.create({});
