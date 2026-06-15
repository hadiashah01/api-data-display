 let url = "https://jsonplaceholder.typicode.com/users";
    let response = async () => {
      let data = await fetch(url);
      let users = await data.json();
      console.log(users);
      users.forEach((element) => {
        let  = document.querySelector(".container");
        container.innerHTML += `<div
      class="card"
    >
      <img class="card-img-top" alt="Card image cap" />
      <h4 class="card-title">${element.name}</h4>
      <p class="email"><strong>Email: </strong>${element.email}</p>
      <p class="city"><strong>City: </strong>${element.address.city}</p>
      <p class="website"><strong>Website: </strong>${element.website}</p>
      <a href="#" class="btn btn-warning">View Profile</a>
    </div>`;
      });
    };

    response();