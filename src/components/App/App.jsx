import  React from 'react';
import styles from './app.module.css';
import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
/* import { data } from '../../utils/data.js'; */
import { apiConfig } from '../constans/apiConfig';


const App = () => {
  const [ingredients, setIngredients] = React.useState([])
  
  const getIngredients = () => {
    fetch(`${apiConfig.baseUrl}/ingredients`, {
      headers: apiConfig.headers
    })
    .then(res => res.json())
    .then(res => setIngredients(res.data))
    .catch((err) => {
      console.log(err);
    })
  };
  
  React.useEffect(() => {
    getIngredients()
  }, []);

  return (
    <section className={styles.app}>
      <AppHeader />
      <main className={styles.app__flexComponents}>
        <BurgerIngredients ingredients={ingredients} />
        <BurgerConstructor ingredients={ingredients} />
      </main>
    </section>
  );
}

export default App;
