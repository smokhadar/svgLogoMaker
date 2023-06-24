const colors = ['black', ,'brown', 'gold','pink', 'orange', 'white', 'blue', 'green', 'purple', 'red', 'yellow' ];

const regex = new RegExp(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/);

module.exports.cNames = colors;
module.exports.Regex = regex;