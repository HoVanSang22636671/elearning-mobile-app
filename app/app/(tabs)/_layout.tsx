import React from 'react';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

// Màu sắc chủ đạo (giống trong thiết kế)
const ACTIVE_COLOR = '#00A89C'; // Màu xanh teal
const INACTIVE_COLOR = '#888888'; // Màu xám

// Component tùy chỉnh để hiển thị Icon
function TabBarIcon({ name, color }: { name: keyof typeof Ionicons.glyphMap; color: string }) {
  return <Ionicons size={26} style={{ marginBottom: -3 }} name={name} color={color} />;
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: ACTIVE_COLOR, // Màu cho tab đang được chọn
        tabBarInactiveTintColor: INACTIVE_COLOR, // Màu cho các tab còn lại
        tabBarStyle: {
          height: 70, // Tăng chiều cao 1 chút
          paddingBottom: 8, // Đẩy text và icon lên
          paddingTop: 8,
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '600',
        },
        headerShown: false,
        tabBarShowLabel: true, // Ẩn header mặc định (vì chúng ta đã code header riêng trong HomeScreen)
      }}>

      {/* Tab 1: Home */}
      <Tabs.Screen
        name="index" // Trỏ đến file index.tsx
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />

      {/* Tab 2: Search */}
      <Tabs.Screen
        name="search" // Trỏ đến file search.tsx
        options={{
          title: 'Search',
          tabBarIcon: ({ color }) => <TabBarIcon name="search" color={color} />,
        }}
      />

      {/* Tab 3: My Courses */}
      <Tabs.Screen
        name="my-courses" // Trỏ đến file my-courses.tsx
        options={{
          title: 'My Courses',
          tabBarIcon: ({ color }) => <TabBarIcon name="book" color={color} />,
        }}
      />

      {/* Tab 4: Profile */}
      <Tabs.Screen
        name="profile" // Trỏ đến file profile.tsx
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <TabBarIcon name="person" color={color} />,
        }}
      />
    </Tabs>
  );
}
