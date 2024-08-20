interface IWork {
    title: string;
    type: string;
    description: string;
    url: string;
    web: string;
    technologies: string[];
    language: string;
    _id?: string;    
    github?: string;
}

export default IWork