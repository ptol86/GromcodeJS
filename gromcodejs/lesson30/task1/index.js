//add image
 const addImage = imgSrc => {
    const p = new Promise((resolve, reject) => {
        const imgElem = document.createElement('img');
    imgElem.setAttribute("alt", "My Photo");
    imgElem.src = imgSrc;
    const containerElem = document.querySelector(".page");

    containerElem.append(imgElem);

    const onImageLoaded = () => {
        const {width, height} = imgElem;
        console.log(width, height);
        resolve({ width, height });
    }
    imgElem.addEventListener("load", onImageLoaded);
    
    imgElem.addEventListener("error", () => reject(new Error("Image load zalupa")));
    })
    return p;
}



const imgSrc = "https://gromcde.s3.eu-central-1.amazonaws.com/front-end/html-css/lesson22/hw2/example-599px.jpg";

const resultPromise = addImage(imgSrc);


resultPromise.then(data => console.log(data))
.catch(error => console.log(error));





// const onImageLoadedd = (error, data) => {
//     if (error) {
//         console.log(error);
//         return;
//     }
//     const { width, height } = data;
//     const sizeElem = document.querySelector(".image-size");
    
//     sizeElem.textContent = `${width} x ${height}`;
// }

// addImage(imgSrc, onImageLoadedd);