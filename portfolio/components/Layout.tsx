import React, { ReactNode } from 'react';
import Link from 'next/link';
import Head from 'next/head';

type Props = {
  children?: ReactNode,
  title?: string,
}

const default_title = "osawa's portfolio";

const Layout = ({ children, title = default_title }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/portfolio">Portfolio</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
    <main>
      {children}
    </main>
    <footer>🥺 osawa koki 🥺</footer>
  </div>
)

export default Layout;
