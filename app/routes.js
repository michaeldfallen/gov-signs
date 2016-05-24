var express = require('express');
var router = express.Router();

var colours = [
  { 'name': 'purple',      'bg': '#2e358b', 'fg': '#fff'    },
  { 'name': 'mauve',       'bg': '#6f72af', 'fg': '#fff'    },
  { 'name': 'fuschia',     'bg': '#912b88', 'fg': '#fff'    },
  { 'name': 'pink',        'bg': '#d53880', 'fg': '#fff'    },
  { 'name': 'baby-pink',   'bg': '#f499be', 'fg': '#0b0c0c' },
  { 'name': 'red',         'bg': '#b10e1e', 'fg': '#fff'    },
  { 'name': 'mellow-red',  'bg': '#df3034', 'fg': '#fff'    },
  { 'name': 'orange',      'bg': '#f47738', 'fg': '#0b0c0c' },
  { 'name': 'brown',       'bg': '#b58840', 'fg': '#0b0c0c' },
  { 'name': 'yellow',      'bg': '#ffbf47', 'fg': '#0b0c0c' },
  { 'name': 'grass-green', 'bg': '#85994b', 'fg': '#0b0c0c' },
  { 'name': 'green',       'bg': '#006435', 'fg': '#fff'    },
  { 'name': 'turquoise',   'bg': '#28a197', 'fg': '#0b0c0c' },
  { 'name': 'light-blue',  'bg': '#2b8cc4', 'fg': '#0b0c0c' },
  { 'name': 'black',       'bg': '#0b0c0c', 'fg': '#fff'    },
  { 'name': 'grey-1',      'bg': '#6f777b', 'fg': '#fff'    },
  { 'name': 'grey-2',      'bg': '#bfc1c3', 'fg': '#0b0c0c' },
  { 'name': 'grey-3',      'bg': '#dee0e2', 'fg': '#0b0c0c' },
  { 'name': 'grey-4',      'bg': '#f8f8f8', 'fg': '#0b0c0c' },
  { 'name': 'white',       'bg': '#fff'   , 'fg': '#0b0c0c' },
];

router.get('/', function (req, res) {
  res.render('index', { 'colours': colours });
});

router.get('/sign', function(req, res) {
  var title = req.query.title;
  var subtitle = req.query.subtitle;
  var colour = colours.filter(function(item) {
    return item.name === req.query.colour;
  })[0];

  console.log('params', [title, subtitle, colour]);

  res.render('sign', {
    title: title,
    subtitle: subtitle,
    colour: colour
  });
});

module.exports = router;
