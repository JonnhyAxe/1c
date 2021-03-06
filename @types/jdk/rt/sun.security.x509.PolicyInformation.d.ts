declare namespace sun {
    namespace security {
        namespace x509 {
            class PolicyInformation {
                public static readonly NAME: string
                public static readonly ID: string
                public static readonly QUALIFIERS: string
                public constructor(arg0: sun.security.x509.CertificatePolicyId, arg1: java.util.Set<java.security.cert.PolicyQualifierInfo>)
                public constructor(arg0: sun.security.util.DerValue)
                public equals(arg0: java.lang.Object): boolean
                public hashCode(): int
                public getPolicyIdentifier(): sun.security.x509.CertificatePolicyId
                public getPolicyQualifiers(): java.util.Set<java.security.cert.PolicyQualifierInfo>
                public get(arg0: java.lang.String | string): java.lang.Object
                public set(arg0: java.lang.String | string, arg1: java.lang.Object): void
                public delete(arg0: java.lang.String | string): void
                public getElements(): java.util.Enumeration<java.lang.String>
                public getName(): string
                public toString(): string
                public encode(arg0: sun.security.util.DerOutputStream): void
                public static class: java.lang.Class<any>
            }
        }
    }
}