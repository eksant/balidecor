const uuidv4 = require('uuid/v4')

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
  {
    id: uuidv4(),
    enum_category: 'status',
    enum_key: 'active',
    enum_value: 'Active',
    enum_order: 3,
  },
  {
    id: uuidv4(),
    enum_category: 'status',
    enum_key: 'disable',
    enum_value: 'Disable',
    enum_order: 4,
  },
  {
    id: uuidv4(),
    enum_category: 'rules',
    enum_key: 'admin',
    enum_value: 'Admin',
    enum_order: 5,
  },
  {
    id: uuidv4(),
    enum_category: 'rules',
    enum_key: 'user',
    enum_value: 'User',
    enum_order: 6,
  },
]
