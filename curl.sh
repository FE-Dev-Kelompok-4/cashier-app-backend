curl localhost:3000/api/menu \
-X POST \
-H "Content-Type: application/json" \
-d '
{
"menu": [
    {
        "name": "Classic Caesar Salad",
        "description": "Fresh romaine lettuce with Parmesan, croutons, and a creamy Caesar dressing.",
        "category": "STARTER",
        "price": 7.99,
        "stock": 50,
        "image": "caesar_salad.jpg"
    },
    {
        "name": "Grilled Salmon",
        "description": "Grilled salmon fillet with a lemon butter sauce, served with asparagus and mashed potatoes.",
        "category": "MAIN-COURSE",
        "price": 15.99,
        "stock": 35,
        "image": "grilled_salmon.jpg"
    },
    {
        "name": "Garlic Bread",
        "description": "Toasty baguette slices topped with garlic butter and herbs.",
        "category": "SIDE-DISH",
        "price": 3.99,
        "stock": 100,
        "image": "garlic_bread.jpg"
    },
    {
        "name": "New York Cheesecake",
        "description": "Rich and creamy cheesecake with a graham cracker crust, topped with fresh strawberries.",
        "category": "DESSERT",
        "price": 6.50,
        "stock": 40,
        "image": "cheesecake.jpg"
    },
    {
        "name": "Iced Latte",
        "description": "Chilled espresso blended with milk and served over ice.",
        "category": "BEVERAGE",
        "price": 4.50,
        "stock": 70,
        "image": "iced_latte.jpg"
    },
    {
        "name": "Margherita Pizza",
        "description": "Classic pizza with fresh tomatoes, mozzarella, basil, and olive oil.",
        "category": "MAIN-COURSE",
        "price": 12.00,
        "stock": 30,
        "image": "margherita_pizza.jpg"
    },
    {
        "name": "Tomato Soup",
        "description": "Creamy tomato soup garnished with basil and served with a side of croutons.",
        "category": "STARTER",
        "price": 5.99,
        "stock": 50,
        "image": "tomato_soup.jpg"
    },
    {
        "name": "French Fries",
        "description": "Crispy golden fries served with a side of ketchup.",
        "category": "SIDE-DISH",
        "price": 2.99,
        "stock": 80,
        "image": "french_fries.jpg"
    },
    {
        "name": "Apple Pie",
        "description": "Warm apple pie with a flaky crust, served with vanilla ice cream.",
        "category": "DESSERT",
        "price": 5.00,
        "stock": 40,
        "image": "apple_pie.jpg"
    },
    {
        "name": "Mojito",
        "description": "Refreshing cocktail made with white rum, sugar, lime juice, soda water, and mint.",
        "category": "BEVERAGE",
        "price": 7.00,
        "stock": 60,
        "image": "mojito.jpg"
    },
    {
        "name": "Vegetable Stir-Fry",
        "description": "Sautéed mixed vegetables served over steamed rice.",
        "category": "MAIN-COURSE",
        "price": 9.99,
        "stock": 30,
        "image": "vegetable_stir_fry.jpg"
    },
    {
        "name": "Chicken Wings",
        "description": "Spicy chicken wings served with blue cheese dressing and celery sticks.",
        "category": "STARTER",
        "price": 8.99,
        "stock": 45,
        "image": "chicken_wings.jpg"
    },
    {
        "name": "Greek Salad",
        "description": "Crisp salad with cucumbers, tomatoes, olives, feta cheese, and a light vinaigrette.",
        "category": "SIDE-DISH",
        "price": 6.99,
        "stock": 50,
        "image": "greek_salad.jpg"
    },
    {
        "name": "Tiramisu",
        "description": "Italian dessert made with coffee-soaked ladyfingers and mascarpone cheese.",
        "category": "DESSERT",
        "price": 6.99,
        "stock": 30,
        "image": "tiramisu.jpg"
    },
    {
        "name": "Cappuccino",
        "description": "Espresso with steamed milk foam.",
        "category": "BEVERAGE",
        "price": 3.99,
        "stock": 80,
        "image": "cappuccino.jpg"
    },
    {
        "name": "Beef Burger",
        "description": "Juicy beef patty with lettuce, tomato, cheese, and a side of fries.",
        "category": "MAIN-COURSE",
        "price": 10.99,
        "stock": 40,
        "image": "beef_burger.jpg"
    },
    {
        "name": "Nachos",
        "description": "Crispy tortilla chips topped with melted cheese, jalapenos, and a side of guacamole.",
        "category": "STARTER",
        "price": 7.99,
        "stock": 60,
        "image": "nachos.jpg"
    },
    {
        "name": "Onion Rings",
        "description": "Crispy fried onion rings served with a spicy dipping sauce.",
        "category": "SIDE-DISH",
        "price": 4.50,
        "stock": 75,
        "image": "onion_rings.jpg"
    },
    {
        "name": "Chocolate Brownie",
        "description": "Rich chocolate brownie served warm with a scoop of vanilla ice cream.",
        "category": "DESSERT",
        "price": 5.50,
        "stock": 50,
        "image": "chocolate_brownie.jpg"
    },
    {
        "name": "Smoothie",
        "description": "A healthy blend of fresh fruits and yogurt.",
        "category": "BEVERAGE",
        "price": 5.99,
        "stock": 65,
        "image": "smoothie.jpg"
    },
    {
        "name": "Caprese Salad",
        "description": "Fresh tomatoes, mozzarella cheese, and basil drizzled with balsamic glaze.",
        "category": "STARTER",
        "price": 8.99,
        "stock": 45,
        "image": "caprese_salad.jpg"
    },
    {
        "name": "Spinach and Artichoke Dip",
        "description": "Creamy spinach and artichoke dip served with tortilla chips.",
        "category": "STARTER",
        "price": 6.99,
        "stock": 55,
        "image": "spinach_artichoke_dip.jpg"
    },
    {
        "name": "Bruschetta",
        "description": "Toasted baguette slices topped with diced tomatoes, garlic, and basil.",
        "category": "STARTER",
        "price": 5.99,
        "stock": 60,
        "image": "bruschetta.jpg"
    },
    {
        "name": "Shrimp Cocktail",
        "description": "Chilled shrimp served with tangy cocktail sauce.",
        "category": "STARTER",
        "price": 9.50,
        "stock": 30,
        "image": "shrimp_cocktail.jpg"
    },
    {
        "name": "Mozzarella Sticks",
        "description": "Crispy mozzarella sticks served with marinara sauce.",
        "category": "STARTER",
        "price": 7.50,
        "stock": 40,
        "image": "mozzarella_sticks.jpg"
    },
    {
        "name": "Chicken Alfredo",
        "description": "Grilled chicken breast over fettuccine pasta with creamy Alfredo sauce.",
        "category": "MAIN-COURSE",
        "price": 13.99,
        "stock": 40,
        "image": "chicken_alfredo.jpg"
    },
    {
        "name": "Vegetarian Stir-Fry",
        "description": "Assorted vegetables stir-fried in a savory sauce, served with rice.",
        "category": "MAIN-COURSE",
        "price": 12.99,
        "stock": 35,
        "image": "vegetarian_stir_fry.jpg"
    },
    {
        "name": "BBQ Ribs",
        "description": "Slow-cooked BBQ ribs glazed with a smoky barbecue sauce.",
        "category": "MAIN-COURSE",
        "price": 17.99,
        "stock": 25,
        "image": "bbq_ribs.jpg"
    },
    {
        "name": "Penne Vodka Pasta",
        "description": "Penne pasta in a creamy tomato vodka sauce.",
        "category": "MAIN-COURSE",
        "price": 14.50,
        "stock": 30,
        "image": "penne_vodka_pasta.jpg"
    },
    {
        "name": "Beef Tenderloin",
        "description": "Grilled beef tenderloin served with garlic mashed potatoes and green beans.",
        "category": "MAIN-COURSE",
        "price": 19.99,
        "stock": 20,
        "image": "beef_tenderloin.jpg"
    },
    {
        "name": "Sweet Potato Fries",
        "description": "Crispy sweet potato fries served with a honey mustard dipping sauce.",
        "category": "SIDE-DISH",
        "price": 4.99,
        "stock": 65,
        "image": "sweet_potato_fries.jpg"
    },
    {
        "name": "Creamed Spinach",
        "description": "Fresh spinach in a creamy Parmesan sauce.",
        "category": "SIDE-DISH",
        "price": 3.99,
        "stock": 50,
        "image": "creamed_spinach.jpg"
    },
    {
        "name": "Loaded Baked Potato",
        "description": "Baked potato loaded with cheese, bacon, sour cream, and chives.",
        "category": "SIDE-DISH",
        "price": 5.50,
        "stock": 55,
        "image": "loaded_baked_potato.jpg"
    },
    {
        "name": "Quinoa Salad",
        "description": "Quinoa salad with cucumber, cherry tomatoes, and feta cheese.",
        "category": "SIDE-DISH",
        "price": 6.99,
        "stock": 40,
        "image": "quinoa_salad.jpg"
    },
    {
        "name": "Steamed Broccoli",
        "description": "Fresh steamed broccoli seasoned with garlic and lemon.",
        "category": "SIDE-DISH",
        "price": 3.50,
        "stock": 60,
        "image": "steamed_broccoli.jpg"
    },
    {
        "name": "Molten Chocolate Lava Cake",
        "description": "Warm chocolate cake with a gooey molten center, served with vanilla ice cream.",
        "category": "DESSERT",
        "price": 8.50,
        "stock": 25,
        "image": "lava_cake.jpg"
    },
    {
        "name": "Tiramisu",
        "description": "Layers of coffee-soaked ladyfingers and mascarpone cream, dusted with cocoa powder.",
        "category": "DESSERT",
        "price": 7.99,
        "stock": 30,
        "image": "tiramisu.jpg"
    },
    {
        "name": "Fruit Sorbet",
        "description": "Refreshing fruit sorbet with a medley of seasonal fruits.",
        "category": "DESSERT",
        "price": 5.99,
        "stock": 40,
        "image": "fruit_sorbet.jpg"
    },
    {
        "name": "Key Lime Pie",
        "description": "Tangy key lime pie with a graham cracker crust.",
        "category": "DESSERT",
        "price": 6.99,
        "stock": 35,
        "image": "key_lime_pie.jpg"
    },
    {
        "name": "Red Velvet Cupcakes",
        "description": "Moist red velvet cupcakes topped with cream cheese frosting.",
        "category": "DESSERT",
        "price": 4.50,
        "stock": 50,
        "image": "red_velvet_cupcakes.jpg"
    },
    {
        "name": "Mango Tango Smoothie",
        "description": "Fresh mango blended into a tropical smoothie.",
        "category": "BEVERAGE",
        "price": 4.99,
        "stock": 45,
        "image": "mango_smoothie.jpg"
    },
    {
        "name": "Classic Mojito",
        "description": "A refreshing mix of mint, lime, and soda.",
        "category": "BEVERAGE",
        "price": 6.50,
        "stock": 35,
        "image": "mojito.jpg"
    },
     {
        "name": "Cucumber Mint Lemonade",
        "description": "Cool cucumber and mint infused lemonade.",
        "category": "BEVERAGE",
        "price": 3.99,
        "stock": 55,
        "image": "cucumber_lemonade.jpg"
    },
    {
        "name": "Hot Chocolate",
        "description": "Rich and creamy hot chocolate topped with whipped cream.",
        "category": "BEVERAGE",
        "price": 4.50,
        "stock": 40,
        "image": "hot_chocolate.jpg"
    },
    {
        "name": "Green Tea",
        "description": "A soothing cup of green tea.",
        "category": "BEVERAGE",
        "price": 2.99,
        "stock": 60,
        "image": "green_tea.jpg"
    }
  ]
}
'
