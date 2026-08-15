
const AD_LINKS = {
  smartlink: "https://bony-teaching.com/jLprYt"
};

const openAdButton = document.getElementById("openAd");

openAdButton.addEventListener("click", function () {
  window.open(
    AD_LINKS.smartlink,
    "_blank",
    "noopener,noreferrer"
  );
});
