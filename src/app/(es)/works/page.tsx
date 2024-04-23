export const dynamic = 'force-dynamic'
import WorkSkeletons from "@/app/_skeletons/work.skeletons"
import { Suspense } from "react"
import WorkContainer from "./WorkContainer"

const Works = async () => {
    return (
        <main id="works">         
            <Suspense fallback={<WorkSkeletons />}>
                <WorkContainer/>
            </Suspense>
        </main>
    )
}

export default Works
