import { useSelector } from 'react-redux'
import LanguageSwitcher from '@/widgets/Header/LanguageSwitcher'
import ThemeSwitcher from "@/widgets/Header/ThemeSwitcher";
import { MainMenu } from './MainMenu'
import { UserInfo } from './UserInfo'
import { frontRoutes } from '@/shared/config/routes/frontRoutes';
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react'
import { useLocation } from "react-router-dom";
import { selectAuthUser } from '@/features/auth/api/authSlice'
import { useTranslation } from 'react-i18next'

import { ErrorBoundary } from "react-error-boundary"
import HeaderErrorFallback from '@/shared/errorBoundries/HeaderErrorFallback'

import styles from "./header.module.scss";

import logoWebp from "@/assets/img/logos/logo.webp";
import logoPng from "@/assets/img/logos/logo.png";
import arrowWhite from "@/assets/img/icons/arrow-white.svg"
import arrowBlack from "@/assets/img/icons/arrow-black.svg"

export default function Header() {
  const { t } = useTranslation()
  // ВІДКРИТТЯ aside
  const [asideIsOpen, setAsideIsOpen] = useState(false)
  const toggleMenu = () => setAsideIsOpen(prev => !prev)

  const location = useLocation();
  const closeMenu = () => {
    setAsideIsOpen(false)
  }
  useEffect(() => {
    closeMenu();
  }, [location.pathname]);
  // ВІДКРИТТЯ drop down menu
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false)
  const toggleDropdownMenu = (e) => {
  e.preventDefault() 
  setDropdownIsOpen(prev => !prev)
  }
  // ЗАБОРОНА СКРОЛУ КОЛИ АСАЙД ВІДКРИТ
  useEffect(() => {
    if (asideIsOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [asideIsOpen])

  const user = useSelector(selectAuthUser)
  const canAccess = (routeKey) => {
  const route = frontRoutes.pages[routeKey]

  if (!route.meta.requireAuth) return true
  if (!user) return false
  if (!route.meta.roles) return true

  return route.meta.roles.includes(user.role)
  }

  return (
    <>
      <ErrorBoundary FallbackComponent={HeaderErrorFallback}>
        <header className={styles.header}>
          <div className={styles.header__container}>
            <div className={styles.header__top}>
              <Link to={frontRoutes.pages.HomePage.navigationPath}>
                <picture>
                  <source srcSet={logoWebp} type="image/webp"/>
                  <img src={logoPng} width="80" height="80" alt="KFC logo"/>
                </picture>
              </Link>
              <button className={`${styles.header__burgerMenu} ${styles.burgerMenu}`} aria-label="open mobile menu">
                <div className={styles.hamburgerIcon} onClick={toggleMenu}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </button>
            </div>
            <ul className={styles.headerNavList}>
              <li className={styles.headerDropMenu}><NavLink to={frontRoutes.pages.AboutPage.navigationPath} className={({ isActive }) => `${styles.headerDropMenu__ref} ${isActive ? 'current-page--1' : ''}`} aria-label={t('aboutPageTitle')}><span className='icon_home'></span> {t('aboutPageTitle')} <img className={styles.headerDropMenu__imgArrow} src={arrowWhite} alt="arrow" width="25" height="25"/></NavLink>
                  <div className={styles.headerSubMenu_1}>
                      <ul className={styles.headerSubMenu_1__list}>
                          <li><NavLink to={frontRoutes.pages.NewsPage.navigationPath} className={({ isActive }) => isActive ? "current-page--1" : ""} aria-label={t('newsPageTitle')}><span className='icon_calendar'></span> {t('newsPageTitle')}</NavLink>
                          </li>
                          <li><NavLink to={frontRoutes.pages.ContactsPage.navigationPath} className={({ isActive }) => isActive ? "current-page--1" : ""} aria-label={t('contactsPageTitle')}><span className='icon_phone'></span> {t('contactsPageTitle')}</NavLink>
                          </li>
                      </ul>
                  </div>
              </li>
              <li className={styles.headerDropMenu}><NavLink to={frontRoutes.pages.RestaurantsPage.navigationPath} className={({ isActive }) => `${styles.headerDropMenu__ref} ${isActive ? 'current-page--1' : ''}`} aria-label={t('restaurantsPageTitle')}><span className='icon_compass'></span> {t('restaurantsPageTitle')} <img className={styles.headerDropMenu__imgArrow} src={arrowWhite} alt="arrow" width="25" height="25"/></NavLink>
                  <div className={styles.headerSubMenu_1}>
                      <ul className={styles.headerSubMenu_1__list}>
                          <li><NavLink to={frontRoutes.pages.ReviewsPage.navigationPath} className={({ isActive }) => isActive ? "current-page--1" : ""} aria-label={t('reviewsPageTitle')}><span className='icon_reviews'></span> {t('reviewsPageTitle')}</NavLink>
                          </li>
                      </ul>
                  </div>
              </li>
              <li><NavLink to={frontRoutes.pages.ProductsPage.navigationPath} className={({ isActive }) => isActive ? "current-page--1" : ""} aria-label={t('productsPageTitle')}><span className='icon_spoon_knife'></span> {t('productsPageTitle')}</NavLink>
              </li>
              {canAccess('CartPage') && (
              <li><NavLink to={frontRoutes.pages.CartPage.navigationPath} className={({ isActive }) => isActive ? "current-page--1" : ""}aria-label={t('cartPageTitle')}><span className='icon_cart'></span> {t('cartPageTitle')}</NavLink>
              </li>
              )}
              {canAccess('UsersPage') && (
              <li><NavLink to={frontRoutes.pages.UsersPage.navigationPath} className={({ isActive }) => isActive ? "current-page--1" : ""} aria-label={t('usersPageTitle')}><span className='icon_user_tie'></span> {t('usersPageTitle')}</NavLink>
              </li>
              )}
            </ul>
            <div className={styles.header__regWrapper}>
              <UserInfo styles={styles}/>
              <LanguageSwitcher styles={styles} />
              <ThemeSwitcher styles={styles} />
                <button className={`${styles.header__burgerMenu} ${styles.burgerMenu} ${styles['header__burgerMenu--two']}`} aria-label={t('openMobileMenu')}>
                  <div className={styles.hamburgerIcon} onClick={toggleMenu}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </button>
            </div>
          </div>
        </header >
        <aside className={`${styles.aside} ${asideIsOpen ? styles.menuOpen : ''}`}>
          <div className={styles.aside__prewrapper} onClick={closeMenu}></div >
          <div className={styles.aside__wrapper} onClick={(e) => e.stopPropagation()}>
              <button className={styles.close} aria-label={t('closeMobileMenu')} onClick={closeMenu}>
                <div className={styles.delSticks}></div>
              </button>
              <div className={styles.aside__logo}>
                <Link to={frontRoutes.pages.HomePage.navigationPath}>
                  <picture>
                  <source srcSet={logoWebp} type="image/webp"/>
                  <img src={logoPng} width="80" height="80" alt="KFC logo"/>
                  </picture>
                </Link>
              </div>
              <div className={styles.aside__buttonsWrapper}>
                <UserInfo styles={styles} variant="aside" />
                <div className={styles.aside__subButtonsWrapper}>
                  <LanguageSwitcher styles={styles} />
                  <ThemeSwitcher styles={styles} />
                </div>
              </div>
              <ul className={styles.aside__navList}>
                <MainMenu/>
              </ul>
              <ul className={styles.aside__navList} style={{ marginTop: '0.5rem' }}>
              <li className={`${styles.dropDownAsideMenu} ${dropdownIsOpen ? styles.dropDownAsideMenuShow : ''}`}>
                <div className={styles.dropDownAsideMenu__openRef}>
                  <NavLink className={({ isActive }) => `${styles.dropDownAsideMenu__ref} ${isActive ? 'current-page--1' : ''}`} to={frontRoutes.pages.DeliveryReturnPage.navigationPath} aria-label={t('DeliveryReturnPageTitle')}>
                    <div className="icon_compass"></div> {t('DeliveryReturnPageTitle')}</NavLink>
                    <img className={styles.dropDownAsideMenu__btn} onClick={toggleDropdownMenu} src={arrowBlack} alt="arrow" width="25" height="25"/>
                </div>
                  <div className={styles.dropDownAsideMenu__submenu}>
                    <ul className={styles.dropDownAsideMenu__submenuList}>
                      <li><NavLink to={frontRoutes.pages.PrivacyPage.navigationPath} className={({ isActive }) => isActive ? "current-page--1" : ""} aria-label={t('privacyPageTitle')}><div className={styles.liImgBg}><div class="icon_reviews"></div></div> {t('privacyPageTitle')}</NavLink>
                      </li>
                      <li><NavLink to={frontRoutes.pages.TermsPage.navigationPath} className={({ isActive }) => isActive ? "current-page--1" : ""} aria-label={t('TermsPageTitle')}><div className={styles.liImgBg}><div class="icon_reviews"></div></div> {t('TermsPageTitle')}</NavLink>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </aside>
      </ErrorBoundary>
    </>
  );
}
