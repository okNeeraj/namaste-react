# Export/Import

There are two type of export and import -

1. Default export/import
2. Named export/import

## Default export/import

```javascript
// ./path/component/AppComponent.js

const AppComponent = () = {
	return true;
}
// Export
export default Appcomponent;

// Import
import AppComponent from './path/AppComponent';
```

## Named export/import

```javascript
// ./path/component/editor.js

export const MergeComponent = () = {
	return true;
}
export const BuildComponent = () = {
	return true;
}

import { AppComponent, BuildComponent } from './path/component/editor'
```
