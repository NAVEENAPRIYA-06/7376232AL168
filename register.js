const register = async () => {
  try {
    const response = await fetch(
      "http://4.224.186.213/evaluation-service/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: "naveenapriya.al23@bitsathy.ac.in",
          name: "Naveenapriya",
          mobileNo: "9999988888",
          githubUsername: "NAVEENAPRIYA-06",
          rollNo: "7376232AL168",
          accessCode: "uKaJfm",
        }),
      }
    );

    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

register();