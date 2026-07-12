const profileURL = window.location.search;
const params = new URLSearchParams(profileURL);
const id = params.get("id");
const apiURL = `https://jsonplaceholder.typicode.com/users/${id}`;
let result = async () => {
  const loading = document.getElementById("loading");
  const response = await fetch(apiURL);
  const data = await response.json();
  console.log(data);
  let title = document.querySelector("title");
  title.innerHTML = `${data.name}`;
  const cardTitle = document.querySelector(".card-title");
  cardTitle.innerText = data.name;
  loading.style.display = "none";
  const img = document.querySelector(".card-img-top");
  img.setAttribute("src", `./assets/profile-img-${data.id}.png`);
  const cardText = document.querySelector(".card-text");
  cardText.innerHTML = ` Hey there, I'm ${data.name}! My company's mission is <span class="catchPhrase"> <i>${data.company.catchPhrase}</i></span>. Below you can see my details & contact
          information`;
  const catchPhrase = document.querySelector(".catchPhrase");
  catchPhrase.style.textTransform = "lowercase";
  const listGroup = document.querySelector(".list-group");
  listGroup.innerHTML = `
          <li class="list-group-item"><span>Username :</span> ${data.username}</li>
        <li class="list-group-item">
          <span>Email :</span> ${data.email}
        </li>
        <li class="list-group-item"><span>City :</span> ${data.address.city}</li>
        <li class="list-group-item"><span>Zipcode :</span> ${data.address.zipcode}</li>
        <li class="list-group-item"><span>Phone : </span>${data.phone}</li>
        <li class="list-group-item"><span>Website :</span> <a href="#">${data.website}</a></li>
        <li class="list-group-item"><span>Company :</span> ${data.company.name}</li>`;
};
result();
