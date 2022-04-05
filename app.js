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
  const display = document.querySelector("#display");
  display.innerHTML = "";
  for (let result of shows) {
    if (result.show.image) {
      const imgContainer = document.createElement("div");
      imgContainer.classList.add("imgContainer");
      const img = document.createElement("img");
      img.src = result.show.image.medium;
      imgContainer.append(img);
      display.append(imgContainer);
    }
  }
};
