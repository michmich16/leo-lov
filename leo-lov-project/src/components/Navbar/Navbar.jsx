import style from "./Navbar.module.scss"

export const Navbar = ()=>{

    return(
        <nav className={style.mainNavStyle}>
            <div className={style.leftNavStyle}>
            <li><a href="#headerID">Hjem</a></li>
            <li>|</li>
            <li><a href="#personID">Advokaterne</a></li>
            <li>|</li>
            <li><a href="#cardID">Om Leo-Lov</a></li>
            <li>|</li>
            <li><a href="#footerID">Kontakt</a></li>
            </div>
            <div className={style.logoNavStyle}>
            <li><a href="#headerID">Leo-<span>Lov</span></a></li>
            </div>
        </nav>
    )

} 