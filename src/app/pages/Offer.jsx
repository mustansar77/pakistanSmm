import React from 'react';

const offers = [
  {
    title: "Resellers",
    icon: "📌",
    description: "You can resell our services and grow your profit easily. Resellers are an important part of our SMM Panel.",
  },
  {
    title: "API Integration",
    icon: "🔗",
    description: "Easily integrate our services into your platform using our API, making automation seamless.",
  },
  {
    title: "24/7 Support",
    icon: "🛠️",
    description: "Our support team is available around the clock to help with any questions or issues you may have.",
  },
  {
    title: "Instant Delivery",
    icon: "⚡",
    description: "Our system is optimized for fast delivery, ensuring that your orders start within seconds.",
  },
  {
    title: "Affordable Pricing",
    icon: "💰",
    description: "We offer competitive pricing so that you can maximize your profit margins.",
  },
  {
    title: "Secure Payments",
    icon: "🔒",
    description: "Your transactions are safe with our secure payment methods, including PayPal and cryptocurrency.",
  },
];

const testimonials = [
  {
    name: "John Smith",
    role: "Youtuber",
    review: "After trying several websites claiming 'fast delivery', I'm glad I found this service. My order started in just 5 seconds!",
    rating: 5,
  },
  {
    name: "Emily Johnson",
    role: "Social Media Manager",
    review: "This is the best SMM Panel I’ve ever used! The prices are affordable, and the support is always helpful.",
    rating: 5,
  },
  {
    name: "Michael Brown",
    role: "Influencer",
    review: "I was skeptical at first, but now I use this panel for all my social media needs. Highly recommended!",
    rating: 4,
  },
];

const Offer = () => {
  return (
    <>
      {/* What We Offer Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1170px] mx-auto text-center">
          <h1 className="text-textcolor text-3xl md:text-4xl font-bold">What We Offer</h1>
          <hr className="border-b-2 border-gray-300 w-16 mx-auto my-4" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 mx-5 lg:mx-0">
            {offers.map((offer, index) => (
              <div key={index} className="bg-textcolor text-white p-6 rounded-lg shadow-lg flex flex-col items-center hover:scale-105 transition-transform">
                <span className="text-white text-4xl">{offer.icon}</span>
                <h2 className="text-xl font-semibold mt-3">{offer.title}</h2>
                <p className="text-lg text-center mt-2">{offer.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What People Say About Us Section */}
      <section className="py-16 bg-white">
        <div className="max-w-[1170px] mx-auto text-center">
          <h1 className="text-textcolor text-3xl md:text-4xl font-bold">What People Say About Us</h1>
          <hr className="border-b-2 border-gray-300 w-16 mx-auto my-4" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 mx-5 lg:mx-0">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-textcolor text-white p-6 rounded-lg shadow-lg flex flex-col items-center hover:scale-105 transition-transform">
                <h2 className="text-xl font-semibold">{testimonial.name}</h2>
                <h3 className="text-lg font-semibold opacity-80">{testimonial.role}</h3>
                <p className="text-lg text-center mt-2">"{testimonial.review}"</p>

                {/* Star Rating */}
                <div className="flex space-x-1 mt-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6 text-yellow-400"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                      />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Offer;
