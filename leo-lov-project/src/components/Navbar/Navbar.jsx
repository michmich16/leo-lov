import style from "./Navbar.module.scss"

export const Navbar = ()=>{

    return(
        <nav className={style.mainNavStyle}>
            <div className={style.leftNavStyle}>
            <li><a href="">Hjem</a></li>
            <li>|</li>
            <li><a href="">Advokaterne</a></li>
            <li>|</li>
            <li><a href="">Om Leo-Lov</a></li>
            <li>|</li>
            <li><a href="">Kontakt</a></li>
            </div>
            <div className={style.logoNavStyle}>
            <li><a href="">Leo-<span>Lov</span></a></li>
            </div>
        </nav>
    )

} 