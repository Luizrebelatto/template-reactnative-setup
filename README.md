## 📄 React Native Template Setup Typescript

> React Native template for a quick start with TypeScript, React Navigation, styled-components, async-storage, dotenv.

## ⭐ Features
- Navigation no next screen


## 📚 dependencies
- [Typescript](https://www.typescriptlang.org)
- [DotEnv](https://www.npmjs.com/package/dotenv)
- [Styled-Components](https://www.npmjs.com/package/styled-components)
- [Async-Storage](https://react-native-async-storage.github.io/async-storage/)
- [React Navigation V6](https://reactnavigation.org/docs/getting-started/)

## ▶️ How to Execute:

```sh
npx create-expo-app NameOfApp --template template-reactnative-setup
```

## ⚙️ How to Config Environments:
- create a file .env, inside these files creates its variables:

```.env
BASE_URL=
```

## 🎨 Config your styles:
- create your types variables inside file styled.d.ts

```
declare module "styled-components/native" {
    export interface DefaultTheme {
        colors: {
            background: string
        }
    }
}
```

- create your variables and set your value
```
export default {
    colors: {
        background: "#FEFEFE"
    }
}
```

## 🤝 Contributing

Contributions are very welcome. Please check out the [contributing document](https://github.com/Luizrebelatto/template-reactnative-setup/blob/master/CONTRIBUTING.MD).

## 📖 License

This project is [MIT](https://github.com/Luizrebelatto/template-reactnative-setup/blob/master/LICENSE) licensed.
