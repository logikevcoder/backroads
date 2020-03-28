import React, { useState } from "react"
import styles from "../css/navbar.module.css"
import { FaAlignRight } from "react-icons/fa"
import links from "../constants/links"
import socialIcons from "../constants/social-icons"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import logo from "../images/logo.svg"

const NavBar = () => {
  const [isOpen, setNav] = useState(false)

  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.navCenter}>
        <div className={styles.navHeader}>
          <img src={logo} alt="backroads logo" />
          <button type="button" onClick={toggleNav} className={styles.logoBtn}>
            <FaAlignRight className={styles.logoIcon} />
          </button>
          <ul
            className={
              isOpen
                ? `${styles.navLinks} ${styles.showNav}`
                : `${styles.navLinks}`
            }
          >
            {links.map((item, i) => {
              return (
                <li>
                  <AniLink fade to={item.path}>
                    {item.text}
                  </AniLink>
                </li>
              )
            })}
          </ul>
          <div className={styles.navSocialLinks}>
            {socialIcons.map((item, i) => {
              return (
                <a
                  key={i}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.icon}
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
