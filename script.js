let url = "https://jsonplaceholder.typicode.com/users";
let response = async () => {
  let container = document.querySelector(".container");
  try {
    let data = await fetch(url);
    if (!data.ok) throw Error("Something went wrong. Please refresh the page");
    let users = await data.json();
    console.log(users);
    users.forEach((element) => {
      let loading = document.getElementById("loading");
      loading.style.display = "none";
      container.innerHTML += `<div
      class="card d-flex justify-content-center flex-column"
      style="flex-basis: 20%"
    >
      <img class="card-img-top rounded-circle mx-auto" src="./assets/profile-img-${element.id}.png" alt="Card image cap" />
      <h4 class="card-title fw-semibold text-center my-3 lh-base">${element.name}</h4>
      <p class="email my-0 mx-auto lh-sm mb-2"><strong>Email: </strong>${element.email}</p>
      <p class="city my-0 mx-auto lh-sm mb-2"><strong>City: </strong>${element.address.city}</p>
      <p class="website my-0  mx-auto lh-sm mb-2"><strong>Website: </strong>${element.website}</p>
      <a href="profile.html?id=${element.id}" class="btn btn-warning">View Profile</a>
    </div>`;
    });
  } catch (err) {
    container.innerHTML = `<div class="text-light text-center">Something went wrong. Please refresh the page.</div>`;
  }
};
response();
