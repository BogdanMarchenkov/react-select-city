import './classNamePrefix.css';
import Select from 'react-select'
import { useNavigate } from 'react-router-dom';
import style from './SelectForm.module.css'

const SelectForm = (props) => {
  const navigate = useNavigate()

  const submit = () => {
    if (props.cityOptions.some(c => c.value === props.city))
      return navigate('/order')
  }

  return (
    <div className={style.order}>
      <div className={style.orderResult}>
        <h1 className={style.choseCity}>Оберіть місто</h1>
        <Select
          className={style.reactSelectContainer}
          classNamePrefix="input"
          isClearable={true}
          onChange={(choice) => props.setCurrentCity(choice)}
          autoFocus={true}
          options={props.cityOptions}
          placeholder="почніть друкувати"
          noOptionsMessage={() => "оберіть доступне місто"}
        />
        <button className={style.button} onClick={submit}>підтвердити</button>
      </div>
    </div>
  );
}

export default SelectForm;
