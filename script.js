const easyContainer = document.getElementById("easy");
const oilFreeContainer = document.getElementById("oilfree");
const junkContainer = document.getElementById("junk");
const breakfastContainer = document.getElementById("breakfast");
const kidsContainer = document.getElementById("kids");
const dessertContainer = document.getElementById("dessert");
const milletContainer = document.getElementById("millet");

const searchInput = document.getElementById("searchInput");
const noResults = document.getElementById("noResults");
const scrollBtn = document.getElementById("scrollTopBtn");

// ===============================
// DEBOUNCE FUNCTION
// ===============================
function debounce(func, delay = 300) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), delay);
  };
}
// ===============================
// RECIPE DATA (10 DISHES EACH)
// ===============================
const recipes = [

  // ========= EASY (10) =========
  { category: "easy", name: "Classic Scrambled Eggs", time: "⏱ 10 mins",
    img: "https://i0.wp.com/kristineskitchenblog.com/wp-content/uploads/2021/11/scrambled-eggs-0815-1.jpg?w=1200&ssl=1",
    ingredients: ["Eggs", "Salt", "Pepper"], steps: ["Beat eggs", "Heat pan", "Cook gently"] },

  { category: "easy", name: "Avocado Toast", time: "⏱ 5 mins",
    img: "https://www.dinneratthezoo.com/wp-content/uploads/2018/12/avocado-toast-14-500x500.jpg",
    ingredients: ["Bread", "Avocado"], steps: ["Toast bread", "Mash avocado", "Spread"] },

  { category: "easy", name: "Fruit Salad", time: "⏱ 10 mins",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5EkaEOdkuKOCNkrO_f-QevmUbe52ej--gog&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",
    ingredients: ["Fruits", "Honey"], steps: ["Chop fruits", "Mix", "Serve"] },

  { category: "easy", name: "Peanut Butter Sandwich", time: "⏱ 5 mins",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd3WlkNahxKvbnLwRdyq64d_zsPUrmOBPCaw&s",
    ingredients: ["Bread", "Peanut butter"], steps: ["Toast bread", "Spread butter"] },

  { category: "easy", name: "Veg Omelette", time: "⏱ 10 mins",
    img: "https://www.mygorgeousrecipes.com/wp-content/uploads/2018/02/Worlds-Best-Vegetarian-Omelette-Quick-and-Easy.jpg",
    ingredients: ["Eggs", "Veggies"], steps: ["Beat eggs", "Add veggies", "Cook"] },

  { category: "easy", name: "Maggi Noodles", time: "⏱ 8 mins",
    img: "https://images.jdmagicbox.com/quickquotes/images_main/nestle-mixed-flours-maggi-noodles-packaging-size-standard-2216884561-pjbmpdk0.jpg",
    ingredients: ["Noodles", "Masala"], steps: ["Boil water", "Add noodles", "Cook"] },

  { category: "easy", name: "Tomato Soup", time: "⏱ 15 mins",
    img: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/11/tomato-soup-recipe.jpg",
    ingredients: ["Tomato", "Salt"], steps: ["Boil tomato", "Blend", "Serve"] },

  { category: "easy", name: "Cheese Toast", time: "⏱ 5 mins",
    img: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=500",
    ingredients: ["Bread", "Cheese"], steps: ["Add cheese", "Toast"] },

  { category: "easy", name: "Banana Smoothie", time: "⏱ 5 mins",
    img: "https://www.thespruceeats.com/thmb/FSBJvYhXFBlx_qqXZcx4LrmT3Wg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/SES-banana-smoothie-recipes-759606-hero-01-c3d4bf389b684c408d210cd185825a01.jpg",
    ingredients: ["Banana", "Milk"], steps: ["Blend ingredients", "Serve"] },

  { category: "easy", name: "Boiled Corn", time: "⏱ 10 mins",
    img: "https://vegecravings.com/wp-content/uploads/2018/10/Masala-Corn-Recipe-Step-By-Step-Instructions-8.jpg.webp",
    ingredients: ["Corn", "Salt"], steps: ["Boil corn", "Season"] },

  // ========= BREAKFAST (10) =========
  { category: "breakfast", name: "Masala Omelette", time: "⏱ 8 mins",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuj4WVpTQ00qtji8p00OmZqzKDCzEYy9Sc5A&s",
    ingredients: ["Eggs", "Onion"], steps: ["Beat eggs", "Cook"] },

  { category: "breakfast", name: "Idli with Chutney", time: "⏱ 20 mins",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKGX9px1WXEZqKKub5ZCikX_2laZctjvDsMQ&s",
    ingredients: ["Idli batter"], steps: ["Steam idli", "Serve"] },

  { category: "breakfast", name: "Dosa", time: "⏱ 20 mins",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXNRkQBAaLqrXbPH1qQncIKl6ZuusEMTndEA&s",
    ingredients: ["Dosa batter"], steps: ["Heat tawa", "Cook dosa"] },

  { category: "breakfast", name: "Poha", time: "⏱ 15 mins",
    img: "https://shwetainthekitchen.com/wp-content/uploads/2021/04/Poha-Recipe.jpg",
    ingredients: ["Poha", "Onion"], steps: ["Wash poha", "Cook"] },

  { category: "breakfast", name: "Upma", time: "⏱ 15 mins",
    img: "https://rakskitchen.net/wp-content/uploads/2013/02/upma-recipe-feat.jpg",
    ingredients: ["Rava", "Vegetables"], steps: ["Roast rava", "Cook"] },

  { category: "breakfast", name: "Pancakes", time: "⏱ 15 mins",
    img: "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?auto=format&fit=crop&w=500",
    ingredients: ["Flour", "Milk"], steps: ["Make batter", "Cook"] },

  { category: "breakfast", name: "Toast & Jam", time: "⏱ 5 mins",
    img: "https://images.unsplash.com/photo-1493770348161-369560ae357d?auto=format&fit=crop&w=500",
    ingredients: ["Bread", "Jam"], steps: ["Toast bread", "Apply jam"] },

  { category: "breakfast", name: "Oats Porridge", time: "⏱ 10 mins",
    img: "https://images.unsplash.com/photo-1517673400267-0251440c45dc?auto=format&fit=crop&w=500",
    ingredients: ["Oats", "Milk"], steps: ["Boil oats", "Serve"] },

  { category: "breakfast", name: "Sandwich", time: "⏱ 10 mins",
    img: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=500",
    ingredients: ["Bread", "Veggies"], steps: ["Assemble", "Grill"] },

  { category: "breakfast", name: "Fruit Bowl", time: "⏱ 5 mins",
    img: "https://joyfoodsunshine.com/wp-content/uploads/2022/05/summer-fruit-salad-recipe-1.jpg",
    ingredients: ["Fruits"], steps: ["Chop", "Serve"] },

  // ========= KIDS (10) =========
  { category: "kids", name: "Cheese Sandwich", time: "⏱ 5 mins",
    img: "https://www.bhg.com/thmb/H6G2G-KzMaxmin4WJRYHZU4-oaQ=/1244x0/filters:no_upscale():strip_icc()/grilled-cheese-sandwiches-RU197054-0026ddec06634f3eb9b1a3649a114e3d.jpg",
    ingredients: ["Bread", "Cheese"], steps: ["Add cheese", "Toast"] },

  { category: "kids", name: "Mini Pancakes", time: "⏱ 10 mins",
    img: "https://www.acouplecooks.com/wp-content/uploads/2023/07/Mini-Pancakes-003.jpg",
    ingredients: ["Flour", "Milk"], steps: ["Make batter", "Cook"] },

  { category: "kids", name: "Fruit Popsicle", time: "⏱ Freeze",
    img: "https://www.iheartnaptime.net/wp-content/uploads/2024/06/Rainbow-Popsicles.jpg",
    ingredients: ["Fruit juice"], steps: ["Pour", "Freeze"] },

  { category: "kids", name: "Veg Nuggets", time: "⏱ 15 mins",
    img: "https://myfoodstory.com/wp-content/uploads/2019/11/Crispy-Veg-Nuggets-with-Sichuan-Sauce-1.jpg",
    ingredients: ["Veg nuggets"], steps: ["Bake/Fry", "Serve"] },

  { category: "kids", name: "Milkshake", time: "⏱ 5 mins",
    img: "https://jordanseasyentertaining.com/wp-content/uploads/2023/03/cookies-and-cream-milkshake-made-with-oreo-cookies-in-the-Pampered-Chef-Deluxe-Cooking-Blender5-735x1103.jpg",
    ingredients: ["Milk", "Flavour"], steps: ["Blend", "Serve"] },

  { category: "kids", name: "Corn Cups", time: "⏱ 10 mins",
    img: "https://insearchofyummyness.com/wp-content/uploads/2022/07/Mexican-Corn-Cup-Feature.jpg",
    ingredients: ["Corn"], steps: ["Boil", "Season"] },

  { category: "kids", name: "Chocolate Toast", time: "⏱ 5 mins",
    img: "https://img.delicious.com.au/2Ua7w47G/w1200/del/2024/07/chocolate-french-toast-215002-2.jpg",
    ingredients: ["Bread", "Chocolate spread"], steps: ["Spread", "Toast"] },

  { category: "kids", name: "Fruit Yogurt", time: "⏱ 5 mins",
    img: "https://feelgoodfoodie.net/wp-content/uploads/2024/11/Fruit-Yogurt-Parfait-11.jpg",
    ingredients: ["Yogurt", "Fruit"], steps: ["Mix", "Serve"] },

  { category: "kids", name: "Cheese Pasta", time: "⏱ 15 mins",
    img: "https://www.jocooks.com/wp-content/uploads/2021/02/italian-mac-and-cheese-1-11.jpg",
    ingredients: ["Pasta", "Cheese"], steps: ["Boil pasta", "Mix cheese"] },

  { category: "kids", name: "Veg Roll", time: "⏱ 10 mins",
    img: "https://manjulaskitchen.com/wp-content/uploads/vegetable_kathi_roll.jpg",
    ingredients: ["Roti", "Veg"], steps: ["Fill", "Roll"] },

  // ========= DESSERT (10) =========
  { category: "dessert", name: "Chocolate Brownie", time: "⏱ 30 mins",
    img: "https://i.ytimg.com/vi/qdxqip0Bgt8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCPjO2A80XRgLsPVseoe9Q8KzCccA",
    ingredients: ["Cocoa", "Sugar"], steps: ["Mix", "Bake"] },

  { category: "dessert", name: "Fruit Custard", time: "⏱ 15 mins",
    img: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/05/fruit-custard.webp",
    ingredients: ["Milk", "Custard"], steps: ["Boil milk", "Mix custard"] },

  { category: "dessert", name: "Ice Cream", time: "⏱ 5 mins",
    img: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&w=500",
    ingredients: ["Ice cream"], steps: ["Serve chilled"] },

  { category: "dessert", name: "Gulab Jamun", time: "⏱ 20 mins",
    img: "https://i0.wp.com/www.chitrasfoodbook.com/wp-content/uploads/2016/10/gulab-jamun-using-mix.jpg?w=1200&ssl=1",
    ingredients: ["Jamun mix"], steps: ["Fry", "Soak syrup"] },

  { category: "dessert", name: "Pudding", time: "⏱ 15 mins",
    img: "https://i.ytimg.com/vi/YpZoIAvnkBw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB6-oIsOOLjJ2DC6Yr-1CUoLBoR6g",
    ingredients: ["Milk", "Sugar"], steps: ["Boil", "Set"] },

  { category: "dessert", name: "Cake Slice", time: "⏱ 5 mins",
    img: "https://images.picxy.com/cache/2021/4/19/797fde925d94e943d791df866205d89f.jpg",
    ingredients: ["Cake"], steps: ["Slice", "Serve"] },

  { category: "dessert", name: "Donut", time: "⏱ 10 mins",
    img: "https://cdn.britannica.com/38/230838-050-D0173E79/doughnuts-donuts.jpg    ",
    ingredients: ["Donut"], steps: ["Serve"] },

  { category: "dessert", name: "Chocolate Mousse", time: "⏱ 20 mins",
    img: "https://carveyourcraving.com/wp-content/uploads/2024/01/eggless-brownnie-mousse-trifle.jpg",
    ingredients: ["Chocolate", "Cream"], steps: ["Mix", "Chill"] },

  { category: "dessert", name: "Fruit Tart", time: "⏱ 25 mins",
    img: "https://hips.hearstapps.com/hmg-prod/images/fruit-tart-recipe-3-1650464619.jpg?crop=0.6666666666666667xw:1xh;center,top&resize=1200:*",
    ingredients: ["Tart base", "Fruit"], steps: ["Assemble", "Serve"] },

  { category: "dessert", name: "Milk Peda", time: "⏱ 20 mins",
    img: "https://tastypics.s3.us-west-1.amazonaws.com/d1606c15eebd4420a0b5d612108ab1e4.jpg",
    ingredients: ["Milk solids"], steps: ["Shape", "Serve"] },

  // ========= MILLET (10) =========
  { category: "millet", name: "Millet Upma", time: "⏱ 20 mins",
    img: "https://harekrishnarecipes.com/wp-content/uploads/2024/08/Millet-Upma-Recipe.webp",
    ingredients: ["Millet", "Veg"], steps: ["Roast", "Cook"] },

  { category: "millet", name: "Millet Dosa", time: "⏱ 25 mins",
    img: "https://blog.bigbasket.com/wp-content/uploads/2024/05/AdobeStock_397467482.jpeg",
    ingredients: ["Millet batter"], steps: ["Spread", "Cook"] },

  { category: "millet", name: "Millet Pongal", time: "⏱ 25 mins",
    img: "https://www.blendwithspices.com/wp-content/uploads/2020/07/milletpongal.jpg",
    ingredients: ["Millet", "Dal"], steps: ["Boil", "Season"] },

  { category: "millet", name: "Millet Idli", time: "⏱ 20 mins",
    img: "https://www.robinage.com/wp-content/uploads/2021/06/Mixed-Millet-Idly-800x533.jpg",
    ingredients: ["Millet batter"], steps: ["Steam", "Serve"] },

  { category: "millet", name: "Millet Khichdi", time: "⏱ 30 mins",
    img: "https://rachnacooks.com/wp-content/uploads/2019/04/millet-khichdi-8jpg.jpg",
    ingredients: ["Millet", "Dal"], steps: ["Cook together"] },

  { category: "millet", name: "Millet Roti", time: "⏱ 15 mins",
    img: "https://www.jinooskitchen.com/wp-content/uploads/2018/05/bajra-roti-final.jpg",
    ingredients: ["Millet flour"], steps: ["Knead", "Cook"] },

  { category: "millet", name: "Millet Salad", time: "⏱ 10 mins",
    img: "https://themom100.com/wp-content/uploads/2016/04/millet-and-greens-salad-0354-scaled.jpg",
    ingredients: ["Cooked millet", "Veg"], steps: ["Mix", "Serve"] },

  { category: "millet", name: "Millet Porridge", time: "⏱ 10 mins",
    img: "https://www.gastrosenses.com/wp-content/uploads/2020/11/Baked-Milk-Millet-Porridge.jpg",
    ingredients: ["Millet", "Milk"], steps: ["Boil", "Serve"] },

  { category: "millet", name: "Millet Cutlet", time: "⏱ 20 mins",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiJ-n9H-bMkR7Ps_spKLl-fHGLZQ8bHG9-mA&s",
    ingredients: ["Millet", "Veg"], steps: ["Shape", "Cook"] },

  { category: "millet", name: "Millet Sweet Ladoo", time: "⏱ 25 mins",
    img: "https://thumbs.dreamstime.com/b/ball-shaped-indian-sweet-made-mixture-foxtail-millet-flour-sugar-shortening-locally-known-as-nachni-ladoo-shot-217304784.jpg",
    ingredients: ["Millet flour", "Jaggery"], steps: ["Mix", "Shape"] },
    // ========= OIL-FREE (10) =========
  {
    category: "oilfree",
    name: "Steamed Vegetable Momos",
    time: "⏱ 25 mins",
    img: "https://rajdhanigr.com/wp-content/uploads/2025/01/veggie-steam-momo.jpg",
    ingredients: ["Flour", "Cabbage", "Carrot"],
    steps: ["Prepare stuffing", "Fill dough", "Steam"]
  },
  {
    category: "oilfree",
    name: "Boiled Corn Chaat",
    time: "⏱ 10 mins",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJCCuBqfGR56haE_Iul_y9-BKvY-iStWdsbw&s",
    ingredients: ["Corn", "Lemon", "Spices"],
    steps: ["Boil corn", "Mix spices", "Serve"]
  },
  {
    category: "oilfree",
    name: "Sprout Salad",
    time: "⏱ 10 mins",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_wrHHozD4mYEY-9QV7Tnb-XZ-5rU2T0abpQ&shttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_wrHHozD4mYEY-9QV7Tnb-XZ-5rU2T0abpQ&s",
    ingredients: ["Sprouts", "Onion", "Tomato"],
    steps: ["Steam sprouts", "Mix veggies", "Season"]
  },
  {
    category: "oilfree",
    name: "Vegetable Soup",
    time: "⏱ 20 mins",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvS3NYAZRy6CFK8qsTZBlcEIhJb4tCJvrsrQ&s",
    ingredients: ["Vegetables", "Salt", "Pepper"],
    steps: ["Boil vegetables", "Season", "Serve"]
  },
  {
    category: "oilfree",
    name: "Steamed Broccoli",
    time: "⏱ 8 mins",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAaLLVdYSH1ve7PYbRjAN1m02oOFmaWI2A-g&s",
    ingredients: ["Broccoli", "Salt"],
    steps: ["Steam broccoli", "Season"]
  },
  {
    category: "oilfree",
    name: "Fruit Bowl",
    time: "⏱ 5 mins",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-Gm83WoyhyFiDrIBqouikXxNPP7WCbys0cw&s",
    ingredients: ["Mixed fruits"],
    steps: ["Chop fruits", "Serve"]
  },
  {
    category: "oilfree",
    name: "Overnight Oats",
    time: "⏱ Prep only",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt8ZrGrEBE--P5X-nyZNVpQDKLwwy5PAD5jg&s",
    ingredients: ["Oats", "Milk"],
    steps: ["Mix oats & milk", "Refrigerate overnight"]
  },
  {
    category: "oilfree",
    name: "Boiled Sweet Potato",
    time: "⏱ 15 mins",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfJCQJg2IP26Kj0S0Hbo_iMwdjLLDY21ud1Q&s",
    ingredients: ["Sweet potato"],
    steps: ["Boil", "Peel", "Serve"]
  },
  {
    category: "oilfree",
    name: "Cucumber Raita",
    time: "⏱ 5 mins",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ77h7mhjpPWQtE-ybE1F6Nd9EgHmFr4GNJw&s",
    ingredients: ["Curd", "Cucumber"],
    steps: ["Grate cucumber", "Mix with curd"]
  },
  {
    category: "oilfree",
    name: "Rice Paper Rolls",
    time: "⏱ 15 mins",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnW3EMuuvrv4tOh_79mXidMkQMaU_O2Qwzyw&s",
    ingredients: ["Rice paper", "Vegetables"],
    steps: ["Soak paper", "Fill veggies", "Roll"]
  },
    // ========= JUNK (10) =========
  {
    category: "junk",
    name: "Cheese Burger",
    time: "⏱ 25 mins",
    img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=500",
    ingredients: ["Bun", "Patty", "Cheese"],
    steps: ["Cook patty", "Assemble burger"]
  },
  {
    category: "junk",
    name: "French Fries",
    time: "⏱ 20 mins",
    img: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?auto=format&fit=crop&w=500",
    ingredients: ["Potato", "Oil"],
    steps: ["Cut potatoes", "Deep fry"]
  },
  {
    category: "junk",
    name: "Pepperoni Pizza",
    time: "⏱ 30 mins",
    img: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=500",
    ingredients: ["Pizza base", "Cheese"],
    steps: ["Add toppings", "Bake"]
  },
  {
    category: "junk",
    name: "Chocolate Milkshake",
    time: "⏱ 5 mins",
    img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=500",
    ingredients: ["Milk", "Ice cream"],
    steps: ["Blend", "Serve"]
  },
  {
    category: "junk",
    name: "Hot Dog",
    time: "⏱ 10 mins",
    img: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2025/08/12/Oven-Baked-Hot-Dogs_s4x3.jpg.rend.hgtvcom.616.462.suffix/1755026052030.webp",
    ingredients: ["Bun", "Sausage"],
    steps: ["Cook sausage", "Assemble"]
  },
  {
    category: "junk",
    name: "Fried Chicken",
    time: "⏱ 45 mins",
    img: "https://cdn.shopify.com/s/files/1/0173/8181/8422/files/20250701141944-fried-20chicken.jpg?v=1751379586&width=1600&height=900",
    ingredients: ["Chicken", "Flour"],
    steps: ["Marinate", "Deep fry"]
  },
  {
    category: "junk",
    name: "Loaded Nachos",
    time: "⏱ 15 mins",
    img: "https://recipesblob.oetker.in/assets/b72049329c8742b98daf790c9ef937bd/1272x764/loaded-nachos.jpg",
    ingredients: ["Nachos", "Cheese"],
    steps: ["Add toppings", "Serve"]
  },
  {
    category: "junk",
    name: "Donut",
    time: "⏱ 10 mins",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbC-ji9hIsbmyRTIh-m113OS4VCZYSldbUJw&s",
    ingredients: ["Donut"],
    steps: ["Serve"]
  },
  {
    category: "junk",
    name: "Brownie",
    time: "⏱ 30 mins",
    img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=500",
    ingredients: ["Cocoa", "Sugar"],
    steps: ["Mix", "Bake"]
  },
  {
    category: "junk",
    name: "Churros",
    time: "⏱ 25 mins",
    img: "https://assets.bonappetit.com/photos/58ff5f162278cd3dbd2c069c/1:1/w_2560%2Cc_limit/churros.jpg",
    ingredients: ["Dough", "Sugar"],
    steps: ["Fry", "Coat with sugar"]
  }

];


function renderRecipes() {
  recipes.forEach((recipe, index) => {
    const card = document.createElement("div");
    card.className = "dish-card";

    const id = `details-${index}`;

    card.innerHTML = `
  <img src="${recipe.img}" class="dish-img" alt="${recipe.name}">
  <div class="dish-info">
    <h3>${recipe.name}</h3>
    <span class="dish-time">${recipe.time}</span>

    <button class="recipe-btn" onclick="toggleRecipe('${id}')">
      View Recipe ⬇
    </button>

    <div id="${id}" class="recipe-details">

      <h4>🛒 Ingredients</h4>
      <ul>${recipe.ingredients.map(i => `<li>${i}</li>`).join("")}</ul>

      <h4>🍳 Procedure</h4>
      <ol>${recipe.steps.map(s => `<li>${s}</li>`).join("")}</ol>

      <h4>⭐ Rate this recipe</h4>
      <div class="stars" data-index="${index}">
        ${[1,2,3,4,5].map(n => `
          <span class="star" onclick="rateRecipe(${index}, ${n})">★</span>
        `).join("")}
      </div>

      <h4>💬 Comments</h4>
      <div class="comments" id="comments-${index}"></div>

      <input
        type="text"
        class="comment-input"
        placeholder="Write a comment..."
        onkeydown="addComment(event, ${index})"
      />

    </div>
  </div>
`;


    switch (recipe.category) {
      case "easy": easyContainer.appendChild(card); break;
      case "oilfree": oilFreeContainer.appendChild(card); break;
      case "junk": junkContainer.appendChild(card); break;
      case "breakfast": breakfastContainer.appendChild(card); break;
      case "kids": kidsContainer.appendChild(card); break;
      case "dessert": dessertContainer.appendChild(card); break;
      case "millet": milletContainer.appendChild(card); break;
    }
  });
}

// ===============================
// TOGGLE RECIPE DETAILS
// ===============================
function toggleRecipe(id) {
  const recipe = document.getElementById(id);

  // check if it is already open
  const isOpen = recipe.classList.contains("active");

  // close all recipes
  document.querySelectorAll(".recipe-details")
    .forEach(el => el.classList.remove("active"));

  // if it was not open, open it
  if (!isOpen) {
    recipe.classList.add("active");
  }
}

// ===============================
// SEARCH FILTER (DEBOUNCED)
// ===============================
function filterRecipes() {
  const query = searchInput.value.toLowerCase().trim();
  const cards = document.querySelectorAll(".dish-card");
  const sections = document.querySelectorAll(".category-section");

  let visibleCount = 0;

  cards.forEach(card => {
    const text = card.innerText.toLowerCase();
    if (text.includes(query)) {
      card.style.display = "block";
      visibleCount++;
    } else {
      card.style.display = "none";
    }
  });

  sections.forEach(section => {
    const visibleCards = section.querySelectorAll(
      ".dish-card:not([style*='display: none'])"
    );
    section.style.display = visibleCards.length ? "block" : "none";
  });

  noResults.style.display = visibleCount === 0 ? "block" : "none";
}

searchInput.addEventListener("input", debounce(filterRecipes, 300));

// ===============================
// SCROLL TO TOP
// ===============================
window.addEventListener("scroll", () => {
  scrollBtn.style.display =
    document.documentElement.scrollTop > 200 ? "block" : "none";
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ===============================
// INIT
// ===============================
document.addEventListener("DOMContentLoaded", renderRecipes);
// ===============================
// RATINGS & COMMENTS STORAGE
// ===============================
const ratings = {};
const comments = {};

// ===============================
// STAR RATING FUNCTION
// ===============================
function rateRecipe(recipeIndex, rating) {
  ratings[recipeIndex] = rating;

  const starsContainer = document.querySelector(
    `.stars[data-index='${recipeIndex}']`
  );

  const stars = starsContainer.querySelectorAll(".star");
  stars.forEach((star, i) => {
    star.classList.toggle("active", i < rating);
  });
}

// ===============================
// ADD COMMENT FUNCTION
// ===============================
function addComment(event, recipeIndex) {
  if (event.key !== "Enter") return;

  const input = event.target;
  const text = input.value.trim();
  if (!text) return;

  if (!comments[recipeIndex]) comments[recipeIndex] = [];
  comments[recipeIndex].push(text);

  input.value = "";
  renderComments(recipeIndex);
}

// ===============================
// RENDER COMMENTS
// ===============================
function renderComments(recipeIndex) {
  const container = document.getElementById(`comments-${recipeIndex}`);
  container.innerHTML = "";

  (comments[recipeIndex] || []).forEach(comment => {
    const div = document.createElement("div");
    div.className = "comment";
    div.textContent = comment;
    container.appendChild(div);
  });
}
// ===============================
// SIMPLE AUTH SYSTEM
// ===============================
const loginModal = document.getElementById("loginModal");
const logoutBtn = document.getElementById("logoutBtn");
const loginMsg = document.getElementById("loginMsg");

function register() {
  const user = username.value.trim();
  const pass = password.value.trim();

  if (!user || !pass) {
    loginMsg.textContent = "⚠ Fill all fields";
    return;
  }

  localStorage.setItem(`user_${user}`, pass);
  loginMsg.textContent = "✅ Registered! Now login.";
}

function login() {
  const user = username.value.trim();
  const pass = password.value.trim();

  const storedPass = localStorage.getItem(`user_${user}`);

  if (storedPass === pass) {
    localStorage.setItem("loggedInUser", user);
    loginModal.style.display = "none";
    logoutBtn.style.display = "block";
  } else {
    loginMsg.textContent = "❌ Invalid credentials";
  }
}

function logout() {
  localStorage.removeItem("loggedInUser");
  location.reload();
}

// ===============================
// CHECK LOGIN ON LOAD
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("loggedInUser")) {
    loginModal.style.display = "none";
    logoutBtn.style.display = "block";
  } else {
    loginModal.style.display = "flex";
  }
});
