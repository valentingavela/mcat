import { Subject, Observable, of, fromEvent } from 'rxjs';
import { take } from 'rxjs/operators';

declare var MediaRecorder: any;
export default class VoiceRecorder {
    mediaRecorder: any
    audio: any;
    audio$: Subject<any> = new Subject();
    generalStatus$: Subject<any> = new Subject();

    checkUserMedia() {
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            this.generalStatus$.next({ result: 'getUserMedia supported' });
        }
    }

    recordVoice(timeout = 0) {
        navigator.mediaDevices.getUserMedia({ audio: true })
            .then(
                stream => {
                    this.mediaRecorder = new MediaRecorder(stream);
                    this.mediaRecorder.start();

                    const audioChunks: any[] = [];
                    this.mediaRecorder.addEventListener("dataavailable", (event: any) => {
                        audioChunks.push(event.data);
                    });

                    this.generalStatus$.next({ result: 'recording' });

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
                }
            ).catch(() => {
                this.generalStatus$.next({ result: 'media rejected' });
            });
    }

    stopRecording() {
        this.mediaRecorder.stop();
    }

    playRecording() {
        this.audio$.pipe(take(1))
            .subscribe(audio => {
                this.generalStatus$.next({ result: 'playing' });
                audio.play();
                audio.addEventListener("ended", (e: any) => {
                    this.generalStatus$.next({ result: 'finish' });
                });
            });
    }

    getGeneralStatus(): Observable<any> {
        return this.generalStatus$;
    }
}
