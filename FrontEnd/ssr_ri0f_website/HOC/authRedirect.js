import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import Router from 'next/router'

export const withAuthRedirect = (Component) => {
    function RedirectComponent(props) {

        const isAuth = useSelector(state => state.auth.isAuth)

        useEffect(() => {
            if (isAuth === false) return Router.push('/admin-panel/login')
        }, [isAuth]);

        return <Component {...props}/>
    }

    return (RedirectComponent)

}