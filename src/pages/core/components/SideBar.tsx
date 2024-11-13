import BrandLogo from '../../../assets/images/Brand_logo.jpg'
import FooterImg from '../../../assets/images/sidebar-footer-img.jpg'
import Navigation from './Navigation'

function SideBar() {
    return (
        <aside className='flex flex-col w-56'>
            {/* brand logo */}
            <figure className='my-4'>
                <img src={BrandLogo} className='w-48 h-auto mx-auto' alt="Brand Logo" />
            </figure>
            <nav className='flex-grow'>
                <Navigation />
            </nav>
            <footer className='m-6'>
                <img src={FooterImg} className='rounded-lg' alt="footer Image" />
            </footer>
        </aside>
    )
}

export default SideBar