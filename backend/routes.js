const express = require('express')
const router = express.Router()
const pool = require('./db_connection');
const { Brand, ClothingType, SizeMatching } = require('./models');
// const { Sequelize, DataTypes } = require('sequelize');



router.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next()
})



router.get('/brands', async (req, res) => {
    const brand = req.params.brand;
    try {
        const brands = await Brand.findAll();
        res.json(brands);
    } catch (error) {
        console.error('Error getting shoe sizes by brand: ', error);
        res.status(500).send('Internal Server Error');
    }
});

router.get('/typesofclothing/:brand/', async (req, res) => {
    const brandName = req.params.brand;
    try {
        const brand = await Brand.findOne({
            where: { name: brandName },
            include: [{
                model: SizeMatching,
                include: [ClothingType]
            }]
        });

        if (brand && brand.SizeMatchings) {
            const types = [...new Set(brand.SizeMatchings.map(match => match.ClothingType.name))];
            res.json(types);
        } else {
            res.status(404).send('Brand not found or no clothing types available for this brand.');
        }
    } catch (error) {
        console.error('Error getting types of clothing by brand: ', error);
        res.status(500).send('Internal Server Error');
    }
});


module.exports = router
