import AppBar from "@/components/AppBar"
import EditSideBar from "@/components/EditSideBar"
import { Separator } from "@/components/ui/separator"




export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <section className="flex flex-col flex-1 relative">
            <AppBar />
           

            <div className="flex flex-1 m-2 lg:m-8 lg:gap-8 gap-2">
                <EditSideBar />

                {children}
            </div>

        </section>


    )
}