import {log} from './helpers';

const peopleArray = [
    ['T-Bone', 'LD', 'Ty Muggs', 'Big Lou'], 
    ['Tootie', 'Ba', 'Kev-o'], 
    [[[['Pingo', 'Cat-09','Stillz']]], 'Big Lata', 'Ronny Stax'],
    [[[[[['Don Kitten'], ['Timfo'], ['Drayton'], ['Ferg']]]]]]
];

const flattenData = (data = peopleArray) => [].concat(...data);

log('peopleArray')(flattenData().flat(Infinity))