const Skill = require('../models/skill');

module.exports = {
    index,
    show,
    new: newSkill,
    delete: deleteSkill,
    create,
    edit,
    update
};

function index(req, res) {
    res.render('skills/index', {
        title: 'Skills',
        skills: Skill.getAll()
    })
}

function show(req, res) {
    res.render('skills/show', {
        skill: Skill.getOne(req.params.id),
        title: ''
    })
}

function newSkill(req, res) {
    res.render('skills/new', {
        title: 'Add new Skill'
    });
}

function create(req, res) {
    Skill.create(req.body);
    res.redirect('/skills');
}

function deleteSkill(req, res) {
    Skill.deleteOne(req.params.id);
    res.redirect('/skills');
}

function edit(req, res) {
    res.render('skills/edit', {
        skill: Skill.getOne(req.params.id),
        title: 'Edit Skill'
    })
}

function update(req, res) {
    req.body.enjoys = !!req.body.enjoys
    Skill.update(req.params.id, req.body);
    res.redirect(`/skills/${req.params.id}`)
}