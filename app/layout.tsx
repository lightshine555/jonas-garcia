import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  metadataBase: new URL("https://jonas-garcia.vercel.app"),
  title: "Jonas Garcia - Senior Frontend Engineer",
  description:
    "From Amazon to blockchain analytics and telehealth, I design and engineer user-centric web experiences using React, Next.js, TypeScript, and modern data layers.",
  generator: "Jonas Garcia",
  keywords: [
    "Jonas Garcia",
    "Senior Frontend Engineer",
    "Software Engineer",
    "JavaScript",
    "TypeScript",
    "Web Development",
    "WebGL",
    "React",
    "Next.js",
    "Frontend Development",
    "UI/UX Design",
    "Software Development",
    "Frontend Architecture",
    "3D Visualization",
    "Data Visualization",
    "Link-in-Bio",
    "Deep Linking",
    "AI Agents",
    "AI Chatbots",
    "AI Assistants",
    "AI Tools",
    "Cursor",
    "Rapid Prototyping",
    "Interactive UX",
    "Social Content Generation",
    "Virality",
    "Mapping",
    "Performance Optimization",
    "Cross-Browser Compatibility",
    "Responsive Design",
    "Agile Methodologies",
    "Version Control",
    "Git",
    "Testing and Debugging",
    "Research and Development",
    "Code Review",
    "Accessibility",
    "SEO Optimization",
    "Progressive Web Apps",
    "Single Page Applications",
    "Component Libraries",
    "State Management",
    "API Integration",
    "Micro Frontends",
    "Server-Side Rendering",
    "Static Site Generation",
    "Progressive Enhancement",
    "Web 3",
    "Blockchain",
  ],
  authors: [
    {
      name: "Jonas Garcia",
      url: "https://jonas-garcia.vercel.app/",
    },
  ],
  openGraph: {
    title: "Jonas Garcia - Senior Frontend Engineer",
    description:
      "Senior Frontend Professional with 7+ years of experience in both enterprise and startup environments. Primary language: JavaScript & TypeScript. Mostly worked in industries like Streaming, LMS, AI, Rental. Possesses a keen eye for detail and a design-oriented mindset, which has led to the successful delivery of successful products like FishAngler, IBM, and Zillow. Passionate about challenging the status quo and writing a unique story in my developer diary",
    // url: "https://jonas-garcia.vercel.app/",
    siteName: "Jonas Garcia",
    images: [
      {
        url: "./images/jonas.jpg",
        width: 1200,
        height: 630,
        alt: "Jonas Garcia - Senior Frontend Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/icon.png", type: "image/png" }],
    apple: [{ url: "/favicon.ico" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body className="min-h-screen bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
