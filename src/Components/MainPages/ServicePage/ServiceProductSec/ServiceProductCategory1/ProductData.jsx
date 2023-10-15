import FeaturedServiceImg1 from "../../Images/1.jpg";
import FeaturedServiceImg2 from "../../Images/8.jpg";
import FeaturedServiceImg3 from "../../Images/9.jpg";
import C1B3Img1 from "./ProductImages/Category1Imgs/C1Prod3/DripCast podcast.jpg"
import C1B3Img2 from "./ProductImages/Category1Imgs/C1Prod3/Advocate Mratyunjay-min.jpg"
import C1B3Img3 from "./ProductImages/Category1Imgs/C1Prod3/Arcadience Architects-min.jpg"
import C1B3Img4 from "./ProductImages/Category1Imgs/C1Prod3/Media Master-min.jpg"
import C1B3Img5 from "./ProductImages/Category1Imgs/C1Prod3/Oven Fresh Delight-min.jpg"
import C1B3Img6 from "./ProductImages/Category1Imgs/C1Prod3/Shelter Heavens-min.jpg"
import C1B3Img7 from "./ProductImages/Category1Imgs/C1Prod3/Sunshine beauty Saloon-min.jpg"
import C1B3Img8 from "./ProductImages/Category1Imgs/C1Prod3/Trendify-min.jpg"
import C1B3Img9 from "./ProductImages/Category1Imgs/C1Prod3/Oven Fresh Delight-min.jpg"
import C1B3Img10 from "./ProductImages/Category1Imgs/C1Prod3/Vishal Navratan-min.jpg"
import C1B3Img11 from "./ProductImages/Category1Imgs/C1Prod3/Kamal Yoga Academy-min.jpg"

const ProductDataC1 = [
  {
    Name: "Logo Design",
    minPrice: "2000",
    maxPrice: "5000",
    gallery: [FeaturedServiceImg1, FeaturedServiceImg2, FeaturedServiceImg3],
    Description: {
      DescriptHead:
        "A professionally designed logo is the visual cornerstone of your brand. It's essential for creating a memorable and recognizable brand identity.",

      DescriptFactors: [
        { factorsPoints: "Complexity of the design." },
        { factorsPoints: "Number of initial concepts provided." },
        { factorsPoints: "Revisions included." },
        { factorsPoints: "Brand Color Palate." },
        { factorsPoints: "Turnaround time." },
      ],

      DescriptFooter: [{ FooterPoints: "" }],
    },

    featured: true,
  },
  {
    Name: "Brand Kit Design",
    minPrice: "1000",
    maxPrice: "5000",
    gallery: [FeaturedServiceImg1, FeaturedServiceImg2, FeaturedServiceImg3],
    Description: {
      DescriptHead:
        "Brand kit includes brand guidelines, color palette, typography, orientation and other related details. A brand kit provides a clear set of guidelines for consistent use of your brand's visual elements, ensuring a cohesive and professional image across all materials.",

      DescriptFactors: [
        { factorsPoints: "The comprehensiveness of the brand guidelines" },
        { factorsPoints: "Number of initial concepts provided" },
        { factorsPoints: "Revisions included." },
        { factorsPoints: "Designer's expertise" },
        { factorsPoints: "Single Page or a Brief Kit" },
      ],

      DescriptFooter: [{ FooterPoints: "" }],
    },
    featured: true,
  },
  {
    Name: "Business Card Design",
    minPrice: "500",
    maxPrice: "2000",
    gallery: [C1B3Img1, C1B3Img2, C1B3Img3, C1B3Img4, C1B3Img5, C1B3Img6, C1B3Img7, C1B3Img8, C1B3Img9, C1B3Img10, C1B3Img11],
    Description: {
      DescriptHead:
        "Well-designed business/Visiting cards are crucial for leaving a lasting impression on potential clients and partners. They contain essential contact information and reflect your brand's personality.",

      DescriptFactors: [
        { factorsPoints: "Complexity of the design." },
        { factorsPoints: "Number of initial concepts provided." },
        { factorsPoints: "Revisions included." },
      ],

      DescriptFooter: [{ FooterPoints: "" }],
    },
    featured: true,
  },
  {
    Name: "Letter Head Design",
    minPrice: "500",
    maxPrice: "1500",
    gallery: [FeaturedServiceImg1, FeaturedServiceImg2, FeaturedServiceImg3],
    Description: {
      DescriptHead:
        " Letterheads with a professional design enhance official correspondence and reinforce your brand's identity when sending formal documents.",

      DescriptFactors: [
        { factorsPoints: "Complexity of the design." },
        { factorsPoints: "Number of initial concepts provided." },
        { factorsPoints: "Revisions included." },
      ],

      DescriptFooter: [{ FooterPoints: "" }],
    },
    featured: false,
  },
  {
    Name: "Signage Design",
    minPrice: "300",
    maxPrice: "1000",
    gallery: [FeaturedServiceImg1, FeaturedServiceImg2, FeaturedServiceImg3],
    Description: {
      DescriptHead:
        "Signage design ensures that your brand is prominently displayed, making it easy for customers and visitors to locate and identify your business.",

      DescriptFactors: [
        { factorsPoints: "Complexity of the design." },
        { factorsPoints: "Number of initial concepts provided." },
        { factorsPoints: "Revisions included." },
      ],

      DescriptFooter: [{ FooterPoints: "" }],
    },
    featured: false,
  },
];

const ProductDataC2 = [
  {
    Name: "Poster Design",
    minPrice: "500",
    maxPrice: "2500",
    gallery: [FeaturedServiceImg2, FeaturedServiceImg1, FeaturedServiceImg3],
    Description: {
      DescriptHead:
        "Posters are powerful marketing tools for events, promotions, or showcasing your brand's message and products to a broader audience.",

      DescriptFactors: [
        { factorsPoints: "Size of the poster" },
        { factorsPoints: "Complexity of the poster" },
        { factorsPoints: "Customization and graphic elements." },
        { factorsPoints: "Revisions Included" },
      ],

      DescriptFooter: [{ FooterPoints: "" }],
    },

    featured: false,
  },
  {
    Name: "Banner Design",
    minPrice: "500",
    maxPrice: "2500",
    gallery: [FeaturedServiceImg2, FeaturedServiceImg1, FeaturedServiceImg3],
    Description: {
      DescriptHead:
        "Banners are excellent for outdoor or indoor advertising, helping to grab the attention of potential customers and conveying key messages effectively.",

      DescriptFactors: [
        { factorsPoints: "Size of the poster" },
        { factorsPoints: "Complexity of the poster" },
        { factorsPoints: "Customization and graphic elements." },
        { factorsPoints: "Revisions Included" },
      ],

      DescriptFooter: [{ FooterPoints: "" }],
    },
    featured: true,
  },
  {
    Name: "Flyer Design",
    minPrice: "500",
    maxPrice: "3000",
    gallery: [FeaturedServiceImg2, FeaturedServiceImg3],
    Description: {
      DescriptHead:
        "Flyers are versatile marketing materials used for promoting special offers, events, or introducing new products or services.",

      DescriptFactors: [
        { factorsPoints: "Single-sided or double-sided design" },
        { factorsPoints: "Orientation" },
        { factorsPoints: "Customization and graphic elements." },
        { factorsPoints: "Revisions Included" },
      ],

      DescriptFooter: [{ FooterPoints: "" }],
    },
    featured: false,
  },
  {
    Name: "Brochure Design",
    minPrice: "500",
    maxPrice: "1500",
    gallery: [FeaturedServiceImg2, FeaturedServiceImg1, FeaturedServiceImg3],
    Description: {
      DescriptHead:
        "Brochure are Double Sided informative marketing materials, ideal for detailing product or service offerings and establishing credibility.",

      DescriptFactors: [
        {
          factorsPoints: "Type of Brochure (Trifold , bifold , z fold etc..,)",
        },
        { factorsPoints: "Number of pages and complexity" },
        { factorsPoints: "Customization and graphic elements." },
        { factorsPoints: "Revisions Included" },
      ],

      DescriptFooter: [{ FooterPoints: "" }],
    },
    featured: true,
  },
  {
    Name: "Catalog Design",
    minPrice: "300",
    maxPrice: "1000",
    gallery: [FeaturedServiceImg2, FeaturedServiceImg1, FeaturedServiceImg3],
    Description: {
      DescriptHead:
        "Catalogs are comprehensive sales tools that help showcase your product range and assist customers in making informed purchase decisions.",

      DescriptFactors: [
        { factorsPoints: "Catalog size and complexity." },
        { factorsPoints: "Number of pages and complexity" },
        { factorsPoints: "Number of products featured." },
        { factorsPoints: "Customization and graphics." },
        { factorsPoints: "Revisions Included" },
      ],

      DescriptFooter: [
        { FooterPoints: "For Single page - starting @ ₹500 per page " },
        {
          FooterPoints:
            "For 5 or more slides - starting @ ₹400 per page after 5th page ",
        },
        {
          FooterPoints:
            "For 10 or more slides - starting @ ₹300 per page after 10th page",
        },
      ],
    },
    featured: true,
  },
  {
    Name: "Social Media Design",
    minPrice: "300",
    maxPrice: "1000",
    gallery: [FeaturedServiceImg2, FeaturedServiceImg1, FeaturedServiceImg3],
    Description: {
      DescriptHead:
        "Engaging social media graphics are essential for maintaining an active online presence and effectively conveying your brand's message to your target audience.",

      DescriptFactors: [
        { factorsPoints: "Number of graphics required." },
        { factorsPoints: "Customization and branding." },
        {
          factorsPoints:
            "Number of pages and complexity (single post or carousel post)",
        },
        { factorsPoints: "Revisions Included" },
      ],

      DescriptFooter: [{ FooterPoints: "" }],
    },
    featured: false,
  },
];

const ProductDataC3 = [
  {
    Name: "Website Design",
    minPrice: "2000",
    maxPrice: "12000",
    gallery: [ FeaturedServiceImg1, FeaturedServiceImg2],
    Description: {
      DescriptHead:
        "A well-designed website is crucial for establishing an online presence, attracting customers, and providing information about your brand.",

      DescriptFactors: [
        { factorsPoints: "Animations" },
        { factorsPoints: "Complexity of design and functionality." },
        { factorsPoints: "Custom features (Responsive Website)" },
        { factorsPoints: "Revision Included " },
        { factorsPoints: "Turnaround time." },
      ],

      DescriptFooter: [
        { FooterPoints: "For Static page - @ ₹2000 per page" },
        { FooterPoints: "For 3 Pages - @ ₹̶6̶0̶0̶0̶  - ₹5400 " },
        { FooterPoints: "For 5 pages - @ ̶₹̶1̶0̶0̶0̶0̶ - ₹7500" },
        { FooterPoints: "For 10 Pages - @  ̶₹̶2̶0̶0̶0̶0̶ - ₹12,000" },
      ],
    },
    featured: true,
  },
  {
    Name: "Application Design",
    minPrice: "2000",
    maxPrice: "12000",
    gallery: [FeaturedServiceImg3, FeaturedServiceImg1, FeaturedServiceImg2],
    Description: {
      DescriptHead:
        "App design focuses on creating user-friendly interfaces and experiences for your digital products, enhancing user engagement.",

      DescriptFactors: [
        { factorsPoints: "Animations" },
        { factorsPoints: "Complexity of design and functionality." },
        { factorsPoints: "Custom features (Responsive Website)" },
        { factorsPoints: "Revision Included " },
        { factorsPoints: "Turnaround time." },
      ],

      DescriptFooter: [
        { FooterPoints: "For Static page - @ ₹2000 per page" },
        { FooterPoints: "For 3 Pages - @ ₹̶6̶0̶0̶0̶  - ₹5400 " },
        { FooterPoints: "For 5 pages - @ ̶₹̶1̶0̶0̶0̶0̶ - ₹7500" },
        { FooterPoints: "For 10 Pages - @  ̶₹̶2̶0̶0̶0̶0̶ - ₹12,000" },
      ],
    },
    featured: true,
  },
  {
    Name: "Presentation Design",
    minPrice: "250",
    maxPrice: "500",
    gallery: [FeaturedServiceImg3, FeaturedServiceImg1, FeaturedServiceImg2],
    Description: {
      DescriptHead:
        "Professional presentations can make a significant impact during meetings, pitches, or conferences, conveying your message effectively.",

      DescriptFactors: [
        { factorsPoints: "Number of slides." },
        { factorsPoints: "Complexity of design." },
        { factorsPoints: "Custom graphics and animations." },
        { factorsPoints: "Revision Included " },
      ],

      DescriptFooter: [
        { FooterPoints: "For 3 or more slides - starting @ ₹500 per slide" },
        { FooterPoints: "For 5 or more slides - starting @ ₹400 per slide" },
        { FooterPoints: "For 10 or more slides - starting @ ₹300 per slide" },
        { FooterPoints: "For 15 or more slides - starting @ ₹250 per slide" },
      ],
    },
    featured: false,
  },
  {
    Name: "Pitch Deck Design",
    minPrice: "250",
    maxPrice: "500",
    gallery: [FeaturedServiceImg3, FeaturedServiceImg1, FeaturedServiceImg2],
    Description: {
      DescriptHead:
        "A well-crafted pitch deck is essential for impressing investors, partners, or clients, helping you secure opportunities and funding.",

      DescriptFactors: [
        { factorsPoints: "Number of slides." },
        { factorsPoints: "Complexity of design." },
        { factorsPoints: "Custom graphics and animations." },
        { factorsPoints: "Revision Included " },
      ],

      DescriptFooter: [
        { FooterPoints: "For 3 or more slides - starting @ ₹500 per slide" },
        { FooterPoints: "For 5 or more slides - starting @ ₹400 per slide" },
        { FooterPoints: "For 10 or more slides - starting @ ₹300 per slide" },
        { FooterPoints: "For 15 or more slides - starting @ ₹250 per slide" },
      ],
    },
    featured: false,
  },
  {
    Name: "Portfolio Design",
    minPrice: "300",
    maxPrice: "1000",
    gallery: [FeaturedServiceImg3, FeaturedServiceImg1, FeaturedServiceImg2],
    Description: {
      DescriptHead:
        "A professionally designed portfolio showcases your work, making it easier to attract clients or employers and highlight your skills.",

      DescriptFactors: [
        { factorsPoints: "Number of portfolio items." },
        { factorsPoints: "Complexity of design" },
        { factorsPoints: "Custom graphics and branding." },
        { factorsPoints: "Revision Included " },
      ],

      DescriptFooter: [{ FooterPoints: "" }],
    },
    featured: true,
  },
];

export default ProductDataC1;
export { ProductDataC2, ProductDataC3 };
