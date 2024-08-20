import style from './Footer.module.scss'

export const Footer = () => {
    return (
        <footer>
            <div>
                <h3>Adresse</h3>
                <li>Find os her:</li>
                <ul>
                    <li>Maldive rd. 22,</li>
                    <li>Seychelle Islands</li>
                </ul>
            </div>
            <div>
                <h3>Kontakt</h3>
                <li>Kontakt os her:</li>
                <ul>
                    <li>email@mail.dk</li>
                    <li>Tlf: 0192 3023</li>
                </ul>
            </div>
            <div>
                <h3>Politik</h3>
                <li>Vores politiker:</li>
                <ul>
                    <li><a href="">Privatlivspolitik</a></li>
                    <li><a href="">Cookiepolitik</a></li>
                    <li><a href="">Generalle betingelse</a></li>
                </ul>
            </div>
            <div>
                <h3>Sociale medier</h3>
                <div></div>
            </div>

        </footer>

    )
}