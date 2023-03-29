import React, { useEffect } from "react";
import ReactDOM from "react-dom";

interface PortalProps {
  children: React.ReactNode;
}

const Portal: React.FC<PortalProps> = ({ children }) => {
  const portalRoot = document.getElementById("portal-root")!;
  const el = document.createElement("div");

  useEffect(() => {
    portalRoot.appendChild(el);
    return () => {
      portalRoot.removeChild(el);
    };
  }, [el, portalRoot]);

  return ReactDOM.createPortal(children, el);
};

export default Portal;
