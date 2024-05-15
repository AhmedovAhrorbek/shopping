import { Cards, CardDetail } from '../index'
import titleIcon from '../../assets/images/arrow.png'
import './main.scss'
import { mockPizzaCard } from '../../Data/carddata'
import { useState } from 'react'
const Main = () => {
   const [pizzaData, setPizzaData] = useState(mockPizzaCard);
    const total = pizzaData.reduce((acc, item) => {
       return acc + (item.price * item.count);
    }, 0);
  return (
    <div className="main">
        <div className="main-start">
           <div className="main-start__top">
               <button className='main-start__top-btn'>
                <span>
                   <img src={titleIcon} alt="back buttun" width={30} height={30} />
                </span>
                Shopping Continue
               </button>
           </div>
           <div className="main-start__bottom">
              <Cards pizzaData={pizzaData} setPizzaData={setPizzaData} />
           </div>
        </div> 
        <div className="main-end">
             <CardDetail  total={total} />
        </div>
    </div>
  )
}

export default Main
