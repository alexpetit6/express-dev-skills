module.exports = {
    getAll,
    getOne
};

const skills = [
    {id: 123456, name: 'Javascript', level: 'low', enjoys: true},
    {id: 123455, name: 'Digging', level: 'high', enjoys: false},
    {id: 123454, name: 'Rock Climbing', level: 'medium', enjoys: true},
    {id: 123453, name: 'Surfing', level: 'low', enjoys: true},
    {id: 123459, name: 'Window Washing', level: 'high', enjoys: false},
];

function getAll() {
    return skills;
}

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => id === skill.id)
}
