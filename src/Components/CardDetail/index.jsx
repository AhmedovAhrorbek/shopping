import './carddetail.scss'
import avatar from '../../assets/images/person.png'
import masterCard from '../../assets/images/masterCard.png'
import visa from '../../assets/images/Visa.png'
import ruPay from '../../assets/images/RuPay.png'
import Input from 'antd/es/input/Input'
import { Space , Modal} from 'antd'
import PropTypes from 'prop-types'
import sign from '../../assets/images/Right.png'
import millify from 'millify'
import { useState } from 'react'
const CardDetail = ({ total}) => {

    const shipping = 4;
    const formattedTotal = millify(total + shipping, {
       precision: 4, 
    });

    const lasttotal = formattedTotal

    //// modal ////
    const [isModalVisible, setIsModalVisible] = useState(false);
     const [name, setName] = useState('');
     const [cardNumber, setCardNumber] = useState('');
     const [expiry, setExpiry] = useState('');
     const [cvv, setCvv] = useState('');

     const handleCheckout = () => {
        if (name && cardNumber && expiry && cvv) {
               setIsModalVisible(true);
        }
     };
      const handleModalOk = () => {
         setIsModalVisible(false);
      };

      const handleModalCancel = () => {
         setIsModalVisible(false);
      };
  return (
    <div className="detail">
       <div className="detail-wrap">
          <h6 className='detail-wrap__title'>Card Details</h6>
          <img src={avatar} alt="avatar" width={50} height={50}/>
       </div>
       <div className='type'>
           <p className='type-text'>Card type</p>
           <div className="type-cards">
              <img src={masterCard} alt="master card" />
              <img src={visa} alt=" visa " />
              <img src={ruPay} alt=" rupay " />
              <button className='type-cards__seeall'>See all</button>
           </div>
       </div>
       <div className="inputs">
          <div className='inputs-name'>
              <label  htmlFor = "myInput"
              style = {{color: 'rgba(254, 252, 252, 1)'}}>Name on card</label>
               <Input id = 'myInput' placeholder="Name"  onChange={(e) => setName(e.target.value)}
                 style={{background: 'rgba(98, 104, 198, 1)', height:'40px'}}/>
          </div>
          <div className='inputs-cardnumber'>
               <label htmlFor="cardNumberInput" style={{color:'rgba(254, 252, 252, 1)'}}>Card Number</label>
               <Input
               id="cardNumberInput"
               onChange={(e) => setCardNumber(e.target.value)}
               placeholder="xxxx  xxxx  xxxx  xxxx"
               maxLength={16} 
               style={{background:'rgba(98, 104, 198, 1)', height:'40px'}}
               />
          </div>
          <Space  style = {
             {
                marginTop: '20px',
                borderBottom: ' 1px solid #5F65C3',
                paddingBottom: '30px'
             }
          } >
             <div>
                  <label htmlFor="expiryInput" style={{color:'rgba(254, 252, 252, 1)'}}>Expiration Date</label>
                  <Input 
                     id="expiryInput"
                     placeholder="mm/yy"
                     onChange={(e) => setExpiry(e.target.value)}
                     maxLength={5}
                      style={{background:'rgba(98, 104, 198, 1)', height:'40px'}}
                  />
             </div>
             <div>
               <label htmlFor="cvv" style={{color:'rgba(254, 252, 252, 1)'}}>CVV</label>
                <Input
                      onChange={(e) => setCvv(e.target.value)}
                     id='cvv'
                     placeholder="CVV"
                     maxLength={3}
                      style={{background:'rgba(98, 104, 198, 1)', height:'40px'}}
                  />
             </div>
          </Space>
       </div>
       <div className="sum">
          <div className="sum-total">
              <p>Subtotal</p>
              <span>$ {millify(total, {precision: 4})}</span>
          </div>
          <div className="sum-total">
             <p>Shipping</p>
             <span>$ {shipping}</span>
          </div>
          <div className="sum-total">
             <p>Total</p>
             <span>$ {lasttotal}</span>
          </div>
       </div>
       <button className = 'last-amount'
         onClick = {
            handleCheckout
          } >
          <span>$ {lasttotal}</span>
          <div className='last-amount__wrap'>
             <p>checkout</p>
             <img src={sign} alt="sign" />
          </div>
       </button>
        <Modal open={isModalVisible} onOk={handleModalOk} onCancel={handleModalCancel}>
           <p style={{color:'green'}}>Qabul qilindi</p>
        </Modal>
    </div>
  )
}
CardDetail.propTypes = {
   total:PropTypes.number,
}
export default CardDetail
