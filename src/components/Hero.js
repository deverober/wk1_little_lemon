import '../css/Hero.css'
import restaurantFood from '../images/restauranfood.jpg'

export default function Hero() {
    return (
        <section className="hero-section">
            <div className='hero-section-container'>
                <div className='text-container'>
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <a href='reserve-a-table'>Reserve a Table</a>
                </div>
                <div className='hero-image-container'>
                    <img className='hero-image' src={restaurantFood} alt="someone holding food" />
                </div>
            </div>
        </section>
    )
}