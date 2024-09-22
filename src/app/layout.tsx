import './globals.css'
import { Source_Sans_3 } from 'next/font/google'
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";

const sourceSans3 = Source_Sans_3({ subsets: ['latin'] })

export const metadata = {
    title: 'Themoviedb',
    description: 'Millions of movies, TV shows and people to discover. Explore now.',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={sourceSans3.className}>
                <div className="flex flex-col h-screen justify-between">
                    <Header/>
                    <main className="mb-auto mt-16">
                        {children}
                    </main>
                    <Footer/>
                </div>
            </body>
        </html>
    )
}
