const form = document.querySelector("#searchForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const searchValue = form.elements.query.value;
  const response = await axios.get(
    `https://api.tvmaze.com/search/shows?q=${searchValue}`
  );
  console.log(response.data);
  makeImg(response.data);
  form.elements.query.value = "";
});

const makeImg = (shows) => {
  for (let result of shows) {
    if (result.show.image) {
      const img = document.createElement("img");
      img.src = result.show.image.medium;
      document.body.append(img);
    }
  }
};
