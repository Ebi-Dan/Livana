
// "use client";
// import { useState } from "react";

// export default function ProductsSection() {
//   const [selectedProduct, setSelectedProduct] = useState(null);

//   const products = [
//     {
//       name: "Livana Lite",
//       description:
//         "For those who love it light, healthy, and smart. Meet Livana Lite — carefully crafted with low sugar and packed with nourishment for both adults and kids. Whether it's pap, custard, or cereals, Livana Lite keeps your family healthy without compromising taste. Perfect for: Health-conscious families, weight watchers, and anyone who wants wholesome nourishment with less sugar. Because every spoonful should care for your health.",
//       image: "image/livana-lite.jpeg",
//     },
//     {
//       name: "Livana ChocoRich",
//       description:
//         "Who says healthy can’t be delicious? Meet Livana ChocoRich, the chocolate-rich blend that makes every breakfast exciting. Smooth, creamy, and irresistible — kids love it, and so do adults with a sweet tooth! Perfect for: School mornings, quick snacks, and chocolate lovers. Because nourishment can also taste like a treat.",
//       image: "image/choco-rich.jpeg",
//     },
//     {
//       name: "Livana Baby Care",
//       description:
//         "Every mother’s dream in one pack. Livana Babycare is made specially for growing children. With gentle, natural nourishment, it supports healthy brain cells, body growth, and endless energy for play. Perfect for: Babies, toddlers, and growing kids who deserve the best. Because every child deserves wholesome care.",
//       image: "image/baby-care.jpeg",
//     },
//     {
//       name: "Livana NuttyGold",
//       description:
//         "Rich, flavorful, and packed with nutrients. Livana NuttyGold brings you a perfect blend of taste and health in every scoop. Perfect for: Adults and families that love quality and rich flavor. Because good health should feel like gold.",
//       image: "image/nutty-gold.jpeg",
//     },
//     {
//       name: "Livana Vitalmix",
//       description:
//         "Fuel your strength. Boost your energy. Livana Vitalmix is designed for active lifestyles — from hardworking dads to students on the go. With every scoop, you get energy, vitality, and nourishment that lasts. Perfect for: Men, women, and youths who want energy to keep pushing forward. 💙 Because strength begins from within.",
//       image: "image/vitalmix.jpeg",
//     },
//     {
//       name: "Organic Soya Beans",
//       description:
//         "Premium organic soya beans, perfect for everyday cooking and nutrition.",
//       image: "image/organic-soya-beans-in-bowl.jpg",
//     },
//     {
//       name: "Soya Milk",
//       description:
//         "Fresh, creamy soya milk made from the finest beans.",
//       image: "image/fresh-soya-milk-in-glass-bottle.jpg",
//     },
//     {
//       name: "Soya Protein",
//       description:
//         "High-quality protein powder for fitness enthusiasts.",
//       image: "image/soya-protein-powder.jpg",
//     },
//     {
//       name: "Tofu",
//       description:
//         "Silky smooth tofu, a versatile ingredient for any meal.",
//       image: "image/fresh-tofu-blocks.jpg",
//     },
//   ];

//   return (
//     <section id="products" className="py-16 md:py-24 lg:py-32 bg-muted/30">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Header */}
//         <div className="text-center mb-12 md:mb-16">
//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
//             Our Products
//           </h2>
//           <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
//             Explore our range of premium soya bean products, carefully crafted
//             to meet your nutritional needs.
//           </p>
//         </div>

//         {/* Products Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
//           {products.map((product, index) => (
//             <div
//               key={index}
//               className="group bg-background rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer"
//               onClick={() => setSelectedProduct(product)}
//             >
//               <div className="relative h-64 overflow-hidden">
//                 <img
//                   src={product.image || "/placeholder.svg"}
//                   alt={product.name}
//                   className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
//                 />
//               </div>
//               <div className="p-6">
//                 <h3 className="text-xl font-semibold text-foreground mb-2">
//                   {product.name}
//                 </h3>
//                 <p className="text-muted-foreground leading-relaxed line-clamp-3">
//                   {product.description}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

    
//      {/* Popup Modal */}
// {selectedProduct && (
//   <div
//     className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4"
//     onClick={() => setSelectedProduct(null)}
//   >
//     <div
//       className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-xl relative"
//       onClick={(e) => e.stopPropagation()}
//     >
//       <img
//         src={selectedProduct.image}
//         alt={selectedProduct.name}
//         className="w-full h-64 object-cover sticky top-0"
//       />
//       <div className="p-6">
//         <h3 className="text-2xl font-bold mb-3 text-gray-800">
//           {selectedProduct.name}
//         </h3>
//         <p className="text-gray-600 leading-relaxed whitespace-pre-line">
//           {selectedProduct.description}
//         </p>
//         <div className="sticky bottom-0 bg-white pt-4 pb-2">
//           <button
//             onClick={() => setSelectedProduct(null)}
//             className="w-full bg-black text-white px-5 py-3 rounded-lg hover:bg-gray-800 transition-all duration-200"
//           >
//             Close
//           </button>
//         </div>
//       </div>
//     </div>
//   </div>
// )}

//     </section>
//   );
// }

"use client";
import { useState } from "react";

export default function ProductsSection() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const products = [
    {
      name: "Livana Lite",
      description:
        "For those who love it light, healthy, and smart. Meet Livana Lite — carefully crafted with low sugar and packed with nourishment for both adults and kids. Whether it's pap, custard, or cereals, Livana Lite keeps your family healthy without compromising taste. Perfect for: Health-conscious families, weight watchers, and anyone who wants wholesome nourishment with less sugar. Because every spoonful should care for your health.",
      image: "image/livana-lite.jpeg",
    },
    {
      name: "Livana ChocoRich",
      description:
        "Who says healthy can’t be delicious? Meet Livana ChocoRich, the chocolate-rich blend that makes every breakfast exciting. Smooth, creamy, and irresistible — kids love it, and so do adults with a sweet tooth! Perfect for: School mornings, quick snacks, and chocolate lovers. Because nourishment can also taste like a treat.",
      image: "image/choco-rich.jpeg",
    },
    {
      name: "Livana Baby Care",
      description:
        "Every mother’s dream in one pack. Livana Babycare is made specially for growing children. With gentle, natural nourishment, it supports healthy brain cells, body growth, and endless energy for play. Perfect for: Babies, toddlers, and growing kids who deserve the best. Because every child deserves wholesome care.",
      image: "image/baby-care.jpeg",
    },
    {
      name: "Livana NuttyGold",
      description:
        "Rich, flavorful, and packed with nutrients. Livana NuttyGold brings you a perfect blend of taste and health in every scoop. Perfect for: Adults and families that love quality and rich flavor. Because good health should feel like gold.",
      image: "image/nutty-gold.jpeg",
    },
    {
      name: "Livana Vitalmix",
      description:
        "Fuel your strength. Boost your energy. Livana Vitalmix is designed for active lifestyles — from hardworking dads to students on the go. With every scoop, you get energy, vitality, and nourishment that lasts. Perfect for: Men, women, and youths who want energy to keep pushing forward. 💙 Because strength begins from within.",
      image: "image/vitalmix.jpeg",
    },
    {
      name: "Organic Soya Beans",
      description:
        "Premium organic soya beans, perfect for everyday cooking and nutrition.",
      image: "image/organic-soya-beans-in-bowl.jpg",
    },
    {
      name: "Soya Milk",
      description: "Fresh, creamy soya milk made from the finest beans.",
      image: "image/fresh-soya-milk-in-glass-bottle.jpg",
    },
    {
      name: "Soya Protein",
      description: "High-quality protein powder for fitness enthusiasts.",
      image: "image/soya-protein-powder.jpg",
    },
    {
      name: "Tofu",
      description: "Silky smooth tofu, a versatile ingredient for any meal.",
      image: "image/fresh-tofu-blocks.jpg",
    },
  ];

  // Show only first 5 by default
  const visibleProducts = showAll ? products : products.slice(0, 5);

  return (
    <section id="products" className="py-16 md:py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Our Products
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Explore our range of premium soya bean products, carefully crafted
            to meet your nutritional needs.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {visibleProducts.map((product, index) => (
            <div
              key={index}
              className="group bg-background rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedProduct(product)}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {product.name}
                </h3>
                <p className="text-muted-foreground leading-relaxed line-clamp-3">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* See More / See Less Button */}
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-all duration-200"
          >
            {showAll ? "See Less Products" : "See More Products"}
          </button>
        </div>
      </div>

      {/* Popup Modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="w-full h-64 object-cover sticky top-0"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3 text-gray-800">
                {selectedProduct.name}
              </h3>
              <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                {selectedProduct.description}
              </p>
              <div className="sticky bottom-0 bg-white pt-4 pb-2">
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="w-full bg-black text-white px-5 py-3 rounded-lg hover:bg-gray-800 transition-all duration-200"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
