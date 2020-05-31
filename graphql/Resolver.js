import { getPeople, getById, addPerson, deletePerson } from "./People";
import { getMovies } from "./Movies";

const resolvers = {
  Query: {
    people: () => getPeople(),
    person: (_, { id }) => getById(id),
    movies: () => getMovies(),
  },
  Mutation: {
    addPerson: (_, { name, age, gender }) => addPerson(name, age, gender),
    deletePerson: (_, { id }) => deletePerson(id),
  },
};

export default resolvers;
