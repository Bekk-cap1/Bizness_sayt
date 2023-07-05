import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { SwiperSlide, Swiper } from 'swiper/react'
import { catItem, dataPoisk, dataSearch, listData, selValue } from '../../assets/data/data'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Product.scss'
import { Context } from '../../assets/Context/Context'
import { useLocation, useNavigate } from 'react-router-dom'

const listArr = []
const listArr2 = []
const listPagenation = []

function Product() {

  catItem?.map((e) => {
    if (listArr.find((item) => item.title == e.title)) {
      console.log();
    } else {
      listArr.push(e)
    }
  })

  const [listArrr2, setListArr2] = useState(listArr2[0])
  const [pagination, setPagination] = useState(1)


  const navigate = useNavigate()

  const lan = window.localStorage.getItem('language')

  const SearchDataList = []
  const [searchData, setSearchData] = useState()

  const search__item = (e, i) => {
    e.preventDefault()

    const elSearch = e.target.elements.inp.value

    listData?.map((e, i) => {
      if (e.category.toLowerCase().includes(elSearch.toLowerCase())) {
        SearchDataList.push(e)
      }
      else if (e[`list_name_${lan}`].toLowerCase().includes(elSearch.toLowerCase())) {
        SearchDataList.push(e)
      }
      else if (e[`list_text_${lan}`].toLowerCase().includes(elSearch.toLowerCase())) {
        SearchDataList.push(e)
      }
    })
    setSearchData(SearchDataList)
  }
  // listData.map((e, i) => {
  //   const mat = Math.floor(((i) / 12) + 1)
  //   if (listPagenation.find((item) => item == mat)) {
  //     console.log();
  //   } else {
  //     listPagenation.push(mat)
  //     // console.log(listPagenation);
  //   }
  // })

  const typeData = []
  const [data, setData] = useState()


  const listProduct = []
  if (searchData) {
    if (searchData.length !== 0) {
      listProduct.push(searchData.slice(pagination * 12 - 12, pagination * 12))
      searchData.map((e, i) => {
        const mat = Math.floor(((i) / 12) + 1)
        if (listPagenation.find((item) => item == mat)) {
          console.log();
        } else {
          listPagenation.push(mat)
          // console.log(listPagenation);
        }
      })
    }
  }
  else {
    listProduct.push(listData.slice(pagination * 12 - 12, pagination * 12))
    listData.map((e, i) => {
      const mat = Math.floor(((i) / 12) + 1)
      if (listPagenation.find((item) => item == mat)) {
        console.log();
      } else {
        listPagenation.push(mat)
        // console.log(listPagenation);
      }
    })
  }

  const selType = (e) => {
    const el = e.target.value
    
    if (el == 'ascending') {
      typeData.push(listData.sort(function (a, b) { return a.price - b.price }))
    } else if (el == 'descending') {
      typeData.push(listData.sort(function (a, b) { return b.price - a.price }))
    } else if (el == 'new') {
      typeData.push(listData.sort(function (a, b) { return b.id - a.id }))
    } else {
      typeData.push(listData.sort(function (a, b) { return a.id - b.id }))
    }
    // console.log(el);
    // data.map(e=>console.log(e))
    setData(typeData)
    data?.map(e=>console.log(e))
    console.log(data);
  }

  const sortter = (e)=>{
    setListArr2(e.target.id)
    console.log(e.target);
  }

  return (
    <div className='product'>
      <div className="product__container">
        <div className="product__container__inner">

          <header>
            <ul className='categoriy'>
              {
                listArr?.map((e) => (
                  <li name={e.name} className={listArrr2 == e.id ? 'cat_item_active cat_item' : 'cat_item'} onClick={sortter}>
                    <img src={e.image_url} alt="" id={e.id}/>
                    <h5 id={e.id}>{e.title}</h5>
                  </li>
                ))
              }
            </ul>
          </header>

          <main>
            <div className='product__search'>
              <div>
                <form action="#" onSubmit={search__item}>
                  <input name='inp' id='inp_search' type="search" placeholder={dataSearch[0][`name_${lan}`]} />
                  <button type='submit'>{dataPoisk[0][`name_${lan}`]}</button>
                </form>
              </div>
              <div>
                {
                  selValue?.map((e) => (
                    <h4>{e[`name_${lan}`]} :
                      <select onChange={selType}>
                        {
                          e[`list_${lan}`].map((q) => (
                            <option value={q.turtle}>{q[`title_${lan}`]}</option>
                          ))
                        }
                      </select>
                    </h4>
                  ))
                }
              </div>
            </div>
            <hr />
            <ul>
              {
                listProduct[0]?.map((e, i) => (
                  <li onClick={() => navigate(`/products/${e.id}`)}>
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
                      <h6>{e[`stock_${lan}`]} : {e.stock}</h6>
                      <h2>{e[`list_name_${lan}`]}</h2>
                      <p>{e[`list_text_${lan}`]}</p>
                      <h3>{e[`price_${lan}`]} : {e.price}$</h3>
                    </div>
                  </li>
                ))
              }
            </ul>

            <div className='div__pagenation'>
              <ul>
                {
                  listPagenation?.map((e, i) => (
                    <button onClick={() => setPagination(e)}>{e}</button>
                  ))
                }
              </ul>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default Product