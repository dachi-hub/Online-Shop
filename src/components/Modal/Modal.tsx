import styles from "../Modal/Modal.module.css";

import {useEffect, useState} from "react";

export interface ModalProps {
    visible: boolean,
    title: string,
    content: string,
    onClose: () => void,
}

export const Modal = ({
                   visible = false,
                   title = '',
                   content = '',
                   onClose,
               }: ModalProps) => {
    const onKeydown = ({ key }: KeyboardEvent) => {
        switch (key) {
            case 'Escape':
                onClose()
                break
        }
    }
    const [name, setName] = useState('')
    const [contact, setContact] = useState('')
    function order(){
        // @ts-ignore
        window.location.reload(false);
    }

    if (!visible) return null
    return (
        <div className={styles.modal} onClick={onClose}>
            <div className={styles.modal_dialog} onClick={e => e.stopPropagation()}>
                <div className={styles.modal_header}>
                    <h3 className={styles.modal_title}>{title}</h3>
                    <span className={styles.modal_close} onClick={onClose}>
            &times;
          </span>
                </div>
                <div className={styles.modal_body}>
                    <div className={styles.modal_content}>
                        <p>{content}</p>
                    </div>
                    <input className={styles.modal_input} type="text" onChange={event => setName(event.target.value)} placeholder={'Ваше имя:'}/>
                    <input className={styles.modal_input} type="text" onChange={event => setContact(event.target.value)} placeholder={'Ваш номер телефона:'}/>
                    <button className={styles.submit} onClick={order}>Заказать</button>
                </div>
            </div>
        </div>
    )
}