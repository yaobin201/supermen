import WebsiteBuilder from "./Websit/WebsiteBuilder";
import AppBuilder from "./AppBuilder";
import AppletBuilder from "./AppletBuilder";
import CustomSoftware from "./CustomSoftware";
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const sections = [
  '/introduction/website',
  '/introduction/applet',
  '/introduction/app',
  '/introduction/custom'
]

let hasWheelDone = false;

export default function IntroductionPage() {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    const goNextPage = (event) => {
      const index = sections.indexOf(location.pathname);
      const direction = Math.sign(event.deltaY - 0 )
      const nextPageIndex = index + direction;
      if(nextPageIndex > -1 && nextPageIndex < sections.length) {
        navigate(sections[nextPageIndex])
        setTimeout(() => {
          hasWheelDone = false;
        }, 1000)
        event.preventDefault();
        return false
      } else {
        hasWheelDone = false;
      }

    }
    const handleWheel = (event) => {
      if(hasWheelDone) {
        event.preventDefault();
        return false
      };
      hasWheelDone = true;
      goNextPage(event);
    };
    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [location]);

  return <div className="introduction-layout">
    <section id="website" className="normal-section">
      <WebsiteBuilder />
    </section>
    <section id="applet" className="normal-section">
      <AppletBuilder />
    </section>
    <section id="app" className="normal-section">
      <AppBuilder />
    </section>
    <section id="custom" className="normal-section">
      <CustomSoftware />
    </section>
  </div>
}