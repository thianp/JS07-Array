const tasks = [
    { id: 1, name: 'Fishing' },
    { id: 2, name: 'Shopping' },
    { id: 3, name: 'Swimming' }
  ];

  function deleteTask(id) {
      tasks.forEach((el, index) => {
          el.id === id ? tasks.splice(index, 1) : null;
      })
      return tasks
  }

  console.log(deleteTask(1));