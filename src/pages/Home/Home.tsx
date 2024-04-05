import './Home.scss'

import { NewRecipeButton } from '../../components/NewRecipeButton';
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
      {recipes.length !== 0 ? <SideBar /> : <aside></aside>}
      <section>
        <div id='recipeList' className={`${recipes.length === 0 && 'empty'}`}>
          <NewRecipeButton />
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
