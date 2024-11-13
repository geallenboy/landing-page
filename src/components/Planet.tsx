import { cva } from "class-variance-authority";

const classes = cva('bg-gradient-to-b to-gray-950 rounded-full', {
    variants: {
        size: {
            sm: 'size-4',
            md: 'size-6',
            lg: 'size-8',
        },
        color: {
            violet: 'from-violet-400 ',
            teal: 'from-teal-400 ',
            fuchsia: 'from-fuchsia-400 ',
        }
    },
    defaultVariants: {
        size: 'lg',
        color: 'violet',
    }
})
export default function Planet(props: {color: 'violet' | 'teal' | 'fuchsia', size: 'sm' | 'md' | 'lg', className?: string}) {
    return  <div className='absolute left-1/2 top-0'>
                <div className={classes({color: props.color, size: props.size, className: props.className})}></div>
            </div>
}