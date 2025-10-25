import { AuthProvider } from '@/hooks/authContext';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
export default function RootLayout() {
  return (
    <AuthProvider>
      <StatusBar style="auto" />
      <Stack>
        <Stack.Screen name="(tabs)" options={{headerShown: false}} />
        <Stack.Screen name="Login" options={{headerShown: false}} />
      </Stack>
    </AuthProvider>
  );
}
