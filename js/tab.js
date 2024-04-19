const openTab = (event, tabName) => {
  let tabcontent = document.querySelectorAll(".tabcontent");
  tabcontent.forEach((item) => {
    item.style.display = "none";
  });

  let tablinks = document.querySelectorAll(".tablinks");
  tablinks.forEach((item) => {
    item.classList.remove("active");
  });

  document.getElementById(tabName).style.display = "block";
  event.currentTarget.classList.add("active");
};
