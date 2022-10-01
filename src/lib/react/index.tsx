import type { ExioNode } from '../src/base';
import React from 'react';

export type ExioBinding<T = any> = (node: HTMLElement) => ExioNode<T>;

type PolymorphicRef<C extends React.ElementType> =
  React.ComponentPropsWithRef<C>['ref'];

type AsProp<C extends React.ElementType> = {
  as?: C;
};

type PropsToOmit<C extends React.ElementType, P> = keyof (AsProp<C> & P);

type PolymorphicComponentProp<
  C extends React.ElementType,
  Props = Record<string, any>
> = React.PropsWithChildren<Props & AsProp<C>> &
  Omit<React.ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>;

type PolymorphicComponentPropWithRef<
  C extends React.ElementType,
  Props = Record<string, any>
> = PolymorphicComponentProp<C, Props> & { ref?: PolymorphicRef<C> };

type ExioProps<C extends React.ElementType> = PolymorphicComponentPropWithRef<
  C,
  { use: ExioBinding | ExioBinding[]; sx: React.CSSProperties }
>;
type ExioComponent = <C extends React.ElementType = 'button'>(
  props: ExioProps<C>
) => React.ReactElement | null;

export const Exio: ExioComponent = React.forwardRef(
  <C extends React.ElementType = 'button'>(
    { as, use, children, ...rest }: ExioProps<C>,
    ref?: PolymorphicRef<C>
  ) => {
    const Component = as || 'button';
    const componentRef: PolymorphicRef<C> = React.useRef(null);
    useExio(use, ref || componentRef);
    return (
      <Component ref={ref || componentRef} {...rest}>
        {children}
      </Component>
    );
  }
);

export const useExio = <C extends React.ElementType>(
  use: ExioBinding | ExioBinding[],
  ref?: PolymorphicRef<C>
) => {
  const [uses, setUses] = React.useState<ExioNode[]>([]);
  React.useEffect(() => {
    if (Array.isArray(use)) {
      use.forEach((binding) => {
        setUses((u) => [...u, binding(ref.current)]);
      });
    } else {
      setUses([use(ref.current)]);
    }

    return () => {
      uses.forEach((u) => u.destroy());
    };
  }, [use, ref]);
};
