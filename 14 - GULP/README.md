# Gulp

## Instalação

* Instalar o [GULP](https://gulpjs.com/):
  
  `npm install gulp-cli --global`

* Instalar o GULP no projeto:
  
  `npm install gulp --save-dev` 
  > *verificar instalação `gulp --v`*

----------
## Criando tasks

Criar o arquivo "gulpfile.js" na pasta do projeto

* Criando e exportando uma task:
  
  ```javascript
  
  function defaultTask(callback) {
    callback();
  }
  exports.default = defaultTask;
  ```
* Para executar a task criada, digite `gulp`
  
  * Para executar mais de uma task:
  `gulp TASK1 TASK2...`
  * Para executar task específica:
  `gulp TASK10`

  > *para listar todas as tasks `gulp --tasks`.*


----------
## Comandos principais

* `task()`
  * Define tarefas no Gulp;
* `src()`
  * Arquivos que entram no fluxo de tarefas para serem tratados ou manipulados;
* `dest()`
  * Destino dos arquivos que já passaram pelo fluxo de tarefa;
* `watch()`
  * Assiste/Observa os arquivos e faz alguma tarefa quando esses são alterados;
* `pipe()`
  * Concatena tarefas no Gulp;
* `series()`
  * Executa uma série de tasks por ordem;
* `parallels()`
  * Executa tasks em paralelo;



----------