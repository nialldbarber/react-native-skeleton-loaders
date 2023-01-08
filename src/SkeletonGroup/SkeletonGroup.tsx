import React from 'react'
import type { ReactElement } from 'react'
import { StyleSheet, View } from 'react-native'
import type { Skeleton } from '../Skeleton/Skeleton'

type Stagger = {
  delay: number
}

export type SkeletonGroupT = {
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
   * by default, the skeleton elements animate
   * in unison. by choosing to stagger the
   * elements, you can get a more traditional
   * skeleton loading animation
   */
  stagger?: Stagger
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
  children: ReactElement<Skeleton> | Array<ReactElement<Skeleton>>
}

export default function SkeletonGroup({
  numberOfItems,
  direction = 'row',
  children,
  stagger,
}: SkeletonGroupT) {
  return (
    <View style={[styles.group, { flexDirection: direction }]}>
      {[...Array(numberOfItems)].map((_, i) =>
        React.cloneElement(children, { stagger, i })
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  group: { display: 'flex' },
})
