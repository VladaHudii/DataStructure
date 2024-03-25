fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => {
      const selectedUsers = users.map(user => {
        return {
          id: user.id,
          name: user.name,
          email: user.email,
          city: user.address.city
        };
      });
      console.log(selectedUsers);
  });



