async function getCurencies(date) {
    try {
      "use server";
      const res = await fetch("https://api.frankfurter.app/" + date);
  
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
  
      return res.json();
    } catch (error) {
      console.log(error);
  
      throw new Error("Failed to fetch data");
    }
  }

  export default getCurencies