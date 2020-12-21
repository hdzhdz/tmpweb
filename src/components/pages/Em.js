import '../../App.css';
import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import img1 from '../../images/img-1.jpg';
import img2 from '../../images/img-2.jpg';
import img3 from '../../images/img-3.jpg';
import img4 from '../../images/img-4.jpg';
import img5 from '../../images/img-5.jpg';
import img6 from '../../images/img-6.jpg';
import img7 from '../../images/img-7.jpg';
import img8 from '../../images/img-8.jpg';
import img9 from '../../images/img-9.jpg';
import img10 from '../../images/img-10.jpg';
import img11 from '../../images/img-11.jpg';
import img12 from '../../images/img-12.jpg';
import img13 from '../../images/img-13.jpg';
import img14 from '../../images/img-14.jpg';
import img15 from '../../images/img-15.jpg';
import img16 from '../../images/img-16.jpg';
import img17 from '../../images/img-17.jpg';

const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17

];

export default class LightboxExample extends Component {
    constructor(props) {
        super(props);

        this.state = {
            photoIndex: 0,
            isOpen: false,
        };
    }

    render() {
        const { photoIndex, isOpen } = this.state;

        return (
            <div>
                <text>
                    An angle was born on August 28th, 1999.Tran Thuy Bao Tran is a very beautiful and cute person.<br/>
                    She is very skinny and eat very little. She is very smart and super cute.
                </text>
                <br/><br/>
                <button type="button" onClick={() => this.setState({ isOpen: true })}>
                    Open Pics of my bebi
                </button>
                {isOpen && (
                    <Lightbox
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                        onCloseRequest={() => this.setState({ isOpen: false })}
                        onMovePrevRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + images.length - 1) % images.length,
                            })
                        }
                        onMoveNextRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + 1) % images.length,
                            })
                        }
                    />
                )}
            </div>
        );
    }
}