const persons = [
    { name: 'John', sex: 'M' },
    { name: 'Jody', sex: 'M' },
    { name: 'Susan', sex: 'F' },
    { name: 'Kate', sex: 'F' },
    { name: 'Sid', sex: 'M' }
  ];
  // expexted result: { M: ['John', 'Jody', 'Sid'], F: ['Susan', 'Kate'] }

const countGender = {};

persons.map(item => {
    if (!(countGender[item.sex])) {
        return countGender[item.sex] = new Array(item.name)
    } else {
        return countGender[item.sex].push(item.name)
    }
})

console.log(countGender);