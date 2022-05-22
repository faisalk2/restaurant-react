import React from 'react'
import logo from "../assets/logo.svg"
const iconData=[
    {
        iconName:"person_outline",
        label:"Sign In"
    },
    {
        iconName:"shopping_bag",
        label:"Cart"
    },
    {
        iconName:"support",
        label:"Help"
    },
    {
        iconName:"search",
        label:"Search"
    }
]
const Navbar = ({ city, state, country }) => {
    return (
        <section className="navbar">
            <div className="container">
                <img className="logo" src={logo} />
                <div className="location">
                    <span className="city">{city}</span>
                    <span className="state">{state}, {country}</span>
                </div>
                <div className="navbar-options">
                    {iconData.map((e)=>{
                        return (
                            <div className="navbar-option" key={e.iconName}>
                        <span className="material-icons"> {e.iconName}</span> {e.label}
                    </div>
                        )
                    })};
                </div>
            </div>

        </section>
    )
}

export default Navbar