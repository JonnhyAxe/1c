declare namespace sun {
    namespace security {
        namespace x509 {
            class KeyUsageExtension extends sun.security.x509.Extension implements sun.security.x509.CertAttrSet<java.lang.String> {
                public static readonly IDENT: string
                public static readonly NAME: string
                public static readonly DIGITAL_SIGNATURE: string
                public static readonly NON_REPUDIATION: string
                public static readonly KEY_ENCIPHERMENT: string
                public static readonly DATA_ENCIPHERMENT: string
                public static readonly KEY_AGREEMENT: string
                public static readonly KEY_CERTSIGN: string
                public static readonly CRL_SIGN: string
                public static readonly ENCIPHER_ONLY: string
                public static readonly DECIPHER_ONLY: string
                public constructor(arg0: byte[])
                public constructor(arg0: boolean[])
                public constructor(arg0: sun.security.util.BitArray)
                public constructor(arg0: java.lang.Boolean | boolean, arg1: java.lang.Object)
                public constructor()
                public set(arg0: java.lang.String | string, arg1: java.lang.Object): void
                public get(arg0: java.lang.String | string): boolean
                public delete(arg0: java.lang.String | string): void
                public toString(): string
                public encode(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda): void
                public getElements(): java.util.Enumeration<java.lang.String>
                public getBits(): boolean[]
                public getName(): string
                public get(arg0: java.lang.String | string): java.lang.Object
                public static class: java.lang.Class<any>
            }
        }
    }
}