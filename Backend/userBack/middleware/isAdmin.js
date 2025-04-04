const isAdmin = (req, res, next) => {

    if(req.user?.role !== "admin"){
      return res.send({ message: 'you are not eligible for this task!', success: false });
    }


    next()


};




module.exports = { isAdmin };
