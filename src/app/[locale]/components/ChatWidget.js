// components/VoiceflowChat.js
'use client';
import { useEffect } from 'react';
import Cookies from 'js-cookie';

const VoiceflowChat = ({ locale }) => {
  useEffect(() => {
    // Save current locale in cookie
    Cookies.set('voiceflow-locale', locale, { expires: 7 });

    // Function to initialize Voiceflow
    const initializeVoiceflow = () => {
      // First, remove any existing Voiceflow script
      const existingScript = document.getElementById('voiceflow-widget');
      if (existingScript) {
        if (window.voiceflow?.chat) {
          window.voiceflow.chat.destroy();
        }
        existingScript.remove();
      }

      // Create new script element
      const script = document.createElement('script');
      script.id = 'voiceflow-widget';
      script.src = "https://cdn.voiceflow.com/widget/bundle.mjs";
      script.type = "text/javascript";

      // Set up onload handler before appending script
      script.onload = () => {
        setTimeout(() => {
          // Ensure Voiceflow is loaded before initializing
          if (window.voiceflow?.chat) {
            window.voiceflow.chat.load({
              verify: { projectID: '66df01a26e8198f513e44dd0' },
              url: 'https://general-runtime.voiceflow.com/',
              versionID: 'production',
              language: locale
            });
          }
        }, 100); // Small delay to ensure everything is ready
      };

      // Append script to head
      document.head.appendChild(script);
    };

    // Initialize Voiceflow
    initializeVoiceflow();

    // Cleanup function
    return () => {
      const script = document.getElementById('voiceflow-widget');
      if (script) {
        if (window.voiceflow?.chat) {
          window.voiceflow.chat.destroy();
        }
        script.remove();
      }
    };
  }, [locale]);

  return null;
};

export default VoiceflowChat;