import { JetBrains_Mono, Share_Tech_Mono} from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

import PageTransition from "@/components/PageTransition";

const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800"], variable: '--font-jetbrainsMono' });
const share_tech_mono_regular =  Share_Tech_Mono({ subsets: ["latin"], weight: ["400", ], variable: '--font-share_tech_mono_regular' });

export const metadata = {
  title: "My Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetBrainsMono.variable}>
        <Header />
        
        <PageTransition>
        {children}
        </PageTransition>
        
        </body>
    </html>
  );
}
