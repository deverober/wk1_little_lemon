import logo_light from '../images/logo_light@4x.png'
import '../css/Footer.css'

export default function Footer() {
    return (
        <footer>
            <img src={logo_light} alt="White company logo" />
            <div className='footer-box'>
                <p>Doormat</p>
                <p>Navigation</p>
                <br />
                <ul>
                    <li><a role="button" href='#home'>Home</a></li>
                    <li><a role="button" href='#about'>About</a></li>
                    <li><a role="button" href='#Menu'>Menu</a></li>
                    <li><a role="button" href='#Reservations'>Reservations</a></li>
                    <li><a role="button" href='#order-online'>Order Online</a></li>
                    <li><a role="button" href='#login'>Login</a></li>
                </ul>
            </div>
            <div className='footer-box'>
                <p>Contact</p>
                <br />
                <p>Address</p>
                <p>Phone Number</p>
                <p>Email</p>
            </div>
            <div className='footer-box'>
                <p>Social Media Links</p>
                <br />
                <p>Address</p>
                <p>Phone Number</p>
                <p>Email</p>
            </div>
        </footer>
    )
}