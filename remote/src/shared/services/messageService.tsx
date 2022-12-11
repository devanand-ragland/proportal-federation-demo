import { BehaviorSubject } from "rxjs";

const videoServiceSub = new BehaviorSubject("");
const errorSubject = new BehaviorSubject("");
export { videoServiceSub, errorSubject };
