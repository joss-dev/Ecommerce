import MongoManager from "../db/mongoManager"; // Ajusta la ruta según tu estructura de proyecto
import User from "../api/user/model";
import Admin from "../api/admin/model";
import Customer from "../api/customer/model";
import Product from "../api/product/model";
import Order from "../api/order/model";
import Cart from "../api/cart/model";
import { faker } from "@faker-js/faker";
import { BcryptUtils } from "../utils/bcrypt.utils";
import { IProduct } from "../api/product/interface";
import { Roles } from "../constants/Roles";
import { Genders } from "../constants/Genders";

// Generar datos aleatorios
const seedData = async () => {
    try {
        // Conectar a la base de datos usando MongoManager
        MongoManager.connect();
        console.log("Conexión a la base de datos establecida.");

        // Limpiar colecciones
        await User.deleteMany({});
        await Admin.deleteMany({});
        await Customer.deleteMany({});
        await Product.deleteMany({});
        await Order.deleteMany({});
        await Cart.deleteMany({});

        // Crear usuarios, administradores y clientes
        

        // Crear productos
        const products : IProduct[] = [];
        for (let i = 0; i < 10; i++) {
            const price = faker.commerce.price({min: 20, max :100, dec: 2});
            const discount = faker.number.int({ min: 0, max: 30 });
            const product = new Product({
                name: faker.commerce.productName(),
                description: faker.commerce.productDescription(),
                price: parseFloat(price),
                discount,
                discountedPrice: parseFloat(price) * (1 - discount / 100),
                category: faker.commerce.department(),
                stock: faker.number.int({ min: 10, max: 100 }),
                imageUrl: faker.image.url(),
                stars: faker.number.int({ min: 0, max: 5 }),
                createdBy: "6723fa5afdc48a624ee10760"
            });
            products.push(product);
        }
        await Product.insertMany(products);

        // Crear órdenes
        const orders = [];
        for (let i = 0; i < 10; i++) {
            const items = Array.from({ length: faker.number.int({ min: 1, max: 5 }) }).map(() => {
                const product = products[faker.number.int({ min: 0, max: 9 })];
                return {
                    product: product.id,
                    quantity: faker.number.int({ min: 1, max: 5 }),
                    price: product.discountedPrice,
                };
            });
            const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
            const order = new Order({
                customer: "6723fa5bfdc48a624ee10761",
                items,
                total,
                status: faker.helpers.arrayElement(["pending", "shipped", "delivered", "canceled"]),
            });
            orders.push(order);
        }
        await Order.insertMany(orders);

        // Crear carritos
        const carts = [];
        for (let i = 0; i < 10; i++) {
            const items = Array.from({ length: faker.number.int({ min: 1, max: 5 }) }).map(() => ({
                product: products[faker.number.int({ min: 0, max: 9 })].id,
                quantity: faker.number.int({ min: 1, max: 5 }),
            }));
            const cart = new Cart({
                customer: "6723fa5bfdc48a624ee10761",
                items,
            });
            carts.push(cart);
        }
        await Cart.insertMany(carts);

        console.log("Datos aleatorios insertados correctamente.");
        MongoManager.disconnect();
    } catch (error) {
        console.error("Error insertando datos: ", error);
        MongoManager.disconnect();
    }
};

// Ejecutar el seed
seedData();
