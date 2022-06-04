import { RouteProp } from "@react-navigation/native";
import React from "react";

import { Text, View } from "react-native";
import { RootStackParamList } from "../navigator/RootStackParamList";

interface IDetailProps {
  route:RouteProp<RootStackParamList,'Detail'>
}

const Detail = ({route}:IDetailProps) => {
  return (
    <View>
      <Text>Detail</Text>
      <Text>{route?.params.id }</Text>
    </View>
  );
};

export default Detail;
