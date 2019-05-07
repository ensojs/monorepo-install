# @enso/starters

- Ensure that all packages share the same version
- If a package is upgraded it needs to work across the board

## Contributing a new starter

1. Create a new branch at `starter/your-starter-package-name`
2. Checkout the branch `git checkout <starter/your-starter-package-name>`
3. Create the package

```bash
lerna create <your-starter-package-name>
```

4. ???
5. Add tests
6. Open a pull-request onto the master branch

```js
git pull-request -b master -o
```
