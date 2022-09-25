import type { ExioNode } from '../src/base';
import React from 'react';

export type ExioBinding<T = any> = (node: HTMLElement) => ExioNode<T>;

type ExioProps<T extends React.ElementType> = {
  as: T;
  use: ExioBinding<T> | ExioBinding<T>[];
} & React.ComponentPropsWithRef<T>;

const Exio = React.forwardRef(function Exio<C extends React.ElementType>(
  props: ExioProps<C>,
  ref: React.ForwardedRef<C>
) {
  return <h1></h1>;
});

const i = <Exio />;
