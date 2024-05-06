const fetchData = () => {
  const url = "http://localhost:3000";
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      renderList(data);
      console.log(data);
    })
    .catch((error) => console.log("Error:", error));
};

const renderList = (users) => {
  const userList = document.getElementById("user-list");

  let html = "";

  for (let i = 0; i < users.length; i++) {
    const unitData = users[i];
    html += `<div class='user-card'>
        <h2>${unitData.id}</h2>
        <h1>${unitData.name}</h1>
        <h3>${unitData.age} Years</h3>
      </div>`;
  }
  userList.innerHTML = html;
};

fetchData();

// code for submitting form

document.addEventListener("DOMContentLoaded", () => {
  //--------------------------------------------
  document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();
    const formData = new FormData(this);
    fetch("http://localhost:3000/", {
      method: "POST",
      body: JSON.stringify(Object.fromEntries(formData)),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to add user");
        }
        alert("User added");
        location.reload();
      })
      .catch((error) => {
        alert(error.message);
      });
  });
  //-----------------------------
});
