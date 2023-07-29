import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import pages from '../pages'
import { Button } from 'react-bootstrap'
import { BsGearFill } from 'react-icons/bs'
import setting from '../setting'

function Menu (props: {
  currentPage: string
  setCurrentPage: React.Dispatch<React.SetStateAction<string>>
}): JSX.Element {
  const {
    currentPage,
    setCurrentPage
  } = props
  const [menuOpen, setMenuOpen] = useState<boolean>(false)

  useEffect(() => {
    setCurrentPage(window.location.pathname)
  }, [])

  const pageChanged = (path: string): void => {
    setCurrentPage(path)
  }

  return (
    <>
      <div id="Menu" className={menuOpen ? 'on' : ''}>
        {pages.map((page, index: number) => {
          return (
            <Link
              key={index}
              href={page.path}
              className={`btn ${
                currentPage === page.path
                  ? 'btn-primary'
                  : ''
              }`}
              onClick={() => { pageChanged(page.path) }}
            >
              {page.emoji}&nbsp;{page.name}
            </Link>
          )
        })}
      </div>
      <div id="ToMenu">
        <Button
          id="Closer"
          variant="primary"
          className={`btn-close btn-close-white ${menuOpen ? 'on' : ''}`}
          onClick={() => {
            setMenuOpen(false)
          }}
        ></Button>
        <BsGearFill
          id="Opener"
          className={menuOpen ? 'off' : ''}
          onClick={() => {
            setMenuOpen(true)
          }}
        ></BsGearFill>
      </div>
    </>
  )
}

export default Menu
