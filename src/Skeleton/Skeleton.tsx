import { useEffect } from 'react'
import { View } from 'react-native'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated'

export const BORDER_RADIUS = 3
export const MX = 2
export const MY = 2
export const BASE_COLOR = '#ebebeb'
export const HIGHLIGHT_COLOR = '#f5f5f5'

type BasicDimensions = {
  /**
   * the `width` of the skeleton element.
   */
  w?: number
  /**
   * the `height` of the skeleton element
   */
  h?: number
  /**
   * the `border radius` of the skeleton element
   * @default 3
   */
  bR?: number
  /**
   * the `horizontal mragin` of the skeleton element
   * @default 2
   */
  mX?: number
  /**
   * the `vertical mragin` of the skeleton element
   * @default 2
   */
  mY?: number
}

type Speed = 400 | 500 | 700

export type Skeleton = {
  color?: string
  speed?: Speed
} & BasicDimensions

export default function Skeleton({
  w,
  h,
  bR = BORDER_RADIUS,
  mX = MX,
  mY = MY,
  color = BASE_COLOR,
  speed = 500,
}: Skeleton) {
  const background = useSharedValue(0)
  const animatedBackground = useAnimatedStyle(() => {
    'worklet'
    return {
      opacity: background.value,
    }
  })

  const styles = {
    width: w,
    height: h,
    borderRadius: bR,
    marginHorizontal: mX,
    marginVertical: mY,
    backgroundColor: color,
  }

  useEffect(() => {
    background.value = withRepeat(
      withTiming(1, { duration: speed }),
      Infinity,
      true
    )
  }, [speed])

  return (
    <View>
      <Animated.View style={[styles, animatedBackground]} />
    </View>
  )
}
