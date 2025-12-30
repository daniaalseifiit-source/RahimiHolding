//seo contents - final.ts
// Unified multilingual content (English, Persian, Arabic) for Rahimi Holding website.
// SEO Rahimi applied: keyword-rich, extended English copy, and bold emphasis with <strong> tags.
// Includes: Company Info, Home/About/Footer, Products (Trading), Services, Blog Posts, and helpers.

import { Product, BlogPost, CompanyInfo } from './types';

// -------------------------------
// Company Info
// -------------------------------
export const COMPANY_INFO: CompanyInfo = {
  name: "Rahimi Investment & Business S.P.C",
  address: "Muscat, Oman",
  phone: ["+968-91239037"],
  email: ["Info@rahimiholding.com"],
  copyright:
    "© 2024 Rahimi Holding. <strong>Oil & Gas Trading</strong>, <strong>Petrochemical Solutions</strong> & <strong>Industrial Safety Services</strong> in GCC & Global Markets. All Rights Reserved."
};

// -------------------------------
// Media base
// -------------------------------
export const CONTENT_BASE =
  (import.meta as any)?.env?.VITE_CONTENT_BASE || "https://rahimiholding.com/content";

// -------------------------------
// Home/About/Footer translations
// -------------------------------
export const TRANSLATIONS = {
  en: {
    home: {
      aboutTag: "Who We Are",
      aboutTitle: "Global Vision, Local Expertise",
      aboutDesc1:
        "Rahimi Investment & Business, established in 2024 in the Sultanate of Oman, delivers <strong>innovative solutions</strong> across the oil, gas, and petrochemical industries.",
      aboutDesc2:
        "With a strong presence in GCC countries, Rahimi Holding leverages <strong>strategic partnerships</strong> across the Middle East and Europe to provide reliable, internationally compliant energy solutions.",
      missionTitle: "Our Mission",
      missionDesc:
        "To deliver <strong>trusted oil & gas trading solutions</strong> and <strong>advanced petrochemical safety services</strong> worldwide.",
      visionTitle: "Our Vision",
      visionDesc:
        "To become a <strong>global energy partner</strong> by combining international trading expertise with innovative safety technologies.",
      divisionsTag: "Core Sectors",
      divisionsTitle: "Our Business Divisions",
      refinery: {
        title: "Refinery Products",
        subtitle: "Petroleum Products and Derivatives",
        desc:
          "We supply fuels and derivatives essential for <strong>energy</strong>, <strong>transportation</strong>, <strong>construction</strong>, and <strong>manufacturing</strong>—produced under strict international standards.",
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
          "High-quality products derived from <strong>natural gas</strong> and <strong>petroleum feedstocks</strong>—critical building blocks for plastics, textiles, and agriculture.",
        productsTitle: "Products derived from natural gas:",
        list: ["Methanol", "Acetic Acid", "Urea", "Polyethylene (PE)", "Polypropylene (PP)", "PVC"]
      },
      whyTag: "Why Choose Us",
      whyTitle: "Building Trust Through Excellence",
      whyDesc:
        "We combine <strong>traditional trading values</strong> with <strong>modern safety technologies</strong> to deliver unmatched reliability.",
      features: {
        safety: { title: "Safety First", desc: "Advanced explosion-proofing solutions for energy facilities." },
        quality: { title: "Premium Quality", desc: "Direct access to major GCC refineries." },
        global: { title: "Global Reach", desc: "Integrated logistics across Oman, GCC, and global markets." },
        support: { title: "Expert Support", desc: "24/7 consultation team with deep industry expertise." }
      },
      ctaTitle: "Ready to Collaborate?",
      ctaDesc: "Contact Rahimi Holding for <strong>energy trading inquiries</strong> or <strong>advanced safety consultations</strong>.",
      ctaBtn: "Contact Rahimi Holding"
    },
    footer: {
      desc: "Rahimi Holding – Reliable <strong>oil & gas trading</strong>, <strong>petrochemical solutions</strong>, and <strong>advanced safety services</strong> across GCC and global markets.",
      links: "Quick Links",
      contact: "Get in Touch",
      rights: "© 2024 Rahimi Holding. All Rights Reserved.",
      privacy: "Privacy Policy | Terms of Service"
    }
  },

  fa: {
    home: {
      aboutTag: "درباره ما",
      aboutTitle: "افق جهانی، تخصص محلی",
      aboutDesc1:
        "رحیمی اینوستمنت و بیزنس، تأسیس ۲۰۲۴ در عمان، راهکارهای <strong>نوآورانه</strong> در نفت، گاز و پتروشیمی ارائه می‌دهد.",
      aboutDesc2:
        "با حضور قدرتمند در کشورهای GCC، رحیمی با تکیه بر <strong>مشارکت‌های راهبردی</strong> خاورمیانه و اروپا، راهکارهای قابل‌اعتماد و منطبق با استانداردهای بین‌المللی ارائه می‌کند.",
      missionTitle: "ماموریت ما",
      missionDesc:
        "ارائه <strong>راهکارهای معتبر تجارت نفت و گاز</strong> و <strong>خدمات پیشرفته ایمنی پتروشیمی</strong> در سراسر جهان.",
      visionTitle: "چشم‌انداز ما",
      visionDesc:
        "تبدیل شدن به <strong>شریک جهانی انرژی</strong> با ترکیب تجربه تجارت بین‌المللی و فناوری‌های نوین ایمنی.",
      divisionsTag: "بخش‌های اصلی",
      divisionsTitle: "تقسیمات کسب‌وکار ما",
      refinery: {
        title: "محصولات پالایشگاهی",
        subtitle: "محصولات نفتی و مشتقات",
        desc:
          "تأمین سوخت‌ها و مشتقات ضروری برای <strong>انرژی</strong>، <strong>حمل‌ونقل</strong>، <strong>ساخت‌وساز</strong> و <strong>تولید</strong>؛ مطابق با استانداردهای بین‌المللی.",
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
          "محصولات باکیفیت مشتق از <strong>گاز طبیعی</strong> و <strong>خوراک‌های نفتی</strong>؛ بلوک‌های حیاتی صنایع پلاستیک، نساجی و کشاورزی.",
        productsTitle: "محصولات مشتق از گاز طبیعی:",
        list: ["متانول", "اسید استیک", "اوره", "پلی‌اتیلن (PE)", "پلی‌پروپیلن (PP)", "PVC"]
      },
      whyTag: "چرا ما",
      whyTitle: "ساخت اعتماد با برتری",
      whyDesc:
        "ترکیب <strong>ارزش‌های سنتی تجارت</strong> با <strong>فناوری‌های نوین ایمنی</strong> برای ارائه قابلیت‌اعتماد بی‌نظیر.",
      features: {
        safety: { title: "اول ایمنی", desc: "راهکارهای ضدانفجار پیشرفته برای تأسیسات انرژی." },
        quality: { title: "کیفیت ممتاز", desc: "دستیابی مستقیم به پالایشگاه‌های بزرگ GCC." },
        global: { title: "دسترسی جهانی", desc: "لجستیک یکپارچه در عمان، GCC و بازارهای جهانی." },
        support: { title: "پشتیبانی متخصص", desc: "تیم مشاوره ۲۴/۷ با تجربه عمیق صنعتی." }
      },
      ctaTitle: "آماده همکاری هستید؟",
      ctaDesc: "برای <strong>تجارت انرژی</strong> یا <strong>مشاوره ایمنی پیشرفته</strong> با رحیمی هولدینگ تماس بگیرید.",
      ctaBtn: "تماس با رحیمی هولدینگ"
    },
    footer: {
      desc: "رحیمی هولدینگ – <strong>تجارت نفت و گاز</strong>، <strong>راهکارهای پتروشیمی</strong> و <strong>خدمات ایمنی پیشرفته</strong> در GCC و بازارهای جهانی.",
      links: "لینک‌های سریع",
      contact: "تماس با ما",
      rights: "© 2024 Rahimi Holding. تمامی حقوق محفوظ است.",
      privacy: "حریم خصوصی | قوانین استفاده"
    }
  },

  ar: {
    home: {
      aboutTag: "من نحن",
      aboutTitle: "رؤية عالمية وخبرة محلية",
      aboutDesc1:
        "تأسست مجموعة رحيمي في عمان عام 2024، وتقدم حلولاً <strong>مبتكرة</strong> عبر صناعات النفط والغاز والبتروكيماويات.",
      aboutDesc2:
        "بفضل حضور قوي في دول مجلس التعاون الخليجي، نستفيد من <strong>شراكات استراتيجية</strong> في الشرق الأوسط وأوروبا لتقديم حلول موثوقة ومتوافقة دولياً.",
      missionTitle: "مهمتنا",
      missionDesc:
        "تقديم <strong>حلول موثوقة لتجارة النفط والغاز</strong> وخدمات <strong>السلامة البتروكيماوية المتقدمة</strong> حول العالم.",
      visionTitle: "رؤيتنا",
      visionDesc:
        "أن نصبح <strong>شريكاً عالمياً للطاقة</strong> من خلال الجمع بين خبرة التجارة الدولية وتقنيات السلامة الحديثة.",
      divisionsTag: "القطاعات الأساسية",
      divisionsTitle: "قطاعات أعمالنا",
      refinery: {
        title: "منتجات التكرير",
        subtitle: "المنتجات النفطية والمشتقات",
        desc:
          "نزوّد وقوداً ومشتقات أساسية لـ<strong>الطاقة</strong> و<strong>النقل</strong> و<strong>البناء</strong> و<strong>التصنيع</strong>—وفقاً لأعلى المعايير الدولية.",
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
          "منتجات عالية الجودة مشتقة من <strong>الغاز الطبيعي</strong> و<strong>لقيم النفط</strong>—مواد أساسية للبلاستيك والمنسوجات والزراعة.",
        productsTitle: "منتجات مشتقة من الغاز الطبيعي:",
        list: ["الميثانول", "حمض الأسيتيك", "اليوريا", "البولي إيثيلين (PE)", "البولي بروبيلين (PP)", "PVC"]
      },
      whyTag: "لماذا تختارنا",
      whyTitle: "نبني الثقة عبر التميز",
      whyDesc:
        "نمزج <strong>قيم التجارة التقليدية</strong> مع <strong>تقنيات السلامة الحديثة</strong> لتقديم موثوقية لا مثيل لها.",
      features: {
        safety: { title: "السلامة أولاً", desc: "حلول متقدمة مضادة للانفجار للمرافق." },
        quality: { title: "جودة ممتازة", desc: "وصول مباشر إلى أكبر مصافي دول المجلس." },
        global: { title: "انتشار عالمي", desc: "شبكة لوجستية عبر عمان ودول المجلس والعالم." },
        support: { title: "دعم متخصص", desc: "فريق استشاري متاح على مدار الساعة بخبرة صناعية." }
      },
      ctaTitle: "جاهز للتعاون؟",
      ctaDesc: "تواصل معنا لطلبات <strong>تجارة الطاقة</strong> أو <strong>استشارات السلامة المتقدمة</strong>.",
      ctaBtn: "اتصل بمجموعة رحيمي"
    },
    footer: {
      desc: "مجموعة رحيمي – <strong>تجارة النفط والغاز</strong>، <strong>حلول بتروكيماوية</strong> وخدمات <strong>سلامة متقدمة</strong> في دول المجلس والأسواق العالمية.",
      links: "روابط سريعة",
      contact: "تواصل معنا",
      rights: "© 2024 Rahimi Holding. جميع الحقوق محفوظة.",
      privacy: "سياسة الخصوصية | شروط الاستخدام"
    }
  }
};

// -------------------------------
// Localized Types
// -------------------------------
type LocalizedProduct = Product & {
  i18n: {
    en: { title: string; description: string; content: string };
    fa: { title: string; description: string; content: string };
    ar: { title: string; description: string; content: string };
  };
};

type LocalizedBlog = BlogPost & {
  i18n: {
    en: { title: string; excerpt: string; content: string };
    fa: { title: string; excerpt: string; content: string };
    ar: { title: string; excerpt: string; content: string };
  };
};

// -------------------------------
// Products (Trading) – i18n
// -------------------------------
export const PRODUCTS_I18N: LocalizedProduct[] = [
  // 1) Base Oil SN 170
  {
    id: 1,
    category: "Trading",
    image: `${CONTENT_BASE}/product-Base-Oil-SN-170.jpeg`,
    gallery: [`${CONTENT_BASE}/product-Base-Oil-SN-170.jpeg`],
    i18n: {
      en: {
        title: "Base Oil SN 170 – Premium Group I",
        description:
          "High-quality Group I Base Oil SN 170 for lubricant blending. Trusted in GCC & global markets for industrial and automotive applications.",
        content:
          `Base Oil SN 170 is a <strong>premium Group I paraffinic base oil</strong>, widely recognized for its <strong>excellent solvency</strong> and <strong>superior oxidation stability</strong>. It serves as a fundamental building block for diverse lubricant formulations across GCC and international markets.

This product is highly valued by refineries and blending facilities due to its <strong>low volatility</strong>, <strong>consistent flash point</strong>, and ability to deliver reliable performance in high-temperature environments. It is considered a cornerstone material for companies seeking efficiency, durability, and compliance with international standards.

<strong>Key Applications:</strong>
- Manufacturing hydraulic oils and industrial gear oils.
- Blending stock for passenger car and heavy-duty engine oils.
- Formulating metalworking fluids and process oils.

<strong>Technical Advantages:</strong>
SN 170 offers stability and solvency that make it ideal for demanding industrial and automotive applications. Full technical specifications and Certificate of Analysis (COA) are available upon request, ensuring transparency and quality assurance for global partners.`
      },
      fa: {
        title: "روغن پایه SN 170 – گروه I پریمیوم",
        description:
          "روغن پایه باکیفیت گروه I برای بلِندینگ روانکار؛ مورد اعتماد بازارهای GCC و جهانی برای کاربردهای صنعتی و خودرویی.",
        content:
          `روغن پایه SN 170 یک <strong>روغن پارافینی گروه I</strong> با <strong>حلّالیت عالی</strong> و <strong>پایداری اکسیداسیون برتر</strong> است. این محصول به‌عنوان ماده‌ی پایه در فرمولاسیون‌های متنوع روانکار در بازارهای GCC و بین‌المللی شناخته می‌شود.

این روغن به دلیل <strong>فرّاریت پایین</strong> و <strong>نقطه‌فلاش پایدار</strong>، عملکرد مطمئن در دماهای بالا را تضمین می‌کند و برای شرکت‌هایی که به‌دنبال کارایی، دوام و انطباق با استانداردهای جهانی هستند، انتخابی حیاتی است.

<strong>کاربردها:</strong>
- تولید روغن‌های هیدرولیک و دنده صنعتی
- بلِندینگ روغن‌های موتور سواری و سنگین
- فرمولاسیون سیالات فلزکاری و روغن‌های فرآیندی

<strong>مزایا فنی:</strong>
پایداری و حلّالیت این روغن آن را برای کاربردهای صنعتی و خودرویی مناسب می‌سازد. مشخصات فنی کامل و گواهی آنالیز (COA) بنا به درخواست ارائه می‌شود تا شفافیت و تضمین کیفیت برای شرکای جهانی فراهم گردد.`
      },
      ar: {
        title: "زيت أساس SN 170 – مجموعة I بريميوم",
        description:
          "زيت أساس عالي الجودة لمزج المواد المُزلِّقة. موثوق في أسواق دول مجلس التعاون والعالم للتطبيقات الصناعية والسيارات.",
        content:
          `يُعتبر SN 170 <strong>زيتاً بارافينياً من مجموعة I</strong> يتميز بـ<strong>قدرة ممتازة على الإذابة</strong> و<strong>استقرار أكسدة متفوق</strong>. يُستخدم كعنصر أساسي في صيغ الزيوت المتنوعة في أسواق دول المجلس والعالم.

يُقدَّر هذا الزيت من قبل المصافي ومرافق المزج بفضل <strong>انخفاض تقلبه</strong> و<strong>ثبات نقطة الوميض</strong>، مما يضمن أداءً موثوقاً في البيئات ذات درجات الحرارة العالية. إنه مادة أساسية للشركات التي تبحث عن الكفاءة والمتانة والامتثال للمعايير الدولية.

<strong>الاستخدامات الرئيسية:</strong>
- تصنيع الزيوت الهيدروليكية وزيوت التروس الصناعية
- مزج زيوت محركات السيارات والشاحنات الثقيلة
- صياغة سوائل تشغيل المعادن والزيوت العملية

<strong>المزايا التقنية:</strong>
يوفر SN 170 استقراراً وذوبانية تجعله مثالياً للتطبيقات الصناعية والسيارات. المواصفات الفنية الكاملة وشهادة التحليل (COA) متاحة عند الطلب لضمان الشفافية والجودة للشركاء العالميين.`
      }
    }
  },

  // 2) Base Oil SN 500
  {
    id: 2,
    category: "Trading",
    image: `${CONTENT_BASE}/product-Base-Oil-SN-500-1.jpeg`,
    gallery: [`${CONTENT_BASE}/product-Base-Oil-SN-500-1.jpeg`],
    i18n: {
      en: {
        title: "Base Oil SN 500 – High Viscosity Group I",
        description:
          "Heavy-grade Group I base oil with superior thermal stability. Ideal for heavy-duty lubricants, marine oils, and industrial greases.",
        content:
          `Base Oil SN 500 is a <strong>premium heavy-grade paraffinic base oil</strong> engineered for strong film strength and resistance to thermal degradation. Its <strong>high viscosity index</strong> and <strong>excellent solubility</strong> enable consistent blending performance for complex lubricant formulations.

Designed for demanding operating conditions, SN 500 supports applications across transportation, marine, and industrial sectors. It helps manufacturers achieve durability, protection, and efficiency in systems exposed to high loads and elevated temperatures.

<strong>Key Applications:</strong>
- Heavy-duty engine and marine lubricants
- Industrial gear oils and greases
- Rubber process oils and chemical feedstocks

<strong>Quality Performance:</strong>
SN 500 ensures reliable viscosity behavior, oxidation resistance, and compatibility with additive packages. Full technical specifications and COA are available upon request for audit-ready procurement.`
      },
      fa: {
        title: "روغن پایه SN 500 – ویسکوزیته بالا گروه I",
        description:
          "روغن پایه سنگین با پایداری حرارتی عالی؛ مناسب برای روانکارهای سنگین، روغن‌های دریایی و گریس‌های صنعتی.",
        content:
          `SN 500 یک <strong>روغن پارافینی سنگین</strong> با <strong>استحکام فیلم بالا</strong> و <strong>مقاومت در برابر تخریب حرارتی</strong> است. <strong>شاخص ویسکوزیته بالا</strong> و <strong>حلّالیت عالی</strong>، بلِندینگ پایدار برای فرمولاسیون‌های پیچیده را فراهم می‌کند.

برای شرایط کاری سخت طراحی شده و کاربردهای حمل‌ونقل، دریایی و صنعتی را پشتیبانی می‌کند. به تولیدکنندگان در دستیابی به دوام، حفاظت و کارایی در سیستم‌های تحت بار و دمای بالا کمک می‌کند.

<strong>کاربردها:</strong>
- روانکارهای موتور سنگین و دریایی
- روغن‌های دنده صنعتی و گریس‌ها
- روغن‌های فرآیندی لاستیک و خوراک‌های شیمیایی

<strong>عملکرد کیفی:</strong>
رفتار ویسکوزیته قابل‌اعتماد، مقاومت اکسیداسیون و سازگاری با بسته‌های افزودنی را تضمین می‌کند. مشخصات فنی و COA بنا به درخواست ارائه می‌شود.`
      },
      ar: {
        title: "زيت أساس SN 500 – لزوجة عالية مجموعة I",
        description:
          "زيت أساس ثقيل ومستقر حرارياً؛ مثالي لزيوت الخدمة الشاقة، الزيوت البحرية والشحوم الصناعية.",
        content:
          `SN 500 هو <strong>زيت بارافيني ثقيل</strong> مصمم لقوة طبقة تزييت عالية ومقاومة الانحلال الحراري. يتميز بـ<strong>مؤشر لزوجة مرتفع</strong> و<strong>ذوبانية ممتازة</strong> لضمان خلط موثوق للصيغ المعقدة.

مخصص لظروف التشغيل القاسية ويدعم تطبيقات النقل والبحر والصناعة. يساعد المصنعين على تحقيق المتانة والحماية والكفاءة في الأنظمة المعرضة للأحمال العالية ودرجات الحرارة المرتفعة.

<strong>الاستخدامات:</strong>
- زيوت محركات الخدمة الشاقة والبحرية
- زيوت تروس صناعية وشحوم
- زيوت عمليات المطاط ولقيم كيميائي

<strong>الأداء:</strong>
سلوك لزوجة موثوق، مقاومة للأكسدة وتوافق مع حزم الإضافات. المواصفات الفنية وCOA متاحة عند الطلب.`
      }
    }
  },

  // 3) Bitumen (Penetration Grades)
  {
    id: 3,
    category: "Trading",
    image: `${CONTENT_BASE}/product-bitumen-1.jpeg`,
    gallery: [`${CONTENT_BASE}/product-bitumen-1.jpeg`, `${CONTENT_BASE}/product-bitumen.jpeg`],
    i18n: {
      en: {
        title: "Bitumen (Penetration Grades) – Industrial Asphalt Binder",
        description:
          "High-durability bitumen for road construction and waterproofing. Sourced to ensure maximum adhesion and performance in extreme climates.",
        content:
          `Rahimi Holding supplies <strong>industrial-grade bitumen</strong> across multiple <strong>penetration grades</strong> (e.g., 60/70 and 80/100), suited for demanding infrastructure projects. Our sourcing and QA processes ensure <strong>durability</strong>, <strong>adhesion</strong>, and consistent performance under thermal stress.

<strong>Usage Areas:</strong>
- Paving and road construction (asphalt binder)
- Waterproofing membranes for roofing and foundations
- Pipe coating and industrial insulation

<strong>Performance:</strong>
Engineered to withstand temperature fluctuations typical of GCC climates, our bitumen supports longer pavement life and reduced maintenance costs.`
      },
      fa: {
        title: "بیتومین (گریدهای نفوذ) – بایندر آسفالت صنعتی",
        description:
          "بیتومین با دوام بالا برای راه‌سازی و آب‌بندی؛ تأمین‌شده با تمرکز بر چسبندگی و عملکرد در اقلیم‌های سخت.",
        content:
          `رحیمی هولدینگ <strong>بیتومین صنعتی</strong> را در <strong>گریدهای نفوذ</strong> مختلف (مثل 60/70 و 80/100) برای پروژه‌های زیرساختی سنگین تأمین می‌کند. تأمین و کنترل کیفیت ما، <strong>دوام</strong>، <strong>چسبندگی</strong> و عملکرد پایدار تحت تنش حرارتی را تضمین می‌کند.

<strong>موارد استفاده:</strong>
- آسفالت‌ریزی و راه‌سازی (بایندر آسفالت)
- ممبران‌های آب‌بندی برای سقف و فونداسیون
- پوشش لوله و عایق‌کاری صنعتی

<strong>عملکرد:</strong>
برای تحمل نوسانات دمایی رایج در اقلیم GCC مهندسی شده؛ عمر روسازی را افزایش و هزینه نگهداشت را کاهش می‌دهد.`
      },
      ar: {
        title: "البيتومين (درجات الاختراق) – رابط أسفلتي صناعي",
        description:
          "بيتومين عالي المتانة للطرق والعزل المائي؛ مُنتقى لضمان أقصى التصاق وأداء في المناخات القاسية.",
        content:
          `تورّد مجموعة رحيمي <strong>بيتوميناً صناعياً</strong> بدرجات اختراق متعددة (مثل 60/70 و80/100) لمشروعات البنية التحتية الصعبة. تضمن عمليات التوريد وضبط الجودة <strong>المتانة</strong> و<strong>الالتصاق</strong> والأداء المستقر تحت الإجهاد الحراري.

<strong>مجالات الاستخدام:</strong>
- رصف الطرق والبناء (رابط أسفلتي)
- أغشية عزل للأسقف والأساسات
- طلاء الأنابيب والعزل الصناعي

<strong>الأداء:</strong>
مصمم لتحمل تقلبات الحرارة في مناخات دول المجلس، ما يدعم عمر أطول للطرق وتقليل تكاليف الصيانة.`
      }
    }
  },

  // 4) EN 590 (Diesel 10PPM)
  {
    id: 4,
    category: "Trading",
    image: `${CONTENT_BASE}/product-EN-590.jpeg`,
    gallery: [`${CONTENT_BASE}/product-EN-590.jpeg`],
    i18n: {
      en: {
        title: "EN 590 Diesel 10PPM – Ultra-Low Sulfur Fuel",
        description:
          "Premium EN 590 ULSD refined to <10 ppm sulfur. Optimized for modern high-performance engines with reduced environmental impact.",
        content:
          `EN 590 Diesel 10PPM is the international standard for <strong>ultra-low sulfur diesel (ULSD)</strong>, designed for automotive and industrial engines. Refined to under <strong>10 ppm sulfur</strong>, it achieves <strong>emission reduction</strong> while preserving engine performance and reliability.

<strong>Key Features:</strong>
- Higher <strong>Cetane number</strong> for ignition quality
- <strong>Enhanced lubricity</strong> to protect advanced injection systems
- <strong>Cold climate additives</strong> for reliable operation
- Compliance with <strong>GCC</strong> and international environmental regulations

<strong>Quality Assurance:</strong>
Consistent, certified supply supporting fleets, industrial operations, and global logistics.`
      },
      fa: {
        title: "دیزل EN 590 با گوگرد ۱۰PPM – فوق کم‌گوگرد",
        description:
          "دیزل EN 590 با گوگرد کمتر از ۱۰ پی‌پی‌ام؛ بهینه برای موتورهای مدرن با کاهش اثرات زیست‌محیطی.",
        content:
          `دیزل EN 590 استاندارد <strong>ULSD</strong> برای موتورهای دیزلی خودرویی و صنعتی است. با <strong>گوگرد کمتر از ۱۰ پی‌پی‌ام</strong> پالایش می‌شود تا <strong>انتشار آلاینده‌ها کاهش</strong> یابد و عملکرد موتور حفظ شود.

<strong>ویژگی‌ها:</strong>
- <strong>ستان بالاتر</strong> برای کیفیت احتراق
- <strong>روانکاری بهتر</strong> برای حفاظت از سیستم تزریق
- <strong>افزودنی‌های عملکردی برای آب‌وهوای سرد</strong>
- انطباق با مقررات زیست‌محیطی <strong>GCC</strong> و بین‌المللی

<strong>اطمینان کیفیت:</strong>
تأمین منظم و دارای گواهی برای ناوگان، صنایع و لجستیک جهانی.`
      },
      ar: {
        title: "ديزل EN 590 بواقع 10PPM – كبريت فائق الانخفاض",
        description:
          "ديزل ULSD وفق EN 590 مُنقّى لأقل من 10 جزء بالمليون كبريت؛ مُحسّن للمحركات الحديثة عالية الأداء.",
        content:
          `يمثل ديزل EN 590 معيار <strong>ULSD</strong> الدولي لمحركات المركبات والصناعة. مُنقّى إلى <strong>أقل من 10 جزء بالمليون كبريت</strong> لتقليل الانبعاثات مع الحفاظ على الأداء.

<strong>الميزات:</strong>
- <strong>رقم ستان أعلى</strong> لجودة الاشتعال
- <strong>تشحيم مُحسّن</strong> لحماية أنظمة الحقن
- <strong>إضافات أداء للمناخ البارد</strong>
- امتثال للوائح البيئية في <strong>دول المجلس</strong> والدولية

<strong>ضمان الجودة:</strong>
توريد ثابت وموثّق يدعم الأساطيل والعمليات الصناعية واللوجستية.`
      }
    }
  },

  // 5) Heavy Crude Oil
  {
    id: 5,
    category: "Trading",
    image: `${CONTENT_BASE}/product-Heavy-Crude-Oil.jpeg`,
    gallery: [`${CONTENT_BASE}/product-Heavy-Crude-Oil.jpeg`],
    i18n: {
      en: {
        title: "Heavy Crude Oil – High-Density Hydrocarbon",
        description:
          "Dense, high-viscosity heavy crude for advanced refinery processing. Ideal for bitumen, fuel oils, and heavy distillates.",
        content:
          `Rahimi Holding supplies <strong>heavy crude oil</strong> preferred by refineries equipped for <strong>complex processing</strong>. As a dense, high-viscosity hydrocarbon source, it provides <strong>high yields</strong> of residual products and <strong>industrial bitumen</strong>.

<strong>Refinery Yields:</strong>
- High output of fuel oils and residuals
- Primary source for industrial-grade bitumen
- Suitable for specialized petrochemical cracking

<strong>Supply Assurance:</strong>
Reliable supply chains ensure consistent quality and compliance for large-scale industrial consumers in GCC and international markets.`
      },
      fa: {
        title: "نفت خام سنگین – هیدروکربن پرچگال",
        description:
          "خوراک پرچگال و پُر ویسکوز برای فرآورش پیشرفته پالایشگاهی؛ مناسب برای بیتومین، نفت‌های سنگین و تقطیرات سنگین.",
        content:
          `رحیمی هولدینگ <strong>نفت خام سنگین</strong> را به پالایشگاه‌های دارای <strong>فرآورش پیچیده</strong> تأمین می‌کند. به‌عنوان خوراکی با چگالی و ویسکوزیته بالا، <strong>بازده زیاد</strong> محصولات باقیمانده و <strong>بیتومین صنعتی</strong> را فراهم می‌کند.

<strong>خروجی پالایش:</strong>
- تولید بالای سوخت‌های سنگین و باقیمانده
- منبع اصلی بیتومین صنعتی
- مناسب برای کراکینگ تخصصی پتروشیمی

<strong>اطمینان تأمین:</strong>
زنجیره‌های پایدار برای کیفیت یکنواخت و انطباق در مقیاس صنعتی در GCC و بازارهای بین‌المللی.`
      },
      ar: {
        title: "النفط الخام الثقيل – هيدروكربون عالي الكثافة",
        description:
          "نفط خام كثيف عالي اللزوجة لمعالجة متقدمة؛ مثالي للإسفلت، زيوت الوقود والتقطيرات الثقيلة.",
        content:
          `تورّد مجموعة رحيمي <strong>نفطاً خاماً ثقيلاً</strong> مفضلاً لدى المصافي ذات <strong>المعالجة المعقدة</strong>. يوفر هذا اللقيم عالي الكثافة واللزوجة <strong>عوائد مرتفعة</strong> من المنتجات المتبقية و<strong>البيتومين الصناعي</strong>.

<strong>عوائد التكرير:</strong>
- إنتاج عالٍ من زيوت الوقود والمنتجات المتبقية
- مصدر أساسي للبيتومين الصناعي
- مناسب للتكسير المتخصص

<strong>ضمان التوريد:</strong>
سلاسل موثوقة لجودة متسقة وامتثال للمستهلكين الصناعيين في دول المجلس والأسواق العالمية.`
      }
    }
  },

  // 6) Jet Fuel A1
  {
    id: 6,
    category: "Trading",
    image: `${CONTENT_BASE}/product-Jet-Fuel-A1.jpeg`,
    gallery: [`${CONTENT_BASE}/product-Jet-Fuel-A1.jpeg`],
    i18n: {
      en: {
        title: "Jet Fuel A1 – Aviation-Grade Kerosene",
        description:
          "Refined to AFQRJOS international standards. Certified performance and safety for turbine engines.",
        content:
          `Jet Fuel A1 is a <strong>kerosene-type aviation fuel</strong> used globally in jet turbine engines. Manufactured to meet <strong>AFQRJOS standards</strong>, it ensures <strong>safety</strong>, <strong>efficiency</strong>, and <strong>reliability</strong> for modern aviation.

<strong>Characteristics:</strong>
- High <strong>flash point</strong> for operational safety
- Low <strong>freezing point</strong> for high-altitude performance
- <strong>Anti-static</strong> and <strong>anti-corrosion</strong> additives

<strong>Industry Reliability:</strong>
Our Jet A1 supply supports commercial airlines, private aviation, and global logistics with consistent quality.`
      },
      fa: {
        title: "سوخت جت A1 – نفت سفید هواپیمایی",
        description:
          "پالایش مطابق استانداردهای بین‌المللی AFQRJOS؛ عملکرد و ایمنی تأیید شده برای توربین‌ها.",
        content:
          `سوخت جت A1 یک <strong>نفت سفید هواپیمایی</strong> است که در موتورهای توربین جت استفاده می‌شود. مطابق <strong>استانداردهای AFQRJOS</strong> تولید شده تا <strong>ایمنی</strong>، <strong>کارایی</strong> و <strong>قابلیت اتکا</strong> را تضمین کند.

<strong>ویژگی‌ها:</strong>
- <strong>نقطه‌فلش بالا</strong> برای ایمنی عملیاتی
- <strong>نقطه‌انجماد پایین</strong> برای عملکرد در ارتفاع
- افزودنی‌های <strong>ضد‌استاتیک</strong> و <strong>ضد‌خوردگی</strong>

<strong>قابلیت اتکا:</strong>
تأمین سوخت جت برای خطوط هوایی، هوانوردی خصوصی و لجستیک با کیفیت یکنواخت.`
      },
      ar: {
        title: "وقود طائرات A1 – كيروسين للطيران",
        description:
          "مكرر وفق معايير AFQRJOS؛ أداء وسلامة معتمدة لمحركات التوربين.",
        content:
          `وقود A1 هو <strong>كيروسين للطيران</strong> يُستخدم عالمياً في محركات التوربين. يُنتج وفق <strong>معايير AFQRJOS</strong> لضمان <strong>السلامة</strong> و<strong>الكفاءة</strong> و<strong>الموثوقية</strong>.

<strong>الخصائص:</strong>
- <strong>نقطة وميض مرتفعة</strong> للسلامة التشغيلية
- <strong>نقطة تجمد منخفضة</strong> لأداء عالي الارتفاع
- إضافات <strong>مضادة للاستاتيك</strong> و<strong>مضادة للتآكل</strong>

<strong>موثوقية الصناعة:</strong>
توريد يدعم شركات الطيران والطيران الخاص واللوجستيات بجودة ثابتة.`
      }
    }
  },

  // 7) Kerosene
  {
    id: 7,
    category: "Trading",
    image: `${CONTENT_BASE}/product-Kerosene.jpeg`,
    gallery: [`${CONTENT_BASE}/product-Kerosene.jpeg`],
    i18n: {
      en: {
        title: "Kerosene – Refined Industrial Fuel",
        description:
          "High-purity kerosene for heating, lighting, and solvent applications. Clean-burning and efficient.",
        content:
          `Kerosene is a <strong>versatile hydrocarbon liquid</strong> used in <strong>heating</strong>, <strong>lighting</strong>, and as a <strong>solvent</strong> in industrial processes. It is known for its <strong>clean-burning properties</strong> and <strong>high energy density</strong>, making it a reliable energy source across commercial applications.

<strong>Industrial Uses:</strong>
- Fuel for domestic and industrial space heaters
- Base component for cleaning agents and degreasers
- Ingredient in the manufacturing of paints and pesticides

<strong>Quality Assurance:</strong>
We ensure high-purity kerosene distribution meeting strict safety and performance standards for diverse commercial uses in GCC and global markets.`
      },
      fa: {
        title: "نفت سفید – سوخت صنعتی پالایش‌شده",
        description:
          "نفت سفید با خلوص بالا برای گرمایش، روشنایی و کاربردهای حلال؛ پاک‌سوز و کارآمد.",
        content:
          `نفت سفید یک <strong>مایع هیدروکربنی چندمنظوره</strong> برای <strong>گرمایش</strong>، <strong>روشنایی</strong> و <strong>حلال</strong> در فرآیندهای صنعتی است. به خاطر <strong>پاک‌سوزی</strong> و <strong>چگالی انرژی بالا</strong>، منبع انرژی قابل‌اتکا محسوب می‌شود.

<strong>کاربردهای صنعتی:</strong>
- سوخت بخاری‌های فضای خانگی و صنعتی
- جزء پایه برای پاک‌کننده‌ها و چربی‌زداها
- جزء در ساخت رنگ‌ها و آفت‌کش‌ها

<strong>اطمینان کیفیت:</strong>
توزیع نفت سفید با خلوص بالا مطابق با استانداردهای سخت‌گیرانه ایمنی و عملکرد برای کاربردهای تجاری در GCC و بازارهای جهانی.`
      },
      ar: {
        title: "الكيروسين – وقود صناعي مكرر",
        description:
          "كيروسين نقي للتدفئة والإنارة والتطبيقات المذيبية؛ نظيف الاحتراق وفعال.",
        content:
          `الكيروسين هو <strong>سائل هيدروكربوني متعدد الاستخدامات</strong> يُستخدم في <strong>التدفئة</strong> و<strong>الإنارة</strong> وكـ<strong>مذيب</strong> في العمليات الصناعية. معروف بـ<strong>نظافة الاحتراق</strong> و<strong>كثافة الطاقة العالية</strong>، ما يجعله مصدراً موثوقاً للطاقة.

<strong>الاستخدامات الصناعية:</strong>
- وقود سخانات المساحات المنزلية والصناعية
- مُكوّن أساسي للمنظفات ومزيلات الشحوم
- مُكوّن في تصنيع الدهانات والمبيدات

<strong>ضمان الجودة:</strong>
نضمن توزيع كيروسين عالي النقاء وفق معايير صارمة للسلامة والأداء لاستخدامات تجارية في دول المجلس والأسواق العالمية.`
      }
    }
  },

  // 8) Light Crude Oil
  {
    id: 8,
    category: "Trading",
    image: `${CONTENT_BASE}/product-Light-Crude-Oil.jpeg`,
    gallery: [`${CONTENT_BASE}/product-Light-Crude-Oil.jpeg`],
    i18n: {
      en: {
        title: "Light Crude Oil – High API Gravity",
        description:
          "Low-density sweet crude optimized for high yields of gasoline, diesel, and petrochemical feedstocks.",
        content:
          `Light Crude Oil is highly valued for its <strong>ease of refining</strong> and <strong>high percentage of light distillates</strong>. Known as <strong>sweet crude</strong>, it enables refineries to maximize yields of <strong>transportation fuels</strong> and <strong>petrochemical feedstocks</strong> at lower processing costs.

<strong>Refining Value:</strong>
- Maximum yields of gasoline, jet fuel, and diesel
- High naphtha concentration for petrochemical production
- Lower refining costs compared to heavier grades

<strong>Supply Advantage:</strong>
Rahimi Holding provides refineries with <strong>high-value feedstock</strong> to maximize output of light distillates while ensuring consistent quality across GCC and international markets.`
      },
      fa: {
        title: "نفت خام سبک – API بالا",
        description:
          "نفت سبک شیرین با چگالی پایین؛ بهینه برای بازده بالای بنزین، دیزل و خوراک پتروشیمی.",
        content:
          `نفت خام سبک به‌دلیل <strong>پالایش آسان</strong> و <strong>درصد بالای تقطیرات سبک</strong> ارزشمند است. به‌عنوان <strong>نفت شیرین</strong> شناخته می‌شود و امکان بیشینه‌سازی تولید <strong>سوخت‌های حمل‌ونقل</strong> و <strong>خوراک پتروشیمی</strong> را با هزینه فرآورش کمتر فراهم می‌کند.

<strong>ارزش پالایشی:</strong>
- بیشینه تولید بنزین، سوخت جت و دیزل
- غلظت بالای نفتا برای تولیدات پتروشیمی
- هزینه پالایش کمتر نسبت به ن grades سنگین

<strong>مزیت تأمین:</strong>
رحیمی هولدینگ <strong>خوراک باارزش</strong> برای بیشینه‌سازی خروجی تقطیرات سبک با کیفیت یکنواخت در GCC و بازارهای بین‌المللی تأمین می‌کند.`
      },
      ar: {
        title: "النفط الخام الخفيف – جاذبية API عالية",
        description:
          "خام خفيف منخفض الكثافة (sweet) مُحسّن لعوائد مرتفعة من البنزين والديزل ولقيم البتروكيماويات.",
        content:
          `يُقدّر النفط الخام الخفيف لـ<strong>سهولة تكريره</strong> و<strong>النسبة العالية من التقطيرات الخفيفة</strong>. يُعرف بـ<strong>الخام الحلو</strong> ويتيح للمصافي تعظيم إنتاج <strong>وقود النقل</strong> و<strong>لقيم البتروكيماويات</strong> بتكاليف معالجة أقل.

<strong>القيمة التكريرية:</strong>
- عوائد قصوى من البنزين ووقود الطائرات والديزل
- تركيز مرتفع من النافثا للإنتاج البتروكيماوي
- كلفة تكرير أقل مقارنة بالدرجات الثقيلة

<strong>ميزة التوريد:</strong>
توفر مجموعة رحيمي <strong>لقيماً عالي القيمة</strong> للمصافي لزيادة إنتاج التقطيرات الخفيفة مع جودة ثابتة في دول المجلس والأسواق العالمية.`
      }
    }
  },

  // 9) Light Virgin Naphtha (LVN)
  {
    id: 9,
    category: "Trading",
    image: `${CONTENT_BASE}/product-light-virgin-naphtha.jpeg`,
    gallery: [`${CONTENT_BASE}/product-light-virgin-naphtha.jpeg`],
    i18n: {
      en: {
        title: "Light Virgin Naphtha (LVN) – Petrochemical Feedstock",
        description:
          "Premium LVN for steam crackers and high-octane gasoline blending. Essential for olefin production.",
        content:
          `LVN is a <strong>critical feedstock</strong> for <strong>steam cracking</strong> to produce <strong>ethylene</strong> and <strong>propylene</strong>. It is also widely used as a <strong>high-octane blending</strong> component in refinery operations, supporting petrochemical production with consistent quality specifications.

<strong>Applications:</strong>
- Primary feedstock for olefin production (ethylene and propylene)
- Solvent in chemical and rubber industries
- High-octane blending component for refinery operations

<strong>Quality Assurance:</strong>
Rahimi Holding supplies LVN meeting strict <strong>paraffinic</strong> and <strong>naphthenic</strong> specifications, ensuring optimal yields for petrochemical partners in GCC and global markets.`
      },
      fa: {
        title: "نفتا سبک (LVN) – خوراک پتروشیمی",
        description:
          "نفتای سبک ممتاز برای استیم‌کراکر و بلِندینگ بنزین اکتان بالا؛ حیاتی برای تولید اولفین.",
        content:
          `LVN یک <strong>خوراک حیاتی</strong> برای <strong>کراکینگ بخار</strong> جهت تولید <strong>اتیلن</strong> و <strong>پروپیلن</strong> است. همچنین به‌عنوان جزء <strong>بلِندینگ اکتان بالا</strong> در عملیات پالایشگاهی استفاده می‌شود و با مشخصات کیفی یکنواخت از تولید پتروشیمی پشتیبانی می‌کند.

<strong>کاربردها:</strong>
- خوراک اصلی تولید اولفین (اتیلن و پروپیلن)
- حلال در صنایع شیمیایی و لاستیک
- جزء بلِندینگ اکتان بالا در پالایشگاه‌ها

<strong>اطمینان کیفیت:</strong>
رحیمی هولدینگ LVN را با مشخصات دقیق <strong>پارافینی</strong> و <strong>نفتنی</strong> تأمین می‌کند تا بازده بهینه برای شرکای پتروشیمی در GCC و بازارهای جهانی تضمین شود.`
      },
      ar: {
        title: "النافثا الخفيفة (LVN) – لقيم بتروكيماوي",
        description:
          "LVN ممتاز لمفاعلات البخار ومزج البنزين عالي الأوكتان؛ أساسي لإنتاج الأوليفينات.",
        content:
          `تعد LVN <strong>لقيماً حاسماً</strong> لـ<strong>التكسير البخاري</strong> لإنتاج <strong>الإيثيلين</strong> و<strong>البروبيلين</strong>. وتُستخدم كذلك كمكوّن <strong>مزج عالي الأوكتان</strong> في عمليات المصافي، ما يدعم الإنتاج البتروكيماوي ضمن مواصفات جودة ثابتة.

<strong>التطبيقات:</strong>
- لقيم رئيسي لإنتاج الأوليفينات (إيثيلين وبروبيلين)
- مذيب في الصناعات الكيميائية والمطاط
- مكوّن مزج عالي الأوكتان في المصافي

<strong>ضمان الجودة:</strong>
توفر مجموعة رحيمي LVN بمواصفات <strong>بارافينية</strong> و<strong>نفثنية</strong> دقيقة لضمان عوائد مثلى لشركاء البتروكيماويات في دول المجلس والعالم.`
      }
    }
  }
];

// -------------------------------
// Services – i18n
// -------------------------------
export const SERVICES_I18N: LocalizedProduct[] = [
  // 12) Tank Explosion-Proofing
  {
    id: 12,
    category: "Services",
    image:
      "https://images.unsplash.com/photo-1535206587979-99443dc94cb7?q=80&w=800&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1535206587979-99443dc94cb7?q=80&w=1200",
      "https://images.unsplash.com/photo-1505250469679-253c7379f673?q=80&w=1200"
    ],
    i18n: {
      en: {
        title: "Tank Explosion-Proofing – Advanced Safety Engineering",
        description:
          "Cutting-edge systems for refinery and storage tanks. Mitigation of vapor hazards and explosion risks.",
        content:
          `Safety is paramount in the energy sector. Rahimi Holding’s explosion-proofing solutions leverage <strong>advanced engineering</strong> and <strong>certified technologies</strong> to mitigate catastrophic risks in oil & gas storage facilities.

<strong>Our Approach:</strong>
- Installation of <strong>flame arrestors</strong> and <strong>pressure-vacuum valves</strong>
- <strong>Inert gas blanketing</strong> systems
- Specialized <strong>anti-static coatings</strong> and materials

<strong>Compliance & Reliability:</strong>
We help operators meet strict <strong>GCC</strong> and international safety standards, protecting critical assets and ensuring operational continuity.`
      },
      fa: {
        title: "ضدانفجار مخازن – مهندسی ایمنی پیشرفته",
        description:
          "سامانه‌های پیشرفته برای پالایشگاه‌ها و مخازن ذخیره؛ کاهش خطرات بخار و انفجار.",
        content:
          `ایمنی در صنعت انرژی حیاتی است. راهکارهای ضدانفجار رحیمی با <strong>مهندسی پیشرفته</strong> و <strong>فناوری‌های تأیید‌شده</strong>، ریسک‌های فاجعه‌آمیز را در تأسیسات ذخیره‌سازی نفت و گاز کاهش می‌دهد.

<strong>رویکرد ما:</strong>
- نصب <strong>فِلِیم‌اِرِستِر</strong> و <strong>ولوهای فشار/خلأ</strong>
- سامانه‌های <strong>گاز خنثی (بلنکتینگ)</strong>
- <strong>پوشش‌های ضد‌استاتیک</strong> و مواد تخصصی

<strong>انطباق و قابلیت‌اتکا:</strong>
به اپراتورها برای رعایت استانداردهای <strong>GCC</strong> و بین‌المللی کمک می‌کنیم تا از دارایی‌های حیاتی محافظت و تداوم عملیات تضمین شود.`
      },
      ar: {
        title: "تحصين الخزانات ضد الانفجار – هندسة أمان متقدمة",
        description:
          "أنظمة متقدمة لخزانات المصافي والتخزين؛ تخفيف مخاطر الأبخرة والانفجارات.",
        content:
          `السلامة أمر أساسي في قطاع الطاقة. تعتمد حلول رحيمي على <strong>هندسة متقدمة</strong> و<strong>تقنيات معتمدة</strong> لتقليل المخاطر الكارثية في مرافق تخزين النفط والغاز.

<strong>نهجنا:</strong>
- تركيب <strong>مانعات اللهب</strong> و<strong>صمامات الضغط/الفراغ</strong>
- أنظمة <strong>تغطية بالغاز الخامل</strong>
- <strong>طلاءات مضادة للكهرباء الساكنة</strong> ومواد متخصصة

<strong>الامتثال والموثوقية:</strong>
نساعد المشغلين على الالتزام بمعايير السلامة في <strong>دول المجلس</strong> والدولية، مع حماية الأصول الحيوية وضمان استمرارية العمليات.`
      }
    }
  },

  // 13) Risk Assessment
  {
    id: 13,
    category: "Services",
    image:
      "https://images.unsplash.com/photo-1455849318743-b2233052fcff?q=80&w=800&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1455849318743-b2233052fcff?q=80&w=1200",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200"
    ],
    i18n: {
      en: {
        title: "Risk Assessment – Operational Safety Consulting",
        description:
          "Comprehensive hazard analysis for refineries, terminals, and petrochemical plants.",
        content:
          `We deliver <strong>detailed risk studies</strong> using <strong>industry-standard methodologies</strong> to ensure safety, compliance, and continuity.

<strong>Services Include:</strong>
- <strong>HAZOP</strong> (Hazard and Operability) studies
- <strong>Quantitative Risk Assessment (QRA)</strong>
- <strong>Safety management system</strong> auditing and optimization

<strong>Value Delivered:</strong>
Identify vulnerabilities early, ensure <strong>regulatory compliance</strong>, and strengthen operational resilience.`
      },
      fa: {
        title: "ارزیابی ریسک – مشاوره ایمنی عملیاتی",
        description:
          "تحلیل جامع مخاطرات برای پالایشگاه‌ها، پایانه‌ها و مجتمع‌های پتروشیمی.",
        content:
          `مطالعات <strong>ریسک تفصیلی</strong> با <strong>روش‌های استاندارد صنعتی</strong> برای تضمین ایمنی، انطباق و تداوم عملیات ارائه می‌کنیم.

<strong>شامل خدمات:</strong>
- مطالعات <strong>HAZOP</strong>
- <strong>QRA</strong> (ارزیابی ریسک کمی)
- ممیزی و بهینه‌سازی <strong>سیستم مدیریت ایمنی</strong>

<strong>ارزش افزوده:</strong>
شناسایی زودهنگام نقاط آسیب، تضمین <strong>انطباق مقررات</strong> و تقویت تاب‌آوری عملیاتی.`
      },
      ar: {
        title: "تقييم المخاطر – استشارات السلامة التشغيلية",
        description:
          "تحليل شامل للمخاطر في المصافي والمحطات ومجمعات البتروكيماويات.",
        content:
          `نقدّم <strong>دراسات مخاطرة مفصلة</strong> وفق <strong>منهجيات الصناعة</strong> لضمان السلامة والامتثال واستمرارية الأعمال.

<strong>يشمل:</strong>
- دراسات <strong>HAZOP</strong>
- <strong>QRA</strong> (تقييم المخاطر الكمي)
- تدقيق وتحسين <strong>أنظمة إدارة السلامة</strong>

<strong>القيمة:</strong>
تحديد نقاط الضعف مبكراً، ضمان <strong>الامتثال التنظيمي</strong> وتعزيز المرونة التشغيلية.`
      }
    }
  },

  // 14) Tank Maintenance & Integrity
  {
    id: 14,
    category: "Services",
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1200",
      "https://images.unsplash.com/photo-1581093588401-fbb07366f555?q=80&w=1200"
    ],
    i18n: {
      en: {
        title: "Tank Maintenance & Integrity – Lifecycle Solutions",
        description:
          "Full-cycle cleaning, inspection, NDT, and corrosion control for storage tanks.",
        content:
          `<strong>Regular maintenance</strong> extends asset life and prevents <strong>environmental risks</strong>. Rahimi Holding provides full lifecycle tank services for industrial energy facilities.

<strong>Core Services:</strong>
- <strong>Robotic</strong> and manual tank cleaning for sludge removal
- <strong>NDT</strong> and <strong>API 653</strong> inspections
- <strong>Protective coatings</strong> and <strong>corrosion control</strong>

<strong>Assurance:</strong>
Compliance with <strong>GCC</strong> and international requirements to keep infrastructure safe and operational.`
      },
      fa: {
        title: "نگهداشت و یکپارچگی مخازن – راهکارهای چرخه عمر",
        description:
          "پاک‌سازی، بازرسی، NDT و کنترل خوردگی برای مخازن ذخیره.",
        content:
          `<strong>نگهداشت منظم</strong> عمر دارایی را افزایش و <strong>ریسک‌های زیست‌محیطی</strong> را کاهش می‌دهد. رحیمی خدمات چرخه‌عمر مخازن را برای تأسیسات انرژی ارائه می‌کند.

<strong>خدمات اصلی:</strong>
- تمیزکاری <strong>رباتیک</strong> و دستی برای حذف لجن
- بازرسی‌های <strong>NDT</strong> و <strong>API 653</strong>
- <strong>پوشش‌های حفاظتی</strong> و <strong>کنترل خوردگی</strong>

<strong>اطمینان:</strong>
انطباق با الزامات <strong>GCC</strong> و بین‌المللی برای ایمنی و پایداری زیرساخت.`
      },
      ar: {
        title: "صيانة وسلامة الخزانات – حلول دورة الحياة",
        description:
          "تنظيف وفحص شامل مع اختبارات NDT ومكافحة التآكل.",
        content:
          `تُطيل <strong>الصيانة المنتظمة</strong> عمر الأصول وتمنع <strong>المخاطر البيئية</strong>. تقدم رحيمي خدمات دورة حياة كاملة لخزانات التخزين.

<strong>الخدمات الأساسية:</strong>
- تنظيف <strong>آلي</strong> ويدوي للخزانات لإزالة الحمأة
- فحوصات <strong>NDT</strong> و<strong>API 653</strong>
- <strong>طلاءات وقائية</strong> و<strong>مكافحة التآكل</strong>

<strong>الضمان:</strong>
امتثال لمتطلبات <strong>دول المجلس</strong> والدولية لضمان السلامة والاستمرارية التشغيلية.`
      }
    }
  },

  // 15) Safety Parts Manufacturing
  {
    id: 15,
    category: "Services",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1200",
      "https://images.unsplash.com/photo-1537462713505-a1ceac92fa89?q=80&w=1200"
    ],
    i18n: {
      en: {
        title: "Safety Parts Manufacturing – Precision Engineering",
        description:
          "Explosion-proof and high-performance components for oil, gas, and petrochemical sectors.",
        content:
          `Our manufacturing division delivers <strong>precision-engineered safety components</strong> designed for hazardous environments in the energy sector. Built to withstand <strong>extreme pressures</strong> and <strong>corrosive conditions</strong>, each part adheres to stringent quality control.

<strong>Product Range:</strong>
- <strong>Gaskets</strong> and sealing solutions
- <strong>Explosion-proof fittings</strong> and electrical components
- <strong>Safety valves</strong> and emergency shut-off parts

<strong>Quality Control:</strong>
Full-process assurance for critical infrastructure across GCC and global markets.`
      },
      fa: {
        title: "تولید قطعات ایمنی – مهندسی دقیق",
        description:
          "قطعات ضدانفجار و پرفورمنس بالا برای نفت، گاز و پتروشیمی.",
        content:
          `واحد تولید ما <strong>قطعات ایمنی مهندسی‌شده دقیق</strong> برای محیط‌های پرخطر در صنعت انرژی ارائه می‌دهد. هر قطعه برای <strong>فشارهای شدید</strong> و <strong>شرایط خورنده</strong> ساخته و تحت کنترل کیفیت سخت‌گیرانه است.

<strong>دامنه محصولات:</strong>
- <strong>گسکت</strong> و راهکارهای آب‌بندی
- <strong>فیتینگ‌های ضدانفجار</strong> و تجهیزات برق
- <strong>ولوهای ایمنی</strong> و قطعات قطع اضطراری

<strong>کنترل کیفیت:</strong>
تضمین فرآیندی کامل برای زیرساخت‌های حیاتی در GCC و بازارهای جهانی.`
      },
      ar: {
        title: "تصنيع قطع السلامة – هندسة دقيقة",
        description:
          "مكونات مضادة للانفجار وذات أداء عالٍ لقطاعات النفط والغاز والبتروكيماويات.",
        content:
          `تقدّم وحدتنا الصناعية <strong>مكوّنات سلامة مُهندسة بدقة</strong> لبيئات خطرة في قطاع الطاقة. صُممت لتحمل <strong>ضغوطاً شديدة</strong> و<strong>ظروفاً تآكلية</strong> مع ضبط جودة صارم.

<strong>نطاق المنتجات:</strong>
- <strong>حشيات</strong> وحلول إحكام
- <strong>تجهيزات مقاومة للانفجار</strong> ومكوّنات كهربائية
- <strong>صمامات أمان</strong> وأجزاء إيقاف طارئ

<strong>ضبط الجودة:</strong>
ضمان كامل للعملية للبنية التحتية الحرجة في دول المجلس والأسواق العالمية.`
      }
    }
  },

  // 16) Consulting & Negotiations
  {
    id: 16,
    category: "Services",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1200",
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1200"
    ],
    i18n: {
      en: {
        title: "Consulting & Negotiations – Strategic Partnerships",
        description:
          "Branding, marketing, trade negotiations, and supply chain strategy for energy markets.",
        content:
          `Navigating global energy markets requires <strong>expertise</strong> and <strong>strategic insight</strong>. Our consulting services help companies establish <strong>regional presence</strong> and secure <strong>high-value contracts</strong>.

<strong>Expertise Areas:</strong>
- <strong>International trade</strong> and <strong>supply chain strategy</strong>
- <strong>Energy branding</strong> and <strong>marketing</strong>
- <strong>Strategic negotiation</strong> and <strong>contract management</strong>

<strong>Partnership Advantage:</strong>
We bridge <strong>GCC regional insights</strong> with <strong>global business goals</strong>, enabling sustainable growth for our partners.`
      },
      fa: {
        title: "مشاوره و مذاکره – شراکت‌های استراتژیک",
        description:
          "برندسازی، مارکتینگ، مذاکرات تجاری و استراتژی زنجیره تأمین برای بازار انرژی.",
        content:
          `حضور در بازار جهانی انرژی نیازمند <strong>تخصص</strong> و <strong>بینش راهبردی</strong> است. خدمات مشاوره ما به شرکت‌ها برای ایجاد <strong>حضور منطقه‌ای</strong> و عقد <strong>قراردادهای ارزشمند</strong> کمک می‌کند.

<strong>حوزه‌های تخصص:</strong>
- <strong>تجارت بین‌الملل</strong> و <strong>استراتژی زنجیره تأمین</strong>
- <strong>برندسازی انرژی</strong> و <strong>بازاریابی</strong>
- <strong>مذاکره استراتژیک</strong> و <strong>مدیریت قرارداد</strong>

<strong>مزیت شراکت:</strong>
پل‌زدن بین <strong>بینش‌های منطقه‌ای GCC</strong> و <strong>اهداف جهانی کسب‌وکار</strong> برای رشد پایدار شرکا.`
      },
      ar: {
        title: "الاستشارات والمفاوضات – شراكات استراتيجية",
        description:
          "العلامة والتسويق والمفاوضات التجارية واستراتيجية سلاسل الإمداد لأسواق الطاقة.",
        content:
          `يتطلب التنقل في أسواق الطاقة العالمية <strong>خبرة</strong> و<strong>رؤية استراتيجية</strong>. تساعد خدماتنا الشركات على ترسيخ <strong>الحضور الإقليمي</strong> وإبرام <strong>عقود عالية القيمة</strong>.

<strong>مجالات الخبرة:</strong>
- <strong>التجارة الدولية</strong> و<strong>استراتيجية سلاسل الإمداد</strong>
- <strong>العلامة والتسويق للطاقة</strong>
- <strong>التفاوض الاستراتيجي</strong> و<strong>إدارة العقود</strong>

<strong>ميزة الشراكة:</strong>
نُجسّر بين <strong>رؤى دول المجلس</strong> و<strong>الأهداف العالمية</strong> لنمو مستدام لشركائنا.`
      }
    }
  }
];

// -------------------------------
// Blog Posts – i18n
// -------------------------------
export const BLOG_POSTS_I18N: LocalizedBlog[] = [
  {
    id: 1,
    author: "Rahimi Holding",
    date: "December 20, 2024",
    image: `${CONTENT_BASE}/Blogarticle1.jpg`,
    i18n: {
      en: {
        title: "The Future of Oil & Gas in GCC: Opportunities and Smart Investments",
        excerpt:
          "GCC nations strengthen their role in the global energy market through strategic planning and long-term investments.",
        content:
          `The oil and gas industry remains central to <strong>GCC economies</strong> despite global energy transitions. Through <strong>strategic planning</strong> and <strong>long-term investments</strong>, these nations reinforce resilience and growth.

<strong>Strategic Position & Investment</strong>
Saudi Arabia, the UAE, and Qatar focus on <strong>operational efficiency</strong> and <strong>digital transformation</strong>. National strategies like <strong>Saudi Vision 2030</strong> and the <strong>UAE Energy Strategy 2050</strong> attract international investment in <strong>upstream development</strong> and <strong>refinery expansion</strong>, creating favorable conditions for global partnerships.`
      },
      fa: {
        title: "آینده نفت و گاز در GCC: فرصت‌ها و سرمایه‌گذاری‌های هوشمند",
        excerpt:
          "کشورهای GCC با برنامه‌ریزی راهبردی و سرمایه‌گذاری بلندمدت نقش خود را در بازار جهانی انرژی تقویت می‌کنند.",
        content:
          `صنعت نفت و گاز همچنان محور <strong>اقتصادهای GCC</strong> است؛ حتی با گذار انرژی. با <strong>برنامه‌ریزی راهبردی</strong> و <strong>سرمایه‌گذاری بلندمدت</strong>، این کشورها تاب‌آوری و رشد خود را تقویت می‌کنند.

<strong>موقعیت راهبردی و سرمایه‌گذاری</strong>
عربستان، امارات و قطر بر <strong>بهره‌وری عملیاتی</strong> و <strong>تحول دیجیتال</strong> تمرکز دارند. راهبردهایی مانند <strong>Saudi Vision 2030</strong> و <strong>UAE Energy Strategy 2050</strong> سرمایه‌گذاری بین‌المللی در <strong>بالادست</strong> و <strong>گسترش پالایش</strong> را جذب می‌کند و شرایط مشارکت جهانی را ارتقا می‌دهد.`
      },
      ar: {
        title: "مستقبل النفط والغاز في دول المجلس: الفرص والاستثمارات الذكية",
        excerpt:
          "تعزز دول مجلس التعاون دورها في سوق الطاقة العالمي عبر التخطيط الاستراتيجي والاستثمارات طويلة الأجل.",
        content:
          `يبقى قطاع النفط والغاز محور <strong>اقتصادات دول المجلس</strong> رغم تحولات الطاقة. من خلال <strong>التخطيط الاستراتيجي</strong> و<strong>الاستثمار طويل الأجل</strong>، تعزز هذه الدول المرونة والنمو.

<strong>الموقع الاستراتيجي والاستثمار</strong>
تركز السعودية والإمارات وقطر على <strong>الكفاءة التشغيلية</strong> و<strong>التحول الرقمي</strong>. تجذب استراتيجيات وطنية مثل <strong>رؤية السعودية 2030</strong> و<strong>استراتيجية الإمارات للطاقة 2050</strong> الاستثمار الدولي في <strong>الأعمال العليا</strong> و<strong>توسعة التكرير</strong>، مما يخلق ظروفاً مواتية للشراكات العالمية.`
      }
    }
  },
  {
    id: 2,
    author: "Rahimi Holding",
    date: "December 18, 2024",
    image: `${CONTENT_BASE}/Blogarticle2.jpg`,
    i18n: {
      en: {
        title: "Advanced Petrochemicals in GCC: From Raw Exports to High Value Creation",
        excerpt:
          "Petrochemicals drive diversification in GCC economies, shifting toward high value-added products.",
        content:
          `GCC policymakers prioritize transitioning from <strong>raw exports</strong> to <strong>specialty petrochemicals</strong> to ensure sustainable growth.

<strong>Competitive Advantage</strong>
Abundant <strong>feedstock</strong> and <strong>advanced infrastructure</strong> position GCC as a global petrochemical hub. Investments in <strong>downstream</strong> and <strong>specialty products</strong> enhance profitability, reduce exposure to crude volatility, and create <strong>skilled employment</strong>.`
      },
      fa: {
        title: "پتروشیمی پیشرفته در GCC: از صادرات خام تا خلق ارزش بالا",
        excerpt:
          "پتروشیمی موتور تنوع‌بخشی اقتصادهای GCC است و به سمت محصولات با ارزش افزوده بالا حرکت می‌کند.",
        content:
          `سیاست‌گذاران GCC تغییر از <strong>صادرات خام</strong> به <strong>پتروشیمی‌های تخصصی</strong> را برای رشد پایدار در اولویت قرار می‌دهند.

<strong>مزیت رقابتی</strong>
وفور <strong>خوراک</strong> و <strong>زیرساخت پیشرفته</strong>، GCC را هاب جهانی می‌کند. سرمایه‌گذاری در <strong>پایین‌دست</strong> و <strong>محصولات تخصصی</strong> سودآوری را افزایش، وابستگی به نوسان نفت خام را کاهش و <strong>اشتغال تخصصی</strong> ایجاد می‌کند.`
      },
      ar: {
        title: "البتروكيماويات المتقدمة في دول المجلس: من التصدير الخام إلى خلق قيمة عالية",
        excerpt:
          "تحركت اقتصادات دول المجلس نحو منتجات بتروكيماوية عالية القيمة كركيزة للتنويع.",
        content:
          `تعطي السياسات أولوية للانتقال من <strong>التصدير الخام</strong> إلى <strong>المنتجات المتخصصة</strong> لضمان نمو مستدام.

<strong>ميزة تنافسية</strong>
وفرة <strong>اللقيم</strong> والبنية <strong>المتقدمة</strong> تجعل دول المجلس محوراً عالمياً. تعزز الاستثمارات في <strong>القطاع السفلي</strong> و<strong>المنتجات المتخصصة</strong> الربحية وتقلل التعرض لتقلبات النفط وتخلق <strong>وظائف ماهرة</strong>.`
      }
    }
  },
  {
    id: 3,
    author: "Rahimi Holding",
    date: "December 16, 2024",
    image: `${CONTENT_BASE}/Blogarticle3.jpg`,
    i18n: {
      en: {
        title: "Major Oil, Gas & Petrochemical Projects in GCC: Collaboration Opportunities",
        excerpt:
          "A new generation of large-scale energy projects in GCC creates strong collaboration opportunities for global partners.",
        content:
          `GCC countries are launching projects that set new benchmarks in <strong>scale</strong>, <strong>technical complexity</strong>, and <strong>governance</strong>.

<strong>Key Focus Areas</strong>
Emphasis on <strong>gas field development</strong>, <strong>LNG expansion</strong>, and <strong>integrated oil-to-petrochemical</strong> facilities. Strong <strong>economic stability</strong> and <strong>government-backed investment frameworks</strong> make GCC one of the world’s most attractive regions for energy partnerships.`
      },
      fa: {
        title: "پروژه‌های بزرگ نفت، گاز و پتروشیمی در GCC: فرصت‌های همکاری",
        excerpt:
          "نسل جدید پروژه‌های عظیم انرژی در GCC فرصت‌های همکاری قوی برای شرکای بین‌المللی ایجاد می‌کند.",
        content:
          `کشورهای GCC پروژه‌هایی با معیارهای جدید در <strong>مقیاس</strong>، <strong>پیچیدگی فنی</strong> و <strong>حاکمیت</strong> آغاز کرده‌اند.

<strong>محورهای کلیدی</strong>
تمرکز بر <strong>توسعه میادین گازی</strong>، <strong>گسترش LNG</strong> و <strong>تأسیسات یکپارچه نفت به پتروشیمی</strong>. <strong>ثبات اقتصادی</strong> و <strong>چارچوب‌های سرمایه‌گذاری دولتی</strong>، GCC را به منطقه‌ای جذاب برای شراکت‌های انرژی تبدیل کرده است.`
      },
      ar: {
        title: "مشروعات النفط والغاز والبتروكيماويات الكبرى في دول المجلس: فرص التعاون",
        excerpt:
          "تطلق دول المجلس جيلاً جديداً من المشروعات الضخمة، ما يخلق فرص تعاون قوية للشركاء العالميين.",
        content:
          `تُحدّد المشاريع القادمة معايير جديدة لـ<strong>الحجم</strong> و<strong>التعقيد الفني</strong> و<strong>الحوكمة</strong>.

<strong>مجالات التركيز</strong>
التركيز على <strong>تطوير حقول الغاز</strong> و<strong>توسيع LNG</strong> ومرافق <strong>متكاملة من النفط إلى البتروكيماويات</strong>. <strong>الاستقرار الاقتصادي</strong> و<strong>الأطر الاستثمارية المدعومة حكومياً</strong> تجعل دول المجلس منطقة جذابة للشراكات في الطاقة.`
      }
    }
  }
];

// -------------------------------
// Helpers
// -------------------------------
export type Locale = "en" | "fa" | "ar";

export function getProductsByLocale(locale: Locale) {
  return PRODUCTS_I18N.map((p) => ({
    id: p.id,
    category: p.category,
    image: p.image,
    gallery: p.gallery,
    ...p.i18n[locale]
  }));
}

export function getServicesByLocale(locale: Locale) {
  return SERVICES_I18N.map((s) => ({
    id: s.id,
    category: s.category,
    image: s.image,
    gallery: s.gallery,
    ...s.i18n[locale]
  }));
}

export function getBlogPostsByLocale(locale: Locale) {
  return BLOG_POSTS_I18N.map((b) => ({
    id: b.id,
    author: b.author,
    date: b.date,
    image: b.image,
    ...b.i18n[locale]
  }));
}
