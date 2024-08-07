import { SVGAttributes, forwardRef } from 'react';

export type Props = SVGAttributes<SVGElement>;

export const Twitter = forwardRef<SVGSVGElement, Props>(
  ({ fill = 'currentColor', ...props }, ref) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox="0 0 23 19"
        fill={fill}
        {...props}
        ref={ref}
      >
        <path d="M22.8,2.9c-.8.4-1.7.6-2.6.7.9-.6,1.6-1.4,2-2.5-.9.5-1.8.9-2.9,1.1-.8-.9-2-1.4-3.3-1.4-2.5,0-4.5,2-4.5,4.5s0,.7.1,1c-3.8-.2-7.1-2-9.3-4.7-.4.7-.6,1.4-.6,2.3,0,1.6.8,2.9,2,3.8-.7,0-1.4-.2-2-.6h0c0,2.2,1.6,4.1,3.6,4.5-.4.1-.8.2-1.2.2s-.6,0-.9,0c.6,1.8,2.2,3.1,4.2,3.1-1.5,1.2-3.5,1.9-5.6,1.9s-.7,0-1.1,0c2,1.3,4.4,2,6.9,2,8.3,0,12.8-6.9,12.8-12.8s0-.4,0-.6c.9-.6,1.6-1.4,2.3-2.3Z" />
      </svg>
    );
  },
);

Twitter.displayName = 'Twitter';

export default Twitter;