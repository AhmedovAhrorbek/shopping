import { mockPizzaCard } from "../../Data/carddata";
import { get } from "lodash";
import './cards.scss'
import deleteBtn from '../../assets/images/Trash Can.png'
import { CaretUpOutlined, CaretDownOutlined  } from '@ant-design/icons'
// import italypizza from '../../assets/images/Italy pizza.png'
import PropTypes from 'prop-types'
const Cards = ({pizzaData, setPizzaData}) => {
  ///// delete pizza ///////
  const deleteCard = (id) => {
     const updatedData = pizzaData.filter(item => item.id !== id);
     setPizzaData(updatedData);
   };
  
  /////     change count function     ///////
    const handleCountChange = (id, operation) => {
      const updatedPizzaData = pizzaData.map((pizza) => {
        if (pizza.id === id) {
          return {
            ...pizza,
            count: operation === 'increase' ? pizza.count + 1 : pizza.count > 1 ? pizza.count - 1: pizza.count,
          };
        }
        return pizza;
      });
      setPizzaData(updatedPizzaData);
    };


   
    
  return (
    <div className="cards">
       <div className="cards-title">
          <h4 className="cards-title__name">Shopping cart</h4>
          <p className="cards-title__subtitle">You have {mockPizzaCard.length} item in your cart</p>
       </div>
       {pizzaData.map((item, index) => {
         return (
           <div className="card" key={index}>
              <div className="card-img">
                <img src={item.url} alt="pizza image" width={80} height={60}/>
              </div>
              <div className="card-info__wrap">
                 <h5 className="card-name">{get(item, 'name')}</h5>
                 <p className="card-title">{get(item, 'title')}</p>
              </div>
              <div className="card-count__wrap">
                <span className="card-count">{item.count}</span>
                <div className="card-count__wrap-btns">
                  <button onClick={() => handleCountChange(item.id, 'increase')}>
                    <CaretUpOutlined />
                  </button>
                  <button  onClick = {() => handleCountChange(item.id, 'decrease')} >
                    <CaretDownOutlined />
                  </button>
                </div>
              </div>
              <span className="card-price">$ {get(item, 'price') * item.count}</span>
              <button className = "card-dbtn" onClick = {() => deleteCard(item.id)} >
                 <img src={deleteBtn} alt="delete buttton" width={25} height={25}/>
              </button>
           </div>
         );
       })}
    </div>
  );
};
Cards.propTypes = {
  pizzaData:PropTypes.array,
  setPizzaData:PropTypes.func,
}
export default Cards;