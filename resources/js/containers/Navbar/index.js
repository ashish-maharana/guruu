import React from 'react';
import {NavLink} from "react-router-dom";
import menu from "../../utils/menu";
import LcStorage from "../../utils/LcStorage";

const Navbar = () =>{
    const filteredList = (menuItems) => {
        const auth = LcStorage.get('token');

            return menuItems.filter(
                (x) => {
                    if(auth && x.protected) {
                        return x;
                    }
                    if(!auth && x.public && !x.protected){
                        return x;
                    }

                    if(!auth && x.public && x.protected){
                        return x;
                    }

                }
            );


    };

    const showMenus = () => {
        if(menu) {
            return filteredList(menu).map((item, i) => {
                if(item.subs) {
                    let menuInner =  filteredList(item.subs).map((innerItem, j) => {
                        if(innerItem.subs){
                            let menuInnerInner =  filteredList(innerItem.subs).map((innerInnerItem, k) => {
                                return<li key={innerInnerItem.id} className={innerInnerItem.class}><NavLink to={innerInnerItem.to} key={k}  className={innerInnerItem.ancherClass}>{innerInnerItem.label}</NavLink></li>
                            })
                            return(<li className={`dropdown ${innerItem.class}`} key={item.id}><a href="#" key={j} className={innerItem.ancherClass}><span>{innerItem.label}</span><i className="bi bi-chevron-right"/></a> <ul>{menuInnerInner}</ul></li>)
                        }
                    });
                    return(<li className={`dropdown ${item.class}`} key={item.id}><a href="#" className={item.ancherClass}><span>{item.label}</span><i className="bi bi-chevron-down"/></a> <ul>{menuInner}</ul></li>)
                }
                return <li key={item.id} className={item.class}><NavLink to={item.to} key={i} className={item.ancherClass}>{item.label}</NavLink></li>
            });
        }
        return <li><NavLink to={'#'}>Home</NavLink></li>;
    }

    return(
        <nav id="navbar" className="navbar order-last order-lg-0 w-100">
            <ul className="w-100">
                {
                    showMenus()
                }

            </ul>
            <i className="bi bi-list mobile-nav-toggle"/>
        </nav>
    )
}

export default Navbar;
