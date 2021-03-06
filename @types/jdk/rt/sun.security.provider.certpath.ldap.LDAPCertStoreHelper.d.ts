declare namespace sun {
    namespace security {
        namespace provider {
            namespace certpath {
                namespace ldap {
                    class LDAPCertStoreHelper extends sun.security.provider.certpath.CertStoreHelper {
                        public constructor()
                        public getCertStore(arg0: java.net.URI): java.security.cert.CertStore
                        public wrap(arg0: java.security.cert.X509CertSelector, arg1: javax.security.auth.x500.X500Principal, arg2: java.lang.String | string): java.security.cert.X509CertSelector
                        public wrap(arg0: java.security.cert.X509CRLSelector, arg1: java.util.Collection<javax.security.auth.x500.X500Principal>, arg2: java.lang.String | string): java.security.cert.X509CRLSelector
                        public isCausedByNetworkIssue(arg0: java.security.cert.CertStoreException): boolean
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}