import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from "@nestjs/common"
// import { plainToClass } from "class-transformer";
// import { validate } from "class-validator";
import { CreateUserDto } from "src/dto/apitest/request/create-user.dto";

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

    create(createUserDto: CreateUserDto) {
        console.log(createUserDto, 'createUserDto');

        return createUserDto;
    }
}


// @Injectable()
// export class ValidationPipe implements PipeTransform<any> {
//     async transform(value: any, {metatype}: ArgumentMetadata) {
//         if (!metatype || !this.toValidate(metatype)) {
//             return value;
//         }
//         const object = plainToClass(metatype, value);
//         const errors = await validate(object);
//         if(errors.length > 0) {
//             throw new BadRequestException('validation failed');
//         }
//         return value;
//     }

//     private toValidate(metatype: Function): boolean {
//         const types: Function[] = [String, Boolean, Number, Array, Object];
//         return !types.includes(metatype);
//     }
// }