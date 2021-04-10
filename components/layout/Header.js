import Menu from './Menu'
import NavLink from '../NavLink'

const Header = () => (
    <header className="w-full">
        <div className="container mx-auto max-w-6xl px-4 pt-4 flex">
            <div className="flex-0">

                <div className="content-center order-1 flex items-center">
                    <img className="p-2 object-cover max-h-12 md:max-h-20" src="/img/logo/cropped-neonb-blue-white1536x756.png" />
                </div>

            </div>

            <Menu />

        </div>
    </header>

);

export default Header