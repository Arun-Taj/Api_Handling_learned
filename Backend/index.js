import express from "express";

const app = express();
// Serve static files from the "public" folder
app.use(express.static("public"));

app.get("/api/products", (req, res) => {
  const products = [
    { id: 1, name: "Wooden Table", price: 200, image: "https://images.pexels.com/photos/1209776/pexels-photo-1209776.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: 2, name: "Leather Sofa", price: 850, image: "https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: 3, name: "Office Chair", price: 150, image: "https://images.pexels.com/photos/30546668/pexels-photo-30546668/free-photo-of-bright-modern-office-interior-with-desk-and-chairs.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 4, name: "Bed Frame", price: 500, image: "https://images.pexels.com/photos/30537135/pexels-photo-30537135/free-photo-of-modern-bedroom-interior-with-elegant-decor.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: 5, name: "Bookshelf", price: 300, image: "https://images.pexels.com/photos/1125130/pexels-photo-1125130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: 6, name: "Dining Table", price: 600, image: "https://images.pexels.com/photos/3144581/pexels-photo-3144581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: 7, name: "Gaming Chair", price: 250, image: "https://images.pexels.com/photos/7858743/pexels-photo-7858743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: 8, name: "Wall Clock", price: 50, image: "https://images.pexels.com/photos/1217573/pexels-photo-1217573.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  ];

  // ✅ Check if search query exists
  if (req.query.search) {
    const searchQuery = req.query.search.toLowerCase();
    const filterProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchQuery)
    );
    return res.send(filterProducts); // ✅ Ensures we exit after sending response
  }

  // ✅ If no search query, return all products after 3s delay
  setTimeout(() => {
    res.send(products);
  }, 3000);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
