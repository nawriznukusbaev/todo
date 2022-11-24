import {makeObservable, makeAutoObservable, flow} from "mobx";

class checkList{
    lists=['none','none'];

    constructor() {
        makeAutoObservable(this);
    }
    check(input){if(this.lists[parseInt(input)]==='none'){

        this.lists[parseInt(input)]='line-through';
    }
    else this.lists[parseInt(input)]='none';
        console.log(this.lists);
    }

}
export default new checkList;