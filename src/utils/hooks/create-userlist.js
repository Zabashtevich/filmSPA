export default function createList(name) {
  return { name, id: Math.random().toString().substr(2, 9), content: [] };
}
