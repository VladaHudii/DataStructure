fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => {
    users.forEach(user => {
      const userKeys = Object.keys(user);
      const userValues = Object.values(user); 
      console.log(userKeys);
      console.log(userValues);
      
  });
  });


