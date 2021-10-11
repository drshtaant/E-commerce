const mongoose = require('mongoose');
const Product = require('./models/product');


const products = [
    {
        name: "BASMATI RICE",
        img: "https://m.media-amazon.com/images/I/71r769YkscL._SY606_.jpg",
        price: 1000,
        desc:"Basmati rice comes in two varieties, white and brown. Both have a nutty taste and a distinct smell. White basmati, however, is more processed. The hull, bran, and germ are all removed. With brown basmati, only the hull gets removed. Both types make for a delicious and healthy addition to your diet."
    },
    {
        name: "MASOOR DAL",
        img: "https://images-na.ssl-images-amazon.com/images/I/71anyGuENLL._SX522_.jpg",
        price: 900,
        desc:"Masoor dal is an important part of the diet in many parts of the world, especially in the Indian subcontinent, which has a large vegetarian population. It is basically split lentil without skin and is red in colour. ... As the name suggests, this refers to masoor dal that has been boiled.."
    },
    {
        name: "STRAWBERRY",
        img: "https://images-na.ssl-images-amazon.com/images/I/517EtiEiCVL.jpg",
        price: 200,
        desc:"he garden strawberry is a widely grown hybrid species of the genus Fragaria, collectively known as the strawberries, which are cultivated worldwide for their fruit. The fruit is widely appreciated for its characteristic aroma, bright red color, juicy texture, and sweetness."
    },
    {
        name: "BISCUITS",
        img: "https://images-na.ssl-images-amazon.com/images/I/71t9fgZv9xS._SL1500_.jpg",
        price: 150,
        desc:"A biscuit is a flour-based baked food product. In most countries, particularly in the Commonwealth and Ireland, biscuits are typically hard, flat and unleavened. They are usually sweet and may be made with sugar, chocolate, icing, jam, ginger or cinnamon. They can also be savoury and similar to crackers.."
    },
    {
        name: "SALT",
        img: "https://lh3.googleusercontent.com/proxy/UC21pT0pwkz0__wXvfzNqr-Xyq9wfPOVgDuHC-HHdFNF7gsDt9b_vNNZlV1XnfR7YY7zFkCLpTLGoNroeoZoNoRNbWsskjlEwrcPfBwUEujGrqvzgISIFgFQJ_dgOKe8uW_Tqe1pyoL3AkJdXMKZqAZU",
        price: 100,
        desc:"Salt is a mineral composed primarily of sodium chloride (NaCl), a chemical compound belonging to the larger class of salts; salt in the form of a natural crystalline mineral is known as rock salt or halite. Salt is present in vast quantities in seawater.."
    },
    {
        name: "SUGAR",
        img: "https://images-na.ssl-images-amazon.com/images/I/814E1Xi2ZDL._SL1500_.jpg",
        price: 120,
        desc:"Sugar is the generic name for sweet-tasting, soluble carbohydrates, many of which are used in food. Table sugar, granulated sugar, or regular sugar, refers to sucrose, a disaccharide composed of glucose and fructose. Simple sugars, also called monosaccharides, include glucose, fructose, and galactose.."
    },
    {
        name: "BADAAM",
        img: "https://leevedryfruits.com/wp-content/uploads/2019/08/3.jpg",
        price: 1000,
        desc:"The almond (Prunus dulcis, syn. Prunus amygdalus) is a species of tree native to Iran and surrounding countries[3][4] but widely cultivated elsewhere. The almond is also the name of the edible and widely cultivated seed of this tree. Within the genus Prunus, it is classified with the peach in the subgenus Amygdalus, distinguished from the other subgenera by corrugations on the shell (endocarp) surrounding the seed."
    },
    {
        name: "Iphone 12",
        img: "https://images.unsplash.com/photo-1605637064671-c03a5fae76cd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGlwaG9uZSUyMDEyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 10000,
        desc:"The iPhone is a line of smartphones designed and marketed by Apple Inc. that use Apple's iOS mobile operating system. The first-generation iPhone was announced by former Apple CEO Steve Jobs on January 9, 2007. Since then Apple has annually released new iPhone models and iOS updates. As of November 1, 2018, more than 2.2 billion iPhones had been sold."
    },
    {
        name: "Macbook Pro",
        img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFjYm9va3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 900000,
        desc:"The iPhone is a line of smartphones designed and marketed by Apple Inc. that use Apple's iOS mobile operating system. The first-generation iPhone was announced by former Apple CEO Steve Jobs on January 9, 2007. Since then Apple has annually released new iPhone models and iOS updates. As of November 1, 2018, more than 2.2 billion iPhones had been sold."
    },
    {
        name: "Titan Watch",
        img: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d2F0Y2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 20000,
        desc:"The iPhone is a line of smartphones designed and marketed by Apple Inc. that use Apple's iOS mobile operating system. The first-generation iPhone was announced by former Apple CEO Steve Jobs on January 9, 2007. Since then Apple has annually released new iPhone models and iOS updates. As of November 1, 2018, more than 2.2 billion iPhones had been sold."
    },
    {
        name: "HP Laptop",
        img: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bGFwdG9wfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 10000,
        desc:"The iPhone is a line of smartphones designed and marketed by Apple Inc. that use Apple's iOS mobile operating system. The first-generation iPhone was announced by former Apple CEO Steve Jobs on January 9, 2007. Since then Apple has annually released new iPhone models and iOS updates. As of November 1, 2018, more than 2.2 billion iPhones had been sold."
    },
    {
        name: "Rolex",
        img: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8d2F0Y2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 10000,
        desc:"The iPhone is a line of smartphones designed and marketed by Apple Inc. that use Apple's iOS mobile operating system. The first-generation iPhone was announced by former Apple CEO Steve Jobs on January 9, 2007. Since then Apple has annually released new iPhone models and iOS updates. As of November 1, 2018, more than 2.2 billion iPhones had been sold."
    },
    {
        name: "BoAt Headphones",
        img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGVhZHBob25lc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 10000,
        desc:"The iPhone is a line of smartphones designed and marketed by Apple Inc. that use Apple's iOS mobile operating system. The first-generation iPhone was announced by former Apple CEO Steve Jobs on January 9, 2007. Since then Apple has annually released new iPhone models and iOS updates. As of November 1, 2018, more than 2.2 billion iPhones had been sold."
    },
    {
        name: "Drone",
        img: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZHJvbmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 10000,
        desc:"The iPhone is a line of smartphones designed and marketed by Apple Inc. that use Apple's iOS mobile operating system. The first-generation iPhone was announced by former Apple CEO Steve Jobs on January 9, 2007. Since then Apple has annually released new iPhone models and iOS updates. As of November 1, 2018, more than 2.2 billion iPhones had been sold."
    },

]

const seedDB = async ()=>{
    
    await Product.insertMany(products);
    console.log("DB Seeded");
}

module.exports = seedDB;
