# reduce

```javascript
import {chain} from "./index"

chain([{x: 1},{x: 2},{x: 3},{x: 4, selected: true},{x: 5},{x: 6},{x: 7, selected: true}])
    .filter(e => e.selected)
    .keyBy("x")
    .unknownFunction("🙃")
    .values() // By default, nothing is executed until you call this. Lazy by default is a feature ¯\_(ツ)_/¯

// ->
{
    '4': { x: 4, selected: true },
    '7': { x: 7, selected: true }
}
```

# Benefits

It eats errors, that means, if you misspell a function, no error will be thrown, which will improve your self-confidence.

Also, it's a lazy chain. If you don't call `.values`, nothing is executed, wich mean, if you forget it, it will speed up your code.

[Download here](https://lodash.com/docs/4.17.4)