declare namespace sun {
    namespace security {
        namespace provider {
            class DSAParameterGenerator extends java.security.AlgorithmParameterGeneratorSpi {
                public constructor()
                protected engineInit(arg0: int, arg1: java.security.SecureRandom): void
                protected engineInit(arg0: java.security.spec.AlgorithmParameterSpec, arg1: java.security.SecureRandom): void
                protected engineGenerateParameters(): java.security.AlgorithmParameters
                public static class: java.lang.Class<any>
            }
        }
    }
}