import React, {useState} from 'react'; 
import axios from "axios";
import  {ReactComponent as Close} from "./svg/Close.svg"
import "./modalCheckout.css"

const TOKEN = "5460199625:AAG26y66H_wb-ZtqpcA3Xdy6O-H1jbbf1-M";
const CHAT_ID = "1144079024";
const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

const modalCheckout = ({modalCheckout, setModalCheckout, initialState, formState, setFormState}) => {

    
    const closeModalCheckout = () => {
        setModalCheckout(false)
    }
    

    const onHandleChange = (e) => {
        const { value, name } = e.target;
        setFormState((prev) => ({ ...prev, [name]: value }));
    }
    const sendMessage = (e) => {
        e.preventDefault();
        let message = `Заявка от: <b>${formState.name}</b>\nПредпочтительный способ связи: <b>${formState.comWay}</b>\nНомер телефона: <b>${formState.number}</b>\nКомментарий: <b>${formState.textarea}</b>`;
        setFormState({ ...initialState });
        axios.post(URI_API, {
              chat_id: CHAT_ID,
              parse_mode: 'html',
              text: message
             })
        .then(() =>  {
          alert("Заявка была успешно отправлена\nСкоро с вами свяжется наш менеджер")
        })
      };
    return (
        <div className={modalCheckout ? "open" : "close"}>
           
            <div className='checkout_container'>
                <button onClick={closeModalCheckout} className="checkout_back-btn"><Close/></button>
                <form onSubmit={sendMessage}>
                    <div className='checkout_name-container'>
                        <label className='checkout_name-title'>Имя</label>
                        <input type="name" className='checkout_name-input' value={formState.name} onChange={onHandleChange} name="name"/>
                    </div>
                    <div className='checkout_number-container'>
                        <label className='checkout_number-title'>Номер телефона</label>
                        <input type="number" className='checkout_number-input' onChange={onHandleChange} name="number" value={formState.number}/>
                    </div>
                    <div className='checkout_radio-container'>
                        <span className='checkout_radio-title'>Предпочтительный способ связи</span>
                    <div className='chekout_radio-element'>
                        <input type="radio" className='checkout_radio-input' value="Telegram" onChange={onHandleChange} name="comWay"/>
                        <label className='checkout_radio-input_title'>Telegram</label>
                    </div>
                    <div className='chekout_radio-element'>            
                        <input type="radio" className='checkout_radio-input' value="WhatsApp" onChange={onHandleChange} name="comWay"/>
                        <label className='checkout_radio-input_title'>WhatsApp</label>
                    </div>
                    <div className='chekout_radio-element'>            
                        <input type="radio" className='checkout_radio-input' value="Звонок" onChange={onHandleChange} name="comWay"/>
                        <label className='checkout_radio-input_title'>Звонок</label>
                    </div>
                    </div>
                    <div className='checkout_textarea-container'>
                        <label className='checkout_textarea-title'>Комментарий</label>
                        <textarea className='checkout_textarea' value={formState.textarea} name="textarea" onChange={onHandleChange}/>
                    </div>
                    <button type="submit">
                        Отправить заявку
                    </button>
                </form>
            </div>
        </div>
    );
}

export default modalCheckout;