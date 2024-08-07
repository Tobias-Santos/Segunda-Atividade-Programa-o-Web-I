type TechnologiesType = {
    id: string
    title: string
    studied: boolean
    deadline: Date
    created_at: Date
}

type UsersType = {
    id: string
    name: string
    username: string
    technologies: TechnologiesType[]
}

type BodyType = {
    name: string;
    username: string;
};

type BodyTechType = {
    title: string;
    deadline: Date;
}


namespace Express{
    export interface Request{
        userIndex:string
    }
}