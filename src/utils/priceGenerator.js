const priceGenerator = (rating) => {
  let price;
  if (rating <= 3) {
    price = 3500;
    return price;
  }
  if (rating > 3 && rating <= 6) {
    price = 8250;
    return price;
  }
  if (rating > 6 && rating <= 8) {
    price = 16350;
    return price;
  }
  if (rating > 8 && rating <= 10) {
    price = 21250;
    return price;
  }
};

export default priceGenerator;
