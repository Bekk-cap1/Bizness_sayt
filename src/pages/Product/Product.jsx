import React from 'react'
import { useState } from 'react'
import { listData } from '../../assets/data/data'
import './Product.scss'

const listArr = []

function Product() {

  listData?.map((e) => {
    if (!listArr.includes(e.category)) {
      listArr.push(e.category)

    }
  })
  const [list, setList] = useState(listArr[0])
  const [listCateg, setListCateg] = useState()

  console.log(listArr);
  return (
    <div className='product'>
      <div className="product__container">
        <div className="product__container__inner">
          <ul className='cat'>
            {
              listArr.map((e) => (
                <li className={list == e ? 'btn__categ__active' : ''} onClick={()=>setList(e)}>
                  {e}
                </li>
              ))
            }
          </ul>
          <ul className='categoriy'>
            <li className='cat_item'>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBWJMVMYd_du-p26BRRARjZOwSNqV4lFt2Sg&usqp=CAU" alt="" />
              <h5>kulon</h5>
            </li>
            <li className='cat_item'>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXnXyL_fhYpNBaGVPVdAPBOFr6sV1bFUluMw&usqp=CAU" alt="" />
              <h5>uzuk</h5>
            </li>
            <li className='cat_item'>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROKl98dqjybv_sumZ3xRBATbViisxXEnDf3g&usqp=CAU" alt="" />
              <h5>braslet</h5>
            </li>
            <li className='cat_item'>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDKwxp1ff_Cb-JVve8oCjp1UxfVLJqe3E9V-f2DIl7l5P8wIX6JfylPraAyOr_PoC0rrw&usqp=CAU" alt="" />
              <h5>komplect</h5>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Product