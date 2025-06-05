import image from "../assets/image.jpg"
import Button from "../components/button"
import Corenavbar from "../components/navbar"
export default function Home(){
    return(
    <>
    <Corenavbar></Corenavbar>
    <div class="home">
        <h1 class="h1-react">Michael Tusk</h1>
        <img className src= {image}></img>
        <Button name="meow"></Button>
    </div>
    </>
    )
}