const { successResponse } = require('../helpers/response.js');

// menggunakan dummy user
class User {
  constructor() {
    this.user = [
      {
        'text': 'akun 1',
        'username': 'mulder',
        'password': 'mulder123',
      },
      {
        'text': 'akun 2',
        'username': 'samsul',
        'password': 'samsul123',
      },
    ];
  }

  // membuat CRUD routing user
  getUser = (req, res) => {
    successResponse(
      res,
      200,
      this.user
    )
  };

  insertUser = (req, res) => {
    const body = req.body

    const param = {
      'text': body.text,
      'username': body.username,
      'password': body.password
    }
  
    this.user.push(param)

    successResponse(
      res,
      201,
      param
    )
  };

  updateUser = (req, res) => {
    const index = req.params.index
    const body = req.body
    

    this.user[index].text = body.text
    this.user[index].username = body.username
    this.user[index].password = body.password
    
    successResponse(
      res,
      200,
      this.user[index]
    )
  };

  deleteUser = (req, res) => {
    const index = req.params.index

    this.user.splice(index, 1);
    
    successResponse(
      res,
      200,
      null
    )
  };
}

module.exports = User;
