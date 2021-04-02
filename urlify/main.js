


/* .toLowerCase()
regex to remove punctuation
remove spaces with -
*/


let blogPostTitle = "Blossom's Blog Post Title!";

const urlify = (title) => {
    let replaceSpaces = blogPostTitle.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, "");
    
    return replaceSpaces.replaceAll(" ", "-").toLowerCase().trim();
}

console.log(urlify(blogPostTitle))





