import { Howl, Howler } from "howler";
import AwsWrapper from "../../aws_wrapper";

export default class soundPlayer {
    private awsWrapper = new AwsWrapper();
    private music: any = {};
    private iAudiosList: any[] = [];
    private audiosList: any[] = [];
    private soundsHandler: Howl[] = [];

    private clearHowler() {
        if (this.soundsHandler.length > 3) {
            this.soundsHandler.forEach(sound => {
                sound.unload();
            });
        }
    }

    private fillAudioList(): Promise<any> {
        return this.awsWrapper.getKeys(this.iAudiosList, 3);
    }

    public stopAll() {
        this.btnStatus = false;
        this.music.stop();
        this.soundsHandler.forEach(sound => {
            sound.stop();
        });
    }

    playSound(sound: any, loop = false, ext?): Howl {
        const audio = new Howl({
            src: [sound],
            volume: 1,
            preload: true,
            html5: true,
            loop: loop,
            format: [ext],
            onplay: () => { },
            onend: () => { }
        });
        return audio;
    }

    playSoundCarousel() {
        this.clearHowler();
        const audio = this.getAudioFromList();
        console.log(audio);
        const soundHandler = this.playSound(audio);
        this.soundsHandler.push(soundHandler);

        soundHandler.on("end", () => {
            this.playRandomAudio();
        });

        soundHandler.on("loaderror", () => {
            setTimeout(() => {
                this.playRandomAudio();
            }, 1000);
        });

        soundHandler.play();
    }

    getAudioFromList() {
        this.audiosList = this.audiosList.length
            ? [...this.audiosList]
            : [...this.iAudiosList];
        return this.audiosList.pop();
    }

}