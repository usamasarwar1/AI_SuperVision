import { Saira } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Layout from "./components/Layout";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import Head from "next/head";
import Script from "next/script";

const inter = Saira({ subsets: ["latin"] });

export const metadata = {
  title: "AI Supervision - Empowering Business Efficiency with AI Automation",
  description:
    "AI Supervision leverages AI automation and AI-powered agents to transform business efficiency, driving innovation and reducing operational costs.",
};

export default async function RootLayout({ children, params: { locale } }) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        
        <Script
          key={locale} 
          id="voiceflow-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(d, t) {
                var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
                v.onload = function() {
                  window.voiceflow.chat.load({
                    verify: { projectID: '66df01a26e8198f513e44dd0' },
                    url: 'https://general-runtime.voiceflow.com/',
                    versionID: 'production'
                  });
                }
                v.src = "https://cdn.voiceflow.com/widget/bundle.mjs"; 
                v.type = "text/javascript"; 
                s.parentNode.insertBefore(v, s);
              })(document, 'script');
            `,
          }}
        />
      </head>
      <Head>
        <meta
          name="description"
          content="AI Supervision leverages AI automation and AI-powered agents to enhance business efficiency. Discover how AI can streamline operations and reduce costs."
        />
        <meta
          name="keywords"
          content="AI automation, AI-powered agents, business efficiency, AI technology, operational efficiency"
        />
        <meta
          property="og:title"
          content="AI Supervision - Revolutionizing Business Efficiency with AI"
        />
        <meta
          property="og:description"
          content="Explore how AI-powered agents and automation tools improve business efficiency and reduce costs."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body
        suppressHydrationWarning={true}
        className={`${inter.className} bg-[#050505] min-h-[100vh]`}
      >
        <NextIntlClientProvider messages={messages}>
          <Providers>
            <Layout>{children}</Layout>
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
