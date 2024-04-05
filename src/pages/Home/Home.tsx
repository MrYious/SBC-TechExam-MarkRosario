import './Home.scss'

import { NewRecipeButton } from '../../components/NewRecipeButton';
import { RecipeItem } from '../../components/RecipeItem';
import { SideBar } from '../../components/SideBar';
import { useAppSelector } from '../../hooks/useReduxHooks';
import { useEffect } from 'react';

function Home() {

  // TODO: Filter

  const recipes = useAppSelector((state) => state.recipes);
  const userPreference = useAppSelector((state) => state.userPreference);

  useEffect(() => {
    console.log("State", recipes);
  }, [recipes])

  const sortRecipesBySortOrder = (unsortedList: typeof recipes, order: typeof userPreference.sortOrder) => {
    if(order) {
      const sortedList = [...unsortedList].sort((a, b) => {
        if (order === 'ASC') {
          return a.title.toLowerCase().localeCompare(b.title.toLowerCase())
        } else {
          return b.title.toLowerCase().localeCompare(a.title.toLowerCase())
        }
      });
      return sortedList;
    } else {
      return unsortedList;
    }
  }

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
              sortRecipesBySortOrder(recipes, userPreference.sortOrder)
              .filter((recipe) => {
                if (userPreference.favorites.show) {
                  return userPreference.favorites.list.find(title => title.toLowerCase() === recipe.title.toLowerCase())
                } else {
                  return true;
                }
              })
              .map((recipe) => <>
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
