import { ExecutionContext, Injectable } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
//   getRequest(context: ExecutionContext) {
// //     const ctx = GqlExecutionContext.create(context);
//     return super.canActivate(context);
//   }
}
