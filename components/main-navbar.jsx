"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

const MainNav = () => {
  const params = useParams();
  const pathname = usePathname();

  const routes = [
    {
      href: `/`,
      label: "Home",
      active: pathname === `/`,
    },
    {
      href: `/profile/settings`,
      label: "Your Profile",
      active: pathname === `/profile/settings`,
    },
    {
      href: `/schedular`,
      label: "Scheduler",
      active: pathname === `/schedular`,
    },
    {
      href: `/videocall`,
      label: "Video Call",
      active: pathname === `/videocall`,
    },
    {
      href: `/diet`,
      label: "Diet",
      active: pathname === `/diet`,
    },
    {
      href: `/medicine`,
      label: "Medicines",
      active: pathname === `/medicine`,
    },
    {
      href: `/aboutUs`,
      label: "About Us",
      active: pathname === `/aboutUs`,
    },
    {
      href: `/faqs`,
      label: "FAQs",
      active: pathname === `/faqs`,
    },
  ];

  return (
    <nav className="flex flex-col max-sm:bg-red-400 items-start space-y-2 md:space-y-0 md:flex-row md:space-x-3 lg:space-x-5 mx-6">
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={`
            text-medium transition-colors font-semibold p-1
            ${
              route.active
                ? "text-black dark:text-white decoration-4 underline-offset-4 underline decoration-green-500 font-bold"
                : "text-white"
            }
          `}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  );
};

export default MainNav;
