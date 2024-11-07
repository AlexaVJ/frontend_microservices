export interface Problem_structure {
    name : string;
    statement : string;
    example_input : string;
    example_output : string;
    topic : string;    
}

export interface Problem {
    id: number;
    name: string;
    topic: string;
    difficulty: string;
}