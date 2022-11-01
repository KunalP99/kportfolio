import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  // Scrolls to the top of the page every time route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
