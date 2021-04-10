import React from 'react'
import NavLink from '../NavLink'

export default function Menu() {

    let menuOpen = false

    function menuToggle() {
        console.log('click!')
        menuOpen = true
    }

    return (
        <>
            <nav className="flex-1 w-full justify-end items-center hidden md:flex">
                <NavLink href="/landing">Home</NavLink>
                <NavLink href="/landing">Leistungen</NavLink>
                <NavLink href="/landing">Über uns</NavLink>
                <NavLink href="/landing">Kontakt</NavLink>
            </nav>

            <nav className="flex-1 w-full justify-end items-center flex md:hidden">
                <button onClick={() => menuToggle()}>
                    <svg className="h-6 w-6 md:h-12 md:w-12 text-neon-blue" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </nav>

            { menuOpen === true ? (<div className="fixed top-0 left-0">
                <div className="fixed top-0 left-0 w-screen h-screen bg-neon-gray opacity-70">
                </div>

                <aside className="fixed top-0 right-0 bg-neon-white h-screen w-11/12 md:w-2/4 opacity-1 text-neon-gray flex flex-col text-center py-6">
                    <button type="button" class="absolute -ml-9 md:-ml-16">
                        <span class="sr-only">Dismiss</span>
                        <svg class="h-6 w-6 md:h-12 md:w-12 text-neon-blue" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <NavLink href="/landing">Home</NavLink>
                    <NavLink href="/landing">Leistungen</NavLink>
                    <NavLink href="/landing">Über uns</NavLink>
                    <NavLink href="/landing">Kontakt</NavLink>
                </aside>
            </div>) : ('')
            }
        </>
    )
}
