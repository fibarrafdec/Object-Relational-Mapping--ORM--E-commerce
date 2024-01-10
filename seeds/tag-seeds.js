const { Tag } = require('../models');

const tagData = [
  {
    tag_name: 'Rock Music',
  },
  {
    tag_name: 'Pop Music',
  },
  {
    tag_name: 'Blue',
  },
  {
    tag_name: 'Red',
  },
  {
    tag_name: 'Green',
  },
  {
    tag_name: 'White',
  },
  {
    tag_name: 'Gold',
  },
  {
    tag_name: 'Pop Culture',
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
