import React from "react";

import { Button, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../models";
import { RootStackNavigationProp } from "../navigator/RootStackParamList";

interface IHomeProps {
  navigation: RootStackNavigationProp;
}

const Home = (props: IHomeProps) => {
  const dispatch = useDispatch();
  const { num, loading } = useSelector((state: RootState) => {
    return {
      num: state.home?.num,
      loading: state.loading.effects["home/asyncAdd"],
    };
  });

  const handleClick = () => {
    dispatch({
      type: "home/add",
    });
  };

  function handleAsyncClick() {
    dispatch({
      type: "home/asyncAdd",
      payload: { num: 11 },
    });
  }

  return (
    <View>
      <Text>HOME</Text>
      <Text>HOME</Text>
      <Text>HOME</Text>
      <Text>HOME {num}</Text>
      <Text>{loading ? "正在计算" : ""}</Text>
      <Button title={"添加"} onPress={() => handleClick()} />
      <Button title={"异步添加"} onPress={() => handleAsyncClick()} />
      <Button
        title={"跳转"}
        onPress={() => {
          props.navigation.navigate("Detail", {
            id: "100",
          });
        }}
      />
    </View>
  );
};

export default Home;
