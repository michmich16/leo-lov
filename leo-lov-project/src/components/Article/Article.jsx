import style from './Article.module.scss'

export const Article = (props) => {
    return (
        <article>
            <img src={`./assets/images/${props.img}`} />
            <div>
                <h3>{props.articleHeader}</h3>
                <p>{props.articleText}</p>
            </div>
        </article>
    )
}