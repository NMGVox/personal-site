npm init -y;

npm install webpack webpack-cli --save-dev;

npm install --save-dev html-webpack-plugin;

npm install --save-dev webpack-dev-server;

npm install --save-dev style-loader css-loader;

npm install --save-dev jest;

npm instal --save-dev babel-loader @babel/core @babel/preset-env;
npm install --save-dev babel-jest @babel/core @babel/preset-env;

npm install eslint-webpack-plugin --save-dev

cat instructions_webpack.txt >> webpack.config.js;

cat instructions_jest.txt >> jest.config.js;

echo 'node_modules' >> .gitignore;

mkdir dist;

mkdir src;

touch src/index.html;

touch src/index.js;
