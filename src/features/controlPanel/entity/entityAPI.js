export function refactorLegalForms(table) {
  const result = {};

  table.forEach((object) => {
    if (object.parent_type === null) {
      result[object.code] = object;
    }
  });

  Object.keys(result).forEach((key) => {
    const arr = {};
    table.forEach((object) => {
      if (object.parent_type && object.parent_type === key) {
        arr[object.code] = object;
      }
    });
    result[key].children = arr;
  });

  Object.keys(result).forEach((key) => {
    Object.keys(result[key].children).forEach((child) => {
      const arr = {};
      table.forEach((object) => {
        if (object.parent_type && object.parent_type === child) {
          arr[object.code] = object;
        }
      });
      if (Object.keys(arr).length !== 0) {
        result[key].children[child].children = arr;
      };
    });
  });

  console.log(result)
};
