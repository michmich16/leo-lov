import style from './Article.module.scss'

export const Article = (props) => {
    return (
        <article className={style.infoBoxStyle}>
            <img src={`./${props.img}`} />
            <div className={style.infoTextStyle}>
                <h3>{props.articleHeader}</h3>
                <p>{props.articleText}</p>
                <p>{props.subarticleText}</p>
            </div>
        </article>
    )
}