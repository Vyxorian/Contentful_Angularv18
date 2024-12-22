# Contentful_Angularv18

I'm making this project to show about how contentful works in Angular v18

## Commands used

- Create a Angular Project using v18 (we don't specify a global cli version and that's why we type "npx")
  `npx @angular/cli@18 new *<project_name>*`

- Execute our Angular Project (using "npx")
  `npx ng serve`


## Installed packages

npm i graphql-request
npm i graphql
npm i -D typescript
npm i -D @graphql-codegen/cli
npm i -D @graphql-codegen/typescript
npm i -D @graphql-codegen/typescript-operations
npm i -D @graphql-codegen/typescript-apollo-angular
npm i -D @graphql-codegen/introspection
npm i -D @graphql-codegen/typescript-graphql-request --legacy-peer-deps

# Generate first scripts

1. To generate the \_\_generated graphql file (squemas and sdk), do:

```
"scripts": {
        "generate": "graphql-codegen"
  }
```

2. Then you can remove the previous script config I said before, and add the next ones:

```
  "scripts": {
    "graphql-codegen:generate": "graphql-codegen -r dotenv/config --config codegen.ts",
    "graphql-codegen:watch": "graphql-codegen --watch -r dotenv/config --config codegen.ts"
    }
```
