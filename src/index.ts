import { Observable } from 'rxjs';

var observable1 = Observable.create((observer: any) => {
    observer.next('Observable One is alive!');
    setInterval(() => {
        observer.next('Observable One');
    }, 5000);
});

var observable2 = Observable.create((observer:any) => {
    observer.next('Observable Two is alive!');
    setInterval(() => {
        observer.next('Observable Two');
    }, 2500); 
})

var subscription1 = observable1.subscribe(
    (x:any) => logItem(x, 1)
);

var subscription2 = observable2.subscribe(
    (x:any) => logItem(x, 2)
);

document.getElementById('unsubscribeBtn1').addEventListener('click', () => {
    subscription1.unsubscribe();
});

document.getElementById('unsubscribeBtn2').addEventListener('click', () => {
    subscription2.unsubscribe();
});

document.getElementById('addSubscriptionBtn').addEventListener('click', () => {
    subscription2.add(subscription1);
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