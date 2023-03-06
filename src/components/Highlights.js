import '../css/Highlights.css'
import greek_salad from '../images/greek salad.jpg'
import lemon_dessert from '../images/lemon dessert.jpg'
import Card from './Card'

export default function Highlights() {
    const dishes = [
        {
            name: 'Greek Salad',
            price: '12.99',
            description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
            image: greek_salad
        },
        {
            name: 'Bruschetta',
            price: '5.99',
            description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
            image: greek_salad
        },
        {
            name: 'Lemon Dessert',
            price: '5.00',
            description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
            image: lemon_dessert
        }
    ]
    return (
        <section className="highlights-section">
            <h2>This Week's Specials!</h2>
            <a href='order-online'>Order Online</a>
            <Card {...dishes[0]} />
            <Card {...dishes[1]} />
            <Card {...dishes[2]} />
        </section>
    )
}