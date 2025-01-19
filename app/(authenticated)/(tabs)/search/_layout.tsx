import { Stack } from 'expo-router';
import { Colors } from '@/constants/Colors';
import MoreButton from '@/components/more-button';

const Layout = () => {
  return (
    <Stack
      screenOptions={{
        headerShadowVisible: false,
        contentStyle: { backgroundColor: Colors.background },
        
      }}
      >
      <Stack.Screen
        name="index"
        options={{
          title: 'Search',
          headerLargeTitle: true,
          headerSearchBarOptions: {
            placeholder: 'Tasks, Projects and more',
            tintColor: Colors.primary,
          }
        }}
      />
    </Stack>
  );
};
export default Layout;