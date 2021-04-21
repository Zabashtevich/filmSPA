const checkObject = {
  notEmty: function (object) {
    if (object) {
      return Object.keys(object).length > 0;
    }
    return false;
  },
};

export default checkObject;
