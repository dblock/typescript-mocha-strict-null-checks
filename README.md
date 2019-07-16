Demonstrate `strictNullChecks` with mocha.

```
mkdir typescript-mocha
cd typescript-mocha
tsc --init
npm init
mkdir src
mkdir test
# create src/spline.ts and test/spline.spec.ts
npm install mocha @types/mocha --save-dev
npm install chai @types/chai --save-dev
npm install ts-node --save-dev
add `./node_modules/.bin/mocha -r ts-node/register test/**/*.spec.ts` to package.json's test command
npm run test
```
