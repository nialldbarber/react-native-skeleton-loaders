<div align="center">
<img width="300" alt="Screenshot 2023-01-08 at 08 50 02" src="https://user-images.githubusercontent.com/20539827/211187913-f52bd263-a459-4084-bb42-c9a641a04558.png">
</div>

<h2>
React Native Skeleton Loaders
</h2>

[![npm version](https://img.shields.io/npm/v/react-native-skeleton-loaders.svg?style=flat)](https://www.npmjs.com/package/react-native-skeleton-loaders)

A small, intuitive, type-safe package for simple skeleton loaders that you can add whilst your app is in a loading state.

## Table of contents
- [Prerequisites](#prerequisites)
- [Install](#install)
- [How it works](#how-it-works)
- [Component API](#component-api)
- [Staggering child elements](#staggering-child-elements)

## Prerequisites

In order to use this library, you _must_ have React Native Reanimated V2 installed. Check out the installation process [here](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/installation) before you go any further!

## Install
```sh
npm install react-native-skeleton-loaders
```
Or: 
```sh
yarn add react-native-skeleton-loaders
```

## How it works
Whilst waiting for data to load, to give the impression to the user that things are ticking along, you can add a skeleton loader. You can simply construct a layout of skeleton elements that match up with the eventual layout when the data has loaded: 

```jsx
const DataList = ({ isLoading }) => {
  return isLoading ? (
    <SkeletonGroup numberOfItems={3} direction="row" stagger={{ delay: 3 }}>
      <Skeleton w={100} h={100} />
    </SkeletonGroup>
  ) : (
    <Layout>
      <App />
    </Layout>
  )
}
```

---

## Component API
## `<Skeleton />`

| Prop | Type | Default Value |
|---|---|---|
| `w` (width) | `number` |
| `h` (height) | `number` |
| `bR` (borderRadius) | `number` | `3`
| `mX` (marginHorizontal) | `number` | `2`
| `mY` (marginVertical) | `number` | `2` 
| `color` | `string` | `'#ebebeb'`
| `speed` | `400,500,700` | `500`
| `circle` | `{ radius: number }` | If you use this, then `w` and `h` will be overridden by the radius

For a single skeleton element, import `<Skeleton />`:

```jsx
import { Skeleton } from 'react-native-skeleton-loaders'

<Skeleton w={200} h={50} />
```

![single-skeleton2](https://user-images.githubusercontent.com/20539827/211169732-e3d08e07-ffa4-49f2-af11-47c47e5f6d89.gif)


## `<SkeletonGroup />`
| Prop | Type | Default Value | Notes |
|---|---|---|---|
| `numberOfItems` | `number` |  | There isn't a limit on how many items you can do, so use common sense! 
| `direction` | `row,column` | `row` | This mirrors the `flex` property, so goes vertically or horizontally
| `stagger` | `{ delay: number }` | `{ delay: 3 }` | 
| `children` | `ReactElement<Skeleton>` |  | This React child _must_ be a `<Skeleton />` component

If you want to have a group of skeleton elements, you can add a `<SkeletonGroup />`:
```jsx
import { SkeletonGroup, Skeleton } from 'react-native-skeleton-loaders'

<SkeletonGroup numberOfItems={4}>
  <Skeleton w={100} h={100} />
</SkeletonGroup>
```

![single-skeleton4](https://user-images.githubusercontent.com/20539827/211169820-33f53cde-05d2-4f38-98af-224343086a6d.gif)

### Staggering child elements

If you want the skeleton animation to be staggered in a more traditional skeleton animation way, you can simply add the `stagger` prop along with the delay for each element: 

```jsx
import { SkeletonGroup, Skeleton } from 'react-native-skeleton-loaders'

<SkeletonGroup numberOfItems={3} direction="row" stagger={{ delay: 3 }}>
  <Skeleton w={100} h={100} />
</SkeletonGroup>

<SkeletonGroup numberOfItems={3} direction="row" stagger={{ delay: 3 }}>
  <Skeleton w={100} h={100} />
</SkeletonGroup>

<SkeletonGroup numberOfItems={3} direction="row" stagger={{ delay: 3 }}>
  <Skeleton w={100} h={100} />
</SkeletonGroup>
```

![multiple-2](https://user-images.githubusercontent.com/20539827/211198597-2d3e4af5-41d2-480f-8029-e76bc46c1aa5.gif)

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
