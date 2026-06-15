 let url = "https://jsonplaceholder.typicode.com/users";
    let response = async () => {
      let data = await fetch(url);
      let users = await data.json();
      console.log(users);
    };

    response();