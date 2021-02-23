import Link from "next/link";

function Form() {
  const getWeather = async (event) => {
    event.preventDefault();

    let cityName = event.target.city.value;
    let url = "/api/test?city=" + cityName;

    const res = await fetch(url, {
      method: "GET"
    });

    const result = await res.json();
    console.log(result);

    //Or use GET with json
    /*
    const res = await fetch(url, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "GET"
    });

    const result = await res.json();
    console.log(result);*/
  };

  return (
    <form onSubmit={getWeather}>
      <label htmlFor="city">City</label>
      <input id="city" name="city" type="text" required />
      <button type="submit">Search</button>
    </form>
  );
}

export default function IndexPage() {
  return (
    <div>
      Simple Weather
      <Form />
    </div>
  );
}
