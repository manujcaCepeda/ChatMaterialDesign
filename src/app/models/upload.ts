export class Upload {
    file: File;
    url: string;
    progress: number;
    name: string;

    constructor(file: File) {
        this.file = file;
    }
}