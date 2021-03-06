declare namespace org {
    namespace xml {
        namespace sax {
            interface Locator {
                getPublicId(): string
                getSystemId(): string
                getLineNumber(): int
                getColumnNumber(): int
            }
        }
    }
}