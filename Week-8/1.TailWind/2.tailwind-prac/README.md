# Tailwind ref
    - Add 'Tailwind CSS IntelliSense' extension in VS Code.
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


- If you want to get the color of an image, go to figma and upload it, you will get it.


**Note** : Whenever we need to add our custom css, we can do so by defining it in 'tailwind.config.js'


# Story book
- After developing revenue card, we embedded 'StoryBook' in our project.
- This is used to expose some parts of React component/project to others if you don't want to open-source your project code.
- Ref: https://storybook.js.org/docs
- I found it not of much use currently!



# MUI (Material UI)
- It is cool but very hard to customize.
- So if you are okay with default designs, you may go for it.
- Ref: https://mui.com/material-ui/getting-started/installation/