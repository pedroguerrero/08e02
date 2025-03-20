import { forwardRef } from 'react';

export default function inputHoc(Component) {
  const ForwardedComponent = forwardRef((props, ref) => {
    return <Component {...props} ref={ref} />;
  });

  ForwardedComponent.displayName = `inputHoc(${
    Component.displayName || Component.name || 'Component'
  })`;

  return ForwardedComponent;
}
