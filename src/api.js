export const productss = [
  {
    id: 1,
    name: "Armchair Morgen",
    category: "category 1",
    image: "../../assets/chair1.jpg",
    price: 100,
  },
  {
    id: 2,
    name: "Bright bowl",
    category: "category 2",
    image: "../../assets/kitchen1.jpg",
    price: 200,
  },
  {
    id: 3,
    name: "Product 2",
    category: "category 2",
    image: "../../assets/chair3.jpg",
    price: 200,
  },
  {
    id: 4,
    name: "Product 2",
    category: "category 2",
    image: "../../assets/chair2.jpg",
    price: 200,
  },
  {
    id: 5,
    name: "Product 3",
    category: "category 3",
    image: "../../assets/table2.jpg",
    price: 300,
  },
  {
    id: 6,
    name: "Product 6",
    category: "category 3",
    image: "../../assets/chair1.jpg",
    price: 600,
  },
];

export const moqGetProducts = async () => {
return new Promise((resolve, reject) => {  
    setTimeout(() => {
        resolve(productss);
    }, 1000);
 });
}
export const moqGetFilteredProducts = async (param) => {
return new Promise((resolve, reject) => {  
    setTimeout(() => {
        if (param === "asc") {
          resolve(productss.sort((a, b) => a.price - b.price)); // Ascending order
        } else {
          resolve(productss.sort((a, b) => b.price - a.price)); // Descending order
        }
      }, 1000);
 });
}

// const token =
//     "Bearer eyJhbGciOiJIUzI1NiJ9";
const url = "http://localhost:8080/api/v1/"

export async function login(loginRequest){
    try {
      const res = await fetch(`${url}auth/login`, {
        method: "POST",
        headers: {
         
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginRequest),
      });
      if (!res.ok){
        throw new Error("Invalid credentials");
      }
      const data = await res.json();
      return data;

    } catch(err){
      throw new Error("An error occurred while logging in");
    }
}

// export async function getProducts() {

//   try {
//       const res = await fetch(`${url}`, {
//         headers: {
//           authorization: `${token}`,
//         },
//       });
//     if (!res.ok){
//         throw new Error("Couldn't get products");
//     }
//       const data = await res.json();
//       return data;

//   }catch (err) {
//         throw new Error("An error occurred while fetching products");
//   }
// }
 
    

  
