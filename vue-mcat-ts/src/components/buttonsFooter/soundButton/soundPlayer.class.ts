import { Howl, Howler } from "howler";
import AwsWrapper from "../../aws_wrapper";

export default class SoundPlayer {
    private awsWrapper = new AwsWrapper();
    private iAudiosList: Howl[] = [];
    private audiosList: Howl[] = [];
    private soundsHandler: Howl[] = [];
    private carouselTimeout: number = -1;

    constructor() {
        this.getAudioList().then((response) => {
            response.Contents.forEach((obj: any) => {
                const soundUrl = `https://s3.amazonaws.com/audios-bucket123/${obj.Key}`; 
                this.iAudiosList.push(
                    new Howl({
                        src: [soundUrl],
                        volume: 1,
                        preload: false,
                        html5: true
                    })
                );
            })
        })
    }
    
    public playSound(soundUrl: string) {
        const audio = new Howl({
            src: [soundUrl],
            volume: 1,
            preload: false,
            html5: true,
            loop: true
        });

        return audio;
    }

    public playSoundCarousel() {
        const x = setInterval(() => {
            this.carousel();
        }, 3000);
        this.carouselTimeout = x;
    }

    public stopAll() {
        clearInterval(this.carouselTimeout);
        this.soundsHandler.forEach(sound => {
            sound.stop();
        });
    }

    public addAudio(soundUrl: string) {
        this.iAudiosList.unshift(
            new Howl({
                src: [soundUrl],
                volume: 1,
                preload: false,
                html5: true
            })
        );
        this.audiosList = [...this.iAudiosList];
    }

    private getAudioFromList(): Howl | any {
        this.audiosList = this.audiosList.length
            ? [...this.audiosList]
            : [...this.iAudiosList];
        return this.audiosList.shift();
    }

    private carousel() {
        this.clearHowler();
        const audio = this.getAudioFromList() as Howl;
        this.soundsHandler.push(audio);
        audio.play();
    }

    private getAudioList(){
        return this.awsWrapper.getKeys(20);
    }
    
    private clearHowler() {
        if (this.soundsHandler.length > 4) {
            this.soundsHandler.forEach(sound => {
                sound.unload();
            });
        }
    }


    // playSound(sound: Howl | any, loop = false, ext = 'wav'): Howl {
    //     const audio = new Howl({
    //         src: [sound],
    //         volume: 1,
    //         preload: true,
    //         html5: true,
    //         loop: loop,
    //         format: [ext]
    //     });
    //     this.soundsHandler.push(audio);
    //     audio.play();
    //     return audio;
    // }

    // playSoundCarousel() {
    //     this.clearHowler();
    //     const audio = this.getAudioFromList();
    //     console.log(audio);
    //     const soundHandler = this.playSound(audio);
    //     this.soundsHandler.push(soundHandler);

    //     soundHandler.on("end", () => {
    //         this.playRandomAudio();
    //     });

    //     soundHandler.on("loaderror", () => {
    //         setTimeout(() => {
    //             this.playRandomAudio();
    //         }, 1000);
    //     });

    //     soundHandler.play();
    // }



}