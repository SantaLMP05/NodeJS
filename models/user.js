let users = [
    {
      id: 1,
      name: 'Alice Johnson',
      address: '123 Maple St, New York, NY',
      email: 'alice.johnson@example.com',
      contact: '123-456-7890'
    },
    {
      id: 2,
      name: 'Bob Smith',
      address: '456 Oak Ave, Los Angeles, CA',
      email: 'bob.smith@example.com',
      contact: '987-654-3210'
    },
    {
      id: 3,
      name: 'Charlie Lee',
      address: '789 Pine Rd, Chicago, IL',
      email: 'charlie.lee@example.com',
      contact: '555-123-4567'
    },
    {
      id: 4,
      name: 'Diana Prince',
      address: '321 Birch Blvd, Boston, MA',
      email: 'diana.prince@example.com',
      contact: '222-333-4444'
    },
    {
      id: 5,
      name: 'Ethan Wright',
      address: '147 Cedar Ln, Seattle, WA',
      email: 'ethan.wright@example.com',
      contact: '888-999-0000'
    }
  ];
  

module.exports = {
    getAll: () => users,
  
    add: (user) => {
      user.id = users.length ? users[users.length - 1].id + 1 : 1;
      users.push(user);
    },
  
    delete: (id) => {
      users = users.filter(user => user.id !== parseInt(id));
    }
  };