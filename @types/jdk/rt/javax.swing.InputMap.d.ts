declare namespace javax {
    namespace swing {
        class InputMap implements java.io.Serializable {
            public constructor()
            public setParent(arg0: javax.swing.InputMap): void
            public getParent(): javax.swing.InputMap
            public put(arg0: javax.swing.KeyStroke, arg1: java.lang.Object): void
            public get(arg0: javax.swing.KeyStroke): java.lang.Object
            public remove(arg0: javax.swing.KeyStroke): void
            public clear(): void
            public keys(): javax.swing.KeyStroke[]
            public size(): int
            public allKeys(): javax.swing.KeyStroke[]
            public static class: java.lang.Class<any>
        }
    }
}