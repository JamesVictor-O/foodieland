 export const  getData= async(categorie:string)=> {
  const url=`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categorie}`
  const request = await fetch(url,{ cache: 'force-cache' });
  if (!request) {
    throw new Error("fail to fetch data")
  };
  return request.json()

}





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