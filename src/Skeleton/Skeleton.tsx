import { StyleSheet, View } from 'react-native'

export const BORDER_RADIUS = 3
export const BASE_COLOR = '#ebebeb'
export const HIGHLIGHT_COLOR = '#f5f5f5'

type BasicDimensions = {
  /**
   * the width of the skeleton element.
   * units are in pixels
   */
  width?: number
  /**
   * the height of the skeleton element
   * units are in pixels
   */
  height?: number
}

type Dimensions = {
  /**
   * the border radius of the skeleton element
   * units are in pixels
   * @default 10
   */
  borderRadius?: number
} & BasicDimensions

type Colors = {
  baseColor?: string
  highlightColor?: string
}

type Skeleton = {
  dimensions?: Dimensions
  colors?: Colors
} & BasicDimensions

export default function Skeleton({
  width,
  height,
  dimensions = { borderRadius: BORDER_RADIUS },
  colors,
}: Skeleton) {
  const color = {
    backgroundColor: colors?.baseColor || BASE_COLOR,
  }
  return (
    <View>
      <View style={[styles.fill, { width, height }, color, dimensions]} />
    </View>
  )
}

const styles = StyleSheet.create({
  fill: {
    backgroundColor: 'blue',
  },
})
