import Link from "next/link"
import { Button } from "./ui/button"
import Nav from "./Nav"
import MobileNav from "./MobileNav"

const Header = () => {
  return (
    <header className=" py-8 xl:py-12 text-white ">
        <div className="container mxauto flex justify-between items-center">
            {/*Logo*/}
            <Link href="/">
            <h1 className=" text-4xl font-semibold">
                R<span className=" text-accent">Baskey</span>
            </h1>
            </Link>

            {/* desk nav*/}
            <div className="hidden xl:flex items-center gap-8">
            <Nav />
            <Link href="/contact">
            <Button>Hire Me</Button>
            </Link>
            </div>

            {/* desk nav*/}
            <div className=" xl:hidden">
                <MobileNav />
            </div>
            
        </div>
    </header>
  )
}

export default Header