import Nav from './Nav'
import header_light from '../images/header_light@4x.png'
import '../css/Header.css'

export default function Header() {
    return (
        <header>
            <img src={header_light} alt="little lemon logo" />
            <Nav />
        </header>
    )
}