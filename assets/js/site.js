// switch structure code-along

let myValue = 35

/* // standard switch med Default
switch (myValue) {
    case 50:
        console.log('var er 50');
        break;

    case 75:
        console.log('var er 75');
        break;

    case 100:
        console.log('var er 100');
        break;


    default:
        console.log('default');
        break;
} */



/* myValue = 20

switch (myValue) {
    case 50:
        console.log('value er 50');
        break;

    // fallthrough
    case 35:
    case 45:
    case 75:
        console.log('enten 35 45 75');
        break;

    case 20:
        console.log('value er 20');
        break;

    default:
        console.log('default');
        break;
} */




































let myCategories = ["smartphones",
    "laptops",
    "fragrances",
    "skincare",
    "groceries",
    "home-decoration",
    "furniture",
    "tops",
    "womens-dresses",
    "womens-shoes",
    "mens-shirts",
    "mens-shoes",
    "mens-watches",
    "womens-watches",
    "womens-bags",
    "womens-jewellery",
    "sunglasses",
    "automotive",
    "motorcycle",
    "lighting"
]

categorySorter(myCategories)

function categorySorter(categoriesToSort) {


    // hoved kategori arrays
    let myElectronics = []
    let myCosmetics = []
    let myVehicles = []
    let myMisc = []

    categoriesToSort.forEach(category => {

        switch (category) {

            case 'laptops':
            case 'lighting':
            case 'smartphones':
                console.log('electronics');
                myElectronics.push(category)
                break;

            case 'fragrances':
            case 'skincare':
                myCosmetics.push(category)

                break;

            case 'automotive':
            case 'motorcycle':
                myVehicles.push(category)

                break;

            default:
                console.log('misch');
                myMisc.push(category)
                break;
        }

    });

    console.log(myElectronics);
    console.log(myCosmetics);
    console.log(myVehicles);
    console.log(myMisc);

}
