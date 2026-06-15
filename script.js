 let url = "https://jsonplaceholder.typicode.com/users";
    let response = async () => {
      let data = await fetch(url);
      let users = await data.json();
      console.log(users);
      users.forEach((element) => {
        let container = document.querySelector(".container");
        container.innerHTML += `<div
      class="card d-flex justify-content-center flex-column"
      style="flex-basis: 20%"
    >
      <img class="card-img-top rounded-circle mx-auto" src="./assets/profile-img-${element.id}.png" alt="Card image cap" />
      <h4 class="card-title fw-semibold text-center my-3 lh-base">${element.name}</h4>
      <p class="email my-0 mx-auto lh-sm mb-2"><strong>Email: </strong>${element.email}</p>
      <p class="city my-0 mx-auto lh-sm mb-2"><strong>City: </strong>${element.address.city}</p>
      <p class="website my-0  mx-auto lh-sm mb-2"><strong>Website: </strong>${element.website}</p>
      <a href="#" class="btn btn-warning">View Profile</a>
    </div>`;
      });
    };

    response();