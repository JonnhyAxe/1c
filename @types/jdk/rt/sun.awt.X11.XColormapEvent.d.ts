declare namespace sun {
    namespace awt {
        namespace X11 {
            class XColormapEvent extends sun.awt.X11.XWrapperBase {
                public static getSize(): int
                public getDataSize(): int
                public getPData(): long
                public constructor(arg0: long)
                public constructor()
                public dispose(): void
                public get_type(): int
                public set_type(arg0: int): void
                public get_serial(): long
                public set_serial(arg0: long): void
                public get_send_event(): boolean
                public set_send_event(arg0: boolean): void
                public get_display(): long
                public set_display(arg0: long): void
                public get_window(): long
                public set_window(arg0: long): void
                public get_colormap(): long
                public set_colormap(arg0: long): void
                public get_new(): boolean
                public set_new(arg0: boolean): void
                public get_state(): int
                public set_state(arg0: int): void
                public clone(): sun.awt.X11.XEvent
                public zero(): void
                public toString(): string
                public static class: java.lang.Class<any>
            }
        }
    }
}