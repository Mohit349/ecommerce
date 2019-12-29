const express = require('express');
const mongoose = require("mongoose");
const ProductVarient = require('./models/ProductVariantsModel');
const Attribute = require('./models/AttributeModel');
const Option = require('./models/OptionModel');
const app = express();
var escape = require('escape-regexp');



mongoose.connect('mongodb://localhost:27017/ecommerece', {
    useNewUrlParser: true,
    useCreateIndex: true,
})
    .then(() => console.log('Now connected to MongoDB!'))
    .catch(err => console.error('Something went wrong', err));

app.get('/api/v1/details/:id', async (req, res) => {
    let outout = {};
    const productVarient = await ProductVarient.findOne({ _id: req.params.id });
    outout.product = productVarient;

    if (productVarient.option_ids && productVarient.product_id) {
        const variants = await ProductVarient.find({ product_id: productVarient.product_id, _id: { $ne: req.params.id } });
        outout.variants = variants;
        const options = await Option.find({ _id: { $in: productVarient.option_ids } });
        const attributeIds = options.map(one => one.attribute_id);
        const attributes = await Attribute.find({ _id: { $in: attributeIds } });
        outout.attributes = attributes;
        const optionsValues = await Option.find({ attribute_id: { $in: attributeIds }, product_id: productVarient.product_id });
        outout.options = optionsValues;

    }
    res.status(200).json({
        status: "success",
        data:outout
    })

})
app.get('/api/v1/list', async (req, res) => {
    const { name, filters } = req.query;
    let query = {};
    if (name) {
        query = { name: { $regex: `${escape(req.query.name)}`, $options: 'i' } };
    }
    if (filters) {
        const filters = JSON.parse(req.query.filters);
        await Promise.all(filters.map(async element => {
            const attribute = Object.keys(element)[0];
            const values = element[attribute].split(',');
            const attributeId = await Attribute.findOne({ name: { $regex: attribute, $options: "i" } }, { _id: 1 });
            let optionIds = await Option.find({ "attribute_id": attributeId, name: { $in: values } });
            optionIds = optionIds.map(one => one._id);
            query.option_ids = { $elemMatch: { $in: optionIds } };

        }));
    }
    const purchaseAbles = await ProductVarient.find(query);
    res.status(200).json({
        status: "success",
        results: purchaseAbles.length,
        data: {
            purchaseAbles
        }
    })
});
const port = 5000;
app.listen(port, () => {
    console.log(`server is running on ${port}`);
});

