const ObjectId = require("mongodb").ObjectId;

const orders = Array.from({ length: 3 }).map((_, idx) => {
  let day = 28;
  if (idx < 10) {
    var hour = "0" + idx;
    var subtotal = 100;
    // } else if (idx > 16 && idx < 21) {
    //   var hour = idx;
    //   var subtotal = 100 + 12 * idx;
  } else {
    var hour = idx;
    var subtotal = 100;
  }
  return {
    user: ObjectId("625add3d78fb449f9d9fe2ee"),
    orderTotal: {
      itemsCount: 3,
      cartSubtotal: subtotal,
    },
    cartItems: [
      {
        name: "Lenovo IP1 15IGL7 Celeron-N4120/4GB/128GB Laptop",
        price: 100.0,
        image: { path: "/images/computers-1.png" },
        quantity: 3,
        count: 12,
      },
    ],
    paymentMethod: "PayPal",
    isPaid: false,
    isDelivered: false,
    createdAt: `2023-11-${day}T${hour}:12:36.490+00:00`,
  };
});

module.exports = orders;
