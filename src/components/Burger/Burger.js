import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
  let tranfromdIngredients = Object.keys(props.ingredients).map(igKey => {
    return [...Array(props.ingredients[igKey])].map((_, i) => {
      return <BurgerIngredient key={igKey + i} type={igKey} />
    });
  })
  .reduce((arr, el) => {
    return arr.concat(el)
  }, []);

  if (tranfromdIngredients.length === 0) {
    tranfromdIngredients = <p>Please start adding ingredients!</p>
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {tranfromdIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;