import React from 'react';
import './Header.css'
import { MdViewList, MdGridOn, MdRefresh } from "react-icons/md";


export const Header = (props) =>
    (
        <div className="header" ><h1>BIT People</h1>
            <div className='header__buttonWrapper'><MdRefresh onClick={props.refresh} />
                {props.isListView ? <MdGridOn onClick={props.changeView} /> : <MdViewList onClick={props.changeView} />}</div>
        </div>
    )
