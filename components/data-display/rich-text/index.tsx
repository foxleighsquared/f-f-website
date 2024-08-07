import React from 'react';
import classNames from 'classnames';
import { PortableText, PortableTextBlock } from 'next-sanity';

import styles from './styles.module.scss';

const cx = classNames.bind(styles);

export interface Props extends React.ComponentProps<'section'> {
  /*
   * Make centrally aligned
   * @default false
   */
  centered?: boolean;
  /**
   * The number of columns to display the content in
   */
  columns?: 1 | 2 | 3;
  /**
   * Use the Portable Text component to render the content
   */
  richText?: PortableTextBlock[];
}

/**
 * The Rich Text component displays a variety of HTML elements in a single
 * component all styled to match the design system.
 */
export const RichText: React.FC<Props> = ({
  className,
  centered,
  columns = 1,
  richText,
  children,
  ...props
}: Props) => {
  if (!!richText) {
    return (
      <section
        className={cx(
          styles['rich-text'],
          {
            [styles['centered']]: centered
          },
          styles[`columns-${columns}`],
          className
        )}
        {...props}
      >
        <PortableText value={richText} />
      </section>
    );
  }
  return (
    <section
      className={cx(
        styles['rich-text'],
        {
          [styles['centered']]: centered
        },
        styles[`columns-${columns}`],
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
};

export default RichText;
