import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export function usePageTheme() {
  const { pathname } = useLocation();
  useEffect(() => {
    if (pathname === "/products") {
      document.body.classList.remove("common-page");
      document.body.classList.add("products-page");
    } else {
      document.body.classList.remove("products-page");
      document.body.classList.add("common-page");
    }
  }, [pathname]);
}