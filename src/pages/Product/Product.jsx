import React from 'react'
import { useState } from 'react'
import { catItem, dataSearch, listData } from '../../assets/data/data'
import './Product.scss'

const listArr = []
const listArr2 = []

function Product() {

  listData?.map((e) => {
    if (!listArr.includes(e.category)) {
      listArr.push(e.category)

    }
  })

  catItem?.map((e) => {
    if (!listArr.includes(e.id)) {
      listArr.push(e.id)

    }
  })
  const [list, setList] = useState(listArr[0])
  const [listArrr2, setListArr2] = useState(listArr2[0])

  console.log(listArr);
  return (
    <div className='product'>
      <div className="product__container">
        <div className="product__container__inner">

          <header>

            <ul className='cat'>
              {
                listArr.map((e) => (
                  <li className={list == e ? 'btn__categ__active' : ''} onClick={() => setList(e)}>
                    {e}
                  </li>
                ))
              }
            </ul>
            <ul className='categoriy'>
              {
                catItem?.map((e) => (
                  <li className={listArrr2 == e.id ? 'cat_item_active cat_item' : 'cat_item'} onClick={()=>setListArr2(e.id)}>
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
                <h4>Сортировка: <select value="">
                  <option name="" id="">По цене</option>
                  <option name="" id="">Дата</option>
                  <option name="" id="">По цене 👍</option>
                </select>
                </h4>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default Product