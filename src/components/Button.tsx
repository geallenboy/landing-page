import {cva} from 'class-variance-authority';
import { HTMLAttributes } from 'react';

const classes = cva('text-xs tracking-widest uppercase font-bold h-10 px-6 rounded-lg', {
  variants: {
    block: {
      true: 'w-full',
    },
   variant: {
    primary: 'border-gradient',
    tertiary: 'bg-gray-800 text-gray-200',
    secondary: 'bg-gray-100 text-gray-950',
   }
  },
  defaultVariants: {
    variant: 'primary',
    block: false,
  },
});

export type ButtonVariant = {
    variant?: 'primary' | 'tertiary' | 'secondary';
    block?: boolean;
} & HTMLAttributes<HTMLButtonElement>;

export const Button = (props:ButtonVariant) => {
    const {className="",children, ...rest} = props;
  return <button className={classes({...rest,className})}>{children}</button>;
};
