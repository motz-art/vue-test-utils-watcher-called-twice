# vue-test-utils-bug

Repo to reproduce issue with watch `handler` called twice. See: `.\tests\unit\example.spec.js`

To show the issue run
```
npm run test:unit
```

after execution console output looks shows:

```
undefined
setting props
props are set.
good
undefined  
```

while expected:

```
undefined
setting props
props are set.
good
```
