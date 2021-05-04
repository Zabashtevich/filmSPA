function addItem(list, userlists, item) {
  return [
    ...userlists.filter((userlist) => userlist.id !== list.id),
    {
      ...list,
      content: [...list.content.filter((movie) => movie.id !== item.id), item],
    },
  ];
}

function removeItem(list, userlists, item) {
  return [
    ...userlists.filter((userlist) => userlist.id !== list.id),
    { ...list, content: list.content.filter((movie) => movie.id !== item.id) },
  ];
}

const userlist = {
  addItem,
  removeItem,
};

export default userlist;
