import SocialIcon from "../../social/SocialIcon"
import { IconGithub, IconLinkedin } from "../../../constants/icons"
import styles from "./NavLinks.module.css"
import Link from "next/link"

const links = [
  {
    link: "#hero",
    name: "Inicio",
  },
  {
    link: "#aboutMe",
    name: "Sobre mí",
  },
  {
    link: "#portfolio",
    name: "Portafolio",
  },
  {
    link: "#contact",
    name: "Contacto",
  },
]

const NavLinks = ({ isOpen, onClick }) => {
  const open = isOpen ? "open" : "close"

  return (
    <div className={`${styles.wrapperLinks} ${styles[open]}`}>
      <ul className={styles.links}>
        {links.map((item, index) => (
          <li
            key={`${item.link}-${index}`}
            className="text-2xl"
            onClick={onClick}
          >
            <Link href={item.link} scroll={true}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
      <div className={styles.navbarSocial}>
        <SocialIcon Icon={IconGithub} />
        <SocialIcon Icon={IconLinkedin} />
      </div>
    </div>
  )
}

export default NavLinks
