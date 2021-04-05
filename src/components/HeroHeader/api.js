export function fetchData(keyword = "") {
    return fetch("./data.json")
      .then(resp => resp.json())
      .then(data => {
        return data.filter(data =>
          data.title.toLowerCase().includes(keyword.toLowerCase())
        );
      });
  }
  