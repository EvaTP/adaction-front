"use client";
import Image from "next/image";
import Link from "next/link";
import layoutStyles from "../styles/layout.module.css";

export default function ItemNavbar() {
  return (
    <div className="app_container">
      <header className={layoutStyles.header}>
        <div className={layoutStyles.header_content}>
          <p className={layoutStyles.header_title}>
            <Image
              src="/recycle.svg"
              alt="icon-edit"
              width={30}
              height={30}
              priority
            />
            Adaction
          </p>
        </div>
        <p className={layoutStyles.header_subtitle}>
          Agir pour un environnement plus propre
        </p>
      </header>

      <div>
        <nav className={layoutStyles.navbar}>
          <div className={layoutStyles.navbar_container}>
            <Link href="/dashboard" className={layoutStyles.navbar_link}>
              <Image
                src="/sprout.svg"
                alt="icon-leaf"
                width={25}
                height={25}
                priority
              />
              <span>Dashboard</span>
            </Link>
            <Link href="/#" className={layoutStyles.navbar_link}>
              <Image
                src="/package-plus.svg"
                alt="icon-package"
                width={25}
                height={25}
                priority
              />
              <span>Collectes</span>
            </Link>
            <Link href="/donate" className={layoutStyles.navbar_link}>
              <Image
                src="/heart.svg"
                alt="icon-heart"
                width={25}
                height={25}
                priority
              />
              <span>Dons</span>
            </Link>
            <Link href="/profil" className={layoutStyles.navbar_link}>
              <Image
                src="/user.svg"
                alt="icon-user"
                width={25}
                height={25}
                priority
              />
              <span>Profil</span>
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}
