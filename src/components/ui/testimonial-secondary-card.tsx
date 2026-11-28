import { motion, useTransform } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";

const TestimonialCard = ({ testimonial, progress, index, total }) => {
  // Only the cards BEFORE the last one fly away. So there are (total - 1) exits, and
  // the last card has start = 1: it never moves or fades, it just stays on screen until
  // the section ends. (Before, the last card also faded out, which left a blank screen.)
  const exits = Math.max(1, total - 1);
  const start = index / exits;
  const end = (index + 1) / exits;

  const translateY = useTransform(progress, [start, end], [0, -1200]);
  const opacity = useTransform(progress, [start, end], [1, 0]);
  const scale = useTransform(progress, [start, end], [1, 0.9]);

  return (
    <motion.div
      style={{
        y: translateY,
        opacity: opacity,
        scale: scale,
        rotate: testimonial.rotation,
        zIndex: total - index,
      }}
      className="absolute inset-x-0 top-0 bottom-0 flex items-center justify-center p-4 h-screen">
      <div className="rounded-2xl p-8 md:p-12 w-full max-w-[775px] shadow-2xl relative overflow-hidden group bg-[url(/images/common/testimonial-bg.webp)] bg-cover">
        <div className="flex flex-col gap-8 md:gap-12">
          <div className="flex justify-between items-start">
            <div className="flex gap-1.5">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="w-2 h-2 rounded-full bg-white/10" />
              ))}
            </div>
            <div className="text-white/40 font-bold tracking-tighter text-xl italic uppercase">
              {testimonial.logo}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="h3">{testimonial.title}</h3>
            <p className="text-muted-foreground text-lg">
              "{testimonial.quote}"
            </p>
          </div>

          {/* <div className="flex items-center gap-4 mt-4">
            <Avatar>
              <AvatarImage
                src={testimonial.avatar}
                alt={testimonial.author}
                className="object-cover"
              />
              <AvatarFallback>
                {testimonial.author?.charAt(0) ?? "?"}
              </AvatarFallback>
            </Avatar>
          </div> */}
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
