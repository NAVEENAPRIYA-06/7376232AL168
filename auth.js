
const auth = async () => {
  try {
    const response = await fetch(
      "http://4.224.186.213/evaluation-service/auth",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: "naveenapriya.al23@bitsathy.ac.in",
          name: "Naveenapriya",
          rollNo: "7376232AL168",
          accessCode: "uKaJfm",
          clientID: "6bfaceac-bf76-4a5e-98ca-99381ebb017e",
          clientSecret: "XwKJDFVRgWsbFAGs",
        }),
      }
    );

    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

auth();