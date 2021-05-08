import logo from "./logo.png";
const Header = () => {
    return (
        <div>
            <div className="logo">
                <img src={logo} alt="icon"/>
               </div>
<span className="header">E-TOWN</span>
            <hr/>
        </div>
    )
}

export default Header
