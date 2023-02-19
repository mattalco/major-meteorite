import React from "react";
import { trackEvent } from "../../utils/analytics";

const SocialIcon = (props) => {
  const { href, children, ariaLabel, destination } = props;
  return (
    <a
      href={href}
      rel="noreferrer"
      target="_blank"
      onClick={() =>
        trackEvent({
          action: "CTA",
          label: `Go to ${destination} from social bar`,
        })
      }
      className="mx-2 p-1 text-gray-400 hover:text-white"
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
};

export default SocialIcon;
