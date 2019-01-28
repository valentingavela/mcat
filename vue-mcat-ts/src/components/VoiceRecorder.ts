import { Subject, Observable } from 'rxjs';
import { take } from 'rxjs/operators';

declare var MediaRecorder: any;
export default class VoiceRecorder {
    mediaRecorder: any
    audio: any;
    audio$: Subject<any> = new Subject();
    generalStatus$: Subject<any> = new Subject();
    audioBlob: any;
    userMedia: any;

    requestUserMedia() {
        this.userMedia = navigator.mediaDevices.getUserMedia({ audio: true })
            // .then(() => {
            //     this.generalStatus$.next({ result: 'mic allowed' });
            // })
            .catch(() => {
                this.generalStatus$.next({ result: 'media rejected' });
            });
        // if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        //     this.generalStatus$.next({ result: 'getUserMedia supported' });
        // } else {
        //     this.generalStatus$.next({ result: 'mediaDenied' });
        // }
    }

    recordVoice(timeout = 0) {
        this.userMedia
            .then(
                (stream: any) => {
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
                        this.audioBlob = new Blob(audioChunks);
                        const audioUrl = URL.createObjectURL(this.audioBlob);
                        this.audio$.next(new Audio(audioUrl));
                        this.audio = this.audioBlob;
                    });
                }
            );
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

    getAudio() {
        return this.audioBlob;
    }
}
