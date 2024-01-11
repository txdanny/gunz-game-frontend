import { ArrowDown } from "@/components/svgItems";
import { NAV_LINKS } from "@/config";
import Link from "next/link";
import styles from "./navLinks.module.scss";
import { FC } from "react";

const NavLinks: FC = () => {
  return (
    <nav className="nav-links" data-testid="nav-links">
      <ul className={styles["links"]}>
        {NAV_LINKS.map((menu, index) => (
          <li key={`${index}-${menu.title}`} data-testid="nav-menu-item">
            <div className={styles["nav-item"]}>
              <div className={styles["title-box"]}>
                <div className={styles["title"]}>{menu.title}</div>
                <div className={styles["arrow-icon"]}>
                  <ArrowDown />
                </div>
              </div>
              {menu.submenu && (
                <div className={styles["list-box"]}>
                  <ul className={styles["list"]}>
                    {menu.submenu.map((subMenuItem, subIndex) => (
                      <li
                        key={`${index}-${subIndex}-${subMenuItem.title}`}
                        className={styles["list-item"]}
                        data-testid="submenu-item"
                      >
                        <Link
                          href={subMenuItem.url}
                          className={styles["list-title"]}
                        >
                          {subMenuItem.title}
                        </Link>
                        <div className={styles["item-bg"]} />
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavLinks;
