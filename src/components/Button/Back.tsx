import React from 'react'
import {NavLink} from 'react-router-dom';
import {Main} from "../Main/Main";

export const Back = () => {
    return (
        <NavLink to="/main">
            <button>
                Назад
            </button>
        </NavLink>
    )
}