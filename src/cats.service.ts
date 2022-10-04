import { Injectable } from "@nestjs/common";

@Injectable()
export class CatsService {
    getCat(): string {
        console.log('cats service in');

        return 'service';
    }
}