/**
 * This file contains the configuration for the front-end application.
 *
 * NOTE: You may need to restart the application for changes to take effect.
 */

export const appConfig = {
  /**
   * The name of the application (in sentence case)
   * @required
   */
  appName: 'Foxleigh and Foxleigh',
  /**
   * The description of the application (used in the <meta> tag).
   * @required
   */
  appDescription:
    'Foxleigh & Foxleigh Digital Consultancy: Delivering innovative digital solutions with over 35 years of combined experience in the public and private sectors. JOSCAR and Cyber Essentials certified for excellence and security.',
  /**
   * The links to display in the application's masthead.
   * If no links are provided, the navigation bar will not be displayed.
   * @optional
   */
  navLinks: [
    {
      label: 'Home',
      href: '/'
    },
    {
      label: 'Services',
      href: '/services'
    },
    {
      label: 'Company',
      href: '/company'
    },
    {
      label: 'Blog',
      href: '/blog'
    }
  ],

  /**
   * The contact details for the application.
   */
  contactDetails: {
    tel: '0800 830 840',
    email: 'hello@foxleighmail.com',
    address: {
      street: '56 Meadrow, Godalming',
      city: 'Surrey',
      postcode: 'GU7 3HT'
    }
  },
  /**
   * The current VAT rate presented as a decimal.
   */
  currentVatRate: 0.2,
};

export type AppConfig = {
  appName: string;
  appDescription: string;
  appLinks?: Array<{ label: string; href: string }>;
};

export default appConfig;
