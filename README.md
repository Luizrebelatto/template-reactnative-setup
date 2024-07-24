## 📄 React Native Template Setup Typescript

> React Native template for a quick start with TypeScript, React Navigation, styled-components, async-storage, dotenv, fastlane, prettier, eslint, jest, react native testing library.

## ⭐ Features
- Navigation no next screen
- Authentication Flow user

## 📚 dependencies
- [Typescript](https://www.typescriptlang.org)
- [DotEnv](https://www.npmjs.com/package/dotenv)
- [Styled-Components](https://www.npmjs.com/package/styled-components)
- [Async-Storage](https://react-native-async-storage.github.io/async-storage/)
- [React Navigation V6](https://reactnavigation.org/docs/getting-started/)
- [Eslint](https://eslint.org)
- [Fastlane](https://fastlane.tools)
- [Jest](https://jest.io)
- [React Native Testing Library](https://callstack.github.io/react-native-testing-library/)
- [Prettier](https://prettier.io)

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

## ⌨️ Script to run

- Run your app
```
    npx expo start --clear
```

- Run eslint
```
    yarn run lint
    yarn run lint: fix
```

- Run Prettier
```
    yarn run format_prettier
```

- Run to deploy your app with fastlane
```
    yarn run deploy:android
    yarn run deploy:ios
    yarn run deploy:android_ios
```

## 🤝 Contributing

Contributions are very welcome. Please check out the [contributing document](https://github.com/Luizrebelatto/template-reactnative-setup/blob/master/CONTRIBUTING.MD).

## 📖 License

This project is [MIT](https://github.com/Luizrebelatto/template-reactnative-setup/blob/master/LICENSE) licensed.
