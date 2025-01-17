import { tokenCache } from "@/utils/cache";
import { ClerkProvider, ClerkLoaded, useAuth } from "@clerk/clerk-expo";
import { Stack, useRouter, useSegments, usePathname } from "expo-router";
import { useEffect } from "react";
import { Colors } from "react-native/Libraries/NewAppScreen";

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!;

if (!publishableKey) {
  throw new Error(
    "Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env"
  );
}

const InitialLayout = () => {
  const { isLoaded, isSignedIn } = useAuth();
  const router = useRouter();
  const segments = useSegments();
  const pathname = usePathname();

  // TODO: I don't like that, refactor to use <SignedIn></SignedOut>?
  useEffect(() => {
    if (!isLoaded) return;
    const inAuthGroup = segments[0] === "(authenticated)";
    console.log("🚀 ~ useEffect ~ inAuthGroup:", inAuthGroup);
    console.log("🚀 ~ useEffect ~ isLoaded:", isLoaded);
    console.log("🚀 ~ useEffect ~ isSignedIn:", isSignedIn);
    if (isSignedIn && !inAuthGroup) {
      router.replace('/today');
    } else if (!isSignedIn && pathname !== "/") {
      router.replace("/");
    }
  }, [isSignedIn]);

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: Colors.background },
      }}
    >
      <Stack.Screen name="index" />
    </Stack>
  );
};

const RootLayout = () => {
  return (
    <ClerkProvider publishableKey={publishableKey} tokenCache={tokenCache}>
      <ClerkLoaded>
        <InitialLayout />
      </ClerkLoaded>
    </ClerkProvider>
  );
};

export default RootLayout;
