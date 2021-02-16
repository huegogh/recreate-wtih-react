import MenuBeef from '../../assets/restaurant-assets/menubeef.jpg';
import MenuSeafood from '../../assets/restaurant-assets/menuseafood.jpg';
import MenuGrill from '../../assets/restaurant-assets/menumeat.jpg';
import MenuDessert from '../../assets/restaurant-assets/menudesserts.jpg';

export let MenuData = [
    {
        src: MenuBeef,
        alt: 'Our Most Popular Sandwich: Sizzling Steak',
        header: 'Sandwiches',
        subhead: 'All sandwiches come with a side of crispy fries',
        items: [
            {
                itemName: 'Sizzling Steak Sandwich',
                description: 'Open faced steak sandwich with grilled bell peppers and fried onions.',
                price: '$15.99',
            },
            {
                itemName: 'Tenderloin Sliders',
                description: 'Three beef tenderloin sliders with horseradish cream and blackberry bbq.',
                price: '$15.99',
            },
            {
                itemName: 'Classic Chicken Panini',
                description: 'Grilled chicken with Monterey jack, romaine lettuce, tomato, and cilantro.',
                price: '$10.99',
            },
            {
                itemName: 'Smoked Turkey Club',
                description: 'Smoked deli turkey, maple bacon, cranberry aioli, lettuce and tomatoes.',
                price: '$8.99',
            },
            {
                itemName: 'Tuna Sandwich',
                description: 'Tuna salad with sprouts, sliced tomatoes and cilantro lime mayo on toast.',
                price: '$6.99',
            },
        ]
    },
    {
        src: MenuSeafood,
        alt: 'Honey Shrimp Skewers',
        header: 'Seafood',
        subhead: 'All seafood comes with a side of rice pilaf and grilled vegetables',
        items: [
            {
                itemName: 'Honey Shrimp Skewers',
                description: 'Ten honey glazed shrimps grilled with sesame seeds and rosemary.',
                price: '$15.99',
            },
            {
                itemName: 'Grilled Salmon',
                description: 'Salmon grilled in a lime butter sauce.',
                price: '$13.99',
            },
            {
                itemName: 'Grilled Tilapia',
                description: 'A whole grilled tilapia cooked with smoked paprika.',
                price: '$10.99',
            },
            {
                itemName: 'Parmesan Fish Sticks',
                description: 'Sliced salmon in parmesan breading served with lemon dill tartar sauce.',
                price: '$8.99',
            },
        ]
    },
    {
        src: MenuGrill,
        alt: 'Baby Back Ribs coming off the Muzzles grill',
        header: 'On the Grill',
        subhead: 'Served with corn, cheddar biscuits, and your choice of coleslaw or potato salad.',
        items: [
            {
                itemName: 'Baby Back - Full Rack',
                description: 'A full rack of pork babyback ribs grilled and glazed with blackberry bbq.',
                price: '$19.99',
            },
            {
                itemName: 'Baby Back - Half Rack',
                description: 'A half rack of pork babyback ribs grilled and glazed with blackberry bbq.',
                price: '$13.99',
            },
            {
                itemName: 'Boneless Ribeye',
                description: 'A three inch thick boneless ribeye grilled in a rosemary rub and butter.',
                price: '$25.99',
            },
            
        ]
    },
    {
        src: MenuDessert,
        alt: 'Our Tripple Chocolate Brownie with Vanilla ice cream and a shot of espresso',
        header: 'Desserts',
        subhead: 'A shot of esspresso can be added to any dessert for an additional $2.',
        items: [
            {
                itemName: 'Double Walnut Brownies',
                description: 'Two brownies with a walnut crust, ice cream and chocolate sauce.',
                price: '$8.99',
            },
            {
                itemName: 'Cheese Cake with Chocolate Sauce',
                description: 'Cheesecake with ice cream, chocolate shavings and chocolate sauce.',
                price: '$7.99',
            },
            {
                itemName: 'Tripple Chocolate Brownie',
                description: 'A tripple chocolate brownie served with vanilla ice cream and walnuts.',
                price: '$6.99',
            },
            {
                itemName: 'House Made Shaved Gelato and Cookies',
                description: 'Your choice of shaved gelato with whole cookies. Options change daily.',
                price: '$5.99',
            },
            {
                itemName: 'Grilled Peaches and Ice Cream',
                description: 'Grilled peaches in cinnamon and brown sugar glaze with ice cream.',
                price: '$4.99',
            },
        ]
    },
];