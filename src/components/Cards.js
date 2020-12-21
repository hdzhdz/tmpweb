import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import img1 from '../images/img-1.jpg';
import img2 from '../images/img-2.jpg';
import img3 from '../images/img-3.jpg';
import img4 from '../images/img-4.jpg';
import img5 from '../images/img-5.jpg';
import img6 from '../images/img-6.jpg';
import img7 from '../images/img-7.jpg';
import img8 from '../images/img-8.jpg';
import img9 from '../images/img-9.jpg';
import img10 from '../images/img-10.jpg';
import img11 from '../images/img-11.jpg';
import img12 from '../images/img-12.jpg';
import img13 from '../images/img-13.jpg';
import img14 from '../images/img-14.jpg';
import img15 from '../images/img-15.jpg';
import img16 from '../images/img-16.jpg';
import img17 from '../images/img-17.jpg';


function Cards() {
  /*function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  
  //const images = importAll(require.context('../images', false, '/\.jpg/'));*/
  return (
    <div className='cards'>
      <h1 style={{ color: '#fff' , fontFamily: "'Monotype Corsiva','Apple Chancery','ITC Zapf Chancery','URW Chancery L',cursive;"}}>~ Anh De Thuong ~</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              //src={images['img-1.jpg']}
              src={img5}
              text='Moi Do'
              label='Selfie ne'
              path='/em'
            />
            <CardItem
              src={img6}
              text='Du Bu'
              label='Sang Chanh'
              path='/em'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={img7}
              text='Du Bu v2'
              label='Bao Ve Moi Truong'
              path='/em'
            />
            <CardItem
              src={img8}
              text='Di Mall'
              label='Bao Ve Moi Truong v2'
              path='/em'
            />
            <CardItem
              src={img9}
              text='Hien Ngang'
              label='Khong So Ai Het'
              path='/em'
            />
          </ul>
          <CardItem
              src={img10}
              text='Ve Dep'
              label='Tai Nang'
              path='/em'
            />
        </div>
      </div>
    </div>
  );
}

export default Cards;
