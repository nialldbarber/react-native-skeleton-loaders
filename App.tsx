import { StyleSheet, Text, View } from 'react-native'
import { Skeleton } from './index'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <View style={styles.parentContainer}>
        <Skeleton width={50} height={50} />
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
    backgroundColor: 'red',
  },
})
