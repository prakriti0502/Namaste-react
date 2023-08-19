import React, {lazy, Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from './components/Header';
import Body from "./components/Body";
import {Outlet, RouterProvider, createBrowserRouter} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import {Provider} from "react-redux";
import appStore from "./utils/appStore";
// import Grocery from "./components/Grocery";

// lazy loading / on-demand loading / code splitting / dynamic bundling / chunking
const Grocery = lazy(()=>import("./components/Grocery"));

const AppLayout = () => {
    const [userName, setUserName] = useState("");
    useEffect(()=>{
        //Make an API call to send username and password and suppose we get the data as follows:
        const data = {
            name: "Prakriti Sagar"
        };
        setUserName(data.name);
    },[]);
    return (
        <Provider store={appStore}>
            <UserContext.Provider value={{loggedInUser:userName, setUserName}}>
            <div className="app">
                <Header/>
                <Outlet/>
                {/* Outlet will be filled with children depending on what path we are */}
            </div>
            </UserContext.Provider>
        </Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout/>,
        children: [
            {
                path: '/',
                element: <Body/>
            },
            {
                path: '/about',
                element: <About/>
            },
            {
                path: '/contact',
                element: <Contact/>
            },
            {
                path: '/restaurant/:resId',
                element: <RestaurantMenu/>
            },
            {
                path: '/grocery',
                element: <Suspense fallback={<h2>Loading...</h2>}>
                    <Grocery/>
                </Suspense>
            }
        ],
        errorElement: <Error/>
    },
])


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);
