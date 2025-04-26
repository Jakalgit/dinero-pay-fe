import "bootstrap/dist/css/bootstrap.min.css";
import type { Metadata } from "next";
import {Dancing_Script, Geologica, Golos_Text, Gravitas_One} from "next/font/google";
import React from "react";
import {routing} from "@/i18n/routing";
import {notFound} from "next/navigation";
import {getMessages} from "next-intl/server";
import {NextIntlClientProvider} from "next-intl";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {fetchInfo} from "@/http/api/infoApi";
import "@/styles/globals.css";

const geologica = Geologica({
  variable: "--geologica-font",
  subsets: ["cyrillic", "latin"],
});

const golosText = Golos_Text({
  variable: "--golos-text-font",
  subsets: ["cyrillic", "latin"],
});

const gravitasOne = Gravitas_One({
  variable: "--gravitas-one",
  subsets: ["latin"],
  weight: "400",
});

const dancingScript = Dancing_Script({
  variable: "--dancing-script",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Dinero Payments - The right choice",
  description: "Your Secure Oasis for Global Transactions",
};

export default async function RootLayout({
  children, params
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {

  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  let info = null;
  try {
    info = await fetchInfo();
  } catch {}

  return (
    <html lang={locale}>
      <body
        className={`${geologica.variable} ${golosText.variable} ${gravitasOne.variable} ${dancingScript.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          <Header />
          {children}
          <Footer contacts={info?.contacts} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
