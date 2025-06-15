const primaryBookmarks = [
  { name: "Google", url: "https://www.google.com" },
  { name: "Facebook", url: "https://www.facebook.com" },
  { name: "Reddit", url: "https://www.reddit.com" },
  { name: "Instagram", url: "https://www.instagram.com" },
  { name: "YouTube", url: "https://www.youtube.com" },
  { name: "Spotify", url: "https://www.spotify.com" },
];

const secondaryBookmarks = [
  { name: "Wikipedia", url: "https://www.wikipedia.com" },
  { name: "Stack Overflow", url: "https://www.stackoverflow.com" },
];

function renderBookmarks(bookmarks, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";
  bookmarks.forEach(b => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `<a target="_blank" href="${b.url}">🔗 ${b.name}</a>`;
    container.appendChild(div);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderBookmarks(primaryBookmarks, "primaryBookmarks");
  renderBookmarks(secondaryBookmarks, "secondaryBookmarks");

  document.getElementById("searchInput").addEventListener("input", function () {
    const term = this.value.toLowerCase();
    const filteredPrimary = primaryBookmarks.filter(b => b.name.toLowerCase().includes(term));
    const filteredSecondary = secondaryBookmarks.filter(b => b.name.toLowerCase().includes(term));
    renderBookmarks(filteredPrimary, "primaryBookmarks");
    renderBookmarks(filteredSecondary, "secondaryBookmarks");
  });

  document.getElementById("toggleTheme").addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });
});
