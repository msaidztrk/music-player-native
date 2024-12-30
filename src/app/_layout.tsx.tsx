import { colors } from '@/constants/tokens'
import { SplashScreen, Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { useCallback, useEffect, useState } from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context' 
// import { GestureHandlerRootView } from 'react-native-gesture-handler';

// Prevent splash screen auto-hide until we manually hide it
SplashScreen.preventAutoHideAsync()

const App = () => {
  const [isReady, setIsReady] = useState(false)

  const handleTrackPlayerLoaded = useCallback(() => {
    SplashScreen.hideAsync()
    setIsReady(true)
  }, [])

  // Example of loading logic, can be used to simulate fetching data or assets
  useEffect(() => {
    // Simulate loading data or assets
    setTimeout(() => {
      handleTrackPlayerLoaded()
    }, 2000)  // Delay of 2 seconds to simulate loading
  }, [handleTrackPlayerLoaded])

  if (!isReady) {
    return null  // Optionally render a loading screen or spinner
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView edges={['top']} style={{ flex: 1 }}> 
      {/* <GestureHandlerRootView> */}
        <RootNavigation />
        <StatusBar style="auto" />
        {/* </GestureHandlerRootView> */}
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const RootNavigation = () => {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  )
}

export default App