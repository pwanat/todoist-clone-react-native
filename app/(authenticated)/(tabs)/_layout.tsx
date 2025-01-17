
import { Colors } from '@/constants/Colors';
import { FontAwesome } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { View, Text } from "react-native";

const TabLayout = () => {
  return (
      <Tabs>
        <Tabs.Screen
          name="today"
          options={{
            title: "Today",
            tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
          }}
        />
        <Tabs.Screen
          name="upcoming"
          options={{
            title: "Upcoming",
            tabBarIcon: ({ color }) => <FontAwesome size={28} name="calendar" color={color} />,
          }}
        />
        <Tabs.Screen
          name="search"
          options={{
            title: "Search",
            tabBarIcon: ({ color }) => <FontAwesome size={28} name="search" color={color} />,
          }}
        />
        <Tabs.Screen
          name="browse"
          options={{
            title: "Browse",
            tabBarIcon: ({ color }) => <FontAwesome size={28} name="th-list" color={color} />,
          }}
        />
      </Tabs>
    
  //   <Tabs
  //   ignoresTopSafeArea
  //   hapticFeedbackEnabled
  //   screenOptions={{
  //     tabBarActiveTintColor: Colors.primary,
  //     // tabBarInactiveTintColor: Colors.dark,
  //   }}>
  //   <Tabs.Screen
  //     name="today"
  //     options={{
  //       title: 'Today',
  //       tabBarIcon: ({ focused }) => ({
  //         sfSymbol: focused ? 'calendar.circle.fill' : 'calendar.circle',
  //       }),
  //     }}
  //   />
  //   <Tabs.Screen
  //     name="upcoming"
  //     options={{
  //       title: 'Upcoming',
  //       tabBarIcon: () => ({ sfSymbol: 'calendar' }),
  //     }}
  //   />
  //   <Tabs.Screen
  //     name="search"
  //     options={{
  //       title: 'Search',
  //       tabBarIcon: ({ focused }) => ({
  //         sfSymbol: focused ? 'text.magnifyingglass' : 'magnifyingglass',
  //       }),
  //     }}
  //   />
  //   <Tabs.Screen
  //     name="browse"
  //     options={{
  //       title: 'Browse',
  //       tabBarIcon: ({ focused }) => ({
  //         sfSymbol: focused ? 'doc.text.image.fill' : 'doc.text.image',
  //       }),
  //     }}
  //   />
  // </Tabs>
  // <View><Text>ttt</Text></View>
  );
};
export default TabLayout;
