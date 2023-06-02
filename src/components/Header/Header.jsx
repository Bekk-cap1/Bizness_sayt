import React from 'react'
import { dataPage } from '../../assets/data/data'
import './Header.scss'
import User__foto from "../../assets/image/user.png"
import { Link, useLocation, useNavigate } from 'react-router-dom'

function Header() {
  const user__Data = [
    {
      id: 1,
      name: 'Asadbek'
    }
  ]

  const [scrol, setScrol] = React.useState(false)
  const offSet = 100;
  const getTop = () => window.pageYOffset || document.documentElement.scrollTop;

  window.addEventListener('scroll', () => {
    if (getTop() > offSet) {
      setScrol(true)
    } else {
      setScrol(false)
    }
  })

  const local = useLocation()
  const navigate = useNavigate()
  if(local.pathname == '/home'){
    navigate('/')
  }
  console.log(local);

  return (
    <div className={scrol ? 'active' : 'header__sass'}>
      <div className="container">
        <div className="header__inner">
          <h1>𝐴𝑖𝑠ℎ𝑒 & 𝑆𝑎𝑓𝑖𝑦𝑒𝑚</h1>
          <ul>
            {
              dataPage?.map((e) => (
                <Link to={`/${e.eng}`}><strong>{e.ru}</strong></Link>
              ))
            }
          </ul>
          <div className='account__login'>
            <div className="account__login__user">
              {
                user__Data?.map((e, i) => (
                  <h4>{e.name}</h4>
                ))
              }
              <img src={User__foto} alt="" />
            </div>
            <select id="">
              <option value="ru">Ru</option>
              <option value="eng">Eng</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header