let people = [
  {
    id: 0,
    name: "Sangik.Lee",
    age: 38,
    gender: "male",
  },
  {
    id: 1,
    name: "Nicolas",
    age: 18,
    gender: "female",
  },
  {
    id: 2,
    name: "Jisu",
    age: 20,
    gender: "female",
  },
  {
    id: 3,
    name: "Korean Girl",
    age: 25,
    gender: "female",
  },
  {
    id: 4,
    name: "GyungSu",
    age: 45,
    gender: "male",
  },
  {
    id: 5,
    name: "Minho",
    age: 28,
    gender: "male",
  },
  {
    id: 6,
    name: "Changsu",
    age: 33,
    gender: "male",
  },
  {
    id: 7,
    name: "Mihee",
    age: 23,
    gender: "female",
  },
];

export const getPeople = () => people;

export const getById = (id) => {
  const filterPeople = people.filter((person) => id === person.id);
  return filterPeople[0];
};

export const deletePerson = (id) => {
  const cleanPeople = people.filter((person) => person.id !== id);

  if (people.length > cleanPeople.length) {
    people = cleanPeople;
    return true;
  }

  return false;
};

export const addPerson = (name, age, gender) => {
  const newPerson = {
    id: people.length,
    name: name,
    age: age,
    gender: gender,
  };

  people.push(newPerson);

  return newPerson;
};
