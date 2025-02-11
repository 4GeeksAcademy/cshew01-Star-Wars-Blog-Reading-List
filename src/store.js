export const initialStore = () => {
  return {
    planets: [],
    people: [],
    vehicles: [],
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


  if (action.type === "add_favorite") {
    const { data, category, id } = action;
    console.log("Heres your data", data, id);

    if (store.favs.some(fav => fav.id === id)) {
      console.log("already there");
      return store
    }
    
    console.log("All the favs:",store.favs)

    return {
      ...store,
      favs: [...store.favs, { data, category, id }]
    }
  }


  // if (action.type === "load_people") {
  //   const { people } = action;

  //   return {
  //     ...store,
  //     people: people
  //   }
  // }

  // if (action.type === "load_vehicles") {
  //   const { vehicles } = action;

  //   return {
  //     ...store,
  //     vehicles: vehicles
  //   }
  // }

}
