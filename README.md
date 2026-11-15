# INFR3120 Assignment 2 – Express Portfolio Site

Personal portfolio built with Node.js, Express and the EJS templating engine.

**Live site:** ADD YOUR RENDER URL HERE
**Author:** Ebube Okoronkwo

## How the project was created

1. Generated with the Express Generator: `npx express-generator --view=ejs portfolio`
2. Routes for Home, About, Projects and Contact are defined in `routes/index.js`.
3. Pages are EJS views in `views/`; the shared header (navbar) and footer (GitHub and LinkedIn links) are partials in `views/partials/`.
4. Bootstrap 5 and Font Awesome 6 are loaded from CDNs in the header partial.
5. Deployed to Render.

## Project structure

```
app.js                  Express app setup (generated)
bin/www                 Server start script (generated)
routes/index.js         All page routes (res.render for each view)
views/                  EJS templates
  index.ejs             Home
  about.ejs             About Me
  projects.ejs          Projects
  contact.ejs           Contact Me
  error.ejs             Error page (generated)
  partials/header.ejs   Shared head + navbar
  partials/footer.ejs   Shared footer with GitHub and LinkedIn links
public/                 Static assets
  stylesheets/          CSS
  images/               Images
```


## Run locally

```
npm install
npm start
```

this is the link http://localhost:3000

## Sources and citations

- Bootstrap 5.3.3 (https://getbootstrap.com), loaded via the jsDelivr CDN.
- Font Awesome 6.5.2 (https://fontawesome.com), loaded via cdnjs.
- Express Generator scaffold (https://expressjs.com/en/starter/generator.html).
- code i used from lectures: (if any)
- Ai code i used: (if any)