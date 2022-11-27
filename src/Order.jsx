import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './Order.module.css'
import order from './image/order.png'

const Order = (props) => {

  const navigateHome = useNavigate()
  const editProperty = () => { navigateHome('/') }

  const [loaded, isLoaded] = useState(false)

  useEffect(() => {
    const image = new Image()
    image.src = order
    image.onload = () => { isLoaded(true) }
  }, [])

  if (!loaded) {
    return <div className={style.preloader}>loading...</div>;
  }
  return (
    <div className={style.resultForm}>
      <div className={style.orderResult}>
        <img className={style.img} src={order}></img>
        <div className={style.orderText}>Ви зробили замовлення в місто {props.city}</div>
        <button className={style.button} onClick={editProperty}>змінити</button>
      </div>
    </div>
  )
}

export default Order;
