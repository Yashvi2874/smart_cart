const About = () => {
  const features = [
    {
      icon: "🤖",
      title: "AI-Powered Recommendations",
      description: "Our advanced AI analyzes your preferences and suggests the perfect products for your needs.",
    },
    {
      icon: "🛒",
      title: "Smart Cart Generation",
      description: "Generate customized shopping carts for specific purposes like weekly groceries or party planning.",
    },
    {
      icon: "📱",
      title: "Mobile-First Design",
      description: "Seamless shopping experience across all devices with our responsive design.",
    },
    {
      icon: "⚡",
      title: "Fast & Efficient",
      description: "Quick loading times and efficient checkout process to save your valuable time.",
    },
    {
      icon: "🔒",
      title: "Secure & Safe",
      description: "Your data and transactions are protected with industry-standard security measures.",
    },
    {
      icon: "🌱",
      title: "Sustainable Choices",
      description: "We promote eco-friendly products and sustainable shopping practices.",
    },
  ]

  const team = [
    {
      name: "Alex Johnson",
      role: "CEO & Founder",
      image: "/placeholder.svg?height=200&width=200",
      description: "Visionary leader with 10+ years in retail technology.",
    },
    {
      name: "Sarah Chen",
      role: "CTO",
      image: "/placeholder.svg?height=200&width=200",
      description: "AI expert specializing in machine learning and data science.",
    },
    {
      name: "Mike Rodriguez",
      role: "Head of Product",
      image: "/placeholder.svg?height=200&width=200",
      description: "Product strategist focused on user experience and innovation.",
    },
    {
      name: "Emily Davis",
      role: "Head of Design",
      image: "/placeholder.svg?height=200&width=200",
      description: "Creative designer passionate about intuitive user interfaces.",
    },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-walmart-blue to-blue-800 dark:from-gray-800 dark:to-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About Smart Cart</h1>
            <p className="text-xl md:text-2xl text-gray-200">
              Revolutionizing the way you shop with AI-powered intelligence and personalized experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">Our Mission</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              At Smart Cart, we believe shopping should be intelligent, efficient, and enjoyable. Our mission is to
              transform the traditional shopping experience by leveraging cutting-edge AI technology to understand your
              needs and provide personalized recommendations that save you time and money while ensuring you never miss
              what you need.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              What Makes Us Different
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Discover the features that set Smart Cart apart from traditional shopping platforms
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-walmart-blue dark:text-walmart-green mb-2">50K+</div>
              <p className="text-gray-600 dark:text-gray-300">Happy Customers</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-walmart-blue dark:text-walmart-green mb-2">1M+</div>
              <p className="text-gray-600 dark:text-gray-300">Products Available</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-walmart-blue dark:text-walmart-green mb-2">99.9%</div>
              <p className="text-gray-600 dark:text-gray-300">Uptime</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-walmart-blue dark:text-walmart-green mb-2">24/7</div>
              <p className="text-gray-600 dark:text-gray-300">Customer Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              The brilliant minds behind Smart Cart's innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg text-center">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">{member.name}</h3>
                <p className="text-walmart-green font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-walmart-green">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Experience Smart Shopping?</h2>
          <p className="text-xl text-green-100 mb-8">
            Join thousands of satisfied customers who have transformed their shopping experience
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-walmart-green hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
              Start Shopping Now
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-walmart-green px-8 py-3 rounded-lg font-semibold transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
