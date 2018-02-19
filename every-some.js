const goodUsers = [
    { id: 1 },
    { id: 2 },
    { id: 3 }
];


const checkUsersValid = goodUsers => submittedUsers =>
    submittedUsers.every(user => goodUsers.includes(user));

// OR USING .INCLUDES():

// const checkUsersValid = goodUsers => submittedUsers =>
//     submittedUsers.every(user => goodUsers.some(goodUser => goodUser.id === user.id));

module.exports = checkUsersValid;
