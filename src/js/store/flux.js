const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      urlBase: "https://www.swapi.tech/api/",
      people: JSON.parse(localStorage.getItem("people")) || [],
      planets: JSON.parse(localStorage.getItem("planets")) || [],
      vehicles: JSON.parse(localStorage.getItem("vehicles")) || [],
      favorites: JSON.parse(localStorage.getItem("favorites")) || [],
    },
    actions: {
      getPeople: async () => {
        const store = getStore();
        let aux = [];
        try {
          let response = await fetch(`${store.urlBase}people/`);
          let data = await response.json();
          for await (let person of data.results) {
            let responsePerson = await fetch(person.url);
            let dataPerson = await responsePerson.json();
            aux.push(dataPerson.result);
            setStore({
              people: aux,
            });
            localStorage.setItem("people", JSON.stringify(store.people));
          }
        } catch (error) {
          console.log(error);
        }
      },
      getPlanets: async () => {
        const store = getStore();
        let aux = [];
        try {
          let response = await fetch(`${store.urlBase}planets/`);
          let data = await response.json();
          for await (let planet of data.results) {
            let responsePlanet = await fetch(planet.url);
            let dataPlanet = await responsePlanet.json();
            aux.push(dataPlanet.result);
            setStore({
              planets: aux,
            });
            localStorage.setItem("planets", JSON.stringify(store.planets));
          }
        } catch (error) {
          console.log(error);
        }
      },
      getVehicles: async () => {
        const store = getStore();
        let aux = [];
        try {
          let response = await fetch(`${store.urlBase}vehicles/`);
          let data = await response.json();
          for await (let vehicle of data.results) {
            let responseVehicle = await fetch(vehicle.url);
            let dataVehicle = await responseVehicle.json();
            aux.push(dataVehicle.result);
            setStore({
              vehicles: aux,
            });
            localStorage.setItem("vehicles", JSON.stringify(store.vehicles));
          }
        } catch (error) {
          console.log(error);
        }
      },
      checkFavorite: (item) => {
        const store = getStore();
        const { favorites } = store;
        for (let fav of favorites) {
          if (fav._id == item._id) {
            return true;
          }
        }
      },
      markFavorite: (item) => {
        const store = getStore();
        const { favorites } = store;
        const actions = getActions();
        const { checkFavorite } = actions;
        if (!checkFavorite(item)) {
          setStore({ favorites: [...favorites, item] });
          localStorage.setItem(
            "favorites",
            JSON.stringify(getStore().favorites)
          );
        } else {
          let aux = favorites.filter((fav) => {
            return fav._id != item._id;
          });
          setStore({ favorites: aux });
          localStorage.setItem(
            "favorites",
            JSON.stringify(getStore().favorites)
          );
        }
      },
    },
  };
};

export default getState;
