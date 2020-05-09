# aws_lambda_sample
aws lambda sample 


## create npm project

```
$ npm init 
```

すべてデフォルト設定

## npm package install

```
$ npm install --save-dev typescript @types/node  tslint 
 
```

## setup tsconfig

```
./node_modules/.bin/tsc --init
```

tsconfig.jsonを変更

```
     "sourceMap": true,                     /* Generates corresponding '.map' file. */
    // "outFile": "./",                       /* Concatenate and emit output to single file. */
     "outDir": "./build",                        /* Redirect output structure to the directory. */
 
  ,
  "include":
  [
          "src/**/*"
  ]

```


package.jsonにscritpを追加

```
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "./node_modules/.bin/tsc",
    "ts-node": "./node_modules/.bin/ts-node"
  },
```

## create source 

* src/index.ts
* src/sample.ts
を作成する。

## tslint の設定

tslint.jsonを作成

```
{
  "extends": ["tslint:recommended"]
}
```


## ビルド実行

```
$ npm run build
```

## tslint 実行

```
$ ./node_modules/.bin/tslint 'src/*.ts'
```
