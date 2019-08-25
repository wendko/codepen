## Description
This repo is a playground for my CSS projects before I move the final product onto CodePen.

## Projects
Projects or pens are sorted by folders.
Contents of each pen may have:
- a .pug file
- a .scss file
- from the postprocessing, there would be a .css, .css.map and .html file as well
- a .js file

Create a new project by running:
```
npm run pen -- {pen-name}
```
This will create a folder under pens/
COMING SOON: create `index.pug` and `index.scss`

### Temporary process until I figure out how to make this easier:

1. Create folder and cd into the directory
    ```
    npm run pen -- {pen-name}
    cd pens/{pen-name}
    ```
2. Create the pug and scss files
    ```
    touch index.pug style.scss
    ```
3. Start coding! Remember to add the css reference in the pug file
    ```
    link( rel="stylesheet" href="./style.css" type="text/css")
    ```
4. Run the preprocessors to generate the html and css files
    ```
    pug index.pug && sass style.scss style.css
    ```

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
