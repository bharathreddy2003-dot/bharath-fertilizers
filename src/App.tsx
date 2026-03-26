import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, X, Phone, Mail, MapPin, ChevronRight, 
  ArrowRight, CheckCircle2, Award, Users, Globe,
  Leaf, Droplets, Sprout, BookOpen, MessageSquare,
  Facebook, Twitter, Instagram, Linkedin
} from 'lucide-react';
import { cn } from './lib/utils';
import { PRODUCTS, CROP_SOLUTIONS, BLOG_POSTS, TESTIMONIALS } from './constants';

// --- Components ---

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Crop Solutions', path: '/solutions' },
    { name: 'Become a Dealer', path: '/dealer' },
    { name: 'Knowledge Center', path: '/knowledge' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="glass-nav">
      <div className="container-custom">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
              <Leaf className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-display font-bold text-primary">Bharath <span className="text-secondary">Fertilizers</span></span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  location.pathname === link.path ? "text-primary" : "text-slate-600"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/dealer" className="btn-primary py-2 px-4 text-sm">
              Apply for Dealership
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="container-custom py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "text-lg font-medium p-2",
                    location.pathname === link.path ? "text-primary" : "text-slate-600"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                to="/dealer" 
                onClick={() => setIsOpen(false)}
                className="btn-primary w-full mt-4"
              >
                Become a Dealer
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <Leaf className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-display font-bold text-white">Bharath <span className="text-primary">Fertilizers</span></span>
            </Link>
            <p className="text-slate-400 leading-relaxed">
              Empowering Indian farmers with scientific nutrition and sustainable agricultural solutions since 1995.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/products" className="hover:text-primary transition-colors">Our Products</Link></li>
              <li><Link to="/solutions" className="hover:text-primary transition-colors">Crop Solutions</Link></li>
              <li><Link to="/dealer" className="hover:text-primary transition-colors">Dealer Network</Link></li>
              <li><Link to="/knowledge" className="hover:text-primary transition-colors">Knowledge Center</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Crop Solutions</h4>
            <ul className="space-y-4">
              <li><Link to="/solutions" className="hover:text-primary transition-colors">Paddy (Rice)</Link></li>
              <li><Link to="/solutions" className="hover:text-primary transition-colors">Sugarcane</Link></li>
              <li><Link to="/solutions" className="hover:text-primary transition-colors">Wheat</Link></li>
              <li><Link to="/solutions" className="hover:text-primary transition-colors">Vegetables</Link></li>
              <li><Link to="/solutions" className="hover:text-primary transition-colors">Cotton</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="text-primary shrink-0" size={20} />
                <span>123 Agri Business Park, MIDC, Pune, Maharashtra 411001</span>
              </li>
              <li className="flex gap-3">
                <Phone className="text-primary shrink-0" size={20} />
                <span>+91 1800-123-4567</span>
              </li>
              <li className="flex gap-3">
                <Mail className="text-primary shrink-0" size={20} />
                <span>info@bharathfertilizers.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© 2026 Bharath Fertilizers. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Pages ---

const HomePage = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1920" 
            alt="Indian Farmland" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-900/40" />
        </div>
        
        <div className="container-custom relative z-10 text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full text-primary-light text-sm font-semibold mb-6">
              Scientific Nutrition for Better Crops
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
              Maximize Your Yield with <span className="text-primary">Bharath Fertilizers</span>
            </h1>
            <p className="text-xl text-slate-200 mb-10 leading-relaxed">
              Empowering Indian farmers with high-quality, research-backed fertilizers designed to restore soil health and boost productivity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/products" className="btn-primary text-lg px-8 py-4">
                Explore Products <ArrowRight size={20} />
              </Link>
              <Link to="/dealer" className="btn-outline border-white text-white hover:bg-white hover:text-slate-900 text-lg px-8 py-4">
                Become a Dealer
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-white py-12 border-b border-slate-100">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Years of Experience', value: '30+', icon: Award },
              { label: 'Farmers Served', value: '1M+', icon: Users },
              { label: 'Quality Certifications', value: 'ISO 9001', icon: CheckCircle2 },
              { label: 'States Covered', value: '15+', icon: Globe },
            ].map((stat, i) => (
              <div key={i} className="text-center space-y-2">
                <div className="flex justify-center">
                  <stat.icon className="text-primary w-8 h-8" />
                </div>
                <div className="text-3xl font-bold text-slate-900">{stat.value}</div>
                <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Highlights */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl mb-4">Our Premium Fertilizer Range</h2>
              <p className="text-slate-600">Scientifically formulated to provide balanced nutrition for every stage of crop growth.</p>
            </div>
            <Link to="/products" className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all">
              View All Products <ChevronRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PRODUCTS.map((product) => (
              <motion.div 
                key={product.id}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 group"
              >
                <div className="h-56 overflow-hidden relative">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary uppercase tracking-wider">
                      {product.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl mb-3">{product.name}</h3>
                  <p className="text-slate-600 text-sm mb-6 line-clamp-2">{product.description}</p>
                  <Link to={`/products`} className="btn-outline w-full py-2">
                    View Details
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem -> Solution Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl mb-4">Solving Modern Farming Challenges</h2>
            <p className="text-slate-600">We understand the struggles of Indian farmers. Our solutions are designed to address the root causes of low productivity.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { 
                problem: 'Declining Soil Health', 
                solution: 'Our organic blends restore microbial activity and soil structure for long-term fertility.',
                icon: Sprout
              },
              { 
                problem: 'Low Nutrient Efficiency', 
                solution: 'Precision NPK blends ensure that your crops get exactly what they need, reducing wastage.',
                icon: Droplets
              },
              { 
                problem: 'Stagnant Crop Yields', 
                solution: 'Our micronutrient-enriched formulas unlock the full genetic potential of your seeds.',
                icon: Leaf
              }
            ].map((item, i) => (
              <div key={i} className="bg-slate-50 p-8 rounded-3xl space-y-6 relative overflow-hidden group">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <item.icon size={32} />
                </div>
                <div>
                  <h4 className="text-slate-500 text-sm font-bold uppercase mb-2">The Problem</h4>
                  <h3 className="text-xl text-slate-900 mb-4">{item.problem}</h3>
                  <div className="h-px bg-slate-200 w-full mb-6" />
                  <h4 className="text-primary text-sm font-bold uppercase mb-2">Our Solution</h4>
                  <p className="text-slate-600 leading-relaxed">{item.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Crop-Based Solutions Preview */}
      <section className="section-padding bg-slate-900 text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl mb-4">Tailored Solutions for Every Crop</h2>
            <p className="text-slate-400">Different crops have different needs. Explore our scientific application schedules for maximum results.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {CROP_SOLUTIONS.map((crop) => (
              <Link 
                key={crop.id}
                to="/solutions"
                className="group relative h-64 rounded-2xl overflow-hidden"
              >
                <img 
                  src={crop.image} 
                  alt={crop.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-60"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-xl font-bold">{crop.name}</h3>
                  <span className="text-primary text-sm font-semibold flex items-center gap-1">
                    View Guide <ChevronRight size={16} />
                  </span>
                </div>
              </Link>
            ))}
            <div className="group relative h-64 rounded-2xl overflow-hidden bg-slate-800 flex flex-col items-center justify-center text-center p-6 border-2 border-dashed border-slate-700 hover:border-primary transition-colors">
              <Sprout className="text-primary mb-4" size={40} />
              <h3 className="text-xl font-bold mb-2">More Crops</h3>
              <p className="text-slate-400 text-sm mb-4">We have guides for over 20+ Indian crops.</p>
              <Link to="/solutions" className="text-primary font-bold text-sm">See All Guides</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Dealer CTA Section */}
      <section className="section-padding bg-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
          <Users size={400} />
        </div>
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-8">
              <h2 className="text-4xl md:text-5xl">Partner With India's Fastest Growing Fertilizer Brand</h2>
              <p className="text-primary-light text-xl leading-relaxed">
                Join our network of 5,000+ successful dealers across India. Benefit from high-demand products, strong margins, and dedicated marketing support.
              </p>
              <ul className="space-y-4">
                {[
                  'High Profit Margins & Incentives',
                  'Comprehensive Marketing & Branding Support',
                  'Regular Training & Technical Workshops',
                  'Fast Logistics & Reliable Supply Chain'
                ].map((benefit, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-accent" size={24} />
                    <span className="font-semibold">{benefit}</span>
                  </li>
                ))}
              </ul>
              <Link to="/dealer" className="btn-outline border-white text-white hover:bg-white hover:text-primary inline-flex">
                Apply for Dealership Now
              </Link>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-2xl">
              <h3 className="text-2xl mb-6 text-slate-900">Quick Inquiry</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input type="text" placeholder="Full Name" className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                  <input type="tel" placeholder="Phone Number" className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
                <input type="text" placeholder="Location (City, State)" className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                <select className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                  <option>Select Business Type</option>
                  <option>Retailer</option>
                  <option>Wholesaler</option>
                  <option>Distributor</option>
                </select>
                <textarea placeholder="Your Message" rows={4} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"></textarea>
                <button className="btn-primary w-full py-4 text-lg">Submit Inquiry</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl mb-4">Voices from the Field</h2>
            <p className="text-slate-600">Hear from the farmers and dealers who have experienced the Bharath Fertilizers difference.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-slate-50 p-8 rounded-3xl flex flex-col md:flex-row gap-6 items-center md:items-start">
                <img src={t.image} alt={t.name} className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md" referrerPolicy="no-referrer" />
                <div className="space-y-4 text-center md:text-left">
                  <p className="text-lg italic text-slate-700">"{t.quote}"</p>
                  <div>
                    <h4 className="font-bold text-slate-900">{t.name}</h4>
                    <p className="text-primary text-sm font-medium">{t.role} • {t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Knowledge Section Preview */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="flex justify-between items-end mb-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl mb-4">Knowledge Center</h2>
              <p className="text-slate-600">Expert advice and guides to help you make informed decisions for your farm.</p>
            </div>
            <Link to="/knowledge" className="hidden md:flex text-primary font-bold items-center gap-2">
              Visit Blog <ChevronRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {BLOG_POSTS.map((post) => (
              <Link key={post.id} to="/knowledge" className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 group flex flex-col sm:flex-row">
                <div className="sm:w-1/3 h-48 sm:h-auto overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                </div>
                <div className="p-6 sm:w-2/3 space-y-4">
                  <span className="text-primary text-xs font-bold uppercase tracking-widest">{post.category}</span>
                  <h3 className="text-xl group-hover:text-primary transition-colors">{post.title}</h3>
                  <p className="text-slate-600 text-sm line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center gap-2 text-slate-400 text-xs">
                    <BookOpen size={14} />
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>By {post.author}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="py-20 bg-secondary text-white text-center relative overflow-hidden">
        <div className="container-custom relative z-10">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">Ready to Boost Your Crop Yield?</h2>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
            Get in touch with our agricultural experts today for a personalized nutrient plan for your farm.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary bg-white text-secondary hover:bg-slate-100 text-lg px-10">
              Contact Us <MessageSquare size={20} />
            </Link>
            <Link to="/products" className="btn-outline border-white text-white hover:bg-white hover:text-secondary text-lg px-10">
              Find Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

const AboutPage = () => {
  return (
    <div className="section-padding">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-6xl">Rooted in Trust, Growing with Science</h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Bharath Fertilizers has been at the forefront of the Indian agricultural revolution for over three decades. We believe that healthy soil is the foundation of a prosperous nation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <img 
              src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=800" 
              alt="Our Mission" 
              className="rounded-3xl shadow-xl"
              referrerPolicy="no-referrer"
            />
            <div className="space-y-6">
              <h2 className="text-3xl">Our Mission</h2>
              <p className="text-slate-600 leading-relaxed">
                To provide Indian farmers with innovative, high-quality, and affordable crop nutrition solutions that enhance productivity while preserving the environment and soil health.
              </p>
              <ul className="space-y-4">
                {[
                  'Innovation through R&D',
                  'Farmer-centric approach',
                  'Sustainable farming practices',
                  'Integrity and transparency'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-primary" size={20} />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-slate-900 rounded-3xl p-12 text-white text-center space-y-8">
            <h2 className="text-3xl">Our Vision</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto italic">
              "To be the most trusted partner for every Indian farmer, ensuring food security and prosperity through scientific agriculture."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductsPage = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'NPK', 'Organic', 'Micronutrients'];

  const filteredProducts = filter === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === filter);

  return (
    <div className="section-padding bg-slate-50">
      <div className="container-custom">
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl md:text-5xl">Our Product Catalog</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">Explore our wide range of fertilizers designed for diverse soil types and crops.</p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={cn(
                "px-6 py-2 rounded-full font-semibold transition-all border",
                filter === cat 
                  ? "bg-primary text-white border-primary shadow-md" 
                  : "bg-white text-slate-600 border-slate-200 hover:border-primary"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 flex flex-col">
              <img src={product.image} alt={product.name} className="h-64 w-full object-cover" referrerPolicy="no-referrer" />
              <div className="p-8 flex-grow space-y-6">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-primary text-xs font-bold uppercase tracking-widest">{product.category}</span>
                    <h3 className="text-2xl mt-1">{product.name}</h3>
                  </div>
                </div>
                <p className="text-slate-600">{product.description}</p>
                <div className="space-y-3">
                  <h4 className="font-bold text-sm uppercase text-slate-400">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {product.benefits.map((b, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-slate-700">
                        <CheckCircle2 className="text-primary shrink-0" size={16} />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-6 border-t border-slate-100 flex gap-4">
                  <button className="btn-primary flex-grow">Inquire Now</button>
                  <button className="btn-outline p-3"><MessageSquare size={20} /></button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const CropSolutionsPage = () => {
  return (
    <div className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl md:text-5xl">Scientific Crop Solutions</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">Get expert-recommended nutrient application schedules for your specific crops.</p>
        </div>

        <div className="space-y-24">
          {CROP_SOLUTIONS.map((crop, index) => (
            <div key={crop.id} className={cn(
              "flex flex-col lg:flex-row gap-12 items-center",
              index % 2 !== 0 && "lg:flex-row-reverse"
            )}>
              <div className="lg:w-1/2">
                <img src={crop.image} alt={crop.name} className="rounded-3xl shadow-2xl w-full h-[400px] object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="lg:w-1/2 space-y-8">
                <h2 className="text-4xl">{crop.name} Nutrition Guide</h2>
                <div className="space-y-6">
                  {crop.stages.map((stage, i) => (
                    <div key={i} className="flex gap-6 items-start">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold shrink-0">
                        {i + 1}
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">{stage.stage} <span className="text-slate-400 text-sm font-normal ml-2">({stage.timing})</span></h4>
                        <p className="text-slate-600 mt-1">Recommended: <span className="text-primary font-semibold">{stage.recommendation}</span></p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl">
                  <h4 className="font-bold mb-4">Expected Benefits:</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {crop.benefits.map((b, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-slate-700">
                        <CheckCircle2 className="text-primary" size={16} />
                        {b}
                      </div>
                    ))}
                  </div>
                </div>
                <button className="btn-primary">Download Full PDF Guide</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const DealerPage = () => {
  return (
    <div className="section-padding bg-slate-50">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h1 className="text-4xl md:text-5xl">Become an Authorized Dealer</h1>
            <p className="text-slate-600 max-w-2xl mx-auto">Partner with India's most trusted agricultural brand and grow your business.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              { title: 'High Demand', desc: 'Our products are trusted by millions of farmers across India.', icon: Award },
              { title: 'Strong Margins', desc: 'Competitive pricing and incentive structures for our partners.', icon: Users },
              { title: 'Full Support', desc: 'From branding to technical training, we support you at every step.', icon: Globe },
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl text-center space-y-4 shadow-sm border border-slate-100">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto">
                  <item.icon size={32} />
                </div>
                <h3 className="text-xl">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row">
            <div className="lg:w-1/2 bg-primary p-12 text-white space-y-8">
              <h2 className="text-3xl">Why Join Us?</h2>
              <p className="text-primary-light text-lg">
                We are expanding our network and looking for passionate partners who want to make a difference in Indian agriculture.
              </p>
              <div className="space-y-6">
                {[
                  'Access to 50+ Premium Products',
                  'Exclusive Territory Rights',
                  'Marketing & Signage Support',
                  'Regular Dealer Meets & Tours',
                  'Digital Marketing Leads'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-accent" size={24} />
                    <span className="font-semibold">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 p-12">
              <h3 className="text-2xl mb-8">Dealership Application Form</h3>
              <form className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Full Name</label>
                  <input type="text" className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary outline-none" placeholder="Enter your name" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Phone Number</label>
                    <input type="tel" className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary outline-none" placeholder="+91" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Email Address</label>
                    <input type="email" className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary outline-none" placeholder="email@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Shop/Business Name</label>
                  <input type="text" className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary outline-none" placeholder="Your business name" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Location</label>
                  <input type="text" className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary outline-none" placeholder="City, District, State" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Experience in Agri-Business</label>
                  <select className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary outline-none">
                    <option>New to Business</option>
                    <option>1-3 Years</option>
                    <option>3-5 Years</option>
                    <option>5+ Years</option>
                  </select>
                </div>
                <button className="btn-primary w-full py-4 text-lg">Submit Application</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const KnowledgeCenterPage = () => {
  return (
    <div className="section-padding bg-slate-50">
      <div className="container-custom">
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl md:text-5xl">Knowledge Center</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">Expert insights, farming tips, and scientific guides for sustainable agriculture.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            {BLOG_POSTS.map((post) => (
              <article key={post.id} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 group">
                <img src={post.image} alt={post.title} className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                <div className="p-8 space-y-6">
                  <div className="flex items-center gap-4 text-sm">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-bold">{post.category}</span>
                    <span className="text-slate-400">{post.date}</span>
                  </div>
                  <h2 className="text-3xl group-hover:text-primary transition-colors">{post.title}</h2>
                  <p className="text-slate-600 text-lg leading-relaxed">{post.excerpt}</p>
                  <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-slate-200 rounded-full" />
                      <span className="font-bold text-slate-900">{post.author}</span>
                    </div>
                    <button className="text-primary font-bold flex items-center gap-2">
                      Read More <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <aside className="space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <h3 className="text-xl mb-6">Categories</h3>
              <ul className="space-y-4">
                {['Crop Nutrition', 'Soil Health', 'Pest Management', 'Organic Farming', 'Market Trends'].map((cat) => (
                  <li key={cat}>
                    <a href="#" className="flex justify-between items-center text-slate-600 hover:text-primary transition-colors">
                      <span>{cat}</span>
                      <span className="bg-slate-100 text-slate-500 text-xs px-2 py-1 rounded-full">12</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-primary p-8 rounded-3xl text-white space-y-6">
              <h3 className="text-xl">Subscribe to Newsletter</h3>
              <p className="text-primary-light text-sm">Get the latest farming tips and product updates delivered to your inbox.</p>
              <input type="email" placeholder="Your Email" className="w-full p-3 bg-white/10 border border-white/20 rounded-lg placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white" />
              <button className="w-full py-3 bg-white text-primary font-bold rounded-lg hover:bg-slate-100 transition-colors">Subscribe</button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

const ContactPage = () => {
  return (
    <div className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl">Let's Grow Together</h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                Have questions about our products or need agricultural advice? Our team of experts is here to help you.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0">
                  <MapPin size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Our Headquarters</h4>
                  <p className="text-slate-600">123 Agri Business Park, MIDC, Pune, Maharashtra 411001</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0">
                  <Phone size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Call Us</h4>
                  <p className="text-slate-600">+91 1800-123-4567 (Toll Free)</p>
                  <p className="text-slate-600">+91 20-23456789</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0">
                  <Mail size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Email Us</h4>
                  <p className="text-slate-600">info@bharathfertilizers.com</p>
                  <p className="text-slate-600">sales@bharathfertilizers.com</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 p-8 rounded-3xl text-white flex items-center justify-between">
              <div>
                <h4 className="text-xl font-bold mb-2">WhatsApp Support</h4>
                <p className="text-slate-400 text-sm">Instant help for farmers</p>
              </div>
              <button className="bg-[#25D366] p-4 rounded-2xl hover:scale-110 transition-transform">
                <MessageSquare size={32} />
              </button>
            </div>
          </div>

          <div className="bg-white p-10 rounded-[40px] shadow-2xl border border-slate-100">
            <h3 className="text-3xl mb-8">Send us a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Full Name</label>
                  <input type="text" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary outline-none" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Phone Number</label>
                  <input type="tel" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary outline-none" placeholder="+91" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Subject</label>
                <select className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary outline-none">
                  <option>Product Inquiry</option>
                  <option>Technical Support</option>
                  <option>Dealer Inquiry</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Message</label>
                <textarea rows={5} className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary outline-none" placeholder="How can we help you?"></textarea>
              </div>
              <button className="btn-primary w-full py-5 text-xl">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Main App ---

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/solutions" element={<CropSolutionsPage />} />
            <Route path="/dealer" element={<DealerPage />} />
            <Route path="/knowledge" element={<KnowledgeCenterPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
        
        {/* Sticky WhatsApp Button */}
        <a 
          href="https://wa.me/9118001234567" 
          target="_blank" 
          rel="noopener noreferrer"
          className="fixed bottom-8 right-8 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform z-50"
        >
          <MessageSquare size={32} />
        </a>
      </div>
    </Router>
  );
}
