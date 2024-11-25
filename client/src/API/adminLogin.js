const adminLogin = async (email, password) => {
  try {
    const response = await fetch("http://localhost:4321/auth/admin/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({email, password}),
    });
    
    if (!response.ok) {
        const err=await response.text();
        throw new Error(`${err}`);
    }
    const data=await response.json();
    return data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export default adminLogin;