const uuidv4 = require('uuid/v4');

module.exports = [
  {
    id: uuidv4(),
    enum_category: 'gender',
    enum_key: 'male',
    enum_value: 'Male',
    enum_order: 1,
  },
  {
    id: uuidv4(),
    enum_category: 'gender',
    enum_key: 'female',
    enum_value: 'Female',
    enum_order: 2,
  },
];