import './styles/App.scss'
import { Navbar } from './components/Navbar/Navbar'
import { Header } from './components/Header/Header'
import { Card } from './components/Card/Card'
import { Article } from './components/Article/Article'

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

  // const articleInfo = [
  //   {
  //     img: 'intetproblem.jpeg',
  //     articleHeader: "INTET PROBLEM",
  //     articleText: " Leo-lov har altid været det bedste advokatfirma i verden. Der er simpelthen ingen der kan måle sig med os. Vi kan løse alle problemer så længe du har penge. Hvis du mod alt forventning skulle oplevel at støde på et retsligt problem som leo-lov ikke kan løse får du halvdelen af beløbet igen. <br> Det er sådan vi har skabt en forretning der ikke kan andet end at vokse!"
  //   }
  //]

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
        <Article img='intetproblem.jpeg' articleHeader='NTET PROBLEM' articleText='Leo-lov har altid været det bedste advokatfirma i verden. Der er simpelthen ingen der kan måle sig med os. Vi kan løse alle problemer så længe du har penge. Hvis du mod alt forventning skulle oplevel at støde på et retsligt problem som leo-lov ikke kan løse får du halvdelen af beløbet igen.' subarticleText='Det er sådan vi har skabt en forretning der ikke kan andet end at vokse!' />
        <Article  articleHeader='NTET PROBLEM' articleText='Leo-lov har altid været det bedste advokatfirma i verden. Der er simpelthen ingen der kan måle sig med os. Vi kan løse alle problemer så længe du har penge. Hvis du mod alt forventning skulle oplevel at støde på et retsligt problem som leo-lov ikke kan løse får du halvdelen af beløbet igen.' subarticleText='Det er sådan vi har skabt en forretning der ikke kan andet end at vokse!' img='intetproblem.jpeg'/>
      </div>
    </>
  )
}

export default App
