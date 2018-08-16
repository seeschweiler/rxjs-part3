import { Observable } from 'rxjs';
import { share } from 'rxjs/operators';

var observable1 = Observable.create((observer: any) => {
    observer.next('Observable One is alive: ' + Date.now());
}).pipe(share());

document.getElementById('subscribeBtn1').addEventListener('click', () => {
    var subscription1 = observable1.subscribe(
        (x:any) => logItem(x, 1)
    ); 
});

document.getElementById('subscribeBtn2').addEventListener('click', () => {
    var subscription2 = observable1.subscribe(
        (x:any) => logItem(x, 2)
    );
});

function logItem(val:any, column:any) {
    var node = document.createElement('li');
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    if (column == 2) {
        document.getElementById("list2").appendChild(node);  
    } else if (column == 1) {
        document.getElementById("list1").appendChild(node);
    }
}