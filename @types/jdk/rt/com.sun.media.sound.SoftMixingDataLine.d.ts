declare namespace com {
    namespace sun {
        namespace media {
            namespace sound {
                abstract class SoftMixingDataLine implements javax.sound.sampled.DataLine {
                    public static readonly CHORUS_SEND: javax.sound.sampled.FloatControl$Type
                    protected abstract processControlLogic(): void
                    protected abstract processAudioLogic(arg0: com.sun.media.sound.SoftAudioBuffer[]): void
                    public addLineListener(arg0: javax.sound.sampled.LineListener): void
                    public removeLineListener(arg0: javax.sound.sampled.LineListener): void
                    public getLineInfo(): javax.sound.sampled.Line$Info
                    public getControl(arg0: javax.sound.sampled.Control$Type): javax.sound.sampled.Control
                    public getControls(): javax.sound.sampled.Control[]
                    public isControlSupported(arg0: javax.sound.sampled.Control$Type): boolean
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}