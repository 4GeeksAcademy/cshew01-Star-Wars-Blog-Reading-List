export const initialStore=()=>{
  return {
    planets: [],
    people: [],
    vehicles: [],
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

  if (action.type === "load_people") {
    const { people } = action;

    return {
      ...store,
      people: people
    }
  }

  if (action.type === "load_vehicles") {
    const { vehicles } = action;

    return {
      ...store,
      vehicles: vehicles
    }
  }

}
