import type { ReactNode } from 'react'
import { StyleSheet, View } from 'react-native'

type SkeletonGroup = {
  /**
   * the amount of skeleton elements
   * in one group
   */
  numberOfItems: number
  /**
   * the direction flow of skeleton elements.
   * i.e. either vertical or horizontal
   * @default "row"
   */
  direction?: 'row' | 'column'
  /**
   * the child of <SkeletonGroup />
   * note: this MUST be a <Skeleton /> component,
   * other it won't work
   *
   * EG:
   * <SkeletonGroup>
   *   <Skeleton {...args} />
   * </SkeletonGroup>
   */
  children: ReactNode
}

export default function SkeletonGroup({
  numberOfItems,
  direction = 'row',
  children,
}: SkeletonGroup) {
  return (
    <View style={[styles.group, { flexDirection: direction }]}>
      {[...Array(numberOfItems)].map(() => children)}
    </View>
  )
}

const styles = StyleSheet.create({
  group: { display: 'flex' },
})
