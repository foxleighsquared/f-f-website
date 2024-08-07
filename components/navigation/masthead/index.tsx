'use client';

import { useState } from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';
import Icon from 'components/flourishes/icon';
import Tooltip from 'components/feedback/tooltip';
import Link from 'next/link';

interface LinkObject {
  label: string;
  href: string;
  children?: LinkObject[];
}

interface Props extends React.ComponentProps<'header'> {
  navigation: LinkObject[];
  tel: string;
  alignment?: 'center' | 'full-width';
}

const cx = classNames.bind(styles);

export const Masthead: React.FC<Props> = ({
  navigation,
  tel,
  alignment = 'full-width',
  className,
  ...props
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activePath, setActivePath] = useState<number[]>([]);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
    setActivePath([]);
  };

  const handleMenuItemClick = (path: number[]) => {
    setActivePath(path);
  };

  const renderMenu = (items: LinkObject[], currentPath: number[] = []) => (
    <ul
      className={classNames(styles[`level-${currentPath.length + 1}`], {
        [styles['open']]:
          currentPath.length === 0 ||
          activePath.join('.').startsWith(currentPath.join('.'))
      })}
    >
      {currentPath.length > 0 && (
        <li className={cx(styles['menu-item-wrapper'], styles['back-arrow'])}>
          <button onClick={() => handleMenuItemClick(currentPath.slice(0, -1))}>
            <Icon use="chevron" />
            Back
          </button>
        </li>
      )}
      {items.map((item, index) => (
        <li key={index} className={styles['menu-item-wrapper']}>
          <span className={styles['menu-item']}>
            <a className={styles['item-link']} href={item.href}>
              {item.label}
            </a>
            {item.children && item.children.length > 0 && (
              <span
                className={styles['chevron']}
                onClick={(e) => {
                  e.preventDefault();
                  handleMenuItemClick([...currentPath, index]);
                }}
              >
                <Icon use="chevron" />
              </span>
            )}
          </span>

          {item.children &&
            item.children.length > 0 &&
            renderMenu(item.children, [...currentPath, index])}
        </li>
      ))}
    </ul>
  );

  return (
    <header
      {...props}
      className={cx(
        styles['masthead'],
        styles[alignment],
        menuOpen ? styles['menu-open'] : styles['menu-closed'],
        className
      )}
    >
      <div className={styles['inner']}>
        <Tooltip content="Go to homepage" placement="right">
          <Link href="/" className={styles['logo-link']}>
            <Icon use="applogo" className={styles['logo']} />
          </Link>
        </Tooltip>
        <button
          className={styles['burger-menu-icon']}
          onClick={handleMenuToggle}
          aria-expanded={menuOpen}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav className={styles['navigation']}>{renderMenu(navigation)}</nav>
        <div className={styles['cta']}>
          <a href={`tel:${tel}`} className={styles['cta-link']}>
            <Icon use="phone" />
            {tel}
          </a>
        </div>
      </div>
    </header>
  );
};

export default Masthead;
