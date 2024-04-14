import product_1 from '../Assets/product_1.png' ;
import product_2 from '../Assets/product_2.png'  ;
import product_3 from '../Assets/product_3.png'  ;
import product_4 from '../Assets/product_4.png' ;
import product_5 from '../Assets/product_5.png' ;
import p1_img from "./product_12.jpg";
import p2_img from "./product_35.jpg";
import p3_img from "./product_14.jpg";
import p4_img from './product_36.jpg';
import p5_img from './product_37.jpg';
import p6_img from './product_38.jpg';
import p7_img from './almonds_dry.png';
import p8_img from './fig_1.png';

  let all_products = [
            {
                id: 1,
                name: 'Cardamon',
                category: "spices",
                image: product_1,

                // description: 'A fragrant spice commonly used in both sweet and savory dishes.',
                new_price: 1000.00,
                old_price:1100.50,
            },
            {
                id: 2,
               
                name: 'Black Pepper',
                category: "spices",
                image: product_2,
                // description: 'Adds heat and bold flavor to a variety of dishes.',
                new_price: 600.00,
                old_price:610.50,
            },
            {
        id: 3,
       
        name: 'Cinnamon',
        category: "spices",
        image: product_3,
        // description:'With its uniquely sweet and warming taste, this spice has served medicinal purposes since ancient times.',
        new_price: 400.00,
        old_price:405.50,
    },
    {
        id: 4,
       
        name: 'Dry Ginger',
        category: "spices",
        image: product_4,
        // description: 'Dry ginger holds a crucial place in Indian cuisine, being an essential spice in curries, biscuits, cakes, and candies.',
        new_price: 1100.50,
        old_price:1110.00,
    },
    {
        id:5,
       
        name: 'Clove',
        category: "spices",
        image:product_5,
        // description:'Clove, a pungent and warm spice, boasts an intense flavor and aroma. Its sweet and spicy taste makes it a staple in Indian and global cuisines, particularly in traditional Indian dishes.',
        new_price:300.00,
        old_price:310.50,
    },
    {
        id: 12,
        name: "Coffee Seed",
        category: "NotAvailable",
        image: p1_img,
        new_price: 500.0,
        old_price: 580.5,
      },
      {
        id: 35,
        name: "Cambodge",
        category: "NotAvailable",
        image: p2_img,
        new_price: 185.0,
        old_price: 170.5,
      },
      {
        id: 14,
        name: "Nutmeg",
        category: "NotAvailable",
        image: p3_img,
        new_price: 600.0,
        old_price: 580.5,
      },
      {
        id: 15,
        name: "Black Cardamon Seeds",
        category: "NotAvailable",
        image: p4_img,
        new_price: 1200.0,
        old_price: 1220.5,
      },
      {
        id: 16,
        name: "Red Jaithi",
        category: "NotAvailable",
        image: p5_img,
        new_price: 650.0,
        old_price: 680.5,
      },
      {
        id: 14,
        name: "Nuts",
        category: "NotAvailable",
        image: p6_img,
        new_price: 800.0,
        old_price: 820.5,
      },
      {
        id: 19,
        name: "Dry-Almonds",
        category: "NotAvailable",
        image: p7_img,
        new_price: 890.0,
        old_price: 900.5,
      },
      {
        id: 20,
        name: "Fig",
        category: "NotAvailable",
        image: p8_img,
        new_price: 900.0,
        old_price: 910.5,
      },
        ];
export default all_products;