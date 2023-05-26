const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      urlBase: "https://www.swapi.tech/api/",
      people: JSON.parse(localStorage.getItem("people")) || [],
      planets: JSON.parse(localStorage.getItem("planets")) || [],
      vehicles: JSON.parse(localStorage.getItem("vehicles")) || [],
    },
    actions: {
      getPeople: async () => {
        const store = getStore();
        let aux = [];
        try {
          let response = await fetch(`${store.urlBase}people/`);
          let data = await response.json();
          data.results.forEach(async (person) => {
            let responsePerson = await fetch(person.url);
            let dataPerson = await responsePerson.json();
            console.log(dataPerson.result);
            aux.push(dataPerson.result);
          });
          console.log(
            "hi",
            aux.sort(function (a, b) {
              if (a.uid > b.uid) {
                return 1;
              }
              if (a.uid < b.uid) {
                return -1;
              }
              return 0;
            })
          );
          setStore({
            people: aux,
          });
          localStorage.setItem("people", JSON.stringify(store.people));
          /*         
          if (response.ok) {
            setStore({
              people: data.results,
            }); */
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
              planets: data.results,
            });
            localStorage.setItem("planets", JSON.stringify(data.results));
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
              vehicles: data.results,
            });
            localStorage.setItem("vehicles", JSON.stringify(data.results));
          }
        } catch (error) {
          console.log(error);
        }
      },
    },
  };
};

export default getState;
