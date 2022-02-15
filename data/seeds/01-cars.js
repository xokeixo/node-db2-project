// STRETCH
const cars = [
    {
        vin: '5FNYF18675B012932',
        make: 'toyota',
        model: 'prius',
        mileage: 215000,
        title: 'clean',
        transmission: 'manual'
    },
    {
        vin: '1HGEM21292L076275',
        make: 'toyota',
        model: 'corolla',
        mileage: 115000,
        title: 'salvage'
    },
    {
        vin: '3GNFK12387G374516',
        make: 'ford',
        model: 'focus',
        mileage: 21500
    },
] 

exports.seed = async function (knex) {
    await knex('cars').truncate();
    await knex('cars').insert(cars);
}

// exports.seed = function(knex) {
//     return knex('cars')
//         .truncate().then(() => {
//             return knex('cars').insert(cars)
//         })
// }