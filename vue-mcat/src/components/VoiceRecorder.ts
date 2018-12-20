import { Subject, Observable, of, fromEvent } from 'rxjs';
import { take } from 'rxjs/operators';

declare var MediaRecorder: any;
export default class VoiceRecorder {
    mediaRecorder: any
    audio: any;
    audio$: Subject<any> = new Subject();

    recordVoice(timeout = 0) {
        navigator.mediaDevices.getUserMedia({ audio: true })
            .then(stream => {
                this.mediaRecorder = new MediaRecorder(stream);
                this.mediaRecorder.start();

                const audioChunks: any[] = [];
                this.mediaRecorder.addEventListener("dataavailable", (event:any) => {
                    audioChunks.push(event.data);
                });

                if (timeout) {
                    setTimeout(() => {
                        this.stopRecording();
                    }, timeout);
                }

                this.mediaRecorder.addEventListener("stop", () => {
                    const audioBlob = new Blob(audioChunks);
                    const audioUrl = URL.createObjectURL(audioBlob);
                    this.audio$.next(new Audio(audioUrl));
                });
            });
    }

    stopRecording() {
        this.mediaRecorder.stop();
    }

    playRecording(): Observable<any> {
        let x: Subject<any> = new Subject;
        this.audio$.pipe(take(1))
        .subscribe(audio => {
            x.next('play');
            audio.play();
            audio.addEventListener("ended", (e: any) => x.next('finish'));
        });
        return x;
    }
}
