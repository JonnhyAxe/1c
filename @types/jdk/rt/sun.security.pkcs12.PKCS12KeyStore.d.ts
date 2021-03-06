declare namespace sun {
    namespace security {
        namespace pkcs12 {
            class PKCS12KeyStore extends java.security.KeyStoreSpi {
                public static readonly VERSION_3: int
                public constructor()
                public engineGetKey(arg0: java.lang.String | string, arg1: char[]): java.security.Key
                public engineGetCertificateChain(arg0: java.lang.String | string): java.security.cert.Certificate[]
                public engineGetCertificate(arg0: java.lang.String | string): java.security.cert.Certificate
                public engineGetCreationDate(arg0: java.lang.String | string): java.util.Date
                public engineSetKeyEntry(arg0: java.lang.String | string, arg1: java.security.Key, arg2: char[], arg3: java.security.cert.Certificate[]): void
                public engineSetKeyEntry(arg0: java.lang.String | string, arg1: byte[], arg2: java.security.cert.Certificate[]): void
                public engineSetCertificateEntry(arg0: java.lang.String | string, arg1: java.security.cert.Certificate): void
                public engineDeleteEntry(arg0: java.lang.String | string): void
                public engineAliases(): java.util.Enumeration<java.lang.String>
                public engineContainsAlias(arg0: java.lang.String | string): boolean
                public engineSize(): int
                public engineIsKeyEntry(arg0: java.lang.String | string): boolean
                public engineIsCertificateEntry(arg0: java.lang.String | string): boolean
                public engineEntryInstanceOf(arg0: java.lang.String | string, arg1: java.lang.Class<java.security.KeyStore$Entry>): boolean
                public engineGetCertificateAlias(arg0: java.security.cert.Certificate): string
                public engineStore(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda, arg1: char[]): void
                public engineGetEntry(arg0: java.lang.String | string, arg1: java.security.KeyStore$ProtectionParameter): java.security.KeyStore$Entry
                public engineSetEntry(arg0: java.lang.String | string, arg1: java.security.KeyStore$Entry | java.security.KeyStore$Entry$$Lambda, arg2: java.security.KeyStore$ProtectionParameter): void
                public engineLoad(arg0: java.io.InputStream | java.io.InputStream$$Lambda, arg1: char[]): void
                public static class: java.lang.Class<any>
            }
        }
    }
}