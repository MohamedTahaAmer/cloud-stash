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
					<div className="flex min-h-screen flex-col justify-between">
						<div className="flex-1 flex flex-col">
							<Toaster />
							<Header />
							{children}
						</div>
						<Footer />
					</div>
				</ConvexClientProvider>
			</body>
		</html>
	)
}
