import { Injectable } from "@nestjs/common"

@Injectable()
export class PipeService {
    pipetest(id: number) {
        // console.log(id);
        console.log('pipeservice');
        const result = id;

        return result;
    }

    pipetest1() {
        console.log('pipetest1');
        
    }
}

