module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
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

function create(skill) {
    skill.id = Date.now() % 1000000;
    skill.level = 'low'
    skill.enjoys = false
    skills.push(skill);
}

function deleteOne(id) {
    id = parseInt(id);
    idx = skills.findIndex(skill => id === skill.id);
    skills.splice(idx, 1);
}

function update(id, updatedSkill) {
    id = parseInt(id)
    let skill = skills.find(skill => id === skill.id)
    Object.assign(skill, updatedSkill)
}