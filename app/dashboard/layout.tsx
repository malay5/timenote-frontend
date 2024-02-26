import SideBar from "@/components/SideBar"
import { Separator } from "@/components/ui/separator"


export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <section className="flex flex-row relative">




            <div className="sticky top-0 left-0 bottom-0">
                <SideBar />
            </div>
            <Separator orientation="vertical" className="h-screen" />
            <div className="flex-1 overflow-scroll overflow-x-hidden h-[100vh]">
                {children}
            </div>





        </section>


    )
}