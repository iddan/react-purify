import { PureComponent } from 'react';

export default function purify(WrappedComponent) {
  console.log(`Purify(${WrappedComponent.name})`);
  return class extends PureComponent {
    static displayName = `Purify(${WrappedComponent.name})`;
    render = WrappedComponent.bind(null, this.props);
  };
}