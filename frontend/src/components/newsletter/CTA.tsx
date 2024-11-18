import { motion } from "framer-motion"; // For adding smooth animations
import { Button } from "../ui/button";

const CTA = () => {
  return (
    <section className="container mx-auto px-4 py-12 md:py-24">
      <motion.div
        className="grid md:grid-cols-2 gap-8 items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        {/* Left Section */}
        <div className="space-y-6">
          <motion.h2
            className="text-3xl md:text-4xl font-bold"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Browse Our Fashion Paradise!
          </motion.h2>
          <motion.p
            className="text-gray-500"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Step into a world of style and explore our diverse collection of
            clothing categories.
          </motion.p>
          <motion.div
            className="w-fit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button className="bg-rose-600 hover:bg-rose-700 transition-colors duration-300 rounded-lg px-6 py-3 text-white">
              Start Browsing
            </Button>
          </motion.div>
        </div>

        {/* Right Section - Image */}
        <motion.div
          className="relative h-[400px] bg-transparent rounded-lg overflow-hidden"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src="https://res.cloudinary.com/dcyupktj6/image/upload/v1731944390/uxgda7qet19c0zsy9hei.png"
            alt="Fashion Collection"
            className="absolute inset-0 object-cover w-full h-full rounded-lg"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CTA;
