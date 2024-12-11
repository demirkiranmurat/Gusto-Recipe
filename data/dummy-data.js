import Category from '../models/category';
import Food from '../models/food';

export const CATEGORIES = [
  new Category('c1', 'İtalyan'),
  new Category('c2', 'Aperatif'),
  new Category('c3', 'Fastfood'),
  new Category('c4', 'Alman'),
  new Category('c5', 'Diyet'),
  new Category('c6', 'Egzotik'),
  new Category('c7', 'Kahvaltı'),
  new Category('c8', 'Hint'),
  new Category('c9', 'Tatlılar'), 
];

export const FOODS = [
  new Food(
    'm1',
    ['c1', 'c2'],
    'Domates Soslu Spagetti',
    'bütçeye uygun',
    'normal kalorili',
    'https://media.istockphoto.com/id/632439546/tr/foto%C4%9Fraf/pasta-plate.jpg?s=612x612&w=0&k=20&c=K2C3bfXUC1wvC8ripPIxjLJkgRlrslqrP5GQf-12Ki0=',
    [
      '4 Domates',
      '1 Çay Kaşığı Zeytinyağı',
      '2 Soğan',
      '200g Spaghetti',
      'Baharatlar',
      'Peynir',
    ]
  ),
  new Food(
    'm2',
    ['c2'],
    'Tost',
    'bütçeye uygun',
    'çok kalorili',
    'https://cdn.pixabay.com/photo/2018/07/11/21/51/toast-3532016_1280.jpg',
    ['Yarım Ekmek', 'Sucuk', 'Salam', 'Kaşar Peyniri', 'Margarin']
  ),
  new Food(
    'm3',
    ['c3'],
    'Hamburger',
    'bütçeye uygun',
    'çok kalorili',
    'https://media.istockphoto.com/id/860251286/tr/foto%C4%9Fraf/ah%C5%9Fap-masa-%C3%BCzerinde-lezzetli-hamburger.jpg?s=612x612&w=0&k=20&c=OUuy3zJCSE_cPW4u7k3BpwPF8Jy790EVCTj3Dg4Cc-w=',
    [
      '150 gr et',
      '2 Dilim Domates',
      '1 Dilim Chedar Peyniri',
      '1 Dilim Soğan',
      'Ketçap',
      'Mayonez',
    ]
  ),
  new Food(
    'm4',
    ['c4'],
    'Tavuk Sote',
    'bütçeye uygun',
    'normal kalorili',
    'https://cdn.pixabay.com/photo/2018/03/31/19/29/schnitzel-3279045_1280.jpg',
    [
      '200 gr Tavuk',
      'Domates',
      'Biber',
      'Fesleğen',
      'Limon',
      'Zeytinyağı',
      'Tuz',
    ]
  ),
  new Food(
    'm5',
    ['c2', 'c5'],
    'Balıklı Salata',
    'pahalı',
    'az kalorili',
    'https://cdn.pixabay.com/photo/2016/10/25/13/29/smoked-salmon-salad-1768890_1280.jpg',
    [
      'Somon Balığı',
      'Domates',
      'Limon',
      'Salata Sosu',
      'Taze Soğan',
      'Hardal',
      'Zeytin Yağı',
      'Tuz',
    ]
  ),
  new Food(
    'm6',
    ['c6'],
    'Portakallı Muhallebi',
    'bütçeye uygun',
    'çok kalorili',
    'https://cdn.pixabay.com/photo/2017/05/01/05/18/pastry-2274750_1280.jpg',
    [
      'Portakal Suyu',
      '200gr Şeker',
      '100gr Yoğurt',
      '200g Krem Şanti',
      'Portakal Dilimleri',
    ]
  ),
  new Food(
    'm7',
    ['c7'],
    'Pankek',
    'bütçeye uygun',
    'az kalorili',
    'https://cdn.pixabay.com/photo/2018/07/10/21/23/pancake-3529653_1280.jpg',
    [
      '3 yemek kaşığı un',
      '1 Tatlı Kaşığı Tuz',
      '1 Tatlı Kaşığı Şeker',
      '2 bardak süt',
      '2 Yumurta',
      '2 Yemek Kaşığı Yağ',
    ]
  ),
  new Food(
    'm8',
    ['c8'],
    'Tavuklu Hint Yemeği',
    'bütçeye uygun',
    'normal kalorili',
    'https://cdn.pixabay.com/photo/2018/06/18/16/05/indian-food-3482749_1280.jpg',
    [
      '6 Tavuk Butu',
      '2 Soğan',
      '4 Diş Sarımsak',
      '1 Çay Kaşığı Zerdeçal',
      '1 litre Süt',
      'Yarım Litre Krem Şanti',
      'Tuz',
    ]
  ),
  new Food(
    'm9',
    ['c1'],
    'Pizza Margherita',
    'bütçeye uygun',
    'normal kalorili',
    'https://media.istockphoto.com/id/181175167/tr/foto%C4%9Fraf/pizza.jpg?s=612x612&w=0&k=20&c=brLG_0wXoV0fGi4BPxjlOOgd2x7-103x5Gg5X6zvV6E=',
    [
      'Pizza Hamuru',
      'Domates Sosu',
      'Mozzarella Peyniri',
      'Taze Fesleğen',
      'Zeytinyağı',
    ]
  ),
  new Food(
    'm10',
    ['c1'],
    'Lasagna',
    'pahalı',
    'çok kalorili',
    'https://media.istockphoto.com/id/535851351/tr/foto%C4%9Fraf/lasagna-on-a-square-white-plate.jpg?s=612x612&w=0&k=20&c=iADCjC6YybMAsAU_l0RO4GaMBix_oCLsBxfBSLOelvM=',
    [
      '12 Adet Lazanya Yufkası',
      '500g Kıyma',
      '2 Soğan',
      '400g Domates',
      'Beşamel Sos',
      'Parmesan Peyniri',
    ]
  ),
  new Food(
    'm11',
    ['c1'],
    'Ravioli',
    'pahalı',
    'normal kalorili',
    'https://media.istockphoto.com/id/484226190/tr/foto%C4%9Fraf/ravioli-with-spinach-and-cheese-close-up-horizontal.jpg?s=612x612&w=0&k=20&c=lwjv10Qw1oBQk_Zk7YFb-JJ3wjuY-dvAgwOWPPnCUR4=',
    [
      'Ravioli Hamuru',
      'Ricotta Peyniri',
      'Ispanak',
      'Parmesan Peyniri',
      'Zeytinyağı',
    ]
  ),
  // Fastfood Kategorisi
  new Food(
    'm12',
    ['c3'],
    'Cheeseburger',
    'bütçeye uygun',
    'çok kalorili',
    'https://media.istockphoto.com/id/1295796231/tr/foto%C4%9Fraf/siyah-koyu-arka-plan-%C3%BCzerinde-past%C4%B1rma-ile-peynir-burger.jpg?s=612x612&w=0&k=20&c=_2wfH45IAeg7qb5PLdK2nndU5_-PVM7VPoiLh0HfrGI=',
    [
      '150 gr Et',
      '1 Dilim Cheddar Peyniri',
      'Marul',
      'Domates',
      'Soğan',
      'Hamburger Ekmeği',
    ]
  ),
  new Food(
    'm13',
    ['c3'],
    'Chicken Nuggets',
    'bütçeye uygun',
    'çok kalorili',
    'https://media.istockphoto.com/id/470177926/tr/foto%C4%9Fraf/homemade-crispy-popcorn-chicken.jpg?s=612x612&w=0&k=20&c=cPP8ayQtPHsRITHwjkjfIorB39yQza7sfvTENFzT7o4=',
    [
      '200g Tavuk Göğsü',
      '1 Yumurta',
      'Galeta Unu',
      'Tuz',
      'Karabiber',
      'Kızartma Yağı',
    ]
  ),
  // Alman Yemeği
  new Food(
    'm14',
    ['c4'],
    'Bratwurst (Alman Sosis)',
    'bütçeye uygun',
    'çok kalorili',
    'https://media.istockphoto.com/id/163910340/tr/foto%C4%9Fraf/sausages-are-served-together-with-sauerkraut-on-a-metal-pan.jpg?s=612x612&w=0&k=20&c=PxDKu_qhbAXea0AYf8vtY5FDVa_k9apn5aLNhOAAQb8=',
    [
      'Bratwurst Sosis',
      'Lahana',
      'Sarımsak',
      'Biber',
      'Zeytinyağı',
    ]
  ),
  new Food(
    'm15',
    ['c4'],
    'Schnitzel',
    'bütçeye uygun',
    'çok kalorili',
    'https://media.istockphoto.com/id/486565658/tr/foto%C4%9Fraf/homemade-breaded-german-weiner-schnitzel.jpg?s=612x612&w=0&k=20&c=QYefZQPX-TvEoNqAGCb38rGI7dKAZbGN3c_0Q1IZk-4=',
    [
      '200g Tavuk Göğsü veya Dana Eti',
      'Galeta Unu',
      'Yumurta',
      'Un',
      'Limon',
      'Zeytinyağı',
      'Tuz',
    ]
  ),
  // Kahvaltı Kategorisi
  new Food(
    'm16',
    ['c7'],
    'Menemen',
    'bütçeye uygun',
    'normal kalorili',
    'https://media.istockphoto.com/id/895389550/tr/foto%C4%9Fraf/t%C3%BCrk-menemen.jpg?s=612x612&w=0&k=20&c=djI13IwvOv-IBMrr5VJuK3z-obYlbf01mYGdDpVTcNk=',
    [
      '3 Yumurta',
      '1 Domates',
      '1 Yeşil Biber',
      'Tuz',
      'Karabiber',
      'Zeytinyağı',
    ]
  ),
  new Food(
    'm17',
    ['c7'],
    'Kahvaltılık Sandviç',
    'bütçeye uygun',
    'normal kalorili',
    'https://media.istockphoto.com/id/154124741/tr/foto%C4%9Fraf/gourmet-sandwich.jpg?s=612x612&w=0&k=20&c=gIY2m1w-Vdt0-yrR72KSIzNU3P5LP_bRJrZXqmEbDA8=',
    [
      '2 Dilim Ekmek',
      'Kaşar Peyniri',
      'Sucuk',
      'Domates',
      'Zeytin Yağı',
      'Yumurta',
    ]
  ),
  // Yeni Tatlılar Kategorisi
  new Food(
    'm18',
    ['c9'],
    'Cheesecake',
    'pahalı',
    'az kalorili',
    'https://media.istockphoto.com/id/589101300/tr/foto%C4%9Fraf/cheesecake-with-fresh-berries.jpg?s=612x612&w=0&k=20&c=0GFim2zlzSyMpjOVkvVj0bAXH1Vs0wbJauobID2aW_Y=',
    [
      '200g Labne Peyniri',
      '150g Bisküvi',
      '100g Tereyağı',
      '200g Krema',
      'Şeker',
      'Limon Suyu',
      'Yaban Mersini',
      'Nane Yaprağı'
    ]
  ),
  new Food(
    'm19',
    ['c9'],
    'Brownie',
    'bütçeye uygun',
    'çok kalorili',
    'https://media.istockphoto.com/id/689260420/tr/foto%C4%9Fraf/%C3%A7ikolata-sosu-ve-masan%C4%B1n-%C3%BCzerine-karamel-ile-lezzetli-ev-yap%C4%B1m%C4%B1-kek-se%C3%A7ici-odak.jpg?s=612x612&w=0&k=20&c=ii8HGwIo03MBnNjWYTBFoPYAAVDkSthoKe-GAaquMqY=',
    [
      '200g Bitter Çikolata',
      '100g Tereyağı',
      '3 Yumurta',
      '150g Şeker',
      '200g Un',
      'Ceviz',
    ]
  ),
  new Food(
    'm20',
    ['c9'],
    'Tiramisu',
    'pahalı',
    'normal kalorili',
    'https://media.istockphoto.com/id/1398679790/tr/foto%C4%9Fraf/tiramisu-cake-on-white-ceramic-plate.jpg?s=612x612&w=0&k=20&c=r1ZgZSF3oBVv4Dnt5sc83rwlAaNabGMa2ow761XBEIc=',
    [
      '300g Mascarpone Peyniri',
      '3 Yumurta',
      '1 Su Bardağı Kahve',
      '200g Savoiardi Bisküvi',
      'Şeker',
      'Kakao',
    ]
  ),
  new Food(
    'm21',
    ['c9'],
    'Sütlaç',
    'bütçeye uygun',
    'normal kalorili',
    'https://media.istockphoto.com/id/1395728748/tr/foto%C4%9Fraf/bowl-of-rice-pudding-in-a-rural-setting-typical-brazilian-dessert-in-the-state-of-minas.jpg?s=612x612&w=0&k=20&c=6zfaOvGJLdvUMpYNZ9BySXIcqxZ4TzwM0W2Lbm74ULQ=',
    [
      '1 litre Süt',
      '100g Pirinç',
      'Şeker',
      'Vanilin',
      'Tarçın',
    ]
  ),
  
];
