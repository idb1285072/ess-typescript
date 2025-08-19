# Environment Setup for TypeScript

## TypeScript Compiler

```bash
npm install typescript --save-dev
```

create `tsconfig.json` file and configure the compiler

```bash
npx tsc --init
```

complie `.ts` to `.js` and run `.js` file

```bash
npx tsc file.ts --watch
node file.js
```

## Run Direct TypeScript file

```bash
npm install --save-dev typescript tsx
npx tsx watch index.ts
```
