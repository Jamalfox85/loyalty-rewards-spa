# loyalty-rewards-spa

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

## Ngrok

Connecting to BigCommerce APIs require a public facing api. By utilizing ngrok we can expose this api publicly, allowing us to hit BC routes

```
    ngrok http --url=supposedly-simple-hamster.ngrok-free.app 5173 #Preferred
    or
    ngrok http 5173
```

exposts terminal at localhost:8080 - adjust to match host if needed

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Nightwatch](https://nightwatchjs.org/)

```sh
# When using CI, the project must be built first.
npm run build

# Runs the end-to-end tests
npm run test:e2e
# Runs the tests only on Chrome
npm run test:e2e -- --env chrome
# Runs the tests of a specific file
npm run test:e2e -- tests/e2e/example.ts
# Runs the tests in debug mode
npm run test:e2e -- --debug
```

    # loyalty-rewards-spa
