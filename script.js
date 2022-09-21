const url = "https://one.blog.br/wp-json/wp/v2/posts";

const postContainer = document.querySelector("#posts-container");


async function getAllPosts(){

    const response = await fetch(url);
    console.log(response);

    const data = await response.json();

    console.log(data);

    data.map((post) => {

        const div = document.createElement("div");
        const img = document.createElement("img");
        const title = document.createElement("h2");
        const date = document.createElement("p");
        const link = document.createElement("a");

        img.setAttribute("href", post.yoast_head_json.og_image[0].url)
        title.innerText = post.title.rendered;
        date.innerText = post.date;
        link.innerText = "Ler mais";
        link.setAttribute("href", `https://one.blog.br/${post.slug}`);


        div.appendChild(img);
        div.appendChild(title);
        div.appendChild(date);
        div.appendChild(link);

        postContainer.appendChild(div);


    });

}

getAllPosts();