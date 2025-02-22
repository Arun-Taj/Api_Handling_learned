import express from "express";

const app = express();
// Serve static files from the "public" folder
app.use(express.static("public"));

app.get("/api/products", (req, res) => {
  const products = [
    { id: 1, name: "Wooden Table", price: 200, image: "/assets/img1.jpg" },
    { id: 2, name: "Leather Sofa", price: 850, image: "/assets/img2.jpg" },
    { id: 3, name: "Office Chair", price: 150, image: "https://images.pexels.com/photos/30546668/pexels-photo-30546668/free-photo-of-bright-modern-office-interior-with-desk-and-chairs.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 4, name: "Bed Frame", price: 500, image: "https://images.pexels.com/photos/30537135/pexels-photo-30537135/free-photo-of-modern-bedroom-interior-with-elegant-decor.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: 5, name: "Bookshelf", price: 300, image: "https://www.pexels.com/video/a-woman-standing-in-a-room-with-books-on-the-floor-4861242/" },
    { id: 6, name: "Dining Table", price: 600, image: "https://www.pexels.com/photo/dining-area-3144581/" },
    { id: 7, name: "Gaming Chair", price: 250, image: "https://www.pexels.com/photo/woman-playing-an-online-game-7862509/" },
    { id: 8, name: "Wall Clock", price: 50, image: "https://www.pexels.com/photo/brown-wooden-framed-clock-showing-2-19-191703/" },
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
