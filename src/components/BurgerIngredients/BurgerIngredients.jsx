import styles from './burgerIngredients.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const BurgerIngredients = ({ current, setCurrent, data }) => {
  return (
    <div className={`${styles.burgerIngredients} pt-10 pr-10`}>
      <h1>Соберите бургер</h1>
      <div style={{ display: 'flex' }}>
        <Tab value="Булки" active={current === 'Булки'} onClick={setCurrent}>
        </Tab>
        <Tab value="Соусы" active={current === 'Соусы'} onClick={setCurrent}>
        </Tab>
        <Tab value="Начинки" active={current === 'Начинки'} onClick={setCurrent}>
        </Tab>
      </div>
      <div>
        <ul>
          <li>
            <h2 className='text text_type_main-default'>Булки</h2>
            <ul>
              {data.map((item) => {
                <li key={item._id}>
                  <article>
                    <img src={item.image} alt={item.name} />
                    <p>{item.price} <CurrencyIcon /></p>
                    <h3>{item.name}</h3>
                  </article>
                </li>
              })}
            </ul>
          </li>
          <li>
            <h2 className='text text_type_main-default'>Соусы</h2>
            <ul>

            </ul>
          </li>
          <li>
            <h2 className='text text_type_main-default'>Начинки</h2>
            <ul>

            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BurgerIngredients;