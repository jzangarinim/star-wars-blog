const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      urlBase: "https://www.swapi.tech/api/",
      endpoints: ["people", "vehicles", "planets"],
      people: JSON.parse(localStorage.getItem("people")) || [],
      planets: JSON.parse(localStorage.getItem("planets")) || [],
      vehicles: JSON.parse(localStorage.getItem("vehicles")) || [],
    },
    actions: {
      getPeople: async () => {
        const store = getStore();
        try {
          let response = await fetch(`${store.urlBase}people/`);
          let data = await response.json();
          if (response.ok) {
            setStore({
              people: data,
            });
            localStorage.setItem("people", JSON.stringify(data));
          }
        } catch (error) {
          console.log(error);
        }
      },
      getPlanets: async () => {
        const store = getStore();
        try {
          let response = await fetch(`${store.urlBase}planets/`);
          let data = await response.json();
          if (response.ok) {
            setStore({
              planets: data,
            });
            localStorage.setItem("planets", JSON.stringify(data));
          }
        } catch (error) {
          console.log(error);
        }
      },
      getVehicles: async () => {
        const store = getStore();
        try {
          let response = await fetch(`${store.urlBase}vehicles/`);
          let data = await response.json();
          if (response.ok) {
            setStore({
              vehicles: data,
            });
            localStorage.setItem("vehicles", JSON.stringify(data));
          }
        } catch (error) {
          console.log(error);
        }
      },
    },
  };
};

export default getState;
