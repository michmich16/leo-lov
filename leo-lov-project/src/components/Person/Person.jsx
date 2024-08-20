import style from './Person.module.scss';

export const Person = (props) => {
    return (
        <div className={style.personStyle}>
            <div className={style.personContentStyle}></div>
            <img src={`./${props.img}`} />
            <h3>{props.title}</h3>
            <p>{props.textContent}</p>
        </div>

    )
}