import { SiteConfig, KeyPoints, Testimonial, Footer } from '@/types';
import {
  HeroImg,
  IconButton,
  Line,
  Ellipse2,
  Ellipse3,
  Ellipse4,
  Ellipse5,
  Ellipse6,
  PhoneUpdates,
  PhoneDashboard,
  Testiomonial1,
  Testiomonial2,
  Testiomonial3,
  Testiomonial4,
  Testiomonial5,
  Testiomonial6,
  Testiomonial7,
  Testiomonial8,
  Testiomonial9,
  Carousel1,
  Carousel2,
  Carousel3,
  Carousel4,
  Ai,
  Quantum,
  Cheque,
} from '@/assets';
import { title } from 'process';

export const siteConfig: SiteConfig = {
  name: 'Payoff',
  description:
    'An open source application built using the new router, server components and everything new in Next.js 13.',
  url: 'https://payoff.com',
  ogImage: 'https://via.placeholder.com/500x500',
  links: {
    twitter: 'https://twitter.com/payoff',
    github: 'https://github.com/berryboylb/payoff',
  },
};

export const keyPoints: Array<KeyPoints> = [
  {
    title: 'Customer Support',
    description:
      'Experience 24/7 customer support to meet your financial needs.',
    icon: 'leaf',
    href: '/',
  },
  {
    title: 'Innovation',
    description: 'Discover never-been-seen financial solutions.',
    icon: 'hitPoint',
    href: '/',
  },
  {
    title: 'Secure data encryption',
    description: 'Ensure your data’s safety with top-tier encryption.',
    icon: 'lock',
    href: '/',
  },
  {
    title: 'Customizable notifications',
    description: 'Enjoy customizable notification tailored for you. ',
    icon: 'bell',
    href: '/',
  },
];

export const images = [Ellipse2, Ellipse3, Ellipse4, Ellipse5, Ellipse6];

export const testimonials: Array<Testimonial> = [
  {
    content:
      'As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.',
    name: 'Moses Chinedu',
    username: 'moses_chinedu',
    avatar: Testiomonial1,
  },
  {
    content: 'Helped my business, i can set the amount to receive by myself.',
    name: 'Priscilla Afam',
    username: 'priscilla',
    avatar: Testiomonial2,
  },
  {
    content:
      'Adopting this app for our team has streamlined our project management and improved communication across the board. ',
    name: 'Jordan Patels',
    username: 'jpatelsdesign',
    avatar: Testiomonial3,
  },
  {
    content: `Choosing this app is the best thing i did last year. I love <span style="color: #00AB1B;">Payoff</span>.`,
    name: 'Teni Precious',
    username: 'tp_gram',
    avatar: Testiomonial4,
  },
  {
    content:
      ' The customer service is fast you have problems, they solve it quickly.',
    name: 'Simon Orji',
    username: 'simonstores',
    avatar: Testiomonial5,
  },
  {
    content: `<span style="color: #00AB1B;">Payoff</span> has set a high standard, I hope they don't drop. I will continue to recommend them.`,
    name: 'Adeyemi Temitope',
    username: 'adeyems_t',
    avatar: Testiomonial6,
  },
  {
    content:
      'I love a lot of their features, in fact, all their features especially that their custom notification.',
    name: 'James Chinedu',
    username: 'jc_photography',
    avatar: Testiomonial7,
  },
  {
    content: `My business has grown a lot since i started using <span style="color: #00AB1B;">Payoff</span>. I don't delay my customer, alerts comes fast, fast. `,
    name: 'Solomon Babatunde',
    username: 'solo_b',
    avatar: Testiomonial8,
  },
  {
    content: `<span style="color: #00AB1B;">Payoff</span> is very easy to use, I like it.`,
    name: 'Cassey Ada',
    username: 'casey09',
    avatar: Testiomonial9,
  },
];

export const footerLinks: Array<Footer> = [
  // {
  //   header: "product",
  //   links: [
  //     {
  //       title: "features",
  //       href: "/",
  //     },
  //     {
  //       title: "integrations",
  //       href: "/",
  //     },
  //     {
  //       title: "updates",
  //       href: "/",
  //     },
  //     {
  //       title: "FAQ",
  //       href: "/",
  //     },
  //   ],
  // },
  {
    header: 'company',
    links: [
      {
        title: 'about',
        href: '/about',
      },
      {
        title: 'contact',
        href: '/contact',
      },
      // {
      //   title: "careers",
      //   href: "/",
      // },
      // {
      //   title: "testimonials",
      //   href: "/",
      // },
    ],
  },
  {
    header: 'resources',
    links: [
      // {
      //   title: "Help Center",
      //   href: "/",
      // },
      {
        title: 'FAQ',
        href: '/faq',
      },
    ],
  },
  {
    header: 'legal',
    links: [
      {
        title: 'privacy',
        href: '/privacy',
      },
      {
        title: 'terms',
        href: '/terms',
        // important: true,
      },
      {
        title: 'security',
        href: '/security',
      },
    ],
  },
];

export const SliderImages = [Carousel1, Carousel2, Carousel3, Carousel4];

export const points = [
  {
    image: Cheque,
    highlight: "Payoff's Fully Digital Cheque",
    content:
      'offers unmatched efficiency, heightened security, convenience and broader accessibility in modern financial transaction.',
  },
  {
    image: Ai,
    highlight: 'Payoff uses Artificial Intelligence',
    content:
      'to enhance security and personalization, automating processes to revolutionize consumer experience.',
  },
  {
    image: Quantum,
    highlight: 'Quantum Resistant Security at Payoff',
    content:
      'ensures robust protection for financial data and transaction threats posed by quantum computing.',
  },
  {
    image: Cheque,
    highlight: "Payoff's Fully Digital Cheque",
    content:
      'offers unmatched efficiency, heightened security, convenience and broader accessibility in modern financial transaction.',
  },
  {
    image: Ai,
    highlight: 'Payoff uses Artificial Intelligence',
    content:
      'to enhance security and personalization, automating processes to revolutionize consumer experience.',
  },
  {
    image: Quantum,
    highlight: 'Quantum Resistant Security',
    content:
      'at Payoff ensures robust protection for financial data and transaction threats posed by quantum computing.',
  },
];

export const aboutUs = [
  {
    title: 'Who We Are',
    description:
      'At Payoff, we are a passionate and driven team of innovators, financial gurus, and tech experts dedicated to redefining your financial future. Our objective is to help you manage your finances with ease and style.',
  },
  {
    title: 'Our Mission',
    description:
      'Our mission is to provide top-tier financial services powered by cutting-edge technology, enabling users to manage their finances efficiently. We believe in exceptional customer service, innovation, security, and accessibility.',
  },
  {
    title: 'Our Vision',
    points: [
      {
        title: 'Money Transfer',
        description: 'Send and receive money easily with Payoff',
      },
      {
        title: 'Bill Payments',
        description:
          'Book tickets for events and travel, pay cable subscriptions, electricity bills, and much more',
      },
      {
        title: 'Airtime/Data Purchase',
        description: 'Buy airtime and data for mobile phones and other devices',
      },
      {
        title: 'New Exciting Features',
        description:
          'Enjoy wonderful features like instant send and receive, cheque processing, and scheduled payments',
      },
    ],
  },
  {
    title: 'Our Team',
    description:
      'Our team is made up of seasoned professionals from the worlds of technology and finance. We are united by a common objective: to redesign our users’ financial future through seamless and efficient financial transactions. From management to developers and customer service representatives, every member of our team is committed to your financial success',
  },
  {
    title: 'Join Us on This Journey',
    description:
      'We are excited to bring you a revolutionary way of managing your finances. Discover transformative financial management with Payoff and be part of a community that values innovation, security, and accessibility. Together, we can redesign your financial future.',
  },
];

export const security = [
  {
    title: 'Your Security at PAYOFF',
    description:
      'At Payoff, we prioritize your security and privacy. To ensure a secure environment for all our users, we require the following identity verification measures:',
  },

  {
    title: 'Bank Verification Number (BVN)',
    description:
      'We ask for your BVN during account setup after initial registration to prevent identity fraud and verify your identity.',
  },
  {
    title: 'Government-Issued ID',
    description:
      'We require a valid government-issued ID such as a driver’s license, voter’s card, national ID card, or NIN slip. This helps us confirm that you are who you say you are.',
  },
  {
    title: 'Your Password',
    description:
      'Your account security starts with a strong password. When creating your Payoff account, you are required to set a password that includes a combination of letters, numbers, and special characters. This password is used to access your account and authorize any changes to your account information.',
  },
  {
    title: 'Your PINs',
    description:
      'We employ multiple layers of PIN security to protect your Payoff account:',
    points: [
      {
        title: 'Sign-In PIN',
        description:
          'Each Payoff account is secured with a unique six-digit Sign-In PIN. This PIN ensures that only you have access to your account.',
      },
      {
        title: 'Transaction PIN:',
        description:
          'Transactions made through the Payoff app are further secured with a transaction PIN. This additional layer of security prevents unauthorized transactions.',
      },
      {
        title: 'Card PIN',
        description:
          'Your Payoff Card comes with its own four-digit PIN, ensuring secure transactions at ATMs and POS terminals',
      },
    ],
  },
  {
    title: 'Encryption and security protocols',
    description:
      'Payoff uses advanced encryption technologies and security protocols to safeguard your data and transactions. Our systems are regularly monitored to maintain the highest standards of security.',
  },
  {
    title: 'Reporting Suspicious Activity',
    description:
      'We encourage you to report any suspicious activity immediately through our customer support channels or within the app. Prompt reporting helps us protect your account and investigate potential security issues.',
  },
];

export const terms = [
  {
    title: 'Your Terms at PAYOFF',
    description:
      'By using PAYOFF’s platform, you agree to these Terms and Conditions. Please read them carefully:',
  },

  {
    title: 'Acceptance of Terms',
    description:
      'Using PAYOFF’s mobile app or website implies your acceptance of these terms. If you do not agree, please discontinue use.',
  },
  {
    title: 'Services Provided',
    description:
      'PAYOFF offers financial management services, including: Money Transfers, Bill Payments (utilities, events, travel), Airtime/Data Purchases, Scheduled Payments, Cheque Processing, and Digital Wallet Services',
  },
  {
    title: 'Eligibility',
    description:
      'You must be at least 18 years old and a resident of Nigeria to use our platform.',
  },
  {
    title: ' Account Security',
    description:
      'You are responsible for keeping your account secure. PAYOFF implements security measures like encryption and two-factor authentication but is not liable for unauthorized access due to user negligence.',
  },
  {
    title: 'Fees',
    description:
      'PAYOFF’s services may incur transaction fees, which are clearly displayed before each transaction. By proceeding, you agree to the applicable fees.',
  },
  {
    title: 'User Responsibilities',
    description: 'You agree to:',
    points: [
      {
        title: '1',
        description: 'Provide accurate information.',
      },
      {
        title: '2',
        description: ' Use PAYOFF for lawful purposes.',
      },
      {
        title: '3',
        description:
          'Avoid fraudulent activities and unauthorized access to our systems.',
      },
    ],
  },
  {
    title: 'Security and Compliance',
    description:
      'PAYOFF prioritizes data protection through encryption and complies with Nigerian financial regulations. Accounts posing security risks may be suspended.',
  },
  {
    title: 'Limitation of Liability',
    description:
      'PAYOFF is not liable for losses, unauthorized transactions, or service interruptions. We provide services on an “as-is” basis without warranties for uninterrupted access.',
  },

  {
    title: 'Modification of Terms',
    description:
      'PAYOFF may update these Terms, with continued use of the platform signifying acceptance of any changes.',
  },
  {
    title: 'Governing Law',
    description:
      'These Terms are governed by Nigerian law. Any disputes will be resolved through mediation or in Nigerian courts.',
  },

  {
    title: 'Contact Us',
    description: `For questions about these Terms, contact us at: contact@PAYOFF.com`,
  },
];

export const privacy = [
  {
    title: 'Your Privacy at PAYOFF',
    description:
      'At PAYOFF, we are committed to protecting your privacy. This policy outlines how we collect, use, store, and protect your information.',
  },

  {
    title: 'Data Collection and Use',
    description: 'We collect personal information such as:',
    points: [
      {
        title: '1',
        description: 'Identification Data: Name, contact details, ID numbers.',
      },
      {
        title: '2',
        description: 'Financial Data: Account details, transaction history.',
      },
      {
        title: '3',
        description: 'Technical Data: Device information and usage data.',
      },
    ],
    conclusion: `This information is used to verify your identity, process transactions, prevent fraud, and improve our services.`,
  },
  {
    title: 'Data Protection and Security',
    description:
      'We use encryption, two-factor authentication, and secure servers to protect your data. PAYOFF complies with Nigerian data protection laws.',
  },
  {
    title: 'Data Sharing',
    description:
      'We do not sell your information. We may share data with trusted partners for service provision or legal compliance, subject to strict confidentiality.',
  },
  {
    title: 'Cookies and Tracking',
    description:
      'PAYOFF may use cookies to improve your experience. You can manage cookie preferences through your browser settings.',
  },
  {
    title: 'User Rights',
    description:
      'You have the right to access, correct, or delete your data, subject to legal retention requirements. Contact us to exercise these rights.',
  },
  {
    title: 'Account Deletion',
    description: 'To delete your PAYOFF account:',
    points: [
      {
        title: '1',
        description:
          'In-App Deletion: Go to account settings and select “Delete Account.”',
      },
      {
        title: '2',
        description: 'Customer Support: Contact us via contact@PAYOFF.com',
      },
    ],
    conclusion: `Note: Account deletion is permanent. Some data may be retained as required by Nigerian law.`,
  },
];

export const faq = [
  {
    title: 'What services does Payoff offer?',
    description:
      'Payoff offers a range of financial services, including money transfers, bill payments, airtime and data purchases, and exciting new features like instant send and receive, cheque processing, and scheduled payments.',
  },
  {
    title: 'How do I sign up for a Payoff account?',
    description:
      'Signing up for a Payoff account is easy. Download our app from the App Store or Google Play, open the app, and follow the registration instructions to create your account.',
  },
  {
    title: 'Is my money safe with Payoff?',
    description:
      'Yes, your money is safe with Payoff. We use advanced security measures, including encryption and multi-factor authentication, to protect your data and transactions.',
  },
  {
    title: 'How can I transfer money using Payoff?',
    description:
      'To transfer money, log in to your Payoff account, select the ‘Send Money’ option, enter the recipient’s details, and confirm the amount. Your transfer will be processed instantly.',
  },
  {
    title: 'What types of bills can I pay with Payoff?',
    description:
      'With Payoff, you can pay a variety of bills, including electricity, cable subscriptions, and tickets for events and travel. Simply log in to your account and choose the bill payment option to get started.',
  },
  {
    title: 'What should I do if I encounter an issue with my account?',
    description:
      'If you encounter any issues with your account, our customer service team is here to help. Contact us through the app or visit our support page for assistance.',
  },
];

export const hotelRooms = [
  { name: 'Economy Rooms', type: 'economy', amount: '₦ 50,000' },
  { name: 'Premium ', type: 'premium', amount: '₦ 150,000' },
  { name: 'Executive Suite', type: 'exec', amount: '₦ 350,000' },
  { name: 'Presidential Suit', type: 'presidentail', amount: '₦ 550,000' },
];
