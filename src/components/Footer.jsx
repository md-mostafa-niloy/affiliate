'use client';

import { 
  FiMail, 
  FiShield, 
  FiSmartphone, 
  FiTrendingUp, 
  FiLayers, 
  FiHelpCircle, 
  FiFileText, 
  FiBookOpen, 
  FiAlertTriangle, 
  FiInfo, 
  FiAward, 
  FiBriefcase,
  FiMonitor,
  FiLayout,
  FiTool,
  FiShoppingCart,
  FiCloud,
  FiServer,
  FiUserCheck,
  FiHeadphones,
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiLinkedin,
  FiYoutube
} from 'react-icons/fi';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerCategories = [
    {
      title: "Products",
      links: [
        { name: "Software Development", href: "#", icon: FiMonitor },
        { name: "APP Development", href: "#", icon: FiSmartphone },
        { name: "Web Development", href: "#", icon: FiLayout },
        { name: "Plugin development", href: "#", icon: FiTool },
        { name: "Extensions Development", href: "#", icon: FiLayers }
      ]
    },
    {
      title: "Solutions",
      links: [
        { name: "Ecommerce Solution", href: "#", icon: FiShoppingCart },
        { name: "Cloud Hosting", href: "#", icon: FiCloud },
        { name: "IT Consultancy", href: "#", icon: FiBriefcase },
        { name: "Digital Marketing", href: "#", icon: FiTrendingUp },
        { name: "SAAS Development", href: "#", icon: FiServer }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Hire-Us", href: "#", icon: FiUserCheck },
        { name: "FAQ", href: "/faq", icon: FiFileText },
        { name: "Contact Us", href: "/contact", icon: FiMail },
        { name: "Blog", href: "#", icon: FiBookOpen },
        { name: "Complaint Report", href: "#", icon: FiAlertTriangle }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about", icon: FiInfo },
        { name: "Our Services", href: "#", icon: FiAward },
        { name: "Terms of Service", href: "#", icon: FiFileText },
        { name: "Privacy Policy", href: "#", icon: FiShield },
        { name: "Support", href: "#", icon: FiHeadphones }
      ]
    }
  ];

  const socialLinks = [
    { icon: FiFacebook, href: "https://www.facebook.com/Visernic", color: "hover:text-[#1877F2]", bgHover: "hover:border-[#1877F2]" },
    { icon: FiTwitter, href: "https://twitter.com/Visernic", color: "hover:text-[#1DA1F2]", bgHover: "hover:border-[#1DA1F2]" },
    { icon: FiInstagram, href: "https://www.instagram.com/Visernic", color: "hover:text-[#E4405F]", bgHover: "hover:border-[#E4405F]" },
    { icon: FiLinkedin, href: "https://www.linkedin.com/company/visernic", color: "hover:text-[#0A66C2]", bgHover: "hover:border-[#0A66C2]" },
    { icon: FiYoutube, href: "https://youtube.com/Visernic", color: "hover:text-[#FF0000]", bgHover: "hover:border-[#FF0000]" }
  ];

  return (
    <footer className="bg-[#050505] text-gray-300 relative overflow-hidden border-t border-primary/20 w-full">
      
      {/* Background Glowing effects using Brand Primary Color */}
      <div 
        className="absolute top-[-15%] left-[-10%] w-75 md:w-150 h-75 md:h-150 pointer-events-none opacity-10 bg-[radial-gradient(circle,_var(--color-primary)_0%,_transparent_70%)]" 
      ></div>
      <div 
        className="absolute bottom-[-10%] right-[-5%] w-62.5 md:w-125 h-62.5 md:h-125 pointer-events-none opacity-10 bg-[radial-gradient(circle,_var(--color-primary)_0%,_transparent_70%)]" 
      ></div>

      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-12 pb-8 relative z-10 w-full">
        
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-8 mb-16 w-full">
          
          <div className="lg:w-1/3 flex flex-col items-start w-full">
            <a href="/" className="inline-block mb-6 group">
              <img 
                src="/logo.svg" 
                alt="Visernic Logo" 
                loading="lazy"
                className="h-12 md:h-12 lg:h-14 w-auto object-contain object-left -ml-3 sm:-ml-3 brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity"
              />
            </a>
            
            <p className="text-gray-400 text-xs sm:text-sm md:text-base lg:text-sm xl:text-base font-medium max-w-md leading-relaxed break-words mb-8">
              Visernic Limited provides tailored digital solutions, from web and mobile app development to UI/UX design and digital marketing, driving business growth and innovation.
            </p>

            <div className="flex items-center gap-3 md:gap-4 flex-wrap">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className={`w-9 h-9 md:w-10 md:h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 bg-white/5 transition-colors duration-300 hover:bg-white/10 ${social.color} ${social.bgHover}`}
                >
                  <social.icon className="w-4 h-4 md:w-4.5 md:h-4.5" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:w-2/3 w-full">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-10 md:gap-6 w-full">
              {footerCategories.map((category, index) => (
                <div key={index} className="flex flex-col w-full min-w-0">
                  <h3 className="text-white/90 font-bold text-xs md:text-sm uppercase tracking-wider mb-6 whitespace-nowrap truncate w-full border-l-2 border-primary pl-3">
                    {category.title}
                  </h3>
                  <ul className="flex flex-col space-y-3.5 w-full">
                    {category.links.map((link, linkIndex) => (
                      <li key={linkIndex} className="w-full flex-1 min-w-0">
                        <a 
                          href={link.href} 
                          className="flex items-center space-x-2.5 group w-full"
                        >
                          <link.icon className="w-4 h-4 text-primary/70 group-hover:text-primary transition-colors shrink-0" />
                          <span className="text-gray-400 group-hover:text-white transition-colors duration-200 text-sm md:text-base whitespace-nowrap truncate flex-1">
                            {link.name}
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 w-full relative z-20">
          <a 
            href="mailto:support@visernic.com" 
            className="flex items-center space-x-2.5 text-gray-400 hover:text-white transition-colors duration-200 w-full md:w-auto justify-center group"
          >
            <FiMail className="w-5 h-5 text-primary/70 group-hover:text-primary transition-colors shrink-0" />
            <span className="text-sm font-medium">support@visernic.com</span>
          </a>
          
          <div className="flex items-center space-x-2 text-gray-500 text-sm font-medium w-full md:w-auto justify-center">
            <FiShield className="w-4 h-4 opacity-50 hidden sm:block" />
            <p>&copy; {currentYear} Visernic Limited. <span className="hidden sm:inline">All rights reserved.</span></p>
          </div>
        </div>
        
      </div>
    </footer>
  );
}