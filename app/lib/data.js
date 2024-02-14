const apiURL = process.env.Api_URL; 

export const getGuitars = async () => {
    const res = await fetch(`${apiURL}/guitarras?populate=imagen`);
    
    if(!res.ok) {
        throw new Error('There was an error retrieving the guitars!');
    }

    const { data: guitars } = await res.json();

    return guitars;
}

export const getGuitar = async url => {
    const res = await fetch(`${apiURL}/guitarras?filters[url]=${url}&populate=imagen`);
    
    if(!res.ok) {
        throw new Error('There was an error retrieving the guitar!');
    }

    const { data: guitar } = await res.json();

    return guitar;
}

export const getNameGuitar = async url => {
    const res = await fetch(`${apiURL}/guitarras?filters[url]=${url}`);
    
    if(!res.ok) {
        throw new Error('There was an error retrieving on guitar name!');
    }

    const { data } = await res.json();
    const [ { attributes: { nombre } } ] = data;
    
    return nombre;
}

export const getPosts = async () => {
    const res = await fetch(`${apiURL}/posts?populate=imagen`);
    
    if(!res.ok) {
        throw new Error('There was an error retrieving the posts!')
    }

    const { data: posts } = await res.json();

    return posts;
}

export const getPost = async url => {
    const res = await fetch(`${apiURL}/posts?filters[url]=${url}&populate=imagen`);

    if(!res.ok) {
        throw new Error('There was an error retrieving the post!');
    }

    const { data: post } = await res.json();

    return post;
}

export const getTitlePost = async url => {
    const res = await fetch(`${apiURL}/posts?filters[url]=${url}`);
    
    if(!res.ok) {
        throw new Error('There was an error retrieving on post title!');
    }

    const { data } = await res.json();
    const [ { attributes: { titulo } } ] = data;
    
    return titulo;
}

export const getCourse = async () => {
    const res = await fetch(`${apiURL}/curso?populate=imagen`);

    if(!res.ok) {
        throw new Error('There was an error retrieving the course!');
    }

    const { data: course } = await res.json();

    return course;
}