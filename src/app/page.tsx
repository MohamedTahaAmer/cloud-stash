import { currentUser } from "@clerk/nextjs"
import { redirect } from "next/navigation"

export default async function LandingPage() {
	let user = await currentUser()
	if (user) redirect("/dashboard/files")
	return <LandingPage />
}
