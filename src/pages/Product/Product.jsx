import React from 'react'
import { useState } from 'react'
import { Autoplay, Navigation, Pagination } from 'swiper'
import { SwiperSlide, Swiper } from 'swiper/react'
import { catItem, dataSearch, listData } from '../../assets/data/data'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Product.scss'

const listArr = []
const listArr2 = []

function Product() {

  catItem?.map((e) => {
    if (listArr.find((ietm)=> ietm.title == e.title)) {
      console.log(null);
    }else{
      listArr.push(e)
    }
  })

  // catItem?.map((e) => {
  //   if (!listArr.includes(e.id)) {
  //     listArr.push(e.id)

  //   }
  // })
  const [listArrr2, setListArr2] = useState(listArr2[0])

  const [pagination, setPagination] = useState(1)

  listData.map((e, i)=>{
    const mat =  Math.floor((i) / 10)
    console.log(mat);
  })

  const [count, setCount] = useState()

  return (
    <div className='product'>
      <div className="product__container">
        <div className="product__container__inner">

          <header>

            {/* <ul className='cat'>
              {
                listArr.map((e) => (
                  <li className={list == e ? 'btn__categ__active' : ''} onClick={() => setList(e)}>
                    {e}
                  </li>
                ))
              }
            </ul> */}
            <ul className='categoriy'>
              {
                listArr?.map((e) => (
                  <li className={listArrr2 === e.id ? 'cat_item_active cat_item' : 'cat_item'} onClick={() => setListArr2(e.id)}>
                    <img src={e.image_url} alt="" />
                    <h5>{e.title}</h5>
                  </li> 
                ))
              }
            </ul>
          </header>

          <main>
            <div className='product__search'>
              <div>
                <input type="text" id='search' placeholder={dataSearch[0].name} />
                <label htmlFor="search"></label>
              </div>
              <div>
                <h4>Сортировка:
                  <select>
                    <option >По цене</option>
                    <option >Дата</option>
                    <option >По цене 👍</option>
                  </select>
                </h4>
              </div>
            </div>
            <hr />
            <ul>
              {
                listData?.map((e, i) => (
                  i + 1 == pagination ?
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
                      >
                        {
                          e.image.map((t) => (
                            <SwiperSlide id={t.image_id}><img src={t.image_url} alt="" /></SwiperSlide>
                          ))
                        }
                      </Swiper>
                      <div className="about_product">
                        <h6>in stocks : {e.stock}</h6>
                        <h2>{e.list_name}</h2>
                        <p>{e.list_text}</p>
                        <h3>Price : ${e.price}</h3>
                      </div>
                    </li>
                    : ''
                ))
              }
            </ul>

            <div>
              {
                listData?.map((e, i) => (
                  <button onClick={() => setPagination(i + 1)}>{i+1}</button>
                ))
              }
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default Product