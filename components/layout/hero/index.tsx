import React from 'react';
import classNames from 'classnames';

/* Import Stylesheet */
import styles from './styles.module.scss';
import Image from 'next/image';
import BrandFolderImage from 'lib/types/brandfolder-image';

const cx = classNames.bind(styles);

/* Prop Types */
export interface Props extends React.ComponentProps<'div'> {
  /**
   * The image to display as the hero
   */
  image?: BrandFolderImage;
  /**
   * The Video url to display as the hero
   */
  video_url?: string;
  /**
   * Show the overlay?
   */
  overlay?: boolean;
}

/**
 * The 'Hero' component is used to display the site logo, navigation links, and social media links.
 */
export const Hero: React.FC<Props> = ({
  image,
  video_url,
  overlay,
  className,
  children
}: Props) => (
  <section
    data-testid="hero"
    className={cx(
      styles['hero'],
      {
        [styles['overlay']]: overlay
      },
      className
    )}
  >
    <div className={styles['content']}>{children}</div>
    {video_url ? (
      <video
        id="background-video"
        className={styles['video']}
        autoPlay
        loop
        muted
        playsInline
        width={'100%'}
        height={'100%'}
        poster={image?.url}
      >
        <source src={video_url} type="video/mp4" />
      </video>
    ) : (
      image?.url && (
        <Image
          src={image.url}
          alt={image.alt_text || 'Hero Image'}
          priority
          fill
          placeholder="empty"
          sizes="800px"
          className={styles['image']}
        />
      )
    )}
  </section>
);

export default Hero;
