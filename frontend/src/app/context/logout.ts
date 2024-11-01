// utils/auth.js
export const logout = async () => {
    try {
      const response = await fetch("http://localhost:8081/api/auth/logout", {
        method: "POST",
        credentials: "include", 
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (!response.ok) {
        throw new Error("Error en el logout");
      }
  
      const data = await response.json();
      console.log(data.message); // "Logout successful"
      
    } catch (error) {
      console.error("Error al realizar logout:", error);
    }
  };
  