import './App.scss'

import { NavBar } from './components/NavBar';
import { Outlet } from 'react-router-dom';
import { loadRecipes } from './slicers/RecipeSlicer';
import { useAppDispatch } from './hooks/useReduxHooks';
import { useEffect } from 'react';

function App() {

  const dispatch = useAppDispatch();

  useEffect(() => {
    fetch('/api/data.json')
    .then((res) => res.json())
    .then((res) => dispatch(loadRecipes(res)))
    .catch((err) => console.log(err));
  }, [])

  return (
    <main className='app'>
      <NavBar />
      <Outlet />
    </main>
  )
}

export default App;
