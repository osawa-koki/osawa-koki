import React, { ReactNode } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Settings from '../common/Setting';

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
      <link rel="icon" type="image/png" href={`${Settings.IMG_ROOT_PATH}/Avatar.png`} />
    </Head>
    <header>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/portfolio">Portfolio</Link>
        <Link href="/resume">Resume</Link>
        <Link href="/skill">Skill</Link>
        <Link href="/dream">Dream</Link>
        <Link href="/faq">FAQ</Link>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdR3z3wfMAZqEGXOTkZgnz_dwCgbM5RoFcHKh4xDw8ioOIq5A/viewform" target='_black'>Contact</a>
      </nav>
    </header>
    <main>
      {children}
    </main>
    <footer>🥺 osawa koki 🥺</footer>
  </div>
)

export default Layout;
