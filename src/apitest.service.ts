import { Injectable } from "@nestjs/common";
import { HttpService } from "@nestjs/axios";
import { lastValueFrom } from "rxjs";

@Injectable()
export class ApitestService {
    constructor(private readonly httpService: HttpService) {}

    async apitest1(): Promise<string> {
        console.log('apitest in ');
        const result = await this.httpService.get(
            'http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20120101',
            // {
            //     // headers: {
            //     //     'Content-Type': 'application/json',
            //     //   }
            // },
        )

        let sol = await lastValueFrom(result);
        // .toPromise();
        // .pipe(map((res) => res));
        // console.log(res.data, 'result111');
        return sol.data;
    }
}