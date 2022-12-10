import { AnimationOnScroll } from 'react-animation-on-scroll';

export default function Collage(){
    return(
        <div className="div-collage">
            <h1 className="heading black left">Your lifestyle</h1>
            <AnimationOnScroll animateIn="animate__fadeIn">
                        <div className='imgw'>
                        </div>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn='animate__fadeIn'>
                <div className="img-flex3">
                    <div className='imgh'></div>
                    <div className='imgh'></div>
                    <div className='imgh'></div>
                </div>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn='animate__fadeIn'>   
                    <div className='imgw'>
                    </div>
            </AnimationOnScroll>
        </div>
    )
}