export const initialStore = () => {
  return {
    planets: [],
    people: [],
    starships: [],
    favs: [],
  };
}

export default function storeReducer(store, action = {}) {

  if (action.type === "load_planets") {
    const { planets } = action;

    return {
      ...store,
      planets: planets
    }
  }


  if (action.type === "load_starships") {
    const { starships } = action;

    return {
      ...store,
      starships: starships
    }
  }

  if (action.type === "load_people") {
    const { people } = action;

    return {
      ...store,
      people: people
    }
  }

  if (action.type === "add_favorite") {
    const { name, category, id } = action;

    if (store.favs.some(fav => fav.name === name)) {
      console.log("already there");
      return store
    }

    return {
      ...store,
      favs: [...store.favs, { name, category, id }],
      planets: store.planets.map(planet => planet.name === name ? { ...planet, favorite: true } : planet),
      starships: store.starships.map(starship => starship.name === name ? { ...starship, favorite: true } : starship),
      people: store.people.map(people => people.name === name ? { ...people, favorite: true } : people)
    }
  }

  
  if (action.type === "remove_favorite") {
    const { name, category, id } = action;
    // not using category and id so can remove if you like

    const favorite_idx = store.favs.findIndex(
      // (favorite) => favorite.name === name 
      fav => fav.name === name
    );
    if (favorite_idx === -1) return store;

    return {
      ...store,
      favs: store.favs.toSpliced(favorite_idx, 1),
      planets: store.planets.map(planet => planet.name === name ? { ...planet, favorite: false } : planet),
      starships: store.starships.map(starship => starship.name === name ? { ...starship, favorite: false } : starship),
      people: store.people.map(people => people.name === name ? { ...people, favorite: false } : people)
    }
  }
  return store;

}