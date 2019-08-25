## Description
This repo is a playground for my CSS projects before I move the final product onto CodePen.

## Projects
Projects are sorted by folders.
Each folder would have
- a .pug file
- a .scss file
- from the postprocessing, there would be a .css, .css.map and .html file as well

## Pug file
Include the stylesheet in the pug file
```
link( rel="stylesheet" href="./template.css" type="text/css")
```

## Preprocessing
Pug preprocessing: Will produce a template.pug file

```
pug --watch template.pug
```

SASS preprocessing: Will produce a template.css file
```
sass --watch template.scss template.css
```

## View results
Open up the template.html file to view the outcome.
