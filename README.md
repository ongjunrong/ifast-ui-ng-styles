# ifast-ui-ng-styles

## Installation
```bash
npm install
```

## CSS Validation
Please run the below command before pushing your code.

```bash
npm run validate
```

## CODING RULES FOR PROJECT REQUIRE TO SWITCH THEME
#DON'T use the below SCSS function in core. It is deprecated and will cause projects unable to build. 

```bash
rgba($brand-theme ,0.5)
darken($brand-theme ,20%)
lighten($brand-theme ,20%)
```
or any SCSS:color function, Refer to https://sass-lang.com/documentation/modules/color.

#DO. Use the below funtion for darken/lighten and alpha.

```bash
css-alpha($brand-theme ,0.5) //rgba
css-lightness($brand-theme ,20%) //lighten
css-lightness($brand-theme , - 10%) //darken
```
Note, for now it will not work inside mixin. Please dont use like that for now.
```bash
@mixin color ($color) {
background: css-alpha($color ,0.5) 
color: css-lightness($color ,20%)
}
```

## HOW to do theming with CSS VARIABLE
CSS Variable will be used for theming in the frameworks.


1)SCSS Variable that require to change in different theme, must add !default. 

```bash
 $brand-primary:                 #cc0000 !default ;
 ```

2) SCSS Variable that require to change in different theme, must change it to CSS Variable using this method.
```bash
 $brand-primary:                  css(brand-primary) ;

 //output   
 $brand-primary:                  css(var(--brand-primary) ;

 ```

3) In CSS Variable we are using HSLA, all color has to be written in HSLA color code. Must use this mixin

```bash
@include colorHsla(--brand-primary, 120, 89%, 56% ,1);
 ```
You must make sure you have define the CSS variable here, else the project will unable to build.


#DO. 

List of theme name please refer to this, format start with theme-* , choose the naming with closest color of the brand-theme or brand-primary
https://simple.wikipedia.org/wiki/List_of_colors 

```bash
.theme-gold{
}
.theme-azure{
}
 ```


Refer to this for the structure
https://github.com/itpc-urd/ifast-ui-ng-styles/tree/master/change-theme-template


