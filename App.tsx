import { StyleSheet, Text, View } from 'react-native'
import { Skeleton } from './index'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <View style={styles.parentContainer}>
        <Skeleton w={200} h={50} bR={10} />
        <Skeleton w={200} h={50} />
        <Skeleton w={200} h={50} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  parentContainer: {
    width: 100,
    height: 100,
  },
})
