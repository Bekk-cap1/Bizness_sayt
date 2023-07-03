
import React, { useContext, useEffect, useRef, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Header from '../../../components/Header/Header'
import './Catalog__product.scss'
import logo from '../../../assets/image/logo.png'
import { Context } from '../../../assets/Context/Context'
import { listData } from '../../../assets/data/data'
import Footer from '../../../components/Footer/Footer'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';

function Catalog__product() {
    const [count, setCount] = useState(0)
    const { catal, setCatal } = useContext(Context)
    const catRef = useRef()
    const [url_img, setUrl_img] = useState(0)
    const [product, setProduct] = useState(1)
    useEffect(() => {
        catRef.current.style.transform = `translateY(${count}%)`
        catRef.current.style.transition = `0.3s ease-in-out all`
    })
    const slideFive = useRef()
    const [sliderFive, setSliderFive] = useState(0)
    // useEffect(() => {
    //     console.log(slideFive.current);
    //     slideFive.current.style.transition = `0.4s ease-in-out`
    //     slideFive.current.style.transform = `translate(${sliderFive}%)`
    // }, [sliderFive])
    // const slideFour = useRef()
    // const [sliderFour, setSliderFour] = useState(0)
    // useEffect(() => {
    //     slideFour.current.style.transition = `0.4s ease-in-out`
    //     slideFour.current.style.transform = `translate(${sliderFour}%)`
    // }, [sliderFour])


    const local = useLocation()
    const navig = local.pathname.split('/products/').join('')
    console.log(url_img);

    return (
        <>
            <div className='header__product'>
                <div className="container">
                    <div className="product__inner">
                        <div>

                            <div className='product__right'>
                                {
                                    listData?.map((e, i) => (
                                        navig == e.id ?
                                            <img src={ catal.img || e.image[url_img].image_url} alt="" />
                                            : ''
                                    ))

                                }
                            </div>
                            <div className='product__main'>
                                <h2>Дистиллятор для <br /> получения гидролата 8л</h2>
                                <span>
                                    <h6>В наличии</h6>
                                    <h5>Артикул: <strong>CP-0803</strong></h5>
                                </span>
                                <hr />
                                <h3>Описание</h3>
                                <p>Медный дистиллятор «Феникс» станет Вашим надёжным помощником и проводником в мир дистилляции и красоты, с которым Вы легко сможете получать свои любимые гидролаты или алкогольные напитки.</p>
                                <hr />
                                <span>
                                    <h2>Цена</h2>
                                    {
                                        listData?.map((e, i) => (
                                            navig == e.id ?
                                                <>
                                                    <b>{catal.price * product || e.price * product} $</b>
                                                    <h4>{catal.price || e.price}$</h4>
                                                </> : ''
                                        ))
                                    }
                                </span>
                                <div>
                                    <span className='span__div'>
                                        <b onClick={() => setProduct(product - 1)}>-</b>
                                        <b>{product}</b>
                                        <b onClick={() => setProduct(product + 1)}>+</b>
                                    </span>
                                </div>
                                <hr />
                                <div className='podel'>
                                    <h5>Поделиться</h5>
                                    <img src={logo} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className='product__left'>
                            <div >
                                <ul ref={catRef}>
                                    {
                                        listData?.map((e, i) => (
                                            navig == e.id ?
                                                <Swiper
                                                    slidesPerView={5}
                                                    spaceBetween={20}
                                                    freeMode={true}
                                                    pagination={{
                                                        clickable: true,
                                                    }}
                                                    modules={[FreeMode, Pagination]}
                                                    className="mySwiper"
                                                >
                                                    {e.image.map((q, i) => (
                                                        <SwiperSlide onClick={()=>setUrl_img(i)}>
                                                            <img src={q.image_url} alt="" />
                                                        </SwiperSlide>
                                                    ))}
                                                </Swiper>
                                                : ''
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                        <hr />
                    </div>
                    <div className='opisaniye'>
                        <div>
                            <h2>Описание</h2>
                            <p>Для всех, кто хочет самостоятельно получать гидролат или дистиллят, и быть уверенным в его качестве – у нас есть готовое и удобное решение. Современный дистиллятор «Феникс» станет для Вас отличным помощником. Полностью медный аппарат изготовлен на собственном производстве, на основании многолетнего опыта работы с медными дистилляторами.
                                <br /><br />
                                Гораздо практичней, чем алькитара, и ни в чём ей не уступающий. Даже наоборот, имеет ряд преимуществ, таких как толщина металла, надёжные, сварные швы, и деревянные ручки, которые не так нагреваются, как латунные. Соединение ароматизационной колонны с емкостью герметично и долговечно. Радиатор данного аппарата расходует в 3 раза меньше воды для охлаждения, в сравнении с алькитарой такого же объёма.
                                <br /><br />
                                Замечательный аппарат прослужит для Вас долгие годы и будет радовать своего владельца гидролатом высокого качества. Оцените все преимущества паровой дистилляции и получайте гидролаты, в натуральности которых Вы можете быть уверенны. Аппарат полностью укомплектован и готов к работе. Объём перегонного куба – 8 литров. Объём колонны – 0,8 литра. Аппарат полностью укомплектован и готов к эксплуатации.
                            </p>
                        </div>
                    </div>
                    <hr />
                </div>

            </div>
        </>
    )
}

export default Catalog__product
