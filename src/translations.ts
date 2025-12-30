import { Product, BlogPost } from './types';
import { PRODUCTS as BASE_PRODUCTS, BLOG_POSTS as BASE_BLOG_POSTS, CONTENT_BASE } from './constants';

export const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      products: 'Products',
      blog: 'Blog',
      contact: 'Contact',
    },
    hero: {
      tagline: 'Excellence in Energy Trading & Safety',
      title: 'Empowering the Future of Oil & Gas in GCC',
      subtitle: 'Rahimi Holding delivers trusted oil & gas trading solutions and advanced petrochemical safety services, connecting Oman and GCC to the global energy market.',
      ctaProducts: 'Explore Energy Products',
      ctaPartner: 'Partner With Rahimi Holding',
    },
    home: {
      aboutTag: 'Who We Are',
      aboutTitle: 'Global Vision, Local Expertise',
      aboutDesc1:
        "Rahimi Investment & Business, established in 2024 in the Sultanate of Oman, delivers innovative solutions across the oil, gas, and petrochemical industries.",
      aboutDesc2:
        "With a strong presence in GCC countries, Rahimi Holding leverages partnerships across the Middle East and Europe to provide reliable, internationally compliant energy solutions.",
      missionTitle: "Our Mission",
      missionDesc:
        "To deliver trusted oil & gas trading solutions and advanced petrochemical safety services worldwide.",
      visionTitle: "Our Vision",
      visionDesc:
        "To become a global energy partner by combining international trading expertise with innovative safety technologies.",
      divisionsTag: "Core Sectors",
      divisionsTitle: "Our Business Divisions",
      refinery: {
        title: "Refinery Products",
        subtitle: "Petroleum Products and Derivatives",
        desc:
          "We supply fuels and derivatives essential for energy, transportation, construction, and manufacturing—produced under strict international standards.",
        productsTitle: "Products resulting from crude oil refining:",
        list: [
          "Light Crude Oil",
          "Heavy Crude Oil",
          "White Naphtha (Light / Solvent Naphtha)",
          "Yellow Naphtha (Heavy Naphtha)",
          "Gas Oil (Diesel Fuel)",
          "Jet Fuel",
          "LPG (Liquefied Petroleum Gas)",
          "Bitumen (Asphalt)",
          "Base Oil",
          "Sulfur"
        ]
      },
      petro: {
        title: "Petrochemical Products",
        subtitle: "Advanced Chemical Solutions",
        desc:
          "High-quality products derived from natural gas and petroleum feedstocks—critical building blocks for plastics, textiles, and agriculture.",
        productsTitle: "Products derived from natural gas:",
        list: ["Methanol", "Acetic Acid", "Urea", "Polyethylene (PE)", "Polypropylene (PP)", "PVC"]
      },
      whyTag: "Why Choose Us",
      whyTitle: "Building Trust Through Excellence",
      whyDesc:
        "We combine traditional trading values with modern safety technologies to deliver unmatched reliability.",
      features: {
        safety: { title: "Safety First", desc: "Advanced explosion-proofing solutions for energy facilities." },
        quality: { title: "Premium Quality", desc: "Direct access to major GCC refineries." },
        global: { title: "Global Reach", desc: "Integrated logistics across Oman, GCC, and global markets." },
        support: { title: "Expert Support", desc: "24/7 consultation team with deep industry expertise." }
      },
      ctaTitle: "Ready to Collaborate?",
      ctaDesc: "Contact Rahimi Holding for energy trading inquiries or advanced safety consultations.",
      ctaBtn: "Contact Rahimi Holding",
      
      worksTag: 'Our Portfolio',
      worksTitle: 'Excellence In Supply',
      viewWorks: 'View All Products',
      safetyTitle: 'Industrial Safety',
      safetyDesc: 'Advanced explosion-proofing solutions for storage tanks and energy facilities.',
      tradingTitle: 'Strategic Energy Trading',
      tradingDesc: 'Reliable trading of petroleum and petrochemical products from major refineries worldwide.',
      stats: {
        founded: 'Founded',
        employees: 'Employees',
        products: 'Key Products',
        offices: 'Global Offices',
      },
      trustedBy: 'Trusted By Industry Leaders',
      capabilities: 'Our Capabilities',
      viewAll: 'View All',
      learnMore: 'Learn More',
      readMore: 'Read more',
    },
    about: {
      profile: 'Our Profile',
      title: 'About Rahimi Holding',
      heading: 'Building a Legacy of Excellence',
      paragraphs: [
        "RAHIMI INVESTMENT & BUSINESS, established in 2024 in the Sultanate of Oman, is a dynamic company providing innovative solutions for the oil, gas, and petrochemical industries. Though young in foundation, it is built upon the expertise of senior team members with decades of experience in major energy projects.",
        "With a strong presence across GCC countries, Rahimi Holding benefits from an extensive network of industrial and commercial relationships throughout the Middle East and Europe, enabling us to deliver efficient, reliable, and compliant solutions.",
        "As a trusted partner to leading energy institutions, Rahimi Holding is listed among recognised suppliers (Vendor List) of major regional oil and gas entities. We collaborate with renowned refineries and petrochemical complexes worldwide, sourcing and supplying products to safe ports globally.",
        "Through partnerships with leading European manufacturers, we supply high-quality industrial and refinery equipment, components, and machinery from trusted European brands, ensuring efficiency and reliability in every project.",
        "Our expertise includes industrial safety and explosion-proofing services for tanks and energy facilities. Using advanced technologies and certified methodologies, we help clients achieve the highest standards of operational safety.",
        "Today, Rahimi Holding continues to grow as a customer-oriented and regionally focused company, striving to become one of the leading engineering and trading service providers in the energy sector across the Gulf region."
      ],
      mission: 'Our Mission',
      missionDesc: 'To provide reliable oil & gas trading solutions and advanced petrochemical safety services worldwide.',
      vision: 'Our Vision',
      visionDesc: 'To become a trusted global partner in oil, gas, and petrochemicals by combining international trading expertise with innovative safety technologies.',
      values: 'Our Values',
      valuesList: ['Integrity', 'Safety', 'Innovation', 'Sustainability', 'Customer Satisfaction'],
      facilities: 'Our Facilities & Reach',
      officeOman: 'Head Office',
      officeIran: 'Subsidiary Office',
      network: 'Logistics & Trading Partners',
      employees: 'Specialized Employees',
    },
    products: {
      category: 'Products & Services',
      title: 'Our Products & Services',
      subtitle: 'From crude oil trading to advanced safety engineering, Rahimi Holding delivers excellence across the energy value chain.',
      filterTrading: 'Trading',
      filterServices: 'Services',
      readMore: 'Read more',
      nameLabel: 'Name',
      requestSpecs: 'Request Specifications',
      modalTitle: 'Request Product Specifications',
      modalDesc: 'Please enter your corporate email to receive the detailed specification sheet for',
      emailPlaceholder: 'Enter your corporate email',
      submit: 'Send Request',
      processing: 'Processing...',
      success: 'Request Sent Successfully!',
      successDesc: 'Please check your inbox. Our team will contact you shortly.',
      close: 'Close',
    },
    contact: {
      title: 'Contact Rahimi Holding',
      subtitle: 'Get in touch with our global energy team.',
      hq: 'Headquarters',
      addressLabel: 'Address',
      addressValue: 'Muscat, Oman',
      phone: 'Phone',
      email: 'Email',
      hours: 'Working Hours',
      hoursValue1: 'Sunday - Thursday: 8:00 AM - 5:00 PM',
      hoursValue2: 'Friday - Saturday: Closed',
      formTitle: 'Send us a Message',
      name: 'Name',
      subject: 'Subject',
      message: 'Message',
      send: 'Send Message',
    },
    blog: {
      tag: 'Insights & News',
      title: 'Latest Updates',
      readArticle: 'Read Article',
      notFound: 'Article not found',
      backToList: 'Back to Blog'
    },
    footer: {
      desc: 'Rahimi Holding – Reliable oil & gas trading, petrochemical solutions, and advanced safety services across GCC and global markets.',
      links: 'Quick Links',
      contact: 'Get in Touch',
      rights: '© 2024 Rahimi Holding. Oil & Gas Trading & Safety Solutions. All Rights Reserved.',
      privacy: 'Privacy Policy | Terms of Service',
    }
  },
  fa: {
    nav: {
      home: 'خانه',
      about: 'درباره ما',
      products: 'محصولات',
      blog: 'وبلاگ',
      contact: 'تماس',
    },
    hero: {
      tagline: 'برتری در تجارت انرژی و ایمنی',
      title: 'توانمندسازی آینده نفت و گاز در GCC',
      subtitle: 'هلدینگ رحیمی راهکارهای مطمئن تجارت نفت و گاز و خدمات پیشرفته ایمنی پتروشیمی را ارائه می‌دهد و عمان و کشورهای GCC را به بازار جهانی انرژی متصل می‌کند.',
      ctaProducts: 'مشاهده محصولات انرژی',
      ctaPartner: 'شراکت با هلدینگ رحیمی',
    },
    home: {
      aboutTag: 'درباره ما',
      aboutTitle: 'افق جهانی، تخصص محلی',
      aboutDesc1:
        "رحیمی اینوستمنت و بیزنس، تأسیس ۲۰۲۴ در عمان، راهکارهای نوآورانه در نفت، گاز و پتروشیمی ارائه می‌دهد.",
      aboutDesc2:
        "با حضور قدرتمند در کشورهای GCC، رحیمی با تکیه بر مشارکت‌های خاورمیانه و اروپا، راهکارهای قابل‌اعتماد و منطبق با استانداردهای بین‌المللی ارائه می‌کند.",
      missionTitle: "ماموریت ما",
      missionDesc:
        "ارائه راهکارهای معتبر تجارت نفت و گاز و خدمات پیشرفته ایمنی پتروشیمی در سراسر جهان.",
      visionTitle: "چشم‌انداز ما",
      visionDesc:
        "تبدیل شدن به شریک جهانی انرژی با ترکیب تجربه تجارت بین‌المللی و فناوری‌های نوین ایمنی.",
      divisionsTag: "بخش‌های اصلی",
      divisionsTitle: "تقسیمات کسب‌وکار ما",
      refinery: {
        title: "محصولات پالایشگاهی",
        subtitle: "محصولات نفتی و مشتقات",
        desc:
          "تأمین سوخت‌ها و مشتقات ضروری برای انرژی، حمل‌ونقل، ساخت‌وساز و تولید؛ مطابق با استانداردهای بین‌المللی.",
        productsTitle: "محصولات حاصل از پالایش نفت خام:",
        list: [
          "نفت خام سبک",
          "نفت خام سنگین",
          "نفتا سفید (نفتای سبک / حلال)",
          "نفتا زرد (نفتای سنگین)",
          "گازوئیل (دیزل)",
          "سوخت جت",
          "LPG (گاز مایع)",
          "بیتومین (قیر)",
          "روغن پایه",
          "گوگرد"
        ]
      },
      petro: {
        title: "محصولات پتروشیمی",
        subtitle: "راهکارهای پیشرفته شیمیایی",
        desc:
          "محصولات باکیفیت مشتق از گاز طبیعی و خوراک‌های نفتی؛ بلوک‌های حیاتی صنایع پلاستیک، نساجی و کشاورزی.",
        productsTitle: "محصولات مشتق از گاز طبیعی:",
        list: ["متانول", "اسید استیک", "اوره", "پلی‌اتیلن (PE)", "پلی‌پروپیلن (PP)", "PVC"]
      },
      whyTag: "چرا ما",
      whyTitle: "ساخت اعتماد با برتری",
      whyDesc:
        "ترکیب ارزش‌های سنتی تجارت با فناوری‌های نوین ایمنی برای ارائه قابلیت‌اعتماد بی‌نظیر.",
      features: {
        safety: { title: "اول ایمنی", desc: "راهکارهای ضدانفجار پیشرفته برای تأسیسات انرژی." },
        quality: { title: "کیفیت ممتاز", desc: "دستیابی مستقیم به پالایشگاه‌های بزرگ GCC." },
        global: { title: "دسترسی جهانی", desc: "لجستیک یکپارچه در عمان، GCC و بازارهای جهانی." },
        support: { title: "پشتیبانی متخصص", desc: "تیم مشاوره ۲۴/۷ با تجربه عمیق صنعتی." }
      },
      ctaTitle: "آماده همکاری هستید؟",
      ctaDesc: "برای تجارت انرژی یا مشاوره ایمنی پیشرفته با رحیمی هولدینگ تماس بگیرید.",
      ctaBtn: "تماس با رحیمی هولدینگ",
      
      worksTag: 'نمونه کارها',
      worksTitle: 'برتری در تأمین',
      viewWorks: 'مشاهده همه محصولات',
      safetyTitle: 'ایمنی صنعتی',
      safetyDesc: 'راهکارهای ضدانفجار پیشرفته برای مخازن و تأسیسات انرژی.',
      tradingTitle: 'تجارت استراتژیک انرژی',
      tradingDesc: 'تجارت معتبر محصولات نفتی و پتروشیمی از پالایشگاه‌های بزرگ جهانی.',
      stats: {
        founded: 'تأسیس',
        employees: 'کارکنان',
        products: 'محصولات کلیدی',
        offices: 'دفاتر جهانی',
      },
      trustedBy: 'مورد اعتماد رهبران صنعت',
      capabilities: 'توانمندی‌های ما',
      viewAll: 'مشاهده همه',
      learnMore: 'بیشتر بدانید',
      readMore: 'مشاهده بیشتر',
    },
    about: {
      profile: 'نمایه ما',
      title: 'درباره رحیمی هولدینگ',
      heading: 'ساخت میراثی از برتری',
      paragraphs: [
        "شرکت سرمایه‌گذاری و بازرگانی رحیمی، تأسیس‌شده در سال ۲۰۲۴ در سلطنت عمان، شرکتی پویا است که راهکارهای نوآورانه برای صنایع نفت، گاز و پتروشیمی فراهم می‌کند. اگرچه بنیاد جوان است، اما بر تجربه اعضای تیم ارشد با دهه‌ها سابقه در پروژه‌های بزرگ انرژی بنا شده است.",
        "با حضور قدرتمند در کشورهای GCC، رحیمی هولدینگ از شبکه گسترده‌ای از روابط صنعتی و تجاری در خاورمیانه و اروپا بهره‌مند است که ما را قادر می‌سازد راهکارهای کارآمد، مطمئن و منطبق با استانداردهای بین‌المللی ارائه دهیم.",
        "رحیمی هولدینگ به‌عنوان شریک معتبر برای موسسات انرژی پیشرو، در فهرست تأمین‌کنندگان شناخته‌شده (Vendor List) واحدهای بزرگ نفت و گاز منطقه‌ای فهرست شده است. ما با پالایشگاه‌ها و مجتمع‌های پتروشیمی معروف جهانی همکاری می‌کنیم.",
        "از طریق مشارکت با تولیدکنندگان اروپایی پیشرو، تجهیزات و ماشین‌آلات تخصصی صنعتی با کیفیت بالا از برندهای اروپایی معتبر تأمین می‌کنیم.",
        "تخصص ما شامل خدمات ایمنی صنعتی و ضدانفجار برای مخازن و تأسیسات انرژی است. ما با فناوری‌های پیشرفته و روش‌های تأیید‌شده، به مشتریان کمک می‌کنیم تا بالاترین استانداردهای ایمنی عملیاتی را دستیابی کنند.",
        "امروزه رحیمی هولدینگ به‌عنوان شرکتی مشتری‌محور و متمرکز بر منطقه به رشد خود ادامه می‌دهد و تلاش می‌کند یکی از پیشرو‌ترین شرکت‌های خدمات مهندسی و تجاری در صنعت انرژی سراسر خلیج باشد."
      ],
      mission: 'ماموریت ما',
      missionDesc: 'ارائه راهکارهای معتبر تجارت نفت و گاز و خدمات پیشرفته ایمنی پتروشیمی در سراسر جهان.',
      vision: 'چشم‌انداز ما',
      visionDesc: 'تبدیل شدن به شریک جهانی قابل‌اعتماد در نفت، گاز و پتروشیمی با ترکیب تخصص تجارت بین‌المللی و فناوری‌های نوین ایمنی.',
      values: 'ارزش‌های ما',
      valuesList: ['درستی', 'ایمنی', 'نوآوری', 'پایداری', 'رضایت‌مندی مشتری'],
      facilities: 'دفاتر و شبکه ما',
      officeOman: 'دفتر مرکزی',
      officeIran: 'دفتر شعبه',
      network: 'شرکای لجستیک و تجاری',
      employees: 'کارکنان تخصصی',
    },
    products: {
      category: 'محصولات و خدمات',
      title: 'محصولات و خدمات ما',
      subtitle: 'از تجارت نفت خام تا مهندسی ایمنی پیشرفته، رحیمی هولدینگ برتری را در سراسر زنجیره ارزش ارائه می‌دهد.',
      filterTrading: 'تجارت',
      filterServices: 'خدمات',
      readMore: 'مشاهده بیشتر',
      nameLabel: 'نام',
      requestSpecs: 'درخواست مشخصات',
      modalTitle: 'درخواست مشخصات محصول',
      modalDesc: 'لطفاً ایمیل سازمانی خود را برای دریافت برگه مشخصات وارد کنید برای',
      emailPlaceholder: 'ایمیل سازمانی',
      submit: 'ارسال درخواست',
      processing: 'در حال پردازش...',
      success: 'درخواست با موفقیت ارسال شد!',
      successDesc: 'لطفاً صندوق ورودی خود را بررسی کنید. تیم ما به زودی با شما تماس می‌گیرد.',
      close: 'بستن',
    },
    contact: {
      title: 'تماس با رحیمی هولدینگ',
      subtitle: 'با تیم انرژی جهانی ما در تماس باشید.',
      hq: 'مرکز اصلی',
      addressLabel: 'آدرس',
      addressValue: 'مسقط، عمان',
      phone: 'تلفن',
      email: 'ایمیل',
      hours: 'ساعات کاری',
      hoursValue1: 'یکشنبه تا پنج‌شنبه: ۸:۰۰ ص تا ۵:۰۰ ب‌ظ',
      hoursValue2: 'جمعه و شنبه: تعطیل',
      formTitle: 'پیام برای ما بفرستید',
      name: 'نام',
      subject: 'موضوع',
      message: 'پیام',
      send: 'ارسال پیام',
    },
    blog: {
      tag: 'درسها و اخبار',
      title: 'آخرین به‌روزرسانی‌ها',
      readArticle: 'خواندن مقاله',
      notFound: 'مقاله یافت نشد',
      backToList: 'بازگشت به وبلاگ'
    },
    footer: {
      desc: 'رحیمی هولدینگ – تجارت مطمئن نفت و گاز، راهکارهای پتروشیمی و خدمات ایمنی پیشرفته در GCC و بازارهای جهانی.',
      links: 'لینک‌های سریع',
      contact: 'تماس',
      rights: '© ۲۰۲۴ رحیمی هولدینگ. تجارت نفت و گاز و راهکارهای ایمنی. کلیه حقوق محفوظ است.',
      privacy: 'سیاست حفظ حریم خصوصی | شرایط استفاده',
    }
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      about: 'من نحن',
      products: 'المنتجات',
      blog: 'المدونة',
      contact: 'اتصل بنا',
    },
    hero: {
      tagline: 'التميز في تجارة الطاقة والسلامة',
      title: 'تمكين مستقبل النفط والغاز في دول مجلس التعاون',
      subtitle: 'تقدم مجموعة رحيمي حلولاً موثوقة لتجارة النفط والغاز وخدمات السلامة البتروكيماوية المتقدمة، وتربط عمان ودول مجلس التعاون الخليجي بالسوق العالمي للطاقة.',
      ctaProducts: 'استكشف منتجات الطاقة',
      ctaPartner: 'شارك مع مجموعة رحيمي',
    },
    home: {
      aboutTag: 'من نحن',
      aboutTitle: 'رؤية عالمية وخبرة محلية',
      aboutDesc1:
        "تأسست مجموعة رحيمي في عمان عام 2024، وتقدم حلولاً مبتكرة عبر صناعات النفط والغاز والبتروكيماويات.",
      aboutDesc2:
        "بفضل حضور قوي في دول مجلس التعاون الخليجي، نستفيد من شراكات صناعية وتجارية في الشرق الأوسط وأوروبا لتقديم حلول موثوقة ومتوافقة دولياً.",
      missionTitle: "مهمتنا",
      missionDesc:
        "تقديم حلول موثوقة لتجارة النفط والغاز وخدمات السلامة البتروكيماوية المتقدمة حول العالم.",
      visionTitle: "رؤيتنا",
      visionDesc:
        "أن نصبح شريكاً عالمياً من خلال الجمع بين خبرة التجارة الدولية وتقنيات السلامة الحديثة.",
      divisionsTag: "القطاعات الأساسية",
      divisionsTitle: "قطاعات أعمالنا",
      refinery: {
        title: "منتجات التكرير",
        subtitle: "المنتجات النفطية والمشتقات",
        desc:
          "نزوّد مجموعة واسعة من الوقود والمشتقات الأساسية للطاقة والنقل والبناء والتصنيع—وفقاً لأعلى المعايير الدولية.",
        productsTitle: "منتجات ناتجة عن تكرير النفط الخام:",
        list: [
          "النفط الخام الخفيف",
          "النفط الخام الثقيل",
          "النافثا البيضاء (النافثا الخفيفة / الحلال)",
          "النافثا الصفراء (النافثا الثقيلة)",
          "زيت الغاز (وقود الديزل)",
          "وقود الطائرات",
          "غاز البترول المسال (LPG)",
          "البيتومين (الأسفلت)",
          "زيت الأساس",
          "الكبريت"
        ]
      },
      petro: {
        title: "المنتجات البتروكيماوية",
        subtitle: "حلول كيميائية متقدمة",
        desc:
          "منتجات عالية الجودة مشتقة من الغاز الطبيعي ومشتقات النفط—مواد أساسية للبلاستيك والمنسوجات والزراعة.",
        productsTitle: "منتجات مشتقة من الغاز الطبيعي:",
        list: ["الميثانول", "حمض الأسيتيك", "اليوريا", "البولي إيثيلين (PE)", "البولي بروبيلين (PP)", "PVC"]
      },
      whyTag: "لماذا تختارنا",
      whyTitle: "نبني الثقة عبر التميز",
      whyDesc:
        "نمزج قيم التجارة التقليدية مع تقنيات السلامة الحديثة لتقديم موثوقية لا مثيل لها.",
      features: {
        safety: { title: "السلامة أولاً", desc: "حلول متقدمة مضادة للانفجار للمرافق." },
        quality: { title: "جودة ممتازة", desc: "وصول مباشر إلى أكبر مصافي دول مجلس التعاون." },
        global: { title: "انتشار عالمي", desc: "شبكة لوجستية متكاملة عبر عمان ودول المجلس والعالم." },
        support: { title: "دعم متخصص", desc: "فريق استشاري متاح على مدار الساعة بخبرة صناعية." }
      },
      ctaTitle: "جاهز للتعاون؟",
      ctaDesc: "تواصل معنا لطلبات تجارة الطاقة أو استشارات السلامة المتقدمة.",
      ctaBtn: "اتصل بمجموعة رحيمي",
      
      worksTag: 'محفظتنا',
      worksTitle: 'التميز في التوريد',
      viewWorks: 'عرض جميع المنتجات',
      safetyTitle: 'السلامة الصناعية',
      safetyDesc: 'حلول متقدمة مضادة للانفجار للخزانات ومرافق الطاقة.',
      tradingTitle: 'تجارة الطاقة الاستراتيجية',
      tradingDesc: 'تجارة موثوقة للمنتجات النفطية والبتروكيماوية من أكبر المصافي العالمية.',
      stats: {
        founded: 'تأسست',
        employees: 'الموظفون',
        products: 'المنتجات الرئيسية',
        offices: 'المكاتب العالمية',
      },
      trustedBy: 'موثوق من قادة الصناعة',
      capabilities: 'قدراتنا',
      viewAll: 'عرض الكل',
      learnMore: 'اعرف المزيد',
      readMore: 'اقرأ المزيد',
    },
    about: {
      profile: 'ملفنا',
      title: 'عن مجموعة رحيمي',
      heading: 'بناء إرث من التميز',
      paragraphs: [
        "تأسست شركة رحيمي للاستثمار والأعمال عام 2024 في سلطنة عمان، وهي شركة ديناميكية توفر حلولاً مبتكرة لصناعات النفط والغاز والبتروكيماويات. على الرغم من أنها حديثة التأسيس، إلا أنها مبنية على خبرة أعضاء فريق قيادي لديهم عقود من الخبرة في المشاريع الكبرى.",
        "بفضل وجود قوي في دول مجلس التعاون الخليجي، تستفيد مجموعة رحيمي من شبكة واسعة من العلاقات الصناعية والتجارية في الشرق الأوسط وأوروبا، مما يمكننا من تقديم حلول فعالة وموثوقة ومتوافقة مع أعلى المعايير الدولية.",
        "كشريك موثوق للمؤسسات الرائدة في مجال الطاقة، تُدرج مجموعة رحيمي ضمن قوائم الموردين المعترف بهم للكيانات الكبرى في النفط والغاز الإقليمية. نحن نتعاون مع مصافٍ معروفة ومجمعات بتروكيماوية في جميع أنحاء العالم.",
        "من خلال شراكات مع الشركات المصنعة الرائدة الأوروبية، نزود بمعدات وآلات صناعية وتكريرية عالية الجودة من العلامات التجارية الأوروبية الموثوقة.",
        "تتضمن خبرتنا خدمات الأمان الصناعي وحماية الانفجار للخزانات والمرافق. نحن نساعد العملاء على تحقيق أعلى معايير السلامة التشغيلية باستخدام التقنيات المتقدمة والمنهجيات المعتمدة.",
        "اليوم، تستمر مجموعة رحيمي في النمو كشركة موجهة للعملاء وركزت على المنطقة، وتسعى لأن تصبح واحدة من الشركات الرائدة في تقديم خدمات الهندسة والتجارة في قطاع الطاقة عبر منطقة الخليج."
      ],
      mission: 'مهمتنا',
      missionDesc: 'تقديم حلول موثوقة لتجارة النفط والغاز وخدمات السلامة البتروكيماوية المتقدمة حول العالم.',
      vision: 'رؤيتنا',
      visionDesc: 'أن نصبح شريكاً عالمياً موثوقاً في النفط والغاز والبتروكيماويات من خلال الجمع بين خبرة التجارة الدولية والتقنيات الحديثة في مجال السلامة.',
      values: 'قيمنا',
      valuesList: ['النزاهة', 'السلامة', 'الابتكار', 'الاستدامة', 'رضا العملاء'],
      facilities: 'مرافقنا والشبكة',
      officeOman: 'المقر الرئيسي',
      officeIran: 'المكتب الفرعي',
      network: 'شركاء اللوجستيات والتجارة',
      employees: 'الموظفون المتخصصون',
    },
    products: {
      category: 'المنتجات والخدمات',
      title: 'منتجاتنا وخدماتنا',
      subtitle: 'من تجارة النفط الخام إلى هندسة السلامة المتقدمة، تقدم مجموعة رحيمي التميز عبر سلسلة القيمة.',
      filterTrading: 'تجارة',
      filterServices: 'خدمات',
      readMore: 'اقرأ المزيد',
      nameLabel: 'الاسم',
      requestSpecs: 'طلب المواصفات',
      modalTitle: 'طلب مواصفات المنتج',
      modalDesc: 'يرجى إدخال بريدك الإلكتروني للحصول على ورقة المواصفات لـ',
      emailPlaceholder: 'البريد الإلكتروني العملي',
      submit: 'إرسال الطلب',
      processing: 'قيد المعالجة...',
      success: 'تم إرسال الطلب بنجاح!',
      successDesc: 'يرجى التحقق من صندوق البريد الوارد. سيتواصل فريقنا معك قريباً.',
      close: 'إغلاق',
    },
    contact: {
      title: 'اتصل بمجموعة رحيمي',
      subtitle: 'تواصل مع فريق الطاقة العالمي لدينا.',
      hq: 'المقر الرئيسي',
      addressLabel: 'العنوان',
      addressValue: 'مسقط، عمان',
      phone: 'الهاتف',
      email: 'البريد الإلكتروني',
      hours: 'ساعات العمل',
      hoursValue1: 'الأحد - الخميس: 8:00 صباحاً - 5:00 مساءً',
      hoursValue2: 'الجمعة - السبت: مغلق',
      formTitle: 'أرسل لنا رسالة',
      name: 'الاسم',
      subject: 'الموضوع',
      message: 'الرسالة',
      send: 'إرسال الرسالة',
    },
    blog: {
      tag: 'الرؤى والأخبار',
      title: 'أحدث التحديثات',
      readArticle: 'قراءة المقال',
      notFound: 'المقالة غير موجودة',
      backToList: 'العودة إلى المدونة'
    },
    footer: {
      desc: 'مجموعة رحيمي – تجارة موثوقة للنفط والغاز، حلول بتروكيماوية وخدمات سلامة متقدمة في دول مجلس التعاون والأسواق العالمية.',
      links: 'روابط سريعة',
      contact: 'اتصل بنا',
      rights: '© 2024 مجموعة رحيمي. تجارة النفط والغاز وحلول السلامة. جميع الحقوق محفوظة.',
      privacy: 'سياسة الخصوصية | شروط الخدمة',
    }
  }
};


export const getProductsFa = (): Product[] => [
      {
        id: 1,
        title: "روغن پایه SN 170",
        description: "روغن پایه پارافینیک گروه ۱ با کیفیت بالا، مناسب برای تولید روان‌کننده‌های صنعتی و خودرویی. دارای پایداری اکسیداسیون و حلالیت عالی برای کاربردهای پیشرفته.",
        content: `روغن پایه SN 170 یک روغن پارافینیک گروه ۱ با کیفیت ممتاز است که به دلیل پایداری حرارتی و مقاومت بالا در برابر اکسیداسیون، به‌عنوان یکی از مواد اولیه کلیدی در تولید روان‌کننده‌های صنعتی و خودرویی شناخته می‌شود.

**کاربردهای اصلی:**
* تولید روغن‌های هیدرولیک و روان‌کننده‌های صنعتی.
* استفاده در فرمولاسیون روغن موتور خودروهای سبک و سنگین.
* مناسب برای سیالات فلزکاری و روغن‌های فرآیندی.

**مزایای فنی:**
این محصول دارای فراریت پایین، نقطه اشتعال مناسب و پایداری شیمیایی بالا است که عملکرد مطمئن در شرایط عملیاتی سخت را تضمین می‌کند. مشخصات فنی کامل و COA بنا به درخواست ارائه می‌شود.`,
        category: "Trading",
        image: `${CONTENT_BASE}/product-Base-Oil-SN-170.jpeg`,
        gallery: [`${CONTENT_BASE}/product-Base-Oil-SN-170.jpeg`]
      },

      {
        id: 2,
        title: "روغن پایه SN 500",
        description: "روغن پایه سنگین گروه ۱ با گرانروی بالا، مناسب برای روان‌کننده‌های دریایی، گریس‌های صنعتی و کاربردهای نیازمند پایداری حرارتی.",
        content: `روغن پایه SN 500 یک روغن سنگین گروه ۱ با گرانروی بالا و پایداری حرارتی ممتاز است. این محصول برای کاربردهایی طراحی شده که نیازمند لایه روان‌کننده قوی و مقاومت در برابر تجزیه حرارتی هستند.

**کاربردهای اصلی:**
* روغن موتورهای دیزلی سنگین و روان‌کننده‌های دریایی.
* تولید گریس‌های صنعتی و روغن دنده‌های سنگین.
* استفاده در صنایع لاستیک و مواد شیمیایی.

**عملکرد کیفی:**
این محصول با شاخص گرانروی بالا و حلالیت مناسب، انتخابی ایده‌آل برای فرمولاسیون‌های پیچیده در بازارهای بین‌المللی است.`,
        category: "Trading",
        image: `${CONTENT_BASE}/product-Base-Oil-SN-500-1.jpeg`,
        gallery: [`${CONTENT_BASE}/product-Base-Oil-SN-500-1.jpeg`]
      },

      {
        id: 3,
        title: "قیر (گریدهای نفوذی)",
        description: "قیر صنعتی با گریدهای استاندارد برای پروژه‌های راه‌سازی، عایق‌کاری و زیرساخت‌های سنگین. دارای دوام بالا و مقاومت حرارتی.",
        content: `قیرهای نفوذی ما در گریدهای استاندارد مانند 60/70 و 80/100 عرضه می‌شوند و برای پروژه‌های زیرساختی حساس طراحی شده‌اند. این محصولات دارای چسبندگی بالا و مقاومت مناسب در برابر تغییرات دمایی هستند.

**موارد استفاده:**
* آسفالت‌سازی جاده‌ها و بزرگراه‌ها.
* عایق‌کاری رطوبتی ساختمان‌ها.
* پوشش‌دهی لوله‌ها و تجهیزات صنعتی.

**عملکرد:**
قیر عرضه‌شده برای تحمل شرایط سخت آب‌وهوایی طراحی شده و طول عمر بالای آسفالت و کاهش هزینه‌های نگهداری را تضمین می‌کند.`,
        category: "Trading",
        image: `${CONTENT_BASE}/product-bitumen-1.jpeg`,
        gallery: [`${CONTENT_BASE}/product-bitumen-1.jpeg`, `${CONTENT_BASE}/product-bitumen.jpeg`]
      },

      {
        id: 4,
        title: "گازوئیل EN 590 (10PPM)",
        description: "دیزل فوق کم‌گوگرد مطابق با استاندارد EN 590، مناسب برای موتورهای مدرن با آلایندگی پایین و راندمان بالا.",
        content: `سوخت دیزل EN 590 با گوگرد کمتر از 10ppm، استاندارد جهانی ULSD را رعایت می‌کند و برای موتورهای دیزلی مدرن طراحی شده است.

**ویژگی‌ها:**
* عدد ستان بالا برای احتراق کامل و عملکرد بهتر موتور.
* روان‌کنندگی تقویت‌شده برای محافظت از سیستم تزریق.
* افزودنی‌های ویژه برای عملکرد مناسب در اقلیم‌های سرد.`,
        category: "Trading",
        image: `${CONTENT_BASE}/product-EN-590.jpeg`,
        gallery: [`${CONTENT_BASE}/product-EN-590.jpeg`]
      },

      {
        id: 5,
        title: "نفت خام سنگین",
        description: "نفت خام با چگالی بالا و گرانروی زیاد، مناسب برای تولید قیر، نفت کوره و فرآورده‌های سنگین پالایشگاهی.",
        content: `نفت خام سنگین ما یک خوراک ایده‌آل برای پالایشگاه‌هایی است که به دنبال تولید محصولات سنگین مانند نفت کوره و قیر هستند.

**بازده پالایشگاهی:**
* تولید بالای نفت کوره و محصولات باقی‌مانده.
* مناسب برای تولید قیر صنعتی.
* قابل استفاده در فرآیندهای کراکینگ سنگین.`,
        category: "Trading",
        image: `${CONTENT_BASE}/product-Heavy-Crude-Oil.jpeg`,
        gallery: [`${CONTENT_BASE}/product-Heavy-Crude-Oil.jpeg`]
      },

      {
        id: 6,
        title: "سوخت جت A1",
        description: "سوخت استاندارد هوانوردی برای موتورهای توربینی، تولیدشده مطابق با استانداردهای بین‌المللی ایمنی و کیفیت.",
        content: `سوخت Jet A1 یک سوخت کروزن با کیفیت بالا است که در موتورهای توربینی هواپیما استفاده می‌شود و مطابق با استانداردهای سختگیرانه جهانی تولید می‌گردد.

**مشخصات محصول:**
* نقطه اشتعال بالا برای ایمنی بیشتر.
* نقطه انجماد پایین برای عملکرد در ارتفاعات بالا.
* دارای افزودنی‌های ضد خوردگی و ضد الکتریسیته ساکن.`,
        category: "Trading",
        image: `${CONTENT_BASE}/product-Jet-Fuel-A1.jpeg`,
        gallery: [`${CONTENT_BASE}/product-Jet-Fuel-A1.jpeg`]
      },

      {
        id: 7,
        title: "نفت سفید (کروزن)",
        description: "نفت سفید تصفیه‌شده با کارایی بالا برای گرمایش، روشنایی و کاربردهای صنعتی. سوختی پاک‌سوز و پایدار.",
        content: `نفت سفید یک سوخت هیدروکربنی چندمنظوره است که در گرمایش، روشنایی و صنایع شیمیایی کاربرد دارد.

**کاربردهای صنعتی:**
* سوخت بخاری‌های صنعتی و خانگی.
* استفاده در تولید شوینده‌ها و چربی‌زداها.
* ماده اولیه در تولید رنگ‌ها و آفت‌کش‌ها.`,
        category: "Trading",
        image: `${CONTENT_BASE}/product-Kerosene.jpeg`,
        gallery: [`${CONTENT_BASE}/product-Kerosene.jpeg`]
      },

      {
        id: 8,
        title: "نفت خام سبک",
        description: "نفت خام با درجه API بالا و بازدهی ممتاز در تولید بنزین، دیزل و خوراک پتروشیمی.",
        content: `نفت خام سبک به دلیل چگالی پایین و بازدهی بالا در تولید سوخت‌های ارزشمند، یکی از محبوب‌ترین خوراک‌های پالایشگاهی است.

**ارزش پالایشی:**
* بازدهی بالا در تولید بنزین و سوخت جت.
* درصد بالای نفتا برای صنایع پتروشیمی.
* هزینه پالایش کمتر نسبت به نفت‌های سنگین.`,
        category: "Trading",
        image: `${CONTENT_BASE}/product-Light-Crude-Oil.jpeg`,
        gallery: [`${CONTENT_BASE}/product-Light-Crude-Oil.jpeg`]
      },

      {
        id: 9,
        title: "نفتای سبک (LVN)",
        description: "خوراک کلیدی برای واحدهای کراکر بخار و تولید اولفین‌ها. مناسب برای صنایع پتروشیمی و ترکیب بنزین.",
        content: `نفتای سبک (LVN) یک خوراک حیاتی برای تولید اتیلن و پروپیلن در واحدهای کراکینگ بخار است و همچنین در ترکیب بنزین با اکتان بالا استفاده می‌شود.

**کاربردها:**
* خوراک اصلی تولید اولفین‌ها.
* حلال در صنایع شیمیایی.
* جزء ترکیبی برای تولید بنزین.`,
        category: "Trading",
        image: `${CONTENT_BASE}/product-light-virgin-naphtha.jpeg`,
        gallery: [`${CONTENT_BASE}/product-light-virgin-naphtha.jpeg`]
      },

      {
        id: 12,
        title: "ایمن‌سازی مخازن در برابر انفجار",
        description: "خدمات مهندسی ایمنی پیشرفته برای کاهش ریسک انفجار در مخازن ذخیره‌سازی و تأسیسات انرژی.",
        content: `ایمنی در صنعت انرژی یک ضرورت حیاتی است. خدمات ایمن‌سازی ما با استفاده از فناوری‌های پیشرفته، ریسک انفجار و خرابی‌های فاجعه‌بار را کاهش می‌دهد.

**رویکرد ما:**
* نصب شعله‌گیرها و ولوهای فشار/خلأ.
* اجرای سیستم‌های گاز خنثی (Blanketing).
* استفاده از پوشش‌های ضد الکترواستاتیک.`,
        category: "Services",
        image: "https://images.unsplash.com/photo-1535206587979-99443dc94cb7?q=80&w=800&auto=format&fit=crop",
        gallery: [
          "https://images.unsplash.com/photo-1535206587979-99443dc94cb7?q=80&w=1200",
          "https://images.unsplash.com/photo-1505250469679-253c7379f673?q=80&w=1200"
        ]
      },

      {
        id: 13,
        title: "ارزیابی ریسک",
        description: "تحلیل جامع ریسک‌های عملیاتی برای پالایشگاه‌ها و واحدهای پتروشیمی. ارائه راهکارهای تخصصی مدیریت ایمنی.",
        content: `خدمات ارزیابی ریسک ما شامل تحلیل دقیق خطرات عملیاتی و ارائه راهکارهای کاهش ریسک برای صنایع انرژی است.

**خدمات شامل:**
* مطالعات HAZOP.
* ارزیابی کمی ریسک (QRA).
* ممیزی سیستم‌های مدیریت ایمنی.`,
        category: "Services",
        image: "https://images.unsplash.com/photo-1455849318743-b2233052fcff?q=80&w=800&auto=format&fit=crop",
        gallery: [
          "https://images.unsplash.com/photo-1455849318743-b2233052fcff?q=80&w=1200",
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200"
        ]
      },

      {
        id: 14,
        title: "نگهداری و یکپارچگی مخازن",
        description: "خدمات کامل نگهداری، بازرسی و تعمیرات مخازن ذخیره‌سازی مطابق با استانداردهای API.",
        content: `نگهداری صحیح مخازن برای افزایش عمر تجهیزات و جلوگیری از نشت و آلودگی ضروری است.

**خدمات محوری:**
* لجن‌زدایی و شستشوی مخازن.
* تست‌های غیرمخرب (NDT) و بازرسی API 653.
* کنترل خوردگی و اجرای پوشش‌های محافظ.`,
        category: "Services",
        image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800&auto=format&fit=crop",
        gallery: [
          "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1200",
          "https://images.unsplash.com/photo-1581093588401-fbb07366f555?q=80&w=1200"
        ]
      },

      {
        id: 15,
        title: "تولید قطعات ایمنی",
        description: "تولید قطعات ایمنی صنعتی با استانداردهای بین‌المللی برای محیط‌های پرخطر در صنایع نفت و گاز.",
        content: `بخش تولید ما در ساخت قطعات ایمنی با کارایی بالا برای صنایع انرژی تخصص دارد.

**سبد محصولات:**
* واشرها و سیستم‌های آب‌بندی.
* اتصالات ضدانفجار.
* ولوهای ایمنی و تجهیزات اضطراری.`,
        category: "Services",
        image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop",
        gallery: [
          "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1200",
          "https://images.unsplash.com/photo-1537462713505-a1ceac92fa89?q=80&w=1200"
        ]
      },

      {
        id: 16,
        title: "مشاوره و مذاکرات",
        description: "خدمات تخصصی مشاوره تجاری، برندینگ بین‌المللی و مذاکرات استراتژیک برای شرکت‌های فعال در صنعت انرژی.",
        content: `بازار جهانی انرژی نیازمند تحلیل دقیق، استراتژی قوی و مذاکرات حرفه‌ای است.

**حوزه‌های تخصص:**
* استراتژی تجارت بین‌الملل.
* برندینگ و بازاریابی برای هلدینگ‌های انرژی.
* مدیریت قراردادها و مذاکرات تجاری.`,
        category: "Services",
        image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop",
        gallery: [
          "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1200",
          "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1200"
        ]
      }
    ];

export const getProductsAr = (): Product[] => [
      {
        id: 1,
        title: "زيت الأساس SN 170",
        description: "زيت أساس بارافيني من المجموعة 1 بجودة عالية، مثالي لتركيب زيوت التشحيم الصناعية والمتقدمة. يتميز بذوبانية ممتازة واستقرار أكسدة للاستخدامات الصناعية والآلية.",
        content: `زيت الأساس SN 170 هو زيت بارافيني من المجموعة 1 عالي الجودة، معروف بقدرته على مقاومة الأكسدة واستقراره الحراري. يُستخدم كعنصر أساسي في صياغة زيوت التشحيم المتنوعة.

**الاستخدامات الرئيسية:**
* إنتاج زيوت هيدروليكية وزيوت تروس صناعية.
* مادة أولية لزيوت محركات السيارات الخفيفة والثقيلة.
* صياغة سوائل تشغيل المعادن وزيوت العمليات.

**المزايا الفنية:**
يتميز بانخفاض التبخر ونقطة اشتعال ثابتة، مما يضمن أداءً موثوقاً في درجات الحرارة العالية. المواصفات الفنية الكاملة وCOA متاحة عند الطلب.`,
        category: "Trading",
        image: `${CONTENT_BASE}/product-Base-Oil-SN-170.jpeg`,
        gallery: [`${CONTENT_BASE}/product-Base-Oil-SN-170.jpeg`]
      },

      {
        id: 2,
        title: "زيت الأساس SN 500",
        description: "زيت أساس ثقيل من المجموعة 1 ذو لزوجة عالية، مثالي لزيوت التشحيم البحرية والشحوم الصناعية التي تتطلب استقراراً حرارياً.",
        content: `زيت الأساس SN 500 هو زيت ثقيل من المجموعة 1 يتميز بلزوجة عالية واستقرار حراري ممتاز. صُمم خصيصاً للتطبيقات التي تحتاج طبقة تشحيم قوية ومقاومة للتفكك.

**الاستخدامات الرئيسية:**
* زيوت محركات الديزل الثقيلة وزيوت التشحيم البحرية.
* زيوت التروس والشحوم الصناعية عالية الأداء.
* زيوت معالجة المطاط والمواد الكيميائية.

**الأداء النوعي:**
يقدم مؤشر لزوجة مرتفع وذوبانية ممتازة، مما يجعله خياراً مفضلاً للتطبيقات المعقدة في الأسواق العالمية.`,
        category: "Trading",
        image: `${CONTENT_BASE}/product-Base-Oil-SN-500-1.jpeg`,
        gallery: [`${CONTENT_BASE}/product-Base-Oil-SN-500-1.jpeg`]
      },

      {
        id: 3,
        title: "البيتومين (درجات الاختراق)",
        description: "بيتومين صناعي بدرجات اختراق معيارية لمشاريع الطرق والعزل والبنية التحتية. يتميز بالمتانة العالية ومقاومة الظروف الحرارية.",
        content: `نوفر بيتومين عالي الجودة بدرجات اختراق مختلفة مثل 60/70 و80/100، مناسب للمشاريع الإنشائية الحساسة. يتميز بقدرة التصاق عالية ومقاومة للتغيرات الحرارية.

**الاستخدامات:**
* رصف الطرق والطرق السريعة.
* العوازل المائية للأسقف والأساسات.
* تغليف الأنابيب والعوازل الصناعية.

**الأداء:**
مصمم لتحمل تقلبات درجات الحرارة القاسية، مما يضمن عمر أطول للأسفلت وتقليل تكاليف الصيانة.`,
        category: "Trading",
        image: `${CONTENT_BASE}/product-bitumen-1.jpeg`,
        gallery: [`${CONTENT_BASE}/product-bitumen-1.jpeg`, `${CONTENT_BASE}/product-bitumen.jpeg`]
      },

      {
        id: 4,
        title: "الديزل EN 590 (10PPM)",
        description: "ديزل منخفض الكبريت للغاية وفق معيار EN 590، مثالي للمحركات الحديثة ذات الانبعاثات المنخفضة وكفاءة عالية.",
        content: `وقود الديزل EN 590 يحتوي على أقل من 10ppm كبريت، ويلبي معيار ULSD العالمي. صُمم للاستخدام في محركات الديزل الحديثة الصناعية والآلية.

**المميزات:**
* رقم سيتان مرتفع لاحتراق أفضل وأداء محسّن.
* تشحيم معزز لحماية أنظمة الحقن.
* إضافات خاصة للأجواء الباردة لضمان التوزيع العالمي.`,
        category: "Trading",
        image: `${CONTENT_BASE}/product-EN-590.jpeg`,
        gallery: [`${CONTENT_BASE}/product-EN-590.jpeg`]
      },

      {
        id: 5,
        title: "النفط الخام الثقيل",
        description: "نفط خام عالي الكثافة واللزوجة، مثالي لإنتاج البيتومين والوقود الثقيل في المصافي المتخصصة.",
        content: `النفط الخام الثقيل لدينا مصدر هيدروكربوني غني يُفضل في المصافي المتقدمة لإنتاج منتجات ثقيلة مثل البيتومين وزيت الوقود.

**العائد المصفاتي:**
* إنتاج مرتفع من زيت الوقود والمنتجات المتبقية.
* مصدر رئيسي للبيتومين الصناعي.
* مناسب لعمليات التكسير البتروكيميائية المتقدمة.`,
        category: "Trading",
        image: `${CONTENT_BASE}/product-Heavy-Crude-Oil.jpeg`,
        gallery: [`${CONTENT_BASE}/product-Heavy-Crude-Oil.jpeg`]
      },

      {
        id: 6,
        title: "وقود الطائرات A1",
        description: "وقود طيران قياسي من نوع Jet A1، مُنتج وفق المعايير الدولية لضمان السلامة والأداء الأمثل لمحركات التوربين.",
        content: `وقود Jet A1 هو نوع من الكيروسين عالي الجودة يُستخدم عالمياً في محركات التوربين النفاث. يتم إنتاجه وفق معايير صارمة لضمان الكفاءة والسلامة في الطيران.

**المواصفات:**
* نقطة اشتعال مرتفعة لزيادة السلامة.
* نقطة تجمد منخفضة للعمليات على ارتفاعات عالية.
* يحتوي على إضافات مضادة للتآكل والكهرباء الساكنة.`,
        category: "Trading",
        image: `${CONTENT_BASE}/product-Jet-Fuel-A1.jpeg`,
        gallery: [`${CONTENT_BASE}/product-Jet-Fuel-A1.jpeg`]
      },

      {
        id: 7,
        title: "الكيروسين (النفط الأبيض)",
        description: "كيروسين مكرر عالي الجودة للاستخدام في التدفئة والإضاءة والتطبيقات الصناعية. وقود نظيف وفعّال.",
        content: `الكيروسين هو سائل هيدروكربوني متعدد الاستخدامات يُستخدم في التدفئة والإضاءة والصناعات الكيميائية. يتميز بكثافة طاقة عالية واحتراق نظيف.

**الاستخدامات الصناعية:**
* وقود أجهزة التدفئة المنزلية والصناعية.
* مكون رئيسي في المنظفات ومزيلات الشحوم.
* مادة أولية لإنتاج الدهانات والمبيدات.`,
        category: "Trading",
        image: `${CONTENT_BASE}/product-Kerosene.jpeg`,
        gallery: [`${CONTENT_BASE}/product-Kerosene.jpeg`]
      },

      {
        id: 8,
        title: "النفط الخام الخفيف",
        description: "نفط خام منخفض الكثافة بدرجة API مرتفعة، مثالي لإنتاج البنزين والديزل ومواد بتروكيماوية عالية القيمة.",
        content: `يُعتبر النفط الخام الخفيف من أكثر أنواع النفط تفضيلاً بسبب كثافته المنخفضة وسهولة تكريره، حيث ينتج نسباً عالية من الوقود عالي الجودة.

**القيمة المصفاتية:**
* إنتاج مرتفع من البنزين ووقود الطائرات.
* تركيز عالٍ من النافثا لصناعات البتروكيماويات.
* تكلفة تكرير أقل مقارنة بالدرجات الثقيلة.`,
        category: "Trading",
        image: `${CONTENT_BASE}/product-Light-Crude-Oil.jpeg`,
        gallery: [`${CONTENT_BASE}/product-Light-Crude-Oil.jpeg`]
      },

      {
        id: 9,
        title: "النافثا الخفيفة (LVN)",
        description: "مادة أولية أساسية لوحدات التكسير البخاري وإنتاج الأوليفينات. تُستخدم أيضاً كمكوّن في البنزين عالي الأوكتان.",
        content: `النافثا الخفيفة (LVN) تُعد مادة أولية حيوية لصناعة البتروكيماويات، خصوصاً لإنتاج الإيثيلين والبروبيلين في وحدات التكسير البخاري. كما تُستخدم كمكوّن في البنزين عالي الأوكتان.

**الاستخدامات:**
* مادة أولية لإنتاج الأوليفينات.
* مذيب في الصناعات الكيميائية والمطاطية.
* مكوّن أساسي في عمليات مزج البنزين.`,
        category: "Trading",
        image: `${CONTENT_BASE}/product-light-virgin-naphtha.jpeg`,
        gallery: [`${CONTENT_BASE}/product-light-virgin-naphtha.jpeg`]
      },

      {
        id: 12,
        title: "تأمين الخزانات ضد الانفجار",
        description: "خدمات هندسة السلامة المتقدمة لتقليل مخاطر الانفجار في الخزانات ومرافق الطاقة.",
        content: `السلامة في قطاع الطاقة أولوية قصوى. تعتمد خدماتنا على تقنيات متقدمة لتقليل احتمالية الحوادث والانفجارات في مرافق التخزين.

**نهجنا:**
* تركيب مانعات اللهب وصمامات الضغط والتفريغ.
* تنفيذ أنظمة تغطية الغاز الخامل (Blanketing).
* استخدام مواد وطلاءات متخصصة لتقليل المخاطر الكهروستاتيكية.`,
        category: "Services",
        image: "https://images.unsplash.com/photo-1535206587979-99443dc94cb7?q=80&w=800&auto=format&fit=crop",
        gallery: [
          "https://images.unsplash.com/photo-1535206587979-99443dc94cb7?q=80&w=1200",
          "https://images.unsplash.com/photo-1505250469679-253c7379f673?q=80&w=1200"
        ]
      },

      {
        id: 13,
        title: "تقييم المخاطر",
        description: "تحليل شامل للمخاطر التشغيلية وتقديم حلول لتعزيز السلامة في مرافق الطاقة.",
        content: `تشمل خدمات تقييم المخاطر لدينا تحليلاً دقيقاً للمخاطر المحتملة في المصافي والمحطات ومجمعات البتروكيماويات.

**الخدمات:**
* دراسات HAZOP (تحديد المخاطر وقابلية التشغيل).
* تقييم كمي للمخاطر (QRA).
* مراجعة وتحسين أنظمة إدارة السلامة.`,
        category: "Services",
        image: "https://images.unsplash.com/photo-1455849318743-b2233052fcff?q=80&w=800&auto=format&fit=crop",
        gallery: [
          "https://images.unsplash.com/photo-1455849318743-b2233052fcff?q=80&w=1200",
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200"
        ]
      },

      {
        id: 14,
        title: "صيانة وسلامة الخزانات",
        description: "خدمات شاملة لصيانة وفحص وإصلاح خزانات التخزين وفق معايير API.",
        content: `تُعد الصيانة الدورية ضرورية لإطالة عمر مرافق التخزين ومنع التلوث البيئي.

**الخدمات الأساسية:**
* إزالة الرواسب وتنظيف الخزانات يدوياً أو آلياً.
* اختبارات غير إتلافية (NDT) وفحوصات وفق معيار API 653.
* مكافحة التآكل وتطبيق الطلاءات الواقية.`,
        category: "Services",
        image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800&auto=format&fit=crop",
        gallery: [
          "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1200",
          "https://images.unsplash.com/photo-1581093588401-fbb07366f555?q=80&w=1200"
        ]
      },

      {
        id: 15,
        title: "تصنيع مكونات السلامة",
        description: "إنتاج مكونات سلامة صناعية عالية الجودة لبيئات النفط والغاز والبتروكيماويات.",
        content: `يختص قسم التصنيع لدينا بإنتاج مكونات سلامة عالية الأداء مصممة لتحمل الظروف القاسية في قطاع الطاقة.

**مجموعة المنتجات:**
* الحشوات وحلول الإحكام المتخصصة.
* وصلات كهربائية مقاومة للانفجار.
* صمامات أمان مخصصة ومكونات الطوارئ.`,
        category: "Services",
        image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop",
        gallery: [
          "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1200",
          "https://images.unsplash.com/photo-1537462713505-a1ceac92fa89?q=80&w=1200"
        ]
      },

      {
        id: 16,
        title: "الاستشارات والمفاوضات",
        description: "خدمات استشارية متخصصة في العلامة التجارية الدولية والتسويق والمفاوضات التجارية في قطاع الطاقة.",
        content: `يتطلب التنقل في تعقيدات سوق الطاقة العالمي خبرة عميقة ورؤية استراتيجية.

**مجالات التخصص:**
* استراتيجيات التجارة الدولية وسلاسل التوريد.
* العلامة التجارية والتسويق لمجموعات الطاقة.
* إدارة العقود والمفاوضات الاستراتيجية.`,
        category: "Services",
        image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop",
        gallery: [
          "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1200",
          "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1200"
        ]
      }
    ];


export const getProducts = (lang: string): Product[] => {
  if (lang === 'fa') return getProductsFa();
  if (lang === 'ar') return getProductsAr();
  return BASE_PRODUCTS;
};

export const getBlogPostsFa = (): BlogPost[] => [
  {
    id: 1,
    title: "آینده صنعت نفت و گاز در کشورهای GCC: فرصت‌ها و چشم‌اندازها",
    excerpt: "صنعت نفت و گاز همچنان ستون اصلی اقتصاد کشورهای عضو شورای همکاری خلیج فارس (GCC) است. با وجود فشارهای جهانی برای گذار به انرژی‌های نو، این کشورها جایگاه خود را در بازار جهانی انرژی تثبیت کرده‌اند.",
    content: `صنعت نفت و گاز همچنان ستون اصلی اقتصاد کشورهای عضو شورای همکاری خلیج فارس (GCC) است. با وجود فشارهای جهانی برای گذار به انرژی‌های نو و الزامات زیست‌محیطی، این کشورها با برنامه‌ریزی استراتژیک، فناوری‌های پیشرفته و سرمایه‌گذاری‌های بلندمدت جایگاه خود را در بازار جهانی انرژی تثبیت کرده‌اند.

**موقعیت استراتژیک GCC در بازار جهانی انرژی**
کشورهایی مانند عربستان سعودی، امارات متحده عربی و قطر بخش قابل توجهی از ذخایر اثبات‌شده نفت و گاز جهان را در اختیار دارند. تمرکز بر بهره‌وری عملیاتی، توسعه زیرساخت‌ها و تحول دیجیتال، آینده‌ای پایدار و رقابتی برای صنایع انرژی این کشورها تضمین می‌کند.

**فرصت‌های سرمایه‌گذاری هوشمند**
استراتژی‌های ملی مانند چشم‌انداز 2030 عربستان و استراتژی انرژی 2050 امارات شرایطی جذاب برای سرمایه‌گذاری بین‌المللی ایجاد کرده‌اند. فرصت‌های کلیدی شامل توسعه میادین بالادستی، گسترش پالایشگاه‌ها و بهینه‌سازی زنجیره تأمین انرژی است. هلدینگ رحیمی مشارکت استراتژیک در این بخش‌ها را رکن اصلی رشد پایدار می‌داند.

**چشم‌انداز آینده**
آینده صنعت نفت و گاز در GCC متعلق به شرکت‌هایی است که تجربه، نوآوری و مدیریت ریسک را متوازن می‌سازند. مشارکت راهبردی در پروژه‌های انرژی منطقه‌ای مزیت رقابتی تعیین‌کننده‌ای در سال‌های پیش رو خواهد بود.
`,
    date: "December 28, 2025",
    author: "Rahimi Holding",
    image: `${CONTENT_BASE}/Blogarticle-GCC.jpg`
  },
  {
    id: 2,
    title: "نقش پتروشیمی‌های پیشرفته در اقتصاد کشورهای GCC: از صادرات مواد خام تا خلق ارزش افزوده بالا",
    excerpt: "صنعت پتروشیمی به ستون اصلی تنوع اقتصادی در کشورهای شورای همکاری خلیج فارس تبدیل شده و تمرکز از صادرات مواد خام به سمت محصولات با ارزش افزوده بالا تغییر یافته است.",
    content: `صنعت پتروشیمی به یکی از ارکان اصلی تنوع‌بخشی اقتصادی در کشورهای عضو GCC تبدیل شده است. سیاست‌گذاران به خوبی دریافته‌اند که رشد پایدار نیازمند حرکت از صادرات مواد خام به سمت محصولات پتروشیمی تخصصی و با ارزش افزوده بالا است.

**مزیت رقابتی GCC در پتروشیمی**
دسترسی فراوان به خوراک، هزینه‌های تولید رقابتی و زیرساخت‌های پیشرفته، این منطقه را به هاب جهانی پتروشیمی تبدیل کرده است. این مزایا زمینه‌ساز توسعه صنعتی بلندمدت و رشد صادرات پایدار هستند.

**گذار به سمت محصولات پتروشیمی تخصصی**
کشورهای GCC به طور فزاینده‌ای در محصولات پایین‌دستی و پتروشیمی‌های تخصصی سرمایه‌گذاری می‌کنند. این تغییر باعث افزایش سودآوری، کاهش وابستگی به نوسانات قیمت نفت خام و تقویت تاب‌آوری صنعتی می‌شود. هلدینگ رحیمی این گذار را رکن اصلی آینده انرژی منطقه می‌داند.

**پتروشیمی به عنوان محرک رشد اقتصادی**
پتروشیمی‌های پیشرفته از صنایع پایین‌دستی حمایت کرده، اشتغال تخصصی ایجاد می‌کنند و رقابت‌پذیری صادراتی را تقویت می‌نمایند. شرکت‌هایی که توانایی اجرای پروژه‌ها و مشارکت‌های بین‌المللی دارند، رهبران این رشد خواهند بود.
    `,
    date: "December 30, 2025",
    author: "Rahimi Holding",
    image: `${CONTENT_BASE}/Blogarticle-Petrochem2.jpg`
  },
  {
    id: 3,
    title: "پروژه‌های بزرگ نفت، گاز و پتروشیمی در GCC: فرصت‌های همکاری برای شرکت‌های بین‌المللی",
    excerpt: "نسل جدیدی از پروژه‌های عظیم در کشورهای GCC در حال اجراست که استانداردهای جدیدی در مقیاس و پیچیدگی فنی ایجاد کرده‌اند.",
    content: `کشورهای عضو شورای همکاری خلیج فارس (GCC) در حال اجرای نسل جدیدی از پروژه‌های عظیم نفت، گاز و پتروشیمی هستند. این پروژه‌ها نه تنها از نظر مقیاس، بلکه از نظر پیچیدگی فنی و حاکمیت پروژه استانداردهای جدیدی تعریف کرده‌اند.

**فرصت‌های همکاری بین‌المللی**
چنین محیطی فرصت‌های گسترده‌ای برای همکاری شرکت‌های بین‌المللی و هلدینگ‌های متنوع ایجاد می‌کند. هلدینگ رحیمی این پروژه‌ها را به‌عنوان پلتفرم‌های استراتژیک برای مشارکت‌های بلندمدت می‌بیند.

**حوزه‌های کلیدی پروژه‌های آینده**
تمرکز پروژه‌های آتی بر توسعه میادین گازی، گسترش LNG، پالایش نفت و تأسیسات یکپارچه تبدیل نفت به محصولات پتروشیمی است. این رویکرد یکپارچه باعث افزایش کارایی و کاهش ریسک‌های عملیاتی می‌شود.

**چرا GCC مقصد جذاب سرمایه‌گذاری انرژی است**
ثبات اقتصادی، چارچوب‌های سرمایه‌گذاری حمایت‌شده توسط دولت‌ها و دسترسی به بازارهای جهانی، این منطقه را به یکی از جذاب‌ترین مقاصد سرمایه‌گذاری انرژی در جهان تبدیل کرده است.

**نقش هلدینگ‌ها در مگاپروژه‌های انرژی**
هلدینگ‌هایی با تخصص منطقه‌ای و انعطاف عملیاتی بهترین موقعیت را برای حمایت از پروژه‌های پیچیده انرژی دارند. مشارکت‌های بلندمدت همچنان مدل غالب اجرای پروژه‌ها در GCC باقی خواهد ماند.
    `,
    date: "January 2, 2026",
    author: "Rahimi Holding",
    image: `${CONTENT_BASE}/Blogarticle-MegaProjects3.jpg`
  }
];

export const getBlogPostsAr = (): BlogPost[] => [
  {
    id: 1,
    title: "مستقبل صناعة النفط والغاز في دول مجلس التعاون الخليجي: الفرص والتوقعات",
    excerpt: "تظل صناعة النفط والغاز الركيزة الأساسية لاقتصادات دول مجلس التعاون الخليجي. وعلى الرغم من التحولات العالمية، فإن هذه الدول تعزز مكانتها كلاعب رئيسي في سوق الطاقة العالمي.",

    image: `${CONTENT_BASE}/Blogarticle-GCC.jpg`,
    date: '',
    author: ''
  },
  {
    id: 2,
    title: "دور البتروكيماويات المتقدمة في اقتصادات دول مجلس التعاون الخليجي: من تصدير المواد الخام إلى خلق قيمة مضافة عالية",
    excerpt: "أصبحت صناعة البتروكيماويات حجر الأساس لتنويع الاقتصاد في دول مجلس التعاون الخليجي، حيث تحول التركيز من تصدير المواد الخام إلى المنتجات ذات القيمة المضافة العالية.",
    content: `أصبحت صناعة البتروکیماویات رکیزة أساسیة لتنویع الاقتصاد فی دول مجلس التعاون الخليجی. یدرك صنّاع القرار أن النمو المستدام یتطلب الانتقال من تصدیر المواد الخام إلى إنتاج منتجات بتروکیماویة متخصصة ذات قیمة مضافة عالیة.

**الميزة التنافسية لدول مجلس التعاون فی البتروکیماویات**
وفرة المواد الأولى، انخفاض تکالیف الإنتاج، والبنیة التحتیة المتقدمة جَعَلَت المنطقة مرکزًا عالمیاً للبتروکیماویات. هذه المزايا تدعم التوسع الصناعي طیلاً الأمد وزیادة الصادرات.

**التحول نحو المنتجات البتروکیماویة المتخصصة**
تستثمر دول مجلس التعاون بشکل متزاید فی المنتجات البتروکیماویة المتخصصة والمشاریع التحویلیة. هذا التحول یعزز الرباحیة، یقلل من التعرض لتقلبات أسعار النفط الخام، ویقوّي مرونة الصناعة. تعتبر مجموعة رحیمی هذا التحول رکنًا أساسیاً لمستقبل الطاقة فی المنطقة.

**البترول الکیماوي کمحرك للنمو الاقتصادی**
تدعم البتروکیماویات المتقدمة الصناعات التحویلیة، وتخلق وظائف متخصصة، وتُعزز القدرة التنافسیة للصادرات. الشركات التي تمتلك قدرات تنفیذ المشاريع وشراكات دولیة ستكون فی طلیعة هذا النمو.
`,
    date: "December 30, 2025",
    author: "Rahimi Holding",
    image: `${CONTENT_BASE}/Blogarticle-Petrochem2.jpg`
  },
  {
    id: 3,
    title: "المشاريع الكبرى في النفط والغاز والبتروكيماويات بدول مجلس التعاون الخليجي: فرص التعاون للشركات الدولية",
    excerpt: "تطلق دول مجلس التعاون الخليجي جيلاً جديداً من المشاريع العملاقة في قطاع الطاقة، واضعة معايير جديدة من حيث الحجم والتعقيد الفني.",
    content: `تطلق دول مجلس التعاون الخليجي جيلاً جديداً من المشاريع العملاقة في النفط والغاز والبتروكيماويات. هذه المشاريع لا تقتصر على الحجم الكبير فحسب، بل تشمل أيضاً التعقيد الفني وحوكمة المشاريع وفق معايير جديدة.

**فرص التعاون للشركات الدولية**
يوفر هذا المناخ فرصاً واسعة للتعاون مع الشركات الدولية والكيانات الاستثمارية المتنوعة. ترى مجموعة رحیمی هذه المشاريع منصات استراتيجية للشراكات طويلة الأمد.

**المجالات الرئيسية للمشاريع المستقبلية**
تركز المشاريع القادمة على تطوير حقول الغاز، توسيع إنتاج الغاز الطبيعي المسال (LNG)، التكرير النفطي، وإنشاء مرافق متكاملة لتحويل النفط إلى منتجات بتروکیماوية. هذا النهج المتكامل يعزز الكفاءة ويقلل المخاطر التشغيلية.

**لماذا تجذب دول مجلس التعاون الشراكات العالمية في الطاقة**
الاستقرار الاقتصادي، الأطر الاستثمارية المدعومة من الحكومات، والوصول إلى الأسواق العالمية تجعل المنطقة واحدة من أكثر الوجهات جذباً للاستثمارات في قطاع الطاقة.

**دور الشركات القابضة في الميجا بروجيكتس**
الشركات القابضة ذات الخبرة الإقليمية والمرونة التشغيلية في موقع مثالي لدعم المشاريع المعقدة في قطاع الطاقة. ستظل الشراكات طويلة الأمد النموذج السائد لتنفيذ المشاريع في دول مجلس التعاون.
`,
    date: "January 2, 2026",
    author: "Rahimi Holding",
    image: `${CONTENT_BASE}/Blogarticle-MegaProjects3.jpg`
  }
];

export const getBlogPosts = (lang: string) => {
  if (lang === 'fa') return getBlogPostsFa();
  if (lang === 'ar') return getBlogPostsAr();
  return BASE_BLOG_POSTS;
};
