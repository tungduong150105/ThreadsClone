import { Tabs } from 'expo-router'
import React from 'react'
import { Platform } from 'react-native'
import { Home, Search, Plus, Heart, User } from 'lucide-react-native'
import { useRouter } from 'expo-router'

export default function TabLayout() {
  const router = useRouter()
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#0a7ea4',
        headerShown: false,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute'
          },
          default: {}
        })
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <Home size={24} color={color} />
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <Search size={24} color={color} />
        }}
      />
      <Tabs.Screen
        name="empty"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <Plus size={24} color={color} />
        }}
        listeners={{
          tabPress: e => {
            router.push('/post')
          }
        }}
      />
      <Tabs.Screen
        name="activity"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <Heart size={24} color={color} />
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <User size={24} color={color} />
        }}
      />
    </Tabs>
  )
}
