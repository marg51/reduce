# reduce

```javascript
import {chain} from "./index"

chain([{x: 1},{x: 2},{x: 3},{x: 4, selected: true},{x: 5},{x: 6},{x: 7, selected: true}])
    .filter(e => e.selected)
    .keyBy("x")
    .values()

```