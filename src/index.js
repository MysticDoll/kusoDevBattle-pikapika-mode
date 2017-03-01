import {} from "pikapika/dist/jquery.pikapika";

const pikapika = () => {
  if("#pikapika" === location.hash) {
    $(document.body).pikapika();
  }
};

window.addEventListener("hashchange", pikapika);
document.addEventListener("DOMContentLoaded", pikapika);
