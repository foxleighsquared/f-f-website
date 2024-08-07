import React from 'react';
import classNames from 'classnames';
import { Loader } from 'components/feedback/loader';


/* Import Stylesheet */
import styles from './styles.module.scss';

export type Props = React.ComponentProps<'div'>;

const cx = classNames.bind(styles);

/**
 * The 'PageLoader' partial is used to display a full page loader when
 * loading an entire page.
 */
export const PageLoader: React.FC<Props> = ({ className }: Props) => (

    <div className={cx(styles['page-loader'], className)}>
      <Loader type="spinner" variant="primary" label="Loading..." />
    </div>

);

export default PageLoader;
