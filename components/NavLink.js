import Link from 'next/link'

const NavLink = ({ href, children }) => (
    <Link href={href}>
        <a className="p-2 px-4 m-2 mx-4 border-neon-blue border-b-2 text-xl">{children}</a>
    </Link>
);

export default NavLink