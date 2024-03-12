import LandingPage from "@/components/landing-page"
import { currentUser } from "@clerk/nextjs"
import { redirect } from "next/navigation"

export default async function Page() {
	let user = await currentUser()
	if (user) redirect("/dashboard/files")
	return <LandingPage />
}
