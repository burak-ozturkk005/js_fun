const orders = [
    { id: 1, customer: "Burak", amount: 250, status: "delivered" },
    { id: 2, customer: "Ayşe", amount: 400, status: "cancelled" },
    { id: 3, customer: "Mehmet", amount: 150, status: "delivered" },
    { id: 4, customer: "Fatma", amount: 600, status: "shipped" },
    { id: 5, customer: "Burak", amount: 350, status: "delivered" }
];
const totalRevenue = orders
    .filter(order => order.status === "delivered")
    .map(order => order.amount * 1.2)
    .reduce((total,amount) => total + amount,0);
console.log(totalRevenue);
