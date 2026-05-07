import { Outlet } from 'react-router'
import Header from '../../Header/Header'
import Footer from "../../Footer/Footer";
import useScrollToTop from "@/shared/hooks/useScrollToTop";
import styles from "./MainLayout.module.scss";
import { usePageTheme } from "@/shared/hooks/useBodyBg";

export function MainLayout() {
  useScrollToTop();
  usePageTheme();

  return (
    <div className={styles.wrapper}>
      <Header></Header>
      <main className={styles.main}>
        <div className={styles.main__container}>
          <Outlet></Outlet>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}