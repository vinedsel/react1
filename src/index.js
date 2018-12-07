import React from 'react';
import ReactDOM from 'react-dom';


const color1 = React.createElement('li', {}, 'green');
const color2 = React.createElement('li', {}, 'blue');
const color3 = React.createElement('li', {}, 'red');

const artist1 = React.createElement('li', {}, 'GWAR');
const artist2 = React.createElement('li', {}, 'Chrome');
const artist3 = React.createElement('li', {}, 'KISS');

const food1 = React.createElement('li', {}, 'Waffles');
const food2 = React.createElement('li', {}, 'Chocolate');
const food3 = React.createElement('li', {}, 'Cheeseburgers');

const site1 = React.createElement('li', {}, React.createElement('a', {href: 'https://www.google.com'}, 'Google'));
const site2 = React.createElement('li', {}, React.createElement('a', {href: 'https://www.facebook.com'}, 'Facebook'));
const site3 = React.createElement('li', {}, React.createElement('a', {href: 'https://www.instagram.com'}, 'Instagram'));

ReactDOM.render(
  React.createElement('div', {},
    React.createElement('h1', {}, 'My Favorite Things'),
    React.createElement(
      'ul', {},
    ),
    React.createElement('li', {},
      'Colors',
      React.createElement('ol', {}, color1, color2, color3)
    ),
    React.createElement(
      'ul', {},
    ),
    React.createElement('li', {},
      'Artists',
      React.createElement('ol', {}, artist1, artist2, artist3)
    ),
    React.createElement(
      'ul', {},
    ),
    React.createElement('li', {},
      'Food',
      React.createElement('ol', {}, food1, food2, food3)
    ),
    React.createElement(
      'ul', {},
    ),
    React.createElement('li', {},
      'Sites',
      React.createElement('ol', {}, site1, site2, site3)
    )
  ),

  document.getElementById('root')
);
