import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

const Page = ({ children }) => (
    <div className="bg-neon-gray text-neon-white">
        <Header />
        {children}
        <Footer />
    </div>
);

export default Page
