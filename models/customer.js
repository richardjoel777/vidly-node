const Joi = require('joi');
const mongoose = require('mongoose');

const customerSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
          },
    number: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    isGold: {
        type: Boolean,
        default: false
    }
        }
    );

    function validateCustomer(customer) {
        const schema = Joi.object(
            {    name: Joi.string().min(5).max(50).required(),
                 number : Joi.string().min(5).max(50).required(),
                 isGold: Joi.boolean()
             }
                );
        return schema.validate(customer);        
    }    

    const Customer = new mongoose.model('Customer', customerSchema );   

exports.Customer = Customer;
exports.validate = validateCustomer;
exports.customerSchema = customerSchema;
