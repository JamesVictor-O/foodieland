

export const getAllData = async () => {
  try {
    const response = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood");
    const data= await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
 
}
const allRecipe =getAllData().then(result => result).then(data => data.meals)
// console.log(allRecipe)

export const allRecipes = [
    {
        description: "Mixed Tropical Fruit Salad with Superfood Boosts ",
        recipeUrl: "/recipe2/image1.png",
        type: "Healthy",
        id: "1",
      },
      {
        description: "Big and Juicy Wagyu Beef Cheeseburger",
        recipeUrl: "/recipe2/image2.png",
        type:"Western",
        id: "2",
      },
      {
        description: "Healthy Japanese Fried Rice with Asparagus",
        recipeUrl: "/recipe2/image3.png",
        type:"Healthy",
        id: "3",
      },
      {
        description: "Cauliflower Walnut Vegetarian Taco Meat",
        recipeUrl: "/recipe2/image4.png",
        type:"Eastern",
        id: "4",
      },
      {
        description: "Rainbow Chicken Salad with Almond Honey Mustard Dressing",
        recipeUrl: "/recipe2/image5.png",
        type:"Healthy",
        id: "5",
      },
      {
        description: "Barbeque Spicy Sandwiches with Chips ",
        recipeUrl: "/recipe2/image6.png",
        type:"snacks",
        id: "6",
      },
      {
        description: "Firecracker Vegan Lettuce Wraps - Spicy! ",
        recipeUrl: "/recipe2/image7.png",
        type:"Seafood",
        id: "7",
      },
      {
        description: "Chicken Ramen Soup with Mushroom ",
        recipeUrl: "/recipe2/image8.png",
        type:"Japanese",
        id: "8",
      },
      {
        description: "Big and Juicy Wagyu Beef Cheeseburger",
        recipeUrl: "/recipes/image1.png",
        type: "Snacks",
        id: "9",
      },
      {
        description: "Fresh Lime Roasted Salmon with Ginger Sauce",
        recipeUrl: "/recipes/image2.png",
        type:"fish",
        id: "10",
      },
      {
        description: "Strawberry Oatmeal Pancake with Honey Syrup",
        recipeUrl: "/recipes/image3.png",
        type:"Breakfast",
        id: "11",
      },
      {
        description: "Fresh and Healthy Mixed Mayonnaise Salad",
        recipeUrl: "/recipes/image6.png",
        type:"Healthy",
        id: "12",
      },
      {
        description: "Chicken Meatballs with Cream Cheese",
        recipeUrl: "/recipes/image4.png",
        type:"Meat",
        id: "13",
      },
      {
        description: "Fruity Pancake with Orange & Blueberry",
        recipeUrl: "/recipes/image7.png",
        type:"Sweet",
        id: "14",
      },
      {
        description: "The Best Easy One Pot Chicken and Rice",
        recipeUrl: "/recipes/image5.png",
        type:"Snacks",
        id: "15",
      },
      {
        description: "The Creamiest Creamy Chicken and Bacon Pasta",
        recipeUrl: "/recipes/image8.png",
        type:"Noodles",
        id: "16",
      },
]

export const blogPosts = [
  {
    post_header:"Crochet Projects for Noodle Lovers",
    post_body: "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqut enim",
    post_date: "12 November 2021",
    post_author: "James Victor",
    post_image:"homepage/Untitled design.jpg",
    post_ID:1
  },
  {
    post_header:"Crochet Projects for Noodle Lovers",
    post_body: "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqut enim",
    post_date: "12 November 2021",
    post_author: "James Victor",
    post_image:"homepage/Untitled design.jpg",
    post_ID:2
  },
  {
    post_header:"Crochet Projects for Noodle Lovers",
    post_body: "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqut enim",
    post_date: "12 November 2021",
    post_author: "Adeyemi bolladi",
    post_image:"homepage/Untitled design.jpg",
    post_ID:3
  },
  {
    post_header:"Crochet Projects for Noodle Lovers",
    post_body: "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqut enim",
    post_date: "12 November 2021",
    post_author: "John Boss",
    post_image:"homepage/Untitled design.jpg",
    post_ID:4
  },
]