import { Injectable } from "@nestjs/common";

@Injectable()
export class CatsService {
    getCat(): string {
        console.log('cats service in');
        const result = process.env.DB_CONNECTION_LIMIT;
        console.log(result, 'dfdfd');
        return result;
    }
}