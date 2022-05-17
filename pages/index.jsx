import Hero from "./components/home/Hero"
import Gallery from "./components/home/Gallery"
import ShowMenu from "./components/home/ShowMenu"
import Ratings from "./components/home/Ratings"
import Contact from "./components/home/Contact"
import Footer  from "./components/home/Footer"
import client from '../sanity/client'

export default function Home(props) {
  return (
    <div className="bg-primary text-secondary font-nunito">
        <Hero hero={props.hero}/>
        <Gallery gallery= {props.gallery}/>
        <ShowMenu exploreMenu={ props.exploreMenu }/>
        <Ratings  rating = { props.rating } />
        <Contact contact = { props.contact } reach = { props.reach }/>
        <Footer  />
    </div>
  )
}




export async function getStaticProps(context) {
  const hero = await client.fetch("*[_type == 'hero'][0]");
  const gallery  = await client.fetch("*[_type == 'gallery']")
  const exploreMenu = await client.fetch("*[_type == 'exploremenu'][0]")
  const contact = await client.fetch("*[_type == 'contact'][0]")
  const reach = await client.fetch("*[_type == 'reach'][0]")
  const rating = await client.fetch("*[_type == 'rating'][0]")
  



  return {
    props: {
      hero,gallery, exploreMenu, contact, reach, rating
    }, // will be passed to the page component as props
  }
}
