import { SVGAttributes, forwardRef } from 'react';

export type Props = SVGAttributes<SVGElement>;

export const Arch = forwardRef<SVGSVGElement, Props>(
  ({ fill = 'currentColor', ...props }, ref) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox="0 0 21 22.9"
        fill={fill}
        {...props}
        ref={ref}
      >
        <path d="M21,10.8c-.1-2.7-1.3-5.4-3.2-7.5C15.8,1.2,13.2,0,10.5,0S5.2,1.2,3.2,3.3C1.3,5.4.1,8.1,0,10.8v12.1c.5,0,1,0,1.5,0v-11.3h8.3v11.3c.5,0,1,0,1.5,0v-11.3h3.3v11.3c.5,0,1,0,1.5,0v-11.3h3.5v11.3c.5,0,1,0,1.5,0v-12.1s0,0,0,0ZM9.8,10.1H1.6c.3-2.1,1.2-4.1,2.7-5.7,1.5-1.6,3.5-2.6,5.5-2.8v8.6ZM11.2,10.1V1.5c2,.2,3.9,1.2,5.5,2.8,1.5,1.6,2.5,3.6,2.7,5.7h-8.2Z" />
      </svg>
    );
  },
);

Arch.displayName = 'Arch';

export default Arch;