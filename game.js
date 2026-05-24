const API_KEY = "jzfxJ06CQQK7utqouq65FcOa13C6HWwd9HgQ";
const SERVICE_ID = "morimusic";

const DEFAULT_IMAGE = "/prof/prf.jpg";

const container = document.getElementById("games");

const formatDate = (iso) => {
  const d = new Date(iso);

  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");

  return `${y}/${m}/${day}`;
};

fetch(`https://${SERVICE_ID}.microcms.io/api/v1/game`, {
  headers: {
    "X-MICROCMS-API-KEY": API_KEY
  }
})
.then(res => res.json())
.then(data => {

  data.contents.forEach(item => {

    // デフォルト画像対応
    let image = DEFAULT_IMAGE;

    if (item?.image?.url && item.image.url.trim() !== "") {
      image = item.image.url;
    }

    const date = item.date
      ? formatDate(item.date)
      : "";

    const card = document.createElement("div");
    card.className = "game-card";

    card.innerHTML = `
      <div class="card-top"
           onclick="window.open('${item.url}', '_blank')">

        <img
          src="${image}"
          alt="game"
          onerror="this.src='${DEFAULT_IMAGE}'"
        >

      </div>

      <div class="card-bottom">

        <div class="game-title">
          ${item.title ?? "No Title"}
        </div>

        <div class="game-comment">
          ${item.comment ?? ""}
        </div>

        <div class="game-date">
          Release Date:<br>
          ${date}
        </div>

      </div>
    `;

    container.appendChild(card);

  });

})
.catch(err => {
  console.error(err);
});