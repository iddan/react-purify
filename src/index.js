import { PureComponent } from 'react';

export default function purify(WrappedComponent) {
  return class extends PureComponent {
    static displayName = `Purify(${WrappedComponent.name})`;
    render = WrappedComponent.bind(null, this.props);
  };
}