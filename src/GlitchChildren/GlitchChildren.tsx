import { FC, CSSProperties, ReactNode } from "react";
import "./GlitchChildren.css"; // Assuming your CSS is here

interface GlitchChildrenProps {
  children: ReactNode;
  speed?: number;
  enableShadows?: boolean;
  enableOnHover?: boolean;
  className?: string;
}

// Extend CSSProperties to include custom CSS variables
interface CustomCSSProperties extends CSSProperties {
  "--after-duration"?: string;
  "--before-duration"?: string;
}

const GlitchChildren: FC<GlitchChildrenProps> = ({
  children,
  speed = 0.5,
  enableShadows = true,
  enableOnHover = false,
  className = "",
}) => {
  // Define inline CSS variables for animation durations
  const inlineStyles: CustomCSSProperties = {
    "--after-duration": `${speed * 3}s`,
    "--before-duration": `${speed * 2}s`,
  };

  // Determine CSS classes based on props
  const hoverClass = enableOnHover ? "enable-on-hover" : "";
  const shadowClass = enableShadows ? "" : "no-shadows";

  // Helper function to render a single glitch layer
  const renderGlitchLayer = (layerClass: string) => {
    return (
      <span className={`glitch-layer ${layerClass} ${shadowClass}`}>
        {children}
      </span>
    );
  };

  return (
    <span className={`glitch ${hoverClass} ${className}`} style={inlineStyles}>
      {/* Render the "before" glitch layer */}
      {renderGlitchLayer("glitch-before")}

      {/* Render the main content layer (always visible and acts as the base) */}
      {renderGlitchLayer("glitch-main")}

      {/* Render the "after" glitch layer */}
      {renderGlitchLayer("glitch-after")}
    </span>
  );
};

export default GlitchChildren;