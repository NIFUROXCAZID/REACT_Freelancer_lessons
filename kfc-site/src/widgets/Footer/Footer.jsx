import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { frontRoutes } from '@/shared/config/routes/frontRoutes';
import React from "react";
import styles from "./footer.module.scss";
import GoTop from "./GoTop";
import { useTranslation } from 'react-i18next'

import { ErrorBoundary } from "react-error-boundary"
import FooterErrorFallback from '@/shared/errorBoundries/FooterErrorFallback'

import logoWebp from "@/assets/img/logos/logo.webp";
import logoPng from "@/assets/img/logos/logo.png";
import facebookWebp from "@/assets/img/logos/facebook.webp";
import facebookPng from "@/assets/img/logos/facebook.png";
import instagramWebp from "@/assets/img/logos/instagram.webp";
import instagramPng from "@/assets/img/logos/instagram.png";
import youtubeWebp from "@/assets/img/logos/youtube.webp";
import youtubePng from "@/assets/img/logos/youtube.png";
import tiktokWebp from "@/assets/img/logos/tiktok.webp";
import tiktokPng from "@/assets/img/logos/tiktok.png";
import mastercardWebp from "@/assets/img/logos/mastercard.webp";
import mastercardPng from "@/assets/img/logos/mastercard.png";
import visaWebp from "@/assets/img/logos/visa.webp";
import visaPng from "@/assets/img/logos/visa.png";

export default function Footer() {
  const { t } = useTranslation()
  return (
    <>
      <ErrorBoundary FallbackComponent={FooterErrorFallback}>
        <footer className={styles.footer}>
          <div className={styles.footer__container}>
            <div className={styles.footer__content}>
              <div className={styles.footer__link_zone}>
                  <Link className={styles.footer__logo} to={frontRoutes.pages.HomePage.navigationPath}>
                  <picture>
                    <source srcSet={logoWebp} type="image/webp"/>
                    <img className={styles.footer__logo} src={logoPng} width="56" height="56" alt="Footer-logo" loading="lazy"/>
                  </picture>
                </Link>
                <div className={styles.footer__linkContainer}>
                  <ul className={styles.footer__links}>
                    <li>
                      <NavLink to={frontRoutes.pages.AboutPage.navigationPath} className={({ isActive }) => isActive ? "current-page--2" : ""} aria-label={t('aboutPageTitle')}>{t('aboutPageTitle')}</NavLink></li>
                    <li>
                      <NavLink to={frontRoutes.pages.ContactsPage.navigationPath} className={({ isActive }) => isActive ? "current-page--2" : ""} aria-label={t('contactsPageTitle')}>{t('contactsPageTitle')}</NavLink></li>
                    <li>
                      <NavLink to={frontRoutes.pages.ProductsPage.navigationPath} className={({ isActive }) => isActive ? "current-page--2" : ""} aria-label={t('productsPageTitle')}>{t('productsPageTitle')}</NavLink></li>
                  </ul>
                  <ul className={styles.footer__links}>
                    <li>
                      <NavLink to={frontRoutes.pages.NewsPage.navigationPath} className={({ isActive }) => isActive ? "current-page--2" : ""} aria-label={t('newsPageTitle')}>{t('newsPageTitle')}</NavLink></li>
                    <li>
                      <NavLink to={frontRoutes.pages.ReviewsPage.navigationPath} className={({ isActive }) => isActive ? "current-page--2" : ""} aria-label={t('reviewsPageTitle')}>{t('reviewsPageTitle')}</NavLink></li>
                    <li>
                      <NavLink to={frontRoutes.pages.RestaurantsPage.navigationPath} className={({ isActive }) => isActive ? "current-page--2" : ""} aria-label={t('restaurantsPageTitle')}>{t('restaurantsPageTitle')}</NavLink></li>
                  </ul>
                  <ul className={styles.footer__links}>
                    <li>
                      <NavLink to={frontRoutes.pages.PrivacyPage.navigationPath} className={({ isActive }) => isActive ? "current-page--2" : ""} aria-label={t('privacyPageTitle')}>{t('privacyPageTitle')}</NavLink></li>
                    <li>
                      <NavLink to={frontRoutes.pages.TermsPage.navigationPath} className={({ isActive }) => isActive ? "current-page--2" : ""} aria-label={t('TermsPageTitle')}>{t('TermsPageTitle')}</NavLink></li>
                    <li>
                      <NavLink to={frontRoutes.pages.DeliveryReturnPage.navigationPath} className={({ isActive }) => isActive ? "current-page--2" : ""} aria-label={t('DeliveryReturnPageTitle')}>{t('DeliveryReturnPageTitle')}</NavLink></li>
                  </ul>
                </div>
              </div>
              <div className={styles.footer__img_zone}>
                <div className={styles.footer__socialContainer}>
                  <a href="https://www.facebook.com/KFC.Ukraine" target="blank" rel="noopener noreferrer">
                    <picture>
                      <source srcSet={facebookWebp} type="image/webp"/>
                      <img className={styles.footer__logo} src={facebookPng} width="32" height="32" alt="Facebook" loading="lazy"/>
                    </picture>
                  </a>
                  <a href="https://www.instagram.com/kfc.ukraine?utm_medium=copy_link" target="blank" rel="noopener noreferrer">
                    <picture>
                      <source srcSet={instagramWebp} type="image/webp"/>
                      <img className={styles.footer__logo} src={instagramPng} width="32" height="32" alt="Facebook" loading="lazy"/>
                    </picture>
                  </a>
                  <a href="https://www.youtube.com/@kfc.ukraine/featured" target="blank" rel="noopener noreferrer">
                    <picture>
                      <source srcSet={youtubeWebp} type="image/webp"/>
                      <img className={styles.footer__logo} src={youtubePng} width="32" height="32" alt="Facebook" loading="lazy"/>
                    </picture>
                  </a>
                  <a href="https://www.tiktok.com/@kfc.ukraine?_t=8dBCukJbQko&_r=1" target="blank" rel="noopener noreferrer">
                    <picture>
                      <source srcSet={tiktokWebp} type="image/webp"/>
                      <img className={styles.footer__logo} src={tiktokPng} width="32" height="32" alt="Facebook" loading="lazy"/>
                    </picture>
                  </a>
                </div>
                <div className={styles.footer__paymentContainer}>
                  <picture>
                    <source srcSet={mastercardWebp} type="image/webp"/>
                    <img className={styles.footer__logo} src={mastercardPng} width="54" height="32" alt="Mastercard" loading="lazy"/>
                  </picture>
                  <picture>
                    <source srcSet={visaWebp} type="image/webp"/>
                    <img className={styles.footer__logo} src={visaPng} width="54" height="32" alt="Visa" loading="lazy"/>
                  </picture>
                </div>
              </div>
            </div>
            <p className={styles.footer__copyright}>© Copyright {new Date().getFullYear()} KFC Ukraine {t('rightsReserved')}</p>
          </div>
        </footer>
        <GoTop styles={styles} />
      </ErrorBoundary>
    </>
  )
}
