const db = require("../models");
const CaigouState = db.CaigouState;
const Op = db.Sequelize.Op;
const Dept = db.dept;
//新建企业评级controller
exports.create = (req, res) => {
  // Validate request
  if (!req.body.nodeName) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  //新增
  const CaigouStates = {
    nodeName:req.body.nodeName,
    
  };
  corefirmState.create(CaigouStates)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the CaigouState."
      });
    });
};

//从数据库查找所有，模糊查询
exports.findAll = (req, res) => {
    // const title = req.query.title;
    // var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
    CaigouState.findAll({include : [Dept]})
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving CaigouState."
        });
      });
};

// 根据id查询
exports.findOne = (req, res) => {
    // const id = req.params.id;

    CaigouState.findOne({ where: { id: req.params.id },include : [Dept] })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving CaigouState with id="
        });
      });
};


//修改
exports.update = (req, res) => {
    const id = req.params.id;
    CaigouState.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "CaigouState was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update CaigouState with id=${id}. Maybe CaigouState was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating CaigouState with id=" + id
        });
      });
};

//删除
exports.delete = (req, res) => {
    const id = req.params.id;
    CaigouState.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "CaigouState was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete CaigouState with id=${id}. Maybe CaigouState was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete CaigouState with id=" + id
        });
      });
};
