import './Home.scss'

import { RecipeItem } from '../../components/RecipeItem';
import { SideBar } from '../../components/SideBar';
import { useAppSelector } from '../../hooks/useReduxHooks';
import { useEffect } from 'react';

function Home() {

  const recipes = useAppSelector((state) => state.recipes);

  useEffect(() => {
    console.log("State", recipes);
  }, [recipes])

  return (
    <main>
      {
        recipes.length !== 0 && <SideBar />
      }
      <section>
        <div id='recipeList'>
          {
            recipes.length === 0 ?
              <h1 className='emptyRecipe'>No Record Found!</h1>
            :
              recipes.map((recipe) => <>
                <RecipeItem recipe={recipe} key={recipe.title}/>
                <div className='line'></div>
              </>)
          }
        </div>
      </section>
    </main>
  )
}

export default Home;
