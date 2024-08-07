import type { Metadata } from "next";
import { Lato, Ledger } from "next/font/google";

import classNames from "classnames";
import config from 'app-config';

export const lato = Lato({
  display: "swap",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: '--fonr-lato'
});

export const ledger = Ledger({
  display: "swap",
  subsets: ["latin"],
  weight: "400",
  variable: "--font-ledger"
});

import 'styles/index.scss';

export const metadata: Metadata = {
  title: config.appName,
  description: config.appDescription,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={classNames(lato.variable, ledger.variable)}>{children}</body>
    </html>
  );
}
