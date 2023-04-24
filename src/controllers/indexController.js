
const db = require('../database/models');
const{Op}= require('sequelize');
module.exports = {
    home : (req, res) => {
        /* toda la lógica!!! */
        const newCourses = db.Course.findAll({
       order: [['createdAt','DESC']],
            limit : 4,
            include:['images']
        });
        const saleCourses = db.Course.findAll({
        where : {
            discount : {[Op.ne] : 0
            },
        },
        include:['images']
      });
      const courses = db.Course.findAll({ include:['images'] });
      Promise.all([newCourses,saleCourses, courses])
      .then(([newCourses, saleCourses,courses]) =>{
   
        return res.render('home',{
          title : "Kitchening | HOME",
          courses,
          newCourses,
          saleCourses,
      })
        })
        .catch((error)=> console.log(error)) 
      },
      admin: (req, res) => {
        db.Course.findAll({
          include:[
            {association : 'images',
          attributes: ['primary','name']},
          {association: 'chef',
        attributes : ['name']}
          ]
        })
        .then(courses=>{
          return res.render("dashboard", {
            courses,
          });
        })
     .catch(error =>(error))
      },
    }; 
