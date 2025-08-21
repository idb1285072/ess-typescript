# TypeScript Compiler (TSC)

The TypeScript Compiler (`tsc`) is the tool that converts TypeScript code (`.ts`) into JavaScript code (`.js`) that browsers or Node.js can actually run.

## How to Use?

```bash
npm install -g typescript
tsc index.ts
tsc index.ts --watch
tsc --init
```

```bash
npm install typescript --save-dev
npx tsc file.ts --watch
node file.js
npx tsc --init
```

## `tsconfig.json` (Configuration File)

```bash
tsc --init
```

## Run Direct TypeScript file

```bash
npm install --save-dev typescript tsx
npx tsx watch index.ts
```
