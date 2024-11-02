import CarouselItem from "@/app/ui/carousel";

export default function Carousel() {
  const slides = [
    {
      image: "/carousel1.png",
      discount: "50-40% OFF",
      product: "Product",
      description: "All colours",
    },
    {
      image: "/carousel1.png",
      discount: "30% OFF",
      product: "New arrivals",
      description: "Summer collection",
    },
    // Add more slides as needed
  ];

  return (
    <div className="mb-12">
      <CarouselItem slides={slides} />
    </div>
  );
}
