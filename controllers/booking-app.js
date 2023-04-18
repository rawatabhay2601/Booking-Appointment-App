const User = require("../models/booking-users");

exports.createBooking = async (req,res,next) => {

    try {
        const name = req.body.nameValue;
        const email = req.body.emailValue;
        const phoneNumber = req.body.phoneNumberValue;

        const data = await User.create( {name:name, email:email, phoneNumber:phoneNumber});
        res.status(201).json({UsersDetails : data});
    }

    catch(err){
        console.log(`Error while writing data to database : ${err}`);
        res.status(500);
    }
};

exports.deleteBooking = async (req, res, next) => {
   
    try {
        const deleteMsg = await User.destroy({ where: {id: req.params.primaryKey} });
        console.log('Item Deleted');
        console.log(deleteMsg);
        res.status(201).json({response : deleteMsg});
    }
    catch(err){
        console.log(`Error while writing data to database : ${err}`);
        res.status(500);
    }
};

exports.editBooking = async (req, res, next) => {
    
        try {
            const editMsg = await User.destroy({ where: {id: req.params.primaryKey} });
            console.log('Item Removed');
            console.log(editMsg);
            res.status(201).json({response : editMsg});
        }
        catch(err){
            console.log(`Error while writing data to database : ${err}`);
            res.status(500);
        }
};