# Webpack

### Instalação

Iniciar um projeto npm ```npm init```

Instalar o **webpack local**. *Requer cli.*

    npm install webpack webpack-cli --save-dev

Por convenção, criar a pasta *src* e *dist* na raiz do projeto.

*Colocar "private": true em package.json.*

Utilizar webpack com arquivo de configuração.

    npx webpack --config webpack.config.js

Utilizar script de build com ```npm run build```

* CSS:

Instalar loaders ```npm install style-loader css-loader --save-dev```

*Escrever a rule no webpackconfig*

* Imagens:

Loader ```npm install file-loader --save-dev```

* SASS

```npm install sass-loader node-sass --save-dev```
*Utilizar com css-loader e style-loader*