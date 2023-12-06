//icon
const icon = document.getElementById("icon");
const menuList = document.getElementById("menu-list");

icon.addEventListener("click", () => {
  menuList.classList.toggle("hidden");
});

function submitdata() {
  const name = document.getElementById("nameInput").value;
  const rule = document.getElementById("ruleInput").value;
  const availability = document.getElementById("availabilityInput").value;
  const age = document.getElementById("ageInput").value;
  const location = document.getElementById("locationInput").value;
  const experience = document.getElementById("experienceInput").value;
  const email = document.getElementById("emailInput").value;

  document.getElementById("name").textContent = name;
  document.getElementById("rule").textContent = rule;
  document.getElementById("AvailabilityText").textContent = availability;
  document.getElementById("AgeText").textContent = age;
  document.getElementById("locationText").textContent = location;
  document.getElementById("experienceText").textContent = experience;
  document.getElementById("emailText").textContent = email;

  document.getElementById("nameInput").value = "";
  document.getElementById("ruleInput").value = "";
  document.getElementById("availabilityInput").value = "";
  document.getElementById("ageInput").value = "";
  document.getElementById("locationInput").value = "";
  document.getElementById("experienceInput").value = "";
  document.getElementById("emailInput").value = "";
}
