import { Colors } from "@/constants/Colors";
import { useUser } from "@clerk/clerk-expo";
import { Stack } from "expo-router";
import { Image } from "react-native";

const HeaderLeft = () => {
    const { user } = useUser();
    return <Image source={{ uri: user?.imageUrl }} style={styles.image} />
}
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
                  title: 'Browse',
                  headerLargeTitle: true,
                  headerSearchBarOptions: {
                    placeholder: 'Tasks, Projects and more',
                    tintColor: Colors.primary,
                  },
                  headerLeft: () => <HeaderLeft />,
                }}
              />
            </Stack>
    )
}

const styles = {
    image: {
        width: 32,
        height: 32,
        borderRadius: 16,
        marginRight: 16,
    }
}
export default Layout;