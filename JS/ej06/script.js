const images = [];

async function addImage() {
    images.length = 0;
    await getFiles();

    let numImages = numberOfDisplayedImages();
    if (numImages < 5) {
        const img = document.createElement('img');
        img.src = images[numImages];
        document.getElementById('images').appendChild(img);
    }
    
}
const getFiles = async ()=>{
    const response = await fetch('assets/images.json').then(res =>{
        return res.json();
    }
    ).then(data => {
        let fileList = data.images;
        fileList.filter(file => file.endsWith('.jpg') || file.endsWith('.jpeg') || file.endsWith('.png'))
                                .forEach(image => images.push('assets/'+ image));
        console.log(images.length);

    }).catch(err => console.log(err));

}





function numberOfDisplayedImages() {
    return document.querySelectorAll("img").length;
}
/*
const images = [];

async function addImage() {
    getFiles()
    .then(imageList => {
        let numImages = numberOfDisplayedImages();
        if (numImages < 5) {
            const img = document.createElement('img');
            img.src = imageList[numImages];
            document.getElementById('images').appendChild(img);
        }
    });
 
}

const getFiles = async ()=>{
    const response = await fetch('assets/images.json').then(res =>{
        return res.json();
    }
    ).then(data => {
        let fileList = data.images;
        fileList.filter(file => file.endsWith('.jpg') || file.endsWith('.jpeg') || file.endsWith('.png'))
                                .forEach(image => images.push('assets/'+ image));
        console.log(images.length);

    }).catch(err => console.log(err));

}

function getFiles(){
    const response = fetch('assets/images.json').then(res =>{
        return res.json();
    }
    ).then(data => {
        let fileList = data.images;
        
        return fileList.filter(file => file.endsWith('.jpg') || file.endsWith('.jpeg') || file.endsWith('.png'))
                                .map(image => 'assets/'+ image);
    

    }).catch(err => console.log(err));

    console.log(response);
    return response;
}





function numberOfDisplayedImages() {
    return document.querySelectorAll("img").length;
}

*/