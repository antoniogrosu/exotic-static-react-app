import { useState } from 'react'
import productImage from '/productPic.png'
import Cart from '/Vector.svg'
import { AnimationOnScroll } from 'react-animation-on-scroll'

export default function Product(){

    const [description , setDescription] = useState(false)
    function toggle(){
        setDescription(prev => !prev)
    }
    return(
        <div className="product-div">
            <h1 className="heading black">Featured Product</h1>
            <div className="product-flex">
                <div className="product-img">
                    <img src={productImage}></img>
                </div>
                <div className="product-details">
                    <AnimationOnScroll animateIn='animate__fadeIn'>
                    <h1 className="heading black smaller">Product Name</h1>
                    <p className="text black">Product description. Occupies full width. A few words</p>
                    <div className="cta-div">
                        <h3 className="price">€ 100</h3>
                        <div className="shop-now">
                            <img src={Cart}></img>
                            <p className="text white">Shop now</p>
                        </div>
                    </div>
                    <div className="product-description" onClick={toggle}>
                        <p className='text learn'>Click to learn more</p>
                        { description && <ul>
                            <li className='text black lileft'>the facts about the product</li>
                            <li className='text black lileft'>the facts about the product</li>
                            <li className='text black lileft'>the facts about the product</li>
                        </ul> }
                    </div>
                    </AnimationOnScroll>
                </div>
            </div>
        </div>
    )
}