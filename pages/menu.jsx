
import MenuTop from '../components/menu/MenuTop';
import MainMenu from '../components/menu/MainMenu';
import Contact from '../components/home/Contact';
import Footer from '../components/home/Footer';
import client from '../sanity/client';
export default function Menu(props) {
  return (
    <div className="bg-primary text-secondary font-nunito min-h-screen">
      <MenuTop />
      <MainMenu />
      <Contact reach={props.reach} contact={props.contact} />
      <Footer />
    </div>
  )
}

export async function getStaticProps(context) {

  const contact = await client.fetch("*[_type == 'contact'][0]")
  const reach = await client.fetch("*[_type == 'reach'][0]")



  return {
    props: {
      contact, reach
    }, // will be passed to the page component as props
  }

}
