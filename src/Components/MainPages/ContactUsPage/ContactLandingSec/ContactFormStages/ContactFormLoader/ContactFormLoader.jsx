import React , {lazy} from "react";
import "./ContactFormLoader.css"

export const ContactFormLoader = () => {
  return (
    <div className="ContactFormLoader">
      <div class="typing-indicator">
    <div class="typing-circle"></div>
    <div class="typing-circle"></div>
    <div class="typing-circle"></div>
    <div class="typing-shadow"></div>
    <div class="typing-shadow"></div>
    <div class="typing-shadow"></div>
</div>
   </div>
  );
};

export default ContactFormLoader;
