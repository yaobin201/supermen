import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
export default function ScrollToTop() {
  const { pathname } = useLocation();
  const { biz } = useParams();
  useEffect(() => {
    const bizDom = document.querySelector(`#${biz}`)
    if (bizDom) {
      bizDom.scrollIntoView({ behavior: 'smooth', block: 'end' })
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);
  return null;
}