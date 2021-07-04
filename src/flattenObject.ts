const obj = {
  firstName: 'Adrien',
  lastName: 'Gentizon',
  age: 40,
  locations: [
    {
      city: 'Paris',
      zipcode: '75011',
    },
    {
      city: 'Aix-en-Provence',
      zipcode: '13100',
      gps: {
        longitude: 42.56879,
        latitude: 2.1579,
      },
    },
  ],
  hobbies: ['foot', 'roller', 'velo', 'ski', 'trail', 'menuiserie'],
};

function flattenObject(entity: any, parentKey: string | undefined = undefined) {
  const entries = Object.entries(entity);

  let result: any = {};

  for (const entry of entries) {
    const [key, value] = entry;
    const composedKey = parentKey ? `${parentKey}_${key}` : key;

    if (!(value instanceof Object))
      result = { ...result, [composedKey]: value };
    else result = { ...result, ...flattenObject(value, composedKey) };
  }
  return result;
}

console.log(flattenObject(obj));
