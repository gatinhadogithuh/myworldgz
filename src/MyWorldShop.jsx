MyWorldShop.jsx;
import { useState } from "react";
import { Basketball } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const products = [
  // ... (mesma lista de produtos anteriores)
  {
    id: 101,
    name: "Fone Bluetooth Z Generation",
    price: 129.99,
    category: "z-tech",
    image: "https://via.placeholder.com/300x200?text=Fone+Z",
  },
  {
    id: 102,
    name: 'Tablet Z8 10"',
    price: 799.99,
    category: "z-tech",
    image: "https://via.placeholder.com/300x200?text=Tablet+Z8",
  },
  {
    id: 103,
    name: "Notebook ZMax Pro",
    price: 1999.99,
    category: "z-tech",
    image: "https://via.placeholder.com/300x200?text=Notebook+ZMax",
  },
  {
    id: 104,
    name: "Caixa de Som Neon Z",
    price: 229.99,
    category: "z-tech",
    image: "https://via.placeholder.com/300x200?text=Caixa+Neon+Z",
  },
];

const categories = [
  "todos",
  "skate",
  "bike",
  "surf",
  "pesca",
  "relogios",
  "fones",
  "roupas",
  "acessorios",
  "esportes-cavalo",
  "z-tech",
];

export default function MyWorldShop() {
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("todos");
  const [showBall, setShowBall] = useState(false);

  const addToCart = (product) => {
    setCart([...cart, product]);
    setShowBall(true);
    setTimeout(() => setShowBall(false), 600);
  };

  const filteredProducts =
    selectedCategory === "todos"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-neutral-900 text-white p-4">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">MY WORLD</h1>
        <div className="relative">
          <Basketball className="w-6 h-6" />
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-orange-400 text-white rounded-full px-2 text-xs">
              {cart.length}
            </span>
          )}
          <AnimatePresence>
            {showBall && (
              <motion.div
                initial={{ opacity: 1, y: 0 }}
                animate={{ opacity: 1, y: -30 }}
                exit={{ opacity: 0, y: -60 }}
                transition={{ duration: 0.6 }}
                className="absolute -top-1 right-1 text-orange-400"
              >
                🏀
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      <nav className="flex gap-2 mb-6 overflow-x-auto">
        {categories.map((cat) => (
          <Button
            key={cat}
            variant="ghost"
            className={cn(
              "px-4 py-2 rounded-full text-sm",
              selectedCategory === cat
                ? "bg-white text-black"
                : "bg-neutral-700 hover:bg-neutral-600"
            )}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1).replace("-", " ")}
          </Button>
        ))}
      </nav>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredProducts.map((product) => (
          <Card key={product.id} className="bg-neutral-800 text-white">
            <CardContent className="p-4">
              <img
                src={product.image}
                alt={product.name}
                className="rounded-lg mb-4"
              />
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="text-gray-400">R$ {product.price.toFixed(2)}</p>
              <Button
                className="mt-2 w-full bg-white text-black hover:bg-gray-300"
                onClick={() => addToCart(product)}
              >
                Adicionar ao Carrinho
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <footer className="mt-10 border-t border-neutral-700 pt-4 text-sm text-gray-400">
        <p>
          Contato:{" "}
          <a href="mailto:myworldgz@hotmail.com" className="underline">
            myworldgz@hotmail.com
          </a>
        </p>
        <p>
          Suporte:{" "}
          <a href="mailto:ivoneide.job@gmail.com" className="underline">
            ivoneide.job@gmail.com
          </a>
        </p>
        <div className="mt-2 flex gap-4">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white"
          >
            Instagram
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white"
          >
            Facebook
          </a>
          <a
            href="https://wa.me/5599999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white"
          >
            WhatsApp
          </a>
        </div>
      </footer>
    </div>
  );
}
