const Course = require('../models/Course');
const { mongooseToObject } = require('../../util/mongoose');

class CoursesController {

    // [POST] /courses/store to create logic
    store(req, res, next) {
        const FormData = req.body;
        FormData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
        const course = new Course(FormData);

        course.save()
            .then(() => res.redirect('/'))
            .catch(next)
    }

    // [GET] /courses/create to generate UI
    create(req, res, next) {
        res.render('courses/create');
    }

    // [GET] /courses/:slug
    show(req, res, next) {

        Course.findOne({ slug: req.params.slug })
            .then(
                course =>
                    res.render(
                        'courses/detail',
                        { course: mongooseToObject(course) }
                    )
            )
            .catch(next);
    }

}

module.exports = new CoursesController;
