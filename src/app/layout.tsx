import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import ConvexClientProvider from "./ConvexClientProvider"
import { Header } from "../components/header"
import { Toaster } from "@/components/ui/toaster"
import { Footer } from "../components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
	title: "Cloud Stash",
	description: "The easiest way to upload and share files with your company",
	icons: "/logo.png",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<ConvexClientProvider>
					<Toaster />
					<Header />
					{children}
					<Footer />
				</ConvexClientProvider>
			</body>
		</html>
	)
}
