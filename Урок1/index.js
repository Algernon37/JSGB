// Задание 1
const musicCollection = {
    albums: [
        { title: "Dark Side of the Moon", artist: "Pink Floyd", year: 1973 },
        { title: "Abbey Road", artist: "The Beatles", year: 1969 },
        { title: "Thriller", artist: "Michael Jackson", year: 1982 },
        { title: "Back in Black", artist: "AC/DC", year: 1980 },
        { title: "Hotel California", artist: "Eagles", year: 1976 }
    ],
    [Symbol.iterator]() {
        let index = 0;
        const albums = this.albums;
        return {
            next() {
                if (index < albums.length) {
                    return { value: albums[index++], done: false };
                } else {
                    return { done: true };
                }
            }
        };
    }
};

for (const album of musicCollection) {
    console.log(`${album.title} - ${album.artist} (${album.year})`);
}

// Задание 2
const chefs = new Map([
    ["Виктор", "Пицца"],
    ["Ольга", "Суши"],
    ["Дмитрий", "Десерты"]
]);
const dishes = new Map([
    ["Пицца 'Маргарита'", "Виктор"],
    ["Пицца 'Пепперони'", "Виктор"],
    ["Суши 'Филадельфия'", "Ольга"],
    ["Суши 'Калифорния'", "Ольга"],
    ["Тирамису", "Дмитрий"],
    ["Чизкейк", "Дмитрий"]
]);
const clients = new Map();
const clientAlexey = { name: "Алексей" };
const clientMaria = { name: "Мария" };
const clientIrina = { name: "Ирина" };
clients.set(clientAlexey, ["Пицца 'Пепперони'", "Тирамису"]);
clients.set(clientMaria, ["Суши 'Калифорния'", "Пицца 'Маргарита'"]);
clients.set(clientIrina, ["Чизкейк"]);

function printChefSpecializations() {
    console.log("Повар и их специализация:");
    for (let [chef, specialization] of chefs) {
        console.log(`${chef} - специализация: ${specialization}`);
    }
}
function printDishChefs() {
    console.log("\nБлюда и их повара:");
    for (let [dish, chef] of dishes) {
        console.log(`${dish} - повар: ${chef}`);
    }
}
function printClientOrders() {
    console.log("\nЗаказы клиентов:");
    for (let [client, orders] of clients) {
        console.log(`Клиент ${client.name} заказал: ${orders.join(', ')}`);
    }
}

printChefSpecializations();
printDishChefs();
printClientOrders();
