import './styles/App.scss'
import { Navbar } from './components/Navbar/Navbar'
import { Header } from './components/Header/Header'
import { Card } from './components/Card/Card'
import { Article } from './components/Article/Article'
import { Person } from './components/Person/Person'
import { Footer } from './components/Footer/Footer'

function App() {

  const cardInfo = [
    {
      title: "Familieret",
      textContent: "Familieret er en ret alle har. Har du en familie har du sikkert ret til familieret. Medmindre du altid er den der tror du har ret. Så kan vi desværre ikke hjælpe dig.",
    },
    {
      title: "Ejedomsret",
      textContent: "Har du købt et hus og fortrudt eller er du blevet svindlet? Fortvivl ej. Vi kan hjælpe dig med at komme af med huset, eller eventuelt sagsøge vedkommende der solgte dig det.",
    },
    {
      title: "Konkurs",
      textContent: "Er du gået konkurs ville vi rigtig gerne hjælpe, men det kan vi desværre ikke. Vi er alle advokater med fede biler her så har du ingen penge får du ingen hjælp",
    },
    {
      title: "Selskabsret",
      textContent: "Selskabsret. Ved du heller aldrig hvilken ret du skal servere til et stort selskab? Heller ikke os. Heldigvis har vi en mand i udlandet der ved en masse om dette så henvend dig i dag."
    }
  ]

  return (
    <>
      <Navbar />
      <Header />
      <div className='cardFlex'>
        <div className='cardGrid'>
          {cardInfo.map((card) => {
            return (<Card title={card.title} textContent={card.textContent} />)
          })}
        </div>
      </div>
      <div className='sectionFlex'>
        <Article img='intetproblem.jpeg' articleHeader='INTET PROBLEM' articleText='Leo-lov har altid været det bedste advokatfirma i verden. Der er simpelthen ingen der kan måle sig med os. Vi kan løse alle problemer så længe du har penge. Hvis du mod alt forventning skulle oplevel at støde på et retsligt problem som leo-lov ikke kan løse får du halvdelen af beløbet igen.' subarticleText='Det er sådan vi har skabt en forretning der ikke kan andet end at vokse!' />
        <Article articleHeader='EVIG GARANTI' articleText='Leo-lov har altid været det bedste advokatfirma i verden. Der er simpelthen ingen der kan måle sig med os. Vi kan løse alle problemer så længe du har penge. Hvis du mod alt forventning skulle oplevel at støde på et retsligt problem som leo-lov ikke kan løse får du halvdelen af beløbet igen.' subarticleText='Det er sådan vi har skabt en forretning der ikke kan andet end at vokse!' img='eivggaranti.jpeg' />
      </div>
      <h2>MØD HOLDET</h2>
      <div className='personFlex'>
        <div className='personGrid'>
          <Person img='john.jpeg' title='John Harbinger' textContent='Jeg er den mest successfulde advokat i firmaet. I hvert fald mere end Peter' />
          <Person img='peter.jpeg' title='Peter Parker' textContent='Jeg holder af kaffe og så er jeg helt enormt successfuld. Meget mere end John' />
          <Person img='elise.jpeg' title='Elise Li' textContent='Uden ret og lov, kunne vi ligeså godt bo i en skov. Sådan har jeg altid sagt' />
          <Person img='morten.jpeg' title='Morten Nate' textContent='Jeg er født på landet. På landet er der ingen ret og lov. Det er det vilde vest derude' />
        </div>
      </div>
      <div className='mapFlex'>
        <Article img='map.jpeg' articleHeader='HER BOR VI' articleText='Vi har valgt at bosætte os i solen! Her er dejlig varmt og ikke ret mange fattige mennesker. Det nyder vi rigtig meget. “Hvis du har råd til at tage til Sechellerne har du råd til os”. Det er et af vores utallige motto´er.'><div className='addressFlex'><li>Leo-Lov ApS</li>
          <li>Maldive rd. 22</li>
          <li>Seychelles</li></div></Article>
      </div>
      <Footer/>

    </>
  )
}

export default App
