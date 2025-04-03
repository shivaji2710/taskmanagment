tailwind install command

1)
npm install tailwindcss @tailwindcss/cli
2)
style.css   // src create 
index.css  // @import "tailwindcss"; 
3)package.json   
"scripts": {
   "watch:css":"npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch",
   "start": "react-scripts start & npm run watch:css",
}



