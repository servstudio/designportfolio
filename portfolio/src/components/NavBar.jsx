import React, { useState, useEffect } from "react"
import { Dialog, Switch } from "@headlessui/react"
import {
  Bars3Icon,
  XMarkIcon,
  SunIcon,
  MoonIcon,
} from "@heroicons/react/24/outline"
import Link from "next/link"
import Image from "next/image"

const navigation = [
  { name: "Home", href: "/", tab: 0 },
  { name: "About", href: "/#about-me", tab: 1 },
  { name: "Projects", href: "/projects", tab: 2 },
  { name: "Resume", href: "/resume", tab: 3 },
]

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [theme, setTheme] = useState("light")

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"))
  }

  const [enabled, setEnabled] = useState(false)
  useEffect(() => {
    if (enabled) {
      document.body.classList.add("dark")
    } else {
      document.body.classList.remove("dark")
    }
  }, [enabled])

  return (
    <header className="dark:bg-none">
      <nav
        className="flex items-center justify-between p-6 mx-auto max-w-7xl lg:px-8"
        aria-label="Global"
      >
        <ul className="flex items-center flex-1">
          <button className="flex mr-auto">
            <Link
              href="/"
              className="-m-1.5 p-1.5 font-bold text-black hover:font-bold hover:text-orange-400 dark:text-white"
            >
              <span className="sr-only">Rich Ekelman's Logo</span>
              <Image
                className="w-12 h-12"
                src={
                  theme === "light"
                    ? "https://lngphvwiruyfwvdkclxc.supabase.co/storage/v1/object/public/images/images/logo.svg"
                    : "https://lngphvwiruyfwvdkclxc.supabase.co/storage/v1/object/public/images/images/logo-dark.svg"
                }
                alt="Rich's Logo Mark"
              />
            </Link>
          </button>

          <li className="hidden md:block">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="mr-4 font-semibold leading-6 text-black transition duration-300 ease-in-out dark:text-white hover:text-orange-400 hover:font-bold"
                tabIndex={item.tab} // Add tab index
              >
                {item.name}
              </a>
            ))}
          </li>

          <Switch
            onClick={toggleTheme}
            checked={enabled}
            onChange={setEnabled}
            className="group inline-flex h-6 w-12 items-center rounded-full transion transition-all duration-600 bg-gray-300 data-[checked]:bg-blue-600"
          >
            {theme === "light" ? "" : ""}
            {theme === "light" ? (
              <span
                aria-hidden="true"
                className="pointer-events-none inline-block size-6 translate-x-0 rounded-full ring-0 shadow-lg transition duration-500 ease-in-out group-data-[checked]:translate-x-6 px-1"
              >
                <SunIcon
                  className="w-6 h-6 mr-auto fill-gray-500 stroke-gray-500"
                  aria-hidden="true"
                />
              </span>
            ) : (
              <span className="pointer-events-none inline-block size-6 translate-x-0 rounded-full ring-0 shadow-lg transition duration-500 ease-in-out group-data-[checked]:translate-x-6 ml-auto p-1">
                <MoonIcon
                  className="w-6 h-6 ml-auto fill-gray-900 stroke-gray-900"
                  aria-hidden="true"
                />
              </span>
            )}
          </Switch>

          <button
            type="button"
            className="md:hidden -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 ml-0"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open main menu"
            tabIndex={0}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon
              className="w-6 h-6 text-black dark:text-white"
              aria-hidden="true"
            />
          </button>
        </ul>
      </nav>

      {/* mobile menu start */}
      <Dialog
        as="div"
        className=":hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-3/4 px-8 py-6 overflow-y-auto bg-black dark:bg-gray-200 dark:text-black sm:max-w-sm sm:ring-1 sm:ring-white">
          <div className="flex items-right">
            <button
              type="button"
              className="-m-</div>2.5 rounded-md p-2.5 text-white dark:text-black hover:text-orange-400 ml-auto"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
              tabIndex={0} // Add tab index
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="w-6 h-6" aria-hidden="true" />
            </button>
          </div>
          <div className="flow-root mt-">
            <ul className="-my-6 divide-y divide-orange-500/25">
              <li className="py-6 space-y-2 text-center">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 rounded-lg hover:text-orange-400 hover:text-decoration-underline focus:outline-none focus:ring-2 focus:ring-orange-400"
                    tabIndex={0} // Add tab index
                  >
                    {item.name}
                  </a>
                ))}
              </li>
            </ul>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
