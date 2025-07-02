# Website Maintenance Documentation

by Ethan Oh, 7/01/2025

## How was this website made?

This website was built with 5 main tools:
1. [Astro](https://astro.build/) - a static website generator JavaScript framework that allows you to easily edit website content through the use of [Markdown](https://www.markdownguide.org/) (.md) files and React layouts/components (--this website uses [Preact](https://preactjs.com/), though!)
2. [TailwindCSS](https://tailwindcss.com/) - a fast, lightweight CSS framework that allows for quick-and-easy style changes and aesthetic improvements
3. [DaisyUI](https://daisyui.com/) - an extension of TailwindCSS that essentially acts as a UI component library, great for building websites quickly and aesthetically
4. [PagesCMS](https://pagescms.org/) - an open-source, online Content Management System (CMS) that allows users to easily modify the content in the website Markdown files with a user-friendly Graphical User Interface (GUI) without interacting with the code
5. [Netlify](https://www.netlify.com/) - a website hosting/deployment service that reads your files straight from your GitHub repository and auto-publishes your changes to a live URL

## How to dive deeper in development than simple Markdown?

If you would like to edit the website structure, the style, or the header/footer/landing page, read the following.

### Installation and setup

You'll need to [configure your Astro environment](https://docs.astro.build/en/install-and-setup/).

1. Install [Node.js](https://nodejs.org/en/download) ```v18.XX.XX```, or ```v20.XX.XX```, ```v22.XX.XX```
    * This is easy for Linux and Mac users--use the nvm option, very straight forward just paste code into your terminal/command prompt
    * Much more involved for Windows users, I recommend installing [Docker](https://www.docker.com/). It will prompt you to restart, maybe even twice, and will install Windows Subsystem for Linux (WSL) on your machine. Run Docker and paste the code in to install Node.js
2. Using [Git](https://git-scm.com/downloads) or [GitHub Desktop](https://github.com/apps/desktop), clone this repository to your local machine.
4. Run the local development website on your own machine
    * Again, for Linux or Mac users, just navigate to the repository folder in a terminal instance and run ```npm install astro```, then ```npm run dev```. Wait for it to tell you it's hosting on https://localhost:4321/, then go to that page on your browser to see the website preview
    * For Windows users, run ```docker-compose up --build``` and wait for the hosting on https://localhost:4321/ message (it will take some time)
5. Make your changes/improvements to the website
    * For Linux or Mac users, the changes will be reflected in the preview site immediately after saving the files (convenient!)
    * Unfortunately for Windows users, you will need to stop the server (<kbd>Ctrl</kbd>+<kbd>C</kbd>, then ```docker-compose down```) and reboot it (```docker-compose up```, "--build" unnecessary this time) to see your changes come into effect
6. When you are done:
    1. Shutdown your development server: <kbd>Ctrl</kbd>+<kbd>C</kbd> (and ```docker-compose down``` too for Windows!)
    2. Add, commit, and push to the repository (to the 'main' branch):
        * Use GitHub Desktop, or in your command line:
        * ```git add .```
        * ```git commit -m "SUMMARY OF CHANGES HERE"```
        * ```git push```
        * Error messages? Contact leadership for help, do not brute-force anything
7. Request approval from leadership to push changes to 'release' branch

### Where and what to edit

I highly recommend getting some experience in HTML/CSS, JavaScript, and other web development before making permanent changes to the website. TODO: important files and their descriptions

```public/``` contains the PagesCMS media files
```src/``` contains almost everything else

## I want to do this for my own website

The advantage with the website infrastructures I have chosen is that once your website structure and style is how you want it to look, it is extremely easy to add new content for blog posts or project updates. In fact, I built this "template" with my portfolio in mind, wanting to easily add articles to showcase my work and give updates. If you decide to build your own website by simply making a few changes to this template, please acknowledge my work in writing. However, the tools used to make this website should make it very easy to build your own, even-better design, especially with this template as a reference. 

TODO: add instructions for Windows.

To get started with your own project using the same tools, follow steps 1 and 2 in the installation instructions above, then create your own project by navigating to a folder outside of the repository folder and:
1. Start your project: ```npm create astro@latest```, select empty project, install dependencies (initialize git repository if you want PagesCMS and Netlify functionality)
2. Go to your project directory: ```cd project_name```
3. If you would like to use the same template as this website, copy the following folders/files to your project folder:
    - ```public/```
    - ```src/```
    - ```.gitignore```
    - ```.pages.yml```
    - ```astro.config.mjs```
    - ```package-lock.json```
    - ```package.json```

4. Install the helpful tools: ```npm install tailwindcss@latest @tailwindcss/vite@latest daisyui@latest```
5. Install the lightweight dynamic component library: ```npm add preact```
6. Your repository is all set! You can test if it works by running ```npm run dev``` and visiting the development site.
7. To use PagesCMS and Netlify, visit their websites, sign in with GitHub, and give their services permission to view and edit your website repository.