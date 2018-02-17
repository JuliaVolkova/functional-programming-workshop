'use strict';

const oneMoreArray = [
    {
        message: 'The map() method creates a new array with the results of calling a provided function on every element in the calling array.'
    },
    {
        message: 'I hate long strings'
    },
    {
        message: 'One more short string'
    }
];

function getShortMessages(messages) {
    return messages
        .map(item => (
            item.message
        ))
        .filter(message => (
        message.length < 50
    ));
}

getShortMessages(oneMoreArray);

module.exports = getShortMessages;
