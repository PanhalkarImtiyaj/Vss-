
import webImg from '../assets/servises-images/Web-servises.png';
import mobileImg from '../assets/servises-images/mobile-servises.png';
import erpImg from '../assets/servises-images/ERP-billing.png';
import aiImg from '../assets/servises-images/Ai-automation-servises.png';
import paymentImg from '../assets/servises-images/payment-solution-servises.png';
import videoImg from '../assets/servises-images/video-creation-servies.png';
import digitalImg from '../assets/servises-images/digital-Markeating.png';
import photoImg from '../assets/servises-images/photogaphy-servises.png';
import uiuxImg from '../assets/servises-images/UI-xi-servises.png';

export const servicesData = [
  {
    id: 1,
    title: 'Website Development',
    slug: 'website-development',
    description: 'Custom, responsive websites built with modern technologies to elevate your online presence.',
    detailedDescription: 'In today\'s digital-first world, your website is your virtual headquarters. At VSS Software Solutions, we craft bespoke websites that are not only visually stunning but also performance-driven. We use the latest technologies like React, Next.js, and Node.js to build responsive, SEO-optimized, and secure websites tailored to your business goals. Whether you need a corporate site, an e-commerce platform, or a custom web application, our expert team delivers solutions that drive engagement and conversion.',
    icon: 'bx bx-globe',
    image: webImg,
    features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Modern UI/UX'],
    benefits: [
      'Increased online visibility and brand credibility.',
      'Better user experience leading to higher conversion rates.',
      'Scalable architecture that grows with your business.',
      'Secure and robust code to protect your data.'
    ]
  },
  {
    id: 2,
    title: 'Mobile App Development',
    slug: 'mobile-app-development',
    description: 'Native and cross-platform mobile applications for iOS and Android with seamless user experience.',
    detailedDescription: 'Reach your customers wherever they are with our cutting-edge mobile app development services. We specialize in building high-performance, feature-rich mobile applications for both iOS and Android platforms. Using technologies like Flutter, React Native, and native Swift/Kotlin, we ensure your app offers a seamless, native-like experience. From concept to deployment on the App Store and Play Store, we handle every aspect of the development lifecycle.',
    icon: 'bx bx-mobile-alt',
    image: mobileImg,
    features: ['iOS & Android', 'Cross-Platform', 'Native Performance', 'User-Friendly'],
    benefits: [
      'Direct engagement with your customers.',
      'Enhanced brand loyalty through personalized experiences.',
      'Offline capabilities for uninterrupted usage.',
      'Push notifications to keep users active and informed.'
    ]
  },
  {
    id: 3,
    title: 'ERP & Billing Software',
    slug: 'erp-billing-software',
    description: 'Comprehensive enterprise solutions to streamline your business operations and boost productivity.',
    detailedDescription: 'Optimize your business processes with our custom ERP and billing software solutions. We understand that every business is unique, which is why we build tailored systems that integrate all your core operations—inventory, sales, finance, HR, and more—into a single, unified platform. Our billing software ensures accurate invoicing, tax compliance (GST), and real-time financial reporting, empowering you to make data-driven decisions.',
    icon: 'bx bx-spreadsheet',
    image: erpImg,
    features: ['Custom ERP', 'Inventory Management', 'Billing System', 'Reporting'],
    benefits: [
      'Streamlined operations and reduced manual errors.',
      'Real-time visibility into business performance.',
      'Automated billing and tax compliance.',
      'Improved inter-departmental collaboration.'
    ]
  },
  {
    id: 4,
    title: 'AI Automation',
    slug: 'ai-automation',
    description: 'Intelligent AI-driven solutions to automate repetitive tasks and optimize your business workflows.',
    detailedDescription: 'Harness the power of Artificial Intelligence to transform your business efficiency. Our AI automation services help you automate repetitive tasks, analyze complex data patterns, and provide intelligent customer support via chatbots. From machine learning models to simple process automation scripts, we implement solutions that save time, reduce costs, and allow your team to focus on strategic initiatives.',
    icon: 'bx bx-bot',
    image: aiImg,
    features: ['Custom AI Agents', 'Chatbot Integration', 'Process Automation', 'Data Analysis'],
    benefits: [
      'Significant reduction in operational costs.',
      '24/7 availability with AI-powered customer support.',
      'Data-driven insights for better decision making.',
      'Elimination of human error in repetitive tasks.'
    ]
  },
  {
    id: 5,
    title: 'Payment Solutions',
    slug: 'payment-solutions',
    description: 'Secure and seamless payment gateway integrations and custom financial software for your business.',
    detailedDescription: 'Facilitate secure and smooth transactions for your customers with our payment solution services. We integrate leading payment gateways (like Stripe, Razorpay, PayPal) into your websites and apps, ensuring a frictionless checkout experience. We also build custom financial software for invoicing, subscription management, and wallet systems, all adhering to the highest security standards (PCI-DSS compliance).',
    icon: 'bx bx-credit-card',
    image: paymentImg,
    features: ['Safe Transactions', 'Multiple Gateways', 'Subscription Management', 'Invoice Systems'],
    benefits: [
      'Increased trust with secure transaction processing.',
      'Global reach with multi-currency support.',
      'Automated recurring billing for subscription models.',
      'Seamless integration with existing financial systems.'
    ]
  },
  {
    id: 6,
    title: 'Video Creations',
    slug: 'video-creations',
    description: 'High-quality professional video production and editing to tell your brand story effectively.',
    detailedDescription: 'Capture your audience\'s attention with compelling video content. Our video creation services cover everything from corporate promotional videos and product demos to social media reels and 2D/3D animations. We combine creative storytelling with high-quality production values to deliver videos that resonate with your viewers and amplify your brand message across all digital platforms.',
    icon: 'bx bx-video',
    image: videoImg,
    features: ['Promotional Videos', 'Motion Graphics', '2D/3D Animation', 'Social Reels'],
    benefits: [
      'Higher engagement rates on social media.',
      'Effective communication of complex brand messages.',
      'Increased conversion rates on landing pages.',
      'Improved brand recall and emotional connection.',
    ]
  },
  {
    id: 7,
    title: 'Digital Marketing',
    slug: 'digital-marketing',
    description: 'Comprehensive digital marketing strategies to increase your online visibility and drive business growth.',
    detailedDescription: 'Grow your digital footprint with our result-oriented digital marketing strategies. We offer end-to-end marketing solutions including Search Engine Optimization (SEO), Social Media Marketing (SMM), Pay-Per-Click (PPC) campaigns, and Content Marketing. Our team analyzes your target audience and competitors to craft personalized campaigns that drive traffic, generate leads, and maximize your ROI.',
    icon: 'bx bx-trending-up',
    image: digitalImg,
    features: ['SEO & SEM', 'Content Marketing', 'Email Marketing', 'Analytics & ROI Tracking'],
    benefits: [
      'Measurable results and transparent ROI tracking.',
      'Targeted reach to your ideal customer profile.',
      'Enhanced brand awareness and reputation.',
      'Cost-effective lead generation compared to traditional media.'
    ]
  },
  {
    id: 8,
    title: 'Professional Photography',
    slug: 'professional-photography',
    description: 'Professional commercial and corporate photography services to capture your brand in the best light.',
    detailedDescription: 'Images speak louder than words. Our professional photography services ensure your brand looks its absolute best. Whether you need corporate headshots, product catalogs, event coverage, or architectural shoots, our experienced photographers use state-of-the-art equipment to deliver high-resolution, visually striking images that elevate your marketing materials and website aesthetics.',
    icon: 'bx bx-camera',
    image: photoImg,
    features: ['Corporate Headshots', 'Product Photography', 'Event Coverage', 'Editing & Retouching'],
    benefits: [
      'High-quality visual assets for all marketing needs.',
      'Professional and consistent brand image.',
      'Showcasing products in fine detail to boost sales.',
      'Personalized touch with authentic team photos.'
    ]
  },
  {
    id: 9,
    title: 'UI/UX Design',
    slug: 'ui-ux-design',
    description: 'Beautiful, intuitive designs that create memorable user experiences and drive engagement.',
    detailedDescription: 'Great software starts with great design. Our UI/UX design team focuses on creating intuitive, user-centric interfaces that delight users. We follow a design thinking approach—from user research and wireframing to interactive prototyping and final high-fidelity visuals. We ensure that every interaction is smooth, accessible, and aligned with your brand identity.',
    icon: 'bx bx-palette',
    image: uiuxImg,
    features: ['User Research', 'Wireframing', 'Prototyping', 'Visual Design'],
    benefits: [
      'Reduced development time with clear design blueprints.',
      'Higher user retention and satisfaction.',
      'Brand differentiation through unique aesthetics.',
      'Intuitive navigation reducing user training costs.'
    ]
  }
];
