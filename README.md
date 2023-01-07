<h1 align="center">
💀 💀 💀
</h1>
<h1 align="center">
React Native Skeleton Loaders 
</h1>

[![npm version](https://img.shields.io/npm/v/react-native-skeleton-loaders.svg?style=flat)](https://www.npmjs.com/package/react-native-skeleton-loaders)

A small, intuitive package for simple skeleton loaders that you can add whilst your app is in a loading state.

## Prerequisites

In order to use this library, you _must_ have React Native Reanimated V2 installed. Check out the installation process [here](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/installation) before you go any further!

## Install
```bash
yarn add react-native-skeleton-loaders
npm install react-native-skeleton-loaders
```

---

## Component API
## Skeleton

| Prop | Type | Default Value | Notes |
|---|---|---|---|
| `w` (width) | `number` |  | 
| `h` (height) | `number` |  | 
| `bR` (borderRadius) | `number` | `3` | 
| `mX` (marginHorizontal) | `number` | `2` | 
| `mY` (marginVertical) | `number` | `2` | 
| `colors` | `{ baseColor?: string, highlightColor?: string }` |  | 
| `speed` | `400,500,700` | `500` | 

For a single skeleton element, import `<Skeleton />`:

```jsx
import { Skeleton } from 'react-native-skeleton-loaders'

<Skeleton w={200} h={50} />
```

![single-skeleton2](https://user-images.githubusercontent.com/20539827/211169732-e3d08e07-ffa4-49f2-af11-47c47e5f6d89.gif)


## Skeleton Group

If you want to have a group of skeleton elements, you can add a `<SkeletonGroup />`. You _must_ however, nest `<Skeleton />` elements inside the group for it to work:

```jsx
import { SkeletonGroup, Skeleton } from 'react-native-skeleton-loaders'

<SkeletonGroup numberOfItems={4}>
  <Skeleton w={100} h={100} />
</SkeletonGroup>
```

![single-skeleton4](https://user-images.githubusercontent.com/20539827/211169820-33f53cde-05d2-4f38-98af-224343086a6d.gif)
