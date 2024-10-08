# Tailwind ref
    - https://tailwindcss.com/docs/installation/using-postcss
    - Follow the instructions properly.
    - Use:  1. npm install -D tailwindcss postcss autoprefixer
            2. npx tailwindcss init
    - Create a 'postcss.config.js' file -> amend the 'module.exports =' to 'export default'.
    - Configuring 'tailwind.config.js' file.
        - Here we put tailwind configurations.
        - content:[] => we put all the classes/files which tailwind is being(or might be) used and should be monitored.
        - E.g.: ./src/**/*.{js,ts,jsx,tsx}, this means any file inside 'folder' with extensions .js,.ts,.jsx,.tsx should be monitored.
    - 'main.css' or 'index.css' in our case.

    - DONE!!


**Note** : Whenever we need to add our custom css, we can do so by defining it in 'tailwind.config.js'