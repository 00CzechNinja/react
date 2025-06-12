import { useState, useEffect } from "react";
import Corenavbar from "../components/navbar";

export default function Facts() {
    const [fact, setFact] = useState("");
    const [image, setImage] = useState("");

    // List of cat images
    const catImages = [
        "https://http.cat/200.jpg",
        "https://http.cat/201.jpg",
        "https://http.cat/202.jpg",
        "https://http.cat/203.jpg",
        "https://http.cat/204.jpg",
        "https://http.cat/206.jpg",
        "https://http.cat/207.jpg",
        "https://http.cat/208.jpg",
        "https://http.cat/404.jpg",
    ];

    // Function to fetch a new fact and image
    const fetchFactAndImage = () => {
        const apiURL = "https://meowfacts.herokuapp.com/";

        fetch(apiURL)
            .then(response => response.json())
            .then(data => {
                setFact(data.data[0]); // Get the first fact

                // Choose a random image
                const randomIndex = Math.floor(Math.random() * catImages.length);
                setImage(catImages[randomIndex]);
            })
            .catch(error => console.error("Error fetching data:", error));
    };

    // Fetch on initial load
    useEffect(() => {
        fetchFactAndImage();
    }, []);

    return (
        <>
            <Corenavbar />
            <div className="facts">
                <h1 className="title-cat">CAT FACTS</h1>
                <p className="fact">{fact}</p>
                <img src={image} alt="Random Cat" style={{ width: "500px", borderRadius: "10px" }} />
                <br />
                <button onClick={fetchFactAndImage} style={{ marginTop: "20px", padding: "10px 20px", fontSize: "16px" }}>
                    Show Another Fact 🐱
                </button>
            </div>
        </>
    );
}
