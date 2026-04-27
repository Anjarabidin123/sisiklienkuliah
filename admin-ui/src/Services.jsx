const city = "Jakarta";
const street = "Jl. Kebon Jeruk";

export const getUsers = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    const fetchedUsers = users.map((user) => ({
      name: user.name,
      email: user.email,
      city,
      street,
    }));
    
    return [
      {
        name: "Nugroho Anjar Abidin",
        email: "anjarbdn@gmail.com",
        city: "Jakarta",
        street: "Jl. Merdeka No. 123",
      },
      ...fetchedUsers,
    ];
  } catch (error) {
    console.error("[Services] Gagal mengambil data:", error.message);
    throw error;
  }
};