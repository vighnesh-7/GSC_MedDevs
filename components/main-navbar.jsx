'use client'

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

const MainNav = () => {
    const params = useParams()
    const pathname = usePathname();

    const routes = [
        {
            href : `/`,
            label:'Home',
            active:pathname===`/`
        },
        {
            href : `/profile/settings`,
            label:'Your Profile',
            active:pathname===`/profile/settings`
        },
        {
            href : `/schedular`,
            label:'Scheduler',
            active:pathname===`/schedular`
        },
        {
            href : `/videocall`,
            label:'Video Call',
            active:pathname===`/video call`
        },
        {
            href : `/diet`,
            label:'Your Diet',
            active:pathname===`/diet`
        },
        {
            href : `/medicine`,
            label:'Your Medicines',
            active:pathname===`/medicine`
        },
        {
            href : `/aboutUs`,
            label:'About Us',
            active:pathname===`/aboutUs`
        },
        {
            href : `/help`,
            label:'Help',
            active:pathname===`/help`
        },
        
    ]
    
    return (
        <nav
        className={("flex items-center space-x-4 lg:space-x-6 mx-6")}
        >
            {
                routes.map((route)=>(
                    <Link
                    key={route.href}
                    href={route.href}
                    className={("text-sm font-medium transition-colors hover:text-blue-700",
                    route.active ? 'text-black dark:text-white decoration-2 underline-offset-4 underline decoration-green-600 font-bold' : 'text-white'
                    )}
                    >
                        {route.label}
                    </Link>
                ))
            }
        </nav>
    )
}

export default MainNav;