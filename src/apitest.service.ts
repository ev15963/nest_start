import { Injectable } from "@nestjs/common";

@Injectable()
export class ApitestService {
    apitest1(): string {
        console.log('apitest in ');

        return 'api';
    }
}