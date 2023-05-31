import { React, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import './Home.scss'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Logo from '../../assets/image/logo.png'


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';
// import { Scrollbar } from "swiper";

function Home() {

  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div className='home'>
      <div className="home__container">
        <div className="home__container__inner">
          <div className="swipper">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              onAutoplayTimeLeft={onAutoplayTimeLeft}
              className="mySwiper"
            >
              <SwiperSlide><h2><strong>119 000</strong> сум</h2></SwiperSlide>
              <SwiperSlide><h2><strong>119 000</strong> сум</h2></SwiperSlide>
              <SwiperSlide><h2><strong>119 000</strong> сум</h2></SwiperSlide>
              <SwiperSlide><h2><strong>119 000</strong> сум</h2></SwiperSlide>
              <div className="autoplay-progress" slot="container-end">
                <svg viewBox="0 0 48 48" ref={progressCircle}>
                  <circle cx="24" cy="24" r="20"></circle>
                </svg>
                <span ref={progressContent}></span>
              </div>
            </Swiper>
          </div>
          <div className="search">
            <input id='inp_search' type="search" />
            <label htmlFor="inp_search"><i class="bi bi-search"></i></label>
          </div>
          
          <div className="list">
            <h2 className='assort'>Assortiment</h2>
            <hr />
            <ul>
              <li>

                <Swiper
                  spaceBetween={30}
                  centeredSlides={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true}
                  modules={[Autoplay, Pagination, Navigation]}
                  className="mySwiper"
                ><SwiperSlide><img src="https://cdn.shopify.com/s/files/1/0413/6385/products/A-FURST-DYNAMITE-COCKTAIL-RING-LONDON-BLUE-TOPAZ-DIAMONDS-BLACKENED-GOLD-A1301NUL11_2_800x.jpg?v=1606520441" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://cdn.shopify.com/s/files/1/0413/6385/products/A-FURST-DYNAMITE-COCKTAIL-RING-LONDON-BLUE-TOPAZ-DIAMONDS-BLACKENED-GOLD-A1301NUL11_800x.jpg?v=1606520468" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://cdn.shopify.com/s/files/1/0413/6385/products/a-furst-france-eternity-band-ring-peridot-18k-yellow-gold-A2153GO-6_800x.jpg?v=1680888997" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://cdn.shopify.com/s/files/1/0413/6385/products/a-furst-france-eternity-band-ring-peridot-18k-yellow-gold-A2153GO-6_3_800x.jpg?v=1680904841" alt="" /></SwiperSlide>
                </Swiper>
                <div className="about_product">
                  <h6>in stocks : 23 </h6>
                  <h2>A & Furst</h2>
                  <p>1 Cushion-cut London Blue Topaz 13x10 mm weight 7.06 carats.</p>
                  <h3>Price : $653. 39</h3>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home