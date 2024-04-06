import './Home.scss'

import { NewRecipeButton } from '../../components/NewRecipeButton';
import React from 'react';
import { RecipeItem } from '../../components/RecipeItem';
import { SideBar } from '../../components/SideBar';
import { useAppSelector } from '../../hooks/useReduxHooks';
import { useEffect } from 'react';

function Home() {

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

  const filteredRecipeList = () => {
    return sortRecipesBySortOrder(recipes, userPreference.sortOrder)
    .filter((recipe) => {
      if (userPreference.favorites.show) {
        return userPreference.favorites.list.find(title => title.toLowerCase() === recipe.title.toLowerCase())
      }
      return true;
    })
  }

  return (
    <main id='home'>
      {recipes.length !== 0 ? <SideBar /> : <aside></aside>}
      <section>
        <div id='recipeList' className={`${(recipes.length === 0 || filteredRecipeList().length === 0) && 'empty'}`}>
          <NewRecipeButton />
          {
            filteredRecipeList().length === 0 ?
              <h1 className='emptyRecipe'>No Record Found!</h1>
            :
              filteredRecipeList()
              .map((recipe) => <React.Fragment key={recipe.title}>
                <RecipeItem recipe={recipe} />
                <div className='line'></div>
              </React.Fragment>)
          }
        </div>
      </section>
    </main>
  )
}

export default Home;
