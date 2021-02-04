# Button

Should only be applied to `<button>` elements and `<a>` elements.

## Color changes

Use design tokens to change the default colors. All hover states are the same.

## Sizes

Right now, only `data-size="large"` is available as an Exception.

## Themes

Themes are defined as pairs of colors. they initialize css variables only for the context of the element for which we add `theme-{name}` as a class. themes are defined in the global css for now. We could make it part of the config if we'd like to easily extend it to more utility classes or if we want them to contain more colors. 
