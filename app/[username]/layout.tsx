import SelectedDateContextProvider from "@/contexts/SelectedDateContextProvider"

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (

          <section>
            <SelectedDateContextProvider>
            {children}
            </SelectedDateContextProvider>
         
          </section>
   

        

    )
  }