import style from './Card.module.scss'

export const Card = (props)=>{

    return(
        <div id='cardID' className={style.cardStyle}>
        <div className={style.cardContentStyle}>
            <h3>{props.title}</h3>
            <p>{props.textContent}</p>
            {props.children}
        </div>
    </div>

    )
}