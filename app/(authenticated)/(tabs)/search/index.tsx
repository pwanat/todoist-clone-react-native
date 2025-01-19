import { Fragment } from 'react';
import Fab from "@/components/fab";
import { View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const Page = () => {
  return (
    <Fragment>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View></View>
      </ScrollView>
      <Fab />
    </Fragment>
  );
};
export default Page;
