const people = [
  {
    id: 1,
    name: "fernando",
    age: 34,
    fatherId: 10,
  },
  {
    id: 1,
    name: "antonio",
    age: 74,
    fatherId: 100,
  },
  {
    id: 1,
    name: "xico",
    age: 0,
    fatherId: 100,
  },
];

const joinSonAnFather = async () => {
  return people.map(async ({ id, name, age, fatherId }) => {
    const { name: fatherName } =
      people.find((item) => item.id === fatherId) || {};

    return { id, name, age, fatherId, fatherName };
  });
};

joinSonAnFather().then(console.log);
