<h1 align="center">
💀 💀 💀
</h1>
<h1 align="center">
React Native Skeleton Loaders
</h1>

A small, intuitive package for simple skeleton loaders that you can add whilst your app is in a loading state.

## Prerequisite

In order to use this library, you _must_ have React Native Reanimated V2 installed. Check out the installation process [here](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/installation) before you go any further!

---

## Skeleton

For a single skeleton element, import `<Skeleton />`:

```jsx
import { Skeleton } from 'react-native-skeleton-loaders'

<Skeleton w={200} h={50} />
```

## Skeleton Group

If you want to have a group of skeleton elements, you can add a `<SkeletonGroup />`. You _must_ however, nest `<Skeleton />` elements inside the group for it to work:

```jsx
import { Skeleton } from 'react-native-skeleton-loaders'

<SkeletonGroup numberOfItems={4}>
  <Skeleton w={20} h={50} />
</SkeletonGroup>
```
