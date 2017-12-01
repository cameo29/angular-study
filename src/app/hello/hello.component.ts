import { selector } from 'rxjs/operator/publish';
import { Component } from '@angular/core';

/*함수로서 런타임에 호출되며 데코레이팅된 클래스(데코레이터 바로 아래에 선언된 클래스)의 constructor(생성자)를 변경할 수 있다. */
@Component({
    selector: 'app-hello',
    templateUrl: './hello.component.html',
    styleUrls: ['./hello.component.css']
})
/* TypeScript는 ECMAScript6 Module을 지원하며 export 키워드가 선언된 파일을 모듈로 간주한다. */
export class HelloComponent {
    name: string;

    setName(name: string){
        this.name = name;
    }
}