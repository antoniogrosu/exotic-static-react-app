import aMenu from '/Menu.svg'
import xMenu from '/Xmenu.svg'
import Instagram from '/Insta.svg'
import Facebook from '/Facebook.svg'

export default function Menu(props){
    return(
        <div className='div-menu'>
                <div className='div-top'>
                    <img src={xMenu} onClick={props.clicked}></img>
                    <h2 className="logo">Exotic Ice</h2> 
                </div>
                <div className='container'>
                    <div className="div-links">
                            <a><h2 className='menu-links'>Our shop</h2></a>
                            <a><h2 className='menu-links'>Featured Products</h2></a>
                            <a><h2 className='menu-links'>FAQ</h2></a>
                            <div className='line'></div>
                            <h2 className='menu-links'>Follow us on our socials</h2>
                            <img src={Instagram} className="socials"></img>
                            <img src={Facebook} className="socials"></img>
                            <div className='line'></div>
                    </div>
                    <div className='form'>
                                <h2 className='menu-links'>Looking  for new teammates</h2>
                            <form>
                                <input type="name" placeholder='Full Name' className='form-input'></input>
                                <input type="email" placeholder='Your email address' className='form-input'></input>
                                <button className='form-button'>Confirm</button>
                            </form>
                    </div>
                </div>
            </div>
    )
}