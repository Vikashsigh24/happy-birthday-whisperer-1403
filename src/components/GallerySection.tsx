import { motion } from "framer-motion";
import { Camera } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const photos = [
  { src: gallery1, caption: "Our sunset walks 🌅" },
  { src: gallery2, caption: "Late night laughs ☕" },
  { src: gallery3, caption: "Chasing sunsets together 🏔️" },
  { src: gallery4, caption: "Dancing in the rain 💃" },
  { src: gallery5, caption: "Stargazing nights ⭐" },
  { src: gallery6, caption: "Picnic dates 🌸" },
];

const GallerySection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Camera className="w-10 h-10 text-primary mx-auto mb-4" />
          <h2 className="text-4xl sm:text-5xl font-display text-gradient mb-3">
            Our Favorite Memories 📸
          </h2>
          <p className="text-muted-foreground font-body">
            Every moment with you is a treasure
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((photo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05, zIndex: 10 }}
              className="relative group rounded-lg overflow-hidden shadow-[var(--shadow-card)] aspect-square"
            >
              <img
                src={photo.src}
                alt={photo.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="font-body text-primary-foreground text-sm font-semibold">
                  {photo.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
