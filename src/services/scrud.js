const search = ({ path }) => {
  return fetch(`/api/${path}`);
};

const deleteTask = ({ path, id }) => {
  return fetch(`/api/${path}/${id}`, {
    method: "DELETE",
  });
};

export { search, deleteTask };
