import { useEffect } from "react";

export default function GoogleTranslate() {
  useEffect(() => {
    // Google calls this function once its script has loaded
    window.googleTranslateElementInit = () => {
      if (!window.google?.translate) return;
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,hi,bn,mr,ta,te,gu,pa,ur", // edit this list freely
          layout: 0, // 0 = simple dropdown
          autoDisplay: false,
        },
        "google_translate_element"
      );
    };

    if (!document.getElementById("gt-script")) {
      const s = document.createElement("script");
      s.id = "gt-script";
      s.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      s.async = true;
      document.body.appendChild(s);
    } else if (window.google?.translate) {
      window.googleTranslateElementInit();
    }
  }, []);

  return <div id="google_translate_element" className="gt-box" translate="no" />;
}