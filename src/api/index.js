const API = {
  searchByName: "https://www.themealdb.com/api/json/v1/1/search.php?s=",
  mealDetails: " https://www.themealdb.com/api/json/v1/1/lookup.php?i=",
  randomMeal: "https://www.themealdb.com/api/json/v1/1/random.php",
  categories: "https://www.themealdb.com/api/json/v1/1/list.php?c=list",
  areas: "https://www.themealdb.com/api/json/v1/1/list.php?a=list",
  ingredients: "https://www.themealdb.com/api/json/v1/1/list.php?i=list",
  byCategory: "https://www.themealdb.com/api/json/v1/1/filter.php?c=",
  byArea: "https://www.themealdb.com/api/json/v1/1/filter.php?a=",
  Image: "https://www.themealdb.com/images/ingredients",
};

// search meal name
const mealByName = async () => {
  const res = await fetch(API.searchByName);
  const data = await res.json();
  return data.meals;
};

// fetch meal details by id
const mealDetails = async (id) => {
  const res = await fetch(`${API.mealDetails}${id}`);
  const data = await res.json();
  return data.meals[0];
};

//fetch 8 random meals from API
const getMeals = async () => {
  let temp_meals = [];
  while (temp_meals.length !== 8) {
    let res = await fetch(API.randomMeal);
    let data = await res.json();
    let isDup = !!temp_meals.find(
      (meal) => JSON.stringify(meal) === JSON.stringify(data.meals[0])
    );
    if (!isDup) {
      temp_meals.push(data.meals[0]);
    }
  }
  return temp_meals;
};

// ? To be use in autocomplete search filter
const getAreas = async () => {
  const res = await fetch(API.areas);
  const data = res.json();
  return data.meals;
};

export { mealByName, getMeals, getAreas, mealDetails };
export default API;
