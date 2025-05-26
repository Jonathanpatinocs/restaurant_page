import coffee_pic from "./assets/coffee-pic.jpg"
function displayHomePage() {
    const content = document.getElementById('content');
    const home_content = document.createElement('div');
    home_content.id = "home-content";

    const heading = document.createElement('h1');
    heading.textContent = "The Best Coffee in Atlanta!";

    const cimg = document.createElement('img');
    cimg.src = coffee_pic;
    cimg.id = "coffee-img";

    const footer = document.createElement('h2');
    footer.textContent = "Please Visit us at 123 Adress st. Atlanta, GA"

    home_content.append(heading, cimg, footer)
    content.append(home_content)
}


export default displayHomePage;
