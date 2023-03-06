import '../css/Card.css'
import bicycle from '../images/bicycle.png'

export default function Card({ name, price, description, image }) {
    return (
        <div className='card-container'>
            <div className='card-image-container'>
                <img className='card-img' src={image} alt="a greek salad" />
            </div>
            <div className='card-title-container'>
                <h3 className=''>{name}</h3>
                <h3 className='price'>${price}</h3>
            </div>
            <p className='card-description-text'>
                {description}
            </p>
            <div className='card-button-container'>
                <a href='order-a-delivery'>Order a delivery</a>
                <img className="card-bicycle" src={bicycle} alt="a bicycle" />
            </div>
        </div>
    )
}