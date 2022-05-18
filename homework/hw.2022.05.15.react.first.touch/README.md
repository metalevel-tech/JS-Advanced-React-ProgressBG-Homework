## References

* Learn React: https://reactjs.org/

* Check: https://ibaslogic.com/react-tutorial-for-beginners/

* Create-react-app: https://create-react-app.dev/docs/deployment/

## Using React with NPM (react.demo.proj.manual/) 


```bash
mkdir -p react.demo.proj/{src,dist}
cd react.demo.proj/
npm init -y
npm i react react-dom webpack webpack-cli --save-dev
```

```bash
# Then create it by hand...
touch index.html webpack.config.js src/index.js 
```

```bash
npx webpack --mode production
```

```bash
npm run build
```

## Create-react-app CLI (react.demo.proj.create-react-app/) 

* When learning react is convenient to bootstrap your application with create-react-app
* It’s an opinionated yet zero-configuration starter kit for React introduced by Facebook in 2016.
* `create-react-app` allows you to abstract from the the tooling and configuration, and to focus to the application implementation

```bash
sudo npm i create-react-app -g
```

```bash
npx create-react-app react.demo.proj.create-react-app
cd react.demo.proj.create-react-app/
```

<s>

```bash
mkdir -p react.demo.proj.create-react-app/{src,dist}
cd react.demo.proj.create-react-app/
npm init -y
npm i react react-dom webpack webpack-cli --save-dev
```

</s>

