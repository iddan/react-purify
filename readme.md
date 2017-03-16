# stateless-purify

Pure Stateless Components

```bash
npm install --save react-purify
# yarn will do as well
```

### Usage

```JavaScript
import purify from 'stateless-purify';

const MyComponent = purify(function MyComponent() {
});
```

### Motivation
https://medium.com/modus-create-front-end-development/component-rendering-performance-in-react-df859b474adc#.ycv6d5n8z

### Prior Art
 - [React Pure Component](https://github.com/nadimtuhin/react-pure-component): Bad practice to not extend React's class PureComponent
