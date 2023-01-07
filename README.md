I'd expect the API to look something like:

```ts
type Dimensions = {
  width?: number
  height?: number
  borderRadius?: number
}

type Skeleton = {
  fill?: boolean // false by default
  dimensions?: Dimensions
}
```

A fit-to-parent skeleton:

```jsx
<Skeleton fill />
```

A skeleton that you can give dimensions:

```jsx
<Skeleton
  dimensions={{
    width: 100,
    height: 100,
    borderRadius: 10,
  }}
/>
```

Created a grid with a parent:

```jsx
<Skeleton
  scaffold={[
    { w: 100, h: 100, br: 10, mb: 10 },
    { w: 100, h: 100, br: 10, mb: 10 },
    { w: 100, h: 100, br: 10, mb: 10 },
    { w: 100, h: 100, br: 10, mb: 10 },
  ]}
/>
```
