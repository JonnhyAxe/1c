declare namespace sun {
    namespace security {
        namespace x509 {
            class OIDName implements sun.security.x509.GeneralNameInterface {
                public constructor(arg0: sun.security.util.DerValue)
                public constructor(arg0: sun.security.util.ObjectIdentifier)
                public constructor(arg0: java.lang.String | string)
                public getType(): int
                public encode(arg0: sun.security.util.DerOutputStream): void
                public toString(): string
                public getOID(): sun.security.util.ObjectIdentifier
                public equals(arg0: java.lang.Object): boolean
                public hashCode(): int
                public constrains(arg0: sun.security.x509.GeneralNameInterface): int
                public subtreeDepth(): int
                public static class: java.lang.Class<any>
            }
        }
    }
}