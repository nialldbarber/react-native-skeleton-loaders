import { cloneElement } from 'react'
import type { ReactElement } from 'react'
import { StyleSheet, View } from 'react-native'
import { formatIndex } from '../utils'

type Stagger = {
  /**
   * by default, the skeleton elements animate
   * in unison. by choosing to stagger the
   * elements, you can get a more traditional
   * skeleton loading animation
   * @default 3
   */
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
  children: ReactElement<any>
}

export default function SkeletonGroup({
  numberOfItems,
  direction = 'row',
  stagger = { delay: 3 },
  children,
}: SkeletonGroupT) {
  return (
    <View style={[styles.group, { flexDirection: direction }]}>
      {[...Array(numberOfItems)].map((_, i) =>
        cloneElement(children, {
          key: i,
          stagger: formatIndex(i) + stagger?.delay,
        })
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  group: { display: 'flex' },
})
