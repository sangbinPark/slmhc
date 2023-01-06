export const menu = [
  {
    id: 'company',
    langKey: 'company', // 회사 소개
    page: 'CompanyPage',
    childs: [
      { id: 'company_ceo', langKey: 'ceo', page: 'CEOPage' }, // 대표인사 인사말
      { id: 'company_introduction', langKey: 'about_us', page: 'IntroductionPage' }, // 사업 소개
      { id: 'company_history', langKey: 'history', page: 'HistoryPage' }, // 연혁
    ]
  },
  {
    id: 'product',
    langKey: 'products', // 제품 소개
    page: 'ProductPage',
    childs: [
      { id: 'product_carrier', langKey: 'carrier_developer', page: 'CarrierPage' }, //  Carrier & Developer
      { id: 'product_cartridge', langKey: 'cartridge', page: 'CartridgePage' }, // Cartridge
    ],
  },
  {
    id: 'contact',
    langKey: 'contact', // 문의
    page: 'ContactPage',
  },
];
