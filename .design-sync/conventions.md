## Using this library

- There is no theme provider. Tokens are CSS variables on `:root`.
- Dark mode is a class on an ancestor, not a prop.
- Never hand-style a component. Use `variant` and `size`; `className` is for layout only.
- Compose `Card` from `CardHeader`, `CardTitle`, `CardContent` and `CardFooter`.
- Merge class names with the exported `cn()` helper.

## Styling

Tailwind v4, token-backed. **The shipped CSS is a fixed subset** — it is compiled from the
design system alone, so any class outside the families below does not exist and will silently
do nothing (`gap-4` works, `gap-5` does not). Stay inside this vocabulary:

| Family | Values |
|---|---|
| Color | `bg-` / `text-` / `border-` + `background` `foreground` `card` `primary` `secondary` `muted` `accent` `destructive` `border` (also `hover:` and `dark:`) |
| Layout | `flex` `grid` `flex-col` `hidden` `flex-1`, `grid-cols-{1,2,3,4,6,12}` |
| Spacing | `{gap,gap-x,gap-y}-{0,1,2,3,4,6,8,12}`, `{p,px,py,m,mx,my,mt,mb}-{0,1,2,3,4,6,8,12,16,auto}` |
| Size | `{w,h}-{full,auto,fit,4,6,8,10,12,16,24}`, `max-w-{sm,md,lg,xl,2xl,4xl,prose}` |
| Text | `text-{xs,sm,base,lg,xl,2xl,3xl,4xl}` |
| Align | `{items,justify}-{start,end,center,between}` |

Responsive `sm:` `md:` `lg:` `xl:` prefixes exist only for the layout, spacing and color
families above. Only four `-foreground` text classes ship: `text-card-foreground`, `text-muted-foreground`,
`text-primary-foreground`, `text-secondary-foreground`. Pair each with its surface
(`bg-card` + `text-card-foreground`); other `-foreground` names such as `text-accent-foreground`
do not exist.

## Where the truth lives

Read `styles.css` and its `@import`s before styling — it is the authoritative list of what
exists. Per-component API and usage live in `components/<group>/<Name>/<Name>.d.ts` and
`<Name>.prompt.md`.

## Building with it

```jsx
<Card className="w-full max-w-sm">
  <CardHeader>
    <CardTitle>Create project</CardTitle>
    <CardDescription>Deploy your new project in one click.</CardDescription>
  </CardHeader>
  <CardContent>
    <Input placeholder="Project name" />
  </CardContent>
  <CardFooter className="justify-end gap-2">
    <Button variant="outline">Cancel</Button>
    <Button>Create</Button>
  </CardFooter>
</Card>
```

Library components carry the design language; `className` is only layout glue, from the table above.
