import { Stack } from 'expo-router';

export default function SearchStackLayout() {
    // Stack này sẽ quản lý các màn hình bên trong tab "Search"
    // Chúng ta ẩn header mặc định vì các màn hình của chúng ta (Search và Results)
    // đều có thanh SearchBar riêng.
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="index" />
            <Stack.Screen name="results" />
        </Stack>
    );
}
