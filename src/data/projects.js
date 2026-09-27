const projects = [
   {
      slug: 'wanderlust',
      title: 'WanderLust',
      category: 'Full-Stack Travel Booking Platform',
      description:
         'A full-stack travel booking platform with authentication, destination management, booking features, CRUD operations and secure API authorization.',
      tech: [
         'Next.js',
         'React.js',
         'Node.js',
         'Express.js',
         'MongoDB',
         'Better Auth',
         'Tailwind CSS',
         'HeroUI',
      ],
      features: [
         'Authentication: Email/password and Google authentication.',
         'Destination Discovery: Browse and explore travel destinations.',
         'Booking System: Users can book available destinations.',
         'Full CRUD: Create, read, update, and delete destination data.',
         'Authorization: JWT/JWKS-based API authorization.',
         'Responsive UI: Fully optimized for desktop, tablet, and mobile.',
      ],
      live: 'https://wanderlust-client-theta.vercel.app',
      github: 'https://github.com/sakibulislam75/wanderlust-client',
      image: '/wanderlust.png',
   },
   ,
   {
      slug: 'dragon-news',
      title: 'Dragon News',
      category: 'Full Stack Web Application',
      description:
         'A modern news platform with category-based browsing, secure authentication and responsive user experience built with Next.js.',
      tech: [
         'Next.js',
         'React.js',
         'Tailwind CSS',
         'DaisyUI',
         'Better Auth',
         'MongoDB',
         'REST API',
         'Vercel',
      ],
      features: [
         'Category-based Browsing: Explore news by category with intuitive navigation.',
         'Secure Authentication: Sign in using Email, Google and GitHub.',
         'Responsive Design: Optimized experience across desktop, tablet and mobile devices.',
         'Dynamic Routing: Built with Next.js App Router for seamless navigation.',
      ],
      live: 'https://dragon-news-delta-amber.vercel.app/',
      github: 'https://github.com/sakibulislam75/dragon-news',
      image: '/dragon__news.png',
   },

   {
      slug: 'booknest',
      title: 'BookNest',
      category: 'Full Stack Web Application',
      description:
         'An online book borrowing platform featuring secure authentication, user profile management and a modern responsive interface.',
      tech: [
         'Next.js',
         'React.js',
         'Tailwind CSS',
         'Better Auth',
         'MongoDB',
         'Swiper.js',
         'Animate.css',
         'Vercel',
      ],
      features: [
         'Book Browsing: Discover and borrow books by category.',
         'Secure Authentication: Login with Email and Google accounts.',
         'Profile Management: Update and manage user profile information.',
         'Interactive UI: Smooth animations with Swiper.js and Animate.css.',
      ],
      live: 'https://booknest-one-rose.vercel.app/',
      github: 'https://github.com/sakibulislam75/booknest',
      image: '/booknest.png',
   },

   {
      slug: 'keen-keeper',
      title: 'Keen Keeper',
      category: 'React Web Application',
      description:
         'A friendship management platform that helps users organize contacts, track communication and visualize interaction history.',
      tech: [
         'React.js',
         'Vite',
         'Tailwind CSS',
         'DaisyUI',
         'React Router',
         'Recharts',
         'React Toastify',
      ],
      features: [
         'Friend Management: Organize contacts with detailed profiles.',
         'Communication Tracking: Log calls, texts and video interactions.',
         'Analytics Dashboard: Visualize engagement with interactive charts.',
         'Responsive Interface: Optimized across all screen sizes.',
      ],
      live: 'https://keenkeeper75.netlify.app/',
      github: 'https://github.com/sakibulislam75/keen-keeper',
      image: '/keen-keeper.png',
   },
];

export default projects;
