import './Home.scss'

import { SideBar } from '../../components/SideBar';

function Home() {

  return (
    <main>
      <SideBar />
      <section>
        <div id='recipeList'>
          Recipe List
        </div>
      </section>
    </main>
  )
}

export default Home;
