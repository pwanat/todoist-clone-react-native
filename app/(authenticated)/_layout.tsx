import { Colors } from "@/constants/Colors"
import { Stack } from "expo-router"

const Layout = () => {
    return <Stack screenOptions={{ contentStyle: { backgroundColor: Colors.background } }} />
}
export default Layout;
