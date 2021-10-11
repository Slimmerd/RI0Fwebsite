# 🌏 RI0FF expedition website project

The website dedicated to the expedition on island Iturup in 2021. This project is dockerized MERN stack with NEXT.JS for
server side rendering.


> This project finished.

## 🖥 Frontend

> Used CRA (Create-react-app) and CNA (Create-Next-App)

### 📦 Dependencies:

* React
* Redux
* Redux-thunk
* Redux-form
* React-spring
* Next-translate
* Styled-component
* Ant.design
* Axios

## 🧰 Backend

### 📦 Dependencies:

* express
* express-validator
* helmet
* HPP
* Morgan
* mongoose
* multer

> ⚠️ Faced problem during implementation SSR for certain pages. getServerSideProps, getStaticProps, getInitialProps works but inside, it never calls `dispatch(function())`

### ⚙️ Example of problem:

```js
export const getServerSideProps = async () => {
    const {dispatch, getState} = store
    await dispatch(getNews()) // Never calls

    console.warn('test') // Calls on each request

    const news = getState().newsPage.news

    return {
        props: {news},
    }
}
```
