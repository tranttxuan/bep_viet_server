require("dotenv").config();
require("../configs/dbConnnection");
const mongoose = require("mongoose");
const ProductModel = require("./../models/Product");

const products = [
    {
        name: "Bo Bun Nem",
        image: "https://www.foodland.at/sub/foodland.sk/images/articles-images/BUN%20BO%20NAM%20BO.jpg",
        category: "Plats",
        ingredients: ["nems", "vermicelles de riz", "cacahuètes", "salade composée", "sauce maison"],
        isVegan: false,
        price: 9.00,
    },
    {
        name: "Bo Bun Boeuf",
        image: "https://www.foodland.at/sub/foodland.sk/images/articles-images/BUN%20BO%20NAM%20BO.jpg",
        category: "Plats",
        ingredients: ["nems", "wok de boef", "vermicelles de riz", "cacahuètes", "salade composée", "sauce maison"],
        isVegan: false,
        price: 9.10,
    },
    {
        name: "Bo Bun Crevettes",
        image: "https://www.foodland.at/sub/foodland.sk/images/articles-images/BUN%20BO%20NAM%20BO.jpg",
        category: "Plats",
        ingredients: ["nems", "crevettes", "vermicelles de riz", "cacahuètes", "salade composée", "sauce maison"],
        isVegan: false,
        price: 10,
    },
    {
        name: "Bo Bun Crevettes",
        image: "https://www.foodland.at/sub/foodland.sk/images/articles-images/BUN%20BO%20NAM%20BO.jpg",
        category: "Plats",
        ingredients: ["tofus", "vermicelles de riz", "cacahuètes", "salade composée", "sauce maison"],
        isVegan: true,
        price: 8,
    },
    {
        name: "Bo Bun Nem",
        image: "https://www.foodland.at/sub/foodland.sk/images/articles-images/BUN%20BO%20NAM%20BO.jpg",
        category: "Plats",
        ingredients: ["nems", "vermicelles de riz", "cacahuètes", "salade composée", "sauce maison"],
        isVegan: false,
        price: 9,
    },
    {
        name: "Bo Bun Boeuf",
        image: "https://www.foodland.at/sub/foodland.sk/images/articles-images/BUN%20BO%20NAM%20BO.jpg",
        category: "Plats",
        ingredients: ["nems", "wok de boef", "vermicelles de riz", "cacahuètes", "salade composée", "sauce maison"],
        isVegan: false,
        price: 9,
    },
    {
        name: "Bo Bun Crevettes",
        image: "https://www.foodland.at/sub/foodland.sk/images/articles-images/BUN%20BO%20NAM%20BO.jpg",
        category: "Plats",
        ingredients: ["nems", "crevettes", "vermicelles de riz", "cacahuètes", "salade composée", "sauce maison"],
        isVegan: false,
        price: 10,
    },
    {
        name: "Bo Bun Crevettes",
        image: "https://www.foodland.at/sub/foodland.sk/images/articles-images/BUN%20BO%20NAM%20BO.jpg",
        category: "Plats",
        ingredients: ["tofus", "vermicelles de riz", "cacahuètes", "salade composée", "sauce maison"],
        isVegan: true,
        price: 8.50,
    },
    {
        name: "Bo Bun Boeuf",
        image: "https://www.foodland.at/sub/foodland.sk/images/articles-images/BUN%20BO%20NAM%20BO.jpg",
        category: "Plats",
        ingredients: ["nems", "wok de boef", "vermicelles de riz", "cacahuètes", "salade composée", "sauce maison"],
        isVegan: false,
        price: 9,
    },
    {
        name: "Bo Bun Crevettes",
        image: "https://www.foodland.at/sub/foodland.sk/images/articles-images/BUN%20BO%20NAM%20BO.jpg",
        category: "Plats",
        ingredients: ["nems", "crevettes", "vermicelles de riz", "cacahuètes", "salade composée", "sauce maison"],
        isVegan: false,
        price: 10,
    },
    {
        name: "Bo Bun Crevettes",
        image: "https://www.foodland.at/sub/foodland.sk/images/articles-images/BUN%20BO%20NAM%20BO.jpg",
        category: "Plats",
        ingredients: ["tofus", "vermicelles de riz", "cacahuètes", "salade composée", "sauce maison"],
        isVegan: true,
        price: 8,
    },
    {
        name: "Bo Bun Nem",
        image: "https://www.foodland.at/sub/foodland.sk/images/articles-images/BUN%20BO%20NAM%20BO.jpg",
        category: "Plats",
        ingredients: ["nems", "vermicelles de riz", "cacahuètes", "salade composée", "sauce maison"],
        isVegan: false,
        price: 9,
    },
    {
        name: "Beer Sai Gon",
        image: "https://www.totalwine.com/dynamic/490x/media/sys_master/twmmedia/h98/h69/11464024588318.png",
        category: "Boissons",
        ingredients: [],
        isVegan: false,
        price: 9,
    },
    {
        name: "Beer Sai Gon",
        image: "https://www.totalwine.com/dynamic/490x/media/sys_master/twmmedia/h98/h69/11464024588318.png",
        category: "Boissons",
        ingredients: [],
        isVegan: false,
        price: 10,
    },
    {
        name: "Beer Sai Gon",
        image: "https://www.totalwine.com/dynamic/490x/media/sys_master/twmmedia/h98/h69/11464024588318.png",
        category: "Boissons",
        ingredients: [],
        isVegan: true,
        price: 8,
    },
    {
        name: "Vietnam",
        image: "https://d1ralsognjng37.cloudfront.net/628b9bb2-d26f-4bce-935b-ec7b633d01f7",
        category: "Menus",
        ingredients: ["Bo Bun Nem","Beer Sai Gon", "2 Nems"],
        isVegan: true,
        price: 15,
    },
    {
        name: "Vietnam",
        image: "https://d1ralsognjng37.cloudfront.net/628b9bb2-d26f-4bce-935b-ec7b633d01f7",
        category: "Menus",
        ingredients: ["Bo Bun Nem","Beer Sai Gon", "2 Nems"],
        isVegan: true,
        price: 15,
    },
    {
        name: "Vietnam",
        image: "https://d1ralsognjng37.cloudfront.net/628b9bb2-d26f-4bce-935b-ec7b633d01f7",
        category: "Menus",
        ingredients: ["Bo Bun Nem","Beer Sai Gon", "2 Nems"],
        isVegan: true,
        price: 15,
    },
    {
        name: "Vietnam",
        image: "https://d1ralsognjng37.cloudfront.net/628b9bb2-d26f-4bce-935b-ec7b633d01f7",
        category: "Menus",
        ingredients: ["Bo Bun Nem","Beer Sai Gon", "2 Nems"],
        isVegan: true,
        price: 15,
    },
    {
        name: "Vietnam",
        image: "https://d1ralsognjng37.cloudfront.net/628b9bb2-d26f-4bce-935b-ec7b633d01f7",
        category: "Menus",
        ingredients: ["Bo Bun Nem","Beer Sai Gon", "2 Nems"],
        isVegan: true,
        price: 15,
    },
    {
        name: "Vietnam",
        image: "https://d1ralsognjng37.cloudfront.net/628b9bb2-d26f-4bce-935b-ec7b633d01f7",
        category: "Menus",
        ingredients: ["Bo Bun Nem","Beer Sai Gon", "2 Nems"],
        isVegan: true,
        price: 15,
    },
]

// empty the db
ProductModel.deleteMany()
    .then(async () => {
        // insert all robots
        const insertedProducts = await ProductModel.insertMany(products);
        // print result
        console.log(`ok : ${insertedProducts.length} products inserted`);
    })
    .then(() => mongoose.disconnect())
    .catch((err) => {
        console.log(err);
    });