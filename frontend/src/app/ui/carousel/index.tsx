"use client";

import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

interface CarouselItem {
    image: string;
    discount: string;
    product: string;
    description: string;
}

interface CarouselProps {
    slides: CarouselItem[];
    autoPlayInterval?: number;
}

const CarouselItem: React.FC<CarouselProps> = ({ slides, autoPlayInterval = 5000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, [slides.length]);

    const prevSlide = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    }, [slides.length]);

    useEffect(() => {
        const intervalId = setInterval(nextSlide, autoPlayInterval);
        return () => clearInterval(intervalId);
    }, [nextSlide, autoPlayInterval]);

    return (
        <div className="relative w-full overflow-hidden" aria-label="Product Carousel">
            <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {slides.map((slide, index) => (
                    <div key={index} className="min-w-full flex justify-center items-center" aria-live="polite" aria-atomic="true">
                        <div className="relative w-full h-auto max-h-[500px] flex justify-center items-center">
                            <Image
                                src={slide.image}
                                alt={slide.product}
                                width={1440}
                                height={366}
                                className="object-contain w-full max-h-full"
                            />
                            <div className="absolute inset-0 bg-pink-300/60 flex flex-col justify-center items-start p-4 sm:p-6 md:p-8 lg:p-16">
                                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-2">
                                    {slide.discount}
                                </h2>
                                <p className="text-lg sm:text-xl md:text-2xl text-white mb-1">
                                    Now in {slide.product}
                                </p>
                                <p className="text-base sm:text-lg md:text-xl text-white mb-4 md:mb-6">
                                    {slide.description}
                                </p>
                                <button
                                    className="bg-white text-black font-semibold py-2 px-4 rounded-md shadow-md hover:bg-gray-100 hover:shadow-lg transition duration-300 ease-in-out"
                                >
                                    Shop Now
                                </button>

                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <button
                onClick={prevSlide}
                className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 rounded-full bg-white/80 hover:bg-white p-2 sm:p-3"
                aria-label="Previous slide"
            >
                <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6 text-gray-800" />
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 rounded-full bg-white/80 hover:bg-white p-2 sm:p-3"
                aria-label="Next slide"
            >
                <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6 text-gray-800" />
            </button>

        </div>
    );
};

export default CarouselItem;
