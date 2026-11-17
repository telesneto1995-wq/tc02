import type { Metadata } from 'next';
import { Barlow, Barlow_Condensed, Kaushan_Script } from 'next/font/google';
import './globals.css';

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-barlow',
});

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['600', '700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-barlow-condensed',
});

const kaushanScript = Kaushan_Script({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-kaushan',
});

export const metadata: Metadata = {
  title: 'Thiago Correia (TC) — Locação de Máquinas & Construtora',
  description:
    'Thiago Correia (TC) — Locação de máquinas pesadas, terraplanagem e construtora em Milagres - Bahia. Trabalho forte, resultado certo!',
  openGraph: {
    title: 'Thiago Correia (TC) — Locação de Máquinas & Construtora',
    description:
      'Thiago Correia (TC) — Locação de máquinas pesadas, terraplanagem e construtora em Milagres - Bahia. Trabalho forte, resultado certo!',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Thiago Correia (TC) — Locação de Máquinas & Construtora',
    description:
      'Thiago Correia (TC) — Locação de máquinas pesadas, terraplanagem e construtora em Milagres - Bahia. Trabalho forte, resultado certo!',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${barlow.variable} ${barlowCondensed.variable} ${kaushanScript.variable} scroll-smooth`}
    >
      <body
        suppressHydrationWarning
        className="bg-[#060606] text-white antialiased selection:bg-[#facc15] selection:text-black"
      >
        {children}
      </body>
    </html>
  );
}
