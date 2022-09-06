import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    console.log('app service appservice in');
    return 'Hello World!';
  }
}
