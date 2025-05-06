const userModel = require("../models/user")
  exports.getHome = (req,res) =>{
    const users = userModel.getAll();
    res.render('users/index',{users});
  }


  exports.getAddUser = (req, res) => {
    const { name, address, email, contact } = req.body;  
    console.log('Form Submitted:', { name, address, email, contact });  
    userModel.add({ name, address, email, contact });
    res.redirect('/');
  };

  exports.viewUser = (req, res) => {
    const userId = req.params.id;
    const user = userModel.getById(userId);
  
    if (!user) {
      return res.status(404).send('User not found');
    }
  
    res.render('users/view', { user });
  };

  exports.updateUser = (req, res) => {
    res.render('/update')
    // const { id } = req.params;
    // const { name, address, email, contact } = req.body;
  
    // const user = {
    //   id,
    //   name,
    //   address,
    //   email,
    //   contact
    // };
  
    // userModel.update(user);
    // res.redirect('/');
  };

  exports.deleteUser = (req, res) => {
    const userId = req.params.id;
  
    userModel.delete(userId, (err, success) => {
      if (err) {
        console.error('Delete error:', err);
        return res.status(500).send('Delete failed');
      }
  
      if (!success) {
        return res.status(404).send('User not found');
      }
  
      // Deletion was successful
      res.redirect('/');
    });
  };
  