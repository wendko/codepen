## Description
This repo is a playground for my CSS projects before I move the final product onto CodePen.

## Projects
Projects are sorted by folders.
Each folder would have
- a .pug file
- a .scss file
- from the postprocessing, there would be a .css, .css.map and .html file as well

Create a new project by running:
```
npm run pen -- {pen-name}
```
This will create a folder under pens/
COMING SOON: create `index.pug` and `index.scss`

## Pug file dependencies
CSS: Include the stylesheet at the top of the pug file
```
link(rel="stylesheet" href="./template.css" type="text/css")
```

Javascript: Include the script tag in the bottom of the pug file
```
script(src="index.js")
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
