import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "../../styles/LandingPage/FindProperty.scss";
import sliderImg1 from '../../../images/sliderImg1.jpeg';
import sliderImg2 from '../../../images/sliderImg2.jpeg';
import howItWorks2 from '../../../images/howItWorks2.jpeg';
import sliderImg4 from '../../../images/sliderImg4.jpeg';


class FindProperty extends Component {
    state = {
        activeSlide: 0,
        totalSlides: 4 // Total number of slides
    };

    slideInterval = null;

    componentDidMount() {
        this.startSlideShow();
    }

    componentWillUnmount() {
        clearInterval(this.slideInterval);
    }

    startSlideShow = () => {
        this.slideInterval = setInterval(this.nextSlide, 5000); // Change slide every 2 seconds
    };

    nextSlide = () => {
        this.setState(prevState => ({
            activeSlide: (prevState.activeSlide + 1) % this.state.totalSlides
        }));
    };

    renderDots = () => {
        return Array.from({ length: this.state.totalSlides }).map((_, index) => (
            <span 
                key={index} 
                className={`dot ${index === this.state.activeSlide ? 'active' : ''}`}
                onClick={() => this.setState({ activeSlide: index })}
            />
        ));
    };

    render() {
        const { activeSlide } = this.state;
        const images = [sliderImg1, sliderImg2, howItWorks2, sliderImg4];

        return (
            <div className="find-property-carousel-landing">
                <div className="carousel">
                    {images.map((img, index) => (
                        <div 
                            key={index} 
                            className={`slide ${index === activeSlide ? 'active' : ''}`}
                        >
                            <img className="landingpage-image" src={img} alt={`Slide ${index + 1}`} />
                        </div>
                    ))}
                    <div className="dots-container">{this.renderDots()}</div>
                </div>
                <section className='find-ppt-header-sec'>
                    <div className="bold-font">
                        Find Your Best, 
                        <br/>
                        Smart Real Estate Investment
                    </div>
                    <div className="norm-font">
                        Find a home or space from our search bar. 
                        <br/>
                        Enter a specific location, property type
                        <br/>
                        and your price range. We will take care!
                    </div>

                    <Link to={{pathname: 'home/'}}>
                        <div className="find-box">
                            <div id="find-property-box"/>
                            <div id="find-property-content">Find your property</div>
                        </div>
                    </Link>
                </section>
            </div>
        );
    }
}

export default FindProperty;