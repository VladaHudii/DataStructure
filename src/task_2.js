fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => {
    const citySelector = users.reduce((acc, user) => {
      const { id, name, email, phone, company } = user;
      const city = user.address.city;
      

      if (!acc[city]) {
        acc[city] = [{ id, name, email, phone, companyName: company.name }];
      } else {
        acc[city].push({ id, name, email, phone, companyName: company.name });
      }
      
      return acc;
    }, {});
    
    console.log(citySelector);
  });


  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => {
    const citySelector = users.reduce((acc, user) => {
      const { id, name, phone } = user; 

      const selectedUser = { id, name, phone };

      const { address, company, ...rest } = user; 

      acc.push(selectedUser); 

      return acc;
    }, []);
    
    console.log(citySelector);
  });

