const tasks = [
    { id: 1, name: 'Fishing' },
    { id: 2, name: 'Shopping' },
    { id: 3, name: 'Swimming' }
  ];

function updateTask(id, newName) {
    tasks.forEach((el) => {
        if (el.id === id) {
            el.name = newName;
        }
    })
    return tasks;
}

console.log(updateTask(1, 'Study'));