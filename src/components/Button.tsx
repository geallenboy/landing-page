import {cva} from 'class-variance-authority';
import { HTMLAttributes } from 'react';

const classes = cva('text-xs tracking-widest uppercase font-bold h-10 px-6 rounded-lg', {
  variants: {
    block: {
      true: 'w-full',
    },
   variant: {
    primary: 'border-2 border-transparent [background:linear-gradient(var(--color-gray-950),var(--color-gray-950))_padding-box,conic-gradient(from_45deg,var(--color-violet-400),var(--color-fuchsia-400),var(--color-amber-300),var(--color-teal-300),var(--color-violet-400))_border-box]',
    tertiary: 'bg-gray-800 text-gray-200',
    secondary: '',
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
