import { Stack } from 'expo-router';
import { Colors } from '@/constants/Colors';
import MoreButton from '@/components/more-button';
// import MoreButton from '@/components/MoreButton';

const Layout = () => {
  return (
    <Stack
      >
      <Stack.Screen
        name="index"
        options={{
          title: 'Upcoming',
          headerShadowVisible:false,
          headerRight: () => <MoreButton  />,
        }}
      />
    </Stack>
  );
};
export default Layout;