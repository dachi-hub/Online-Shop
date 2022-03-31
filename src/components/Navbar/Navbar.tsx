import styles from "../Navbar/Navbar.module.css";
import {NavLink} from "react-router-dom";
import React from "react";
let linkColor= "rgba(87, 114, 255, 1)"

interface IProps {
    closeNavBar: () => void;
}

export const NavBar = () => {
    return (
            <div className={styles.container}>
                <nav className={styles.drop_menu}>
                    <ul className={styles.list}>
                        <li>
                            <NavLink to='/cpu'
                                     style={{
                                         padding:'10px',
                                         position: 'relative',
                                         fontFamily:"Russo one",
                                         fontStyle: 'normal',
                                         fontSize: '14px',
                                         lineHeight: '140%',
                                         letterSpacing: '0.03em',
                                         textTransform:"uppercase",
                                         textDecoration:"none",
                                         color:"white",
                                     }}
                            >
                                <p>Процессоры</p>
                            </NavLink>

                        </li>
                        <li>
                            <NavLink to='/mother-boards'
                                     style={{
                                         padding:'10px',
                                         position: 'relative',
                                         fontFamily:"Russo one",
                                         fontStyle: 'normal',
                                         fontSize: '14px',
                                         lineHeight: '140%',
                                         letterSpacing: '0.03em',
                                         textTransform:"uppercase",
                                         textDecoration:"none",
                                         color:"white",
                                     }}
                        >
                            <p>Материнские платы</p>
                        </NavLink>
                        </li>
                        <li>
                            <NavLink to='/ram'
                                     style={{
                                         padding:'10px',
                                         position: 'relative',
                                         fontFamily:"Russo one",
                                         fontStyle: 'normal',
                                         fontSize: '14px',
                                         lineHeight: '140%',
                                         letterSpacing: '0.03em',
                                         textTransform:"uppercase",
                                         textDecoration:"none",
                                         color:"white",
                                     }}
                            >
                                <p>Оперативная память</p>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/gpu'
                                     style={{
                                         padding:'10px',
                                         position: 'relative',
                                         fontFamily:"Russo one",
                                         fontStyle: 'normal',
                                         fontSize: '14px',
                                         lineHeight: '140%',
                                         letterSpacing: '0.03em',
                                         textTransform:"uppercase",
                                         textDecoration:"none",
                                         color:"white",
                                     }}
                            >
                                <p>Видеокарты</p>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/bp'
                                     style={{
                                         padding:'10px',
                                         position: 'relative',
                                         fontFamily:"Russo one",
                                         fontStyle: 'normal',
                                         fontSize: '14px',
                                         lineHeight: '140%',
                                         letterSpacing: '0.03em',
                                         textTransform:"uppercase",
                                         textDecoration:"none",
                                         color:"white",
                                     }}
                            >
                                <p>Блоки питания</p>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/hdd'
                                     style={{
                                         padding:'10px',
                                         position: 'relative',
                                         fontFamily:"Russo one",
                                         fontStyle: 'normal',
                                         fontSize: '14px',
                                         lineHeight: '140%',
                                         letterSpacing: '0.03em',
                                         textTransform:"uppercase",
                                         textDecoration:"none",
                                         color:"white",
                                     }}
                            >
                                <p>HDD накопители</p>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/ssd'
                                     style={{
                                         padding:'10px',
                                         position: 'relative',
                                         fontFamily:"Russo one",
                                         fontStyle: 'normal',
                                         fontSize: '14px',
                                         lineHeight: '140%',
                                         letterSpacing: '0.03em',
                                         textTransform:"uppercase",
                                         textDecoration:"none",
                                         color:"white",
                                     }}
                            >
                                <p>SSD накопители</p>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/ram'
                                     style={{
                                         padding:'10px',
                                         position: 'relative',
                                         fontFamily:"Russo one",
                                         fontStyle: 'normal',
                                         fontSize: '14px',
                                         lineHeight: '140%',
                                         letterSpacing: '0.03em',
                                         textTransform:"uppercase",
                                         textDecoration:"none",
                                         color:"white",
                                     }}
                            >
                                <p>Игровая переферия</p>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
        </div>
    );
};
