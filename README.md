# xave-ui-kit

> Xave custom UI library

[![NPM](https://img.shields.io/npm/v/xave-ui-kit.svg)](https://www.npmjs.com/package/xave-ui-kit) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save xave-ui-kit
```

## Usage

### Geofence

```tsx
import * as React from 'react'

import { GeofenceCountry, useGeofence }  from 'xave-ui-kit'

const Example = () => {
  const { loading, rejected } = useGeofence(GeofenceCountry.SINGAPORE);
  if (loading) {
    return (
      <div>
        Loaded
      </div>
    );
  } else if (!loading && rejected) {
    return (
       <div>
        Blocked Content
      </div>
    );
  }
}
```

## License

MIT © [xave-finance](https://github.com/xave-finance)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
