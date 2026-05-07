import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import arrowWhite from "@/assets/img/icons/arrow-white.svg";

import bannerWebp_1 from "@/assets/img/banners/slider-banner-1.webp";
import bannerPng_1 from "@/assets/img/banners/slider-banner-1.png";
import bannerWebp_2 from "@/assets/img/banners/slider-banner-2.webp";
import bannerPng_2 from "@/assets/img/banners/slider-banner-2.png";
import bannerWebp_3 from "@/assets/img/banners/slider-banner-3.webp";
import bannerPng_3 from "@/assets/img/banners/slider-banner-3.png";
import bannerWebp_4 from "@/assets/img/banners/slider-banner-4.webp";
import bannerPng_4 from "@/assets/img/banners/slider-banner-4.png";

export default function KfcSlider() {
  return (<>
    <section className="swSlider">
      <div className="swSlider__wrapper">
        <Swiper className="swSlider__swiper" modules={[Navigation, Pagination]}
          loop navigation={{nextEl: '.swSlider__button-next', prevEl: '.swSlider__button-prev',}}
          pagination={{
            el: '.swSlider__swiper-pagination',
            clickable: true,
          }}>
          <SwiperSlide className="swSlider__swiper-slide">
            <div className="swSlider__slide-wrapper">
              <div className="swSlider__img-wrap">
                <div className="swSlider__gradient"></div>
                <picture>
                  <source srcSet={bannerWebp_1} type="image/webp" />
                  <img src={bannerPng_1} alt="Main slider slide 1" width="1920" height="640" />
                </picture>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swSlider__swiper-slide">
            <div className="swSlider__slide-wrapper">
              <div className="swSlider__img-wrap">
                <div className="swSlider__gradient"></div>
                <picture>
                  <source srcSet={bannerWebp_2} type="image/webp" />
                  <img src={bannerPng_2} alt="Main slider slide 2" width="1920" height="640" />
                </picture>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swSlider__swiper-slide">
            <div className="swSlider__slide-wrapper">
              <div className="swSlider__img-wrap">
                <div className="swSlider__gradient"></div>
                <picture>
                  <source srcSet={bannerWebp_3} type="image/webp" />
                  <img src={bannerPng_3} alt="Main slider slide 3" width="1920" height="640" />
                </picture>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swSlider__swiper-slide">
            <div className="swSlider__slide-wrapper">
              <div className="swSlider__img-wrap">
                <div className="swSlider__gradient"></div>
                <picture>
                  <source srcSet={bannerWebp_4} type="image/webp" />
                  <img src={bannerPng_4} alt="Main slider slide 4" width="1920" height="640" />
                </picture>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="swSlider__swiper-pagination"></div>
        <div className="swSlider__buttons">
          <div className="swSlider__button-prev">
            <img src={arrowWhite} width="28" height="28" alt="prev" />
          </div>
          <div className="swSlider__button-next">
            <img src={arrowWhite} width="28" height="28" alt="next" />
          </div>
        </div>
      </div>
    </section>
</>
)
}