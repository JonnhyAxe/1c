declare namespace sun {
    namespace security {
        namespace x509 {
            class DistributionPoint {
                public static readonly KEY_COMPROMISE: int
                public static readonly CA_COMPROMISE: int
                public static readonly AFFILIATION_CHANGED: int
                public static readonly SUPERSEDED: int
                public static readonly CESSATION_OF_OPERATION: int
                public static readonly CERTIFICATE_HOLD: int
                public static readonly PRIVILEGE_WITHDRAWN: int
                public static readonly AA_COMPROMISE: int
                public constructor(arg0: sun.security.x509.GeneralNames, arg1: boolean[], arg2: sun.security.x509.GeneralNames)
                public constructor(arg0: sun.security.x509.RDN, arg1: boolean[], arg2: sun.security.x509.GeneralNames)
                public constructor(arg0: sun.security.util.DerValue)
                public getFullName(): sun.security.x509.GeneralNames
                public getRelativeName(): sun.security.x509.RDN
                public getReasonFlags(): boolean[]
                public getCRLIssuer(): sun.security.x509.GeneralNames
                public encode(arg0: sun.security.util.DerOutputStream): void
                public equals(arg0: java.lang.Object): boolean
                public hashCode(): int
                public toString(): string
                public static class: java.lang.Class<any>
            }
        }
    }
}