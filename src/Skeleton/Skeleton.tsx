import React, { useEffect } from "react";
import { Animated } from "react-native";

export const BORDER_RADIUS = 3;
export const MX = 2;
export const MY = 2;
export const BASE_COLOR = "#ebebeb";

type Dimensions = {
  /**
   * the `width` of the skeleton element.
   */
  w?: number;
  /**
   * the `height` of the skeleton element
   */
  h?: number;
  /**
   * the `border radius` of the skeleton element
   * @default 3
   */
  bR?: number;
  /**
   * the `horizontal mragin` of the skeleton element
   * @default 2
   */
  mX?: number;
  /**
   * the `vertical mragin` of the skeleton element
   * @default 2
   */
  mY?: number;
};

type Speed = 400 | 500 | 700;
type Circle = { radius: number };

export type Skeleton = {
  color?: string;
  speed?: Speed;
  circle?: Circle;
  stagger?: number;
};

type SkeletonProps = Skeleton & Dimensions;

export default function Skeleton({
  w,
  h,
  bR = BORDER_RADIUS,
  mX = MX,
  mY = MY,
  color = BASE_COLOR,
  speed = 500,
  circle,
  stagger,
}: SkeletonProps) {
  const background = new Animated.Value(0);

  const dimensions = { width: w, height: h };
  const determineType = circle
    ? {
        borderRadius: circle.radius,
        width: circle.radius,
        height: circle.radius,
      }
    : dimensions;
  const styles = {
    borderRadius: bR,
    marginHorizontal: mX,
    marginVertical: mY,
    backgroundColor: color,
    ...determineType,
    opacity: background,
  };

  useEffect(() => {
    const animation = Animated.sequence([
      Animated.timing(background, {
        toValue: 1,
        duration: speed,
        useNativeDriver: true,
      }),
      Animated.timing(background, {
        toValue: 0,
        duration: speed,
        useNativeDriver: true,
      }),
    ]);

    if (stagger) {
      const delayAnimation = Animated.delay(stagger * 100);
      Animated.sequence([delayAnimation, Animated.loop(animation)]).start();
    } else {
      Animated.loop(animation).start();
    }
  }, []);

  return <Animated.View style={styles} />;
}
