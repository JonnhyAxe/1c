declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace fastinfoset {
                    class EncodingConstants {
                        public static readonly XML_NAMESPACE_PREFIX: string
                        public static readonly XML_NAMESPACE_PREFIX_LENGTH: int
                        public static readonly XML_NAMESPACE_NAME: string
                        public static readonly XML_NAMESPACE_NAME_LENGTH: int
                        public static readonly XMLNS_NAMESPACE_PREFIX: string
                        public static readonly XMLNS_NAMESPACE_PREFIX_LENGTH: int
                        public static readonly XMLNS_NAMESPACE_NAME: string
                        public static readonly XMLNS_NAMESPACE_NAME_LENGTH: int
                        public static readonly DEFAULT_NAMESPACE_DECLARATION: com.sun.xml.internal.fastinfoset.QualifiedName
                        public static readonly DOCUMENT_ADDITIONAL_DATA_FLAG: int
                        public static readonly DOCUMENT_INITIAL_VOCABULARY_FLAG: int
                        public static readonly DOCUMENT_NOTATIONS_FLAG: int
                        public static readonly DOCUMENT_UNPARSED_ENTITIES_FLAG: int
                        public static readonly DOCUMENT_CHARACTER_ENCODING_SCHEME: int
                        public static readonly DOCUMENT_STANDALONE_FLAG: int
                        public static readonly DOCUMENT_VERSION_FLAG: int
                        public static readonly INITIAL_VOCABULARY_EXTERNAL_VOCABULARY_FLAG: int
                        public static readonly INITIAL_VOCABULARY_RESTRICTED_ALPHABETS_FLAG: int
                        public static readonly INITIAL_VOCABULARY_ENCODING_ALGORITHMS_FLAG: int
                        public static readonly INITIAL_VOCABULARY_PREFIXES_FLAG: int
                        public static readonly INITIAL_VOCABULARY_NAMESPACE_NAMES_FLAG: int
                        public static readonly INITIAL_VOCABULARY_LOCAL_NAMES_FLAG: int
                        public static readonly INITIAL_VOCABULARY_OTHER_NCNAMES_FLAG: int
                        public static readonly INITIAL_VOCABULARY_OTHER_URIS_FLAG: int
                        public static readonly INITIAL_VOCABULARY_ATTRIBUTE_VALUES_FLAG: int
                        public static readonly INITIAL_VOCABULARY_CONTENT_CHARACTER_CHUNKS_FLAG: int
                        public static readonly INITIAL_VOCABULARY_OTHER_STRINGS_FLAG: int
                        public static readonly INITIAL_VOCABULARY_ELEMENT_NAME_SURROGATES_FLAG: int
                        public static readonly INITIAL_VOCABULARY_ATTRIBUTE_NAME_SURROGATES_FLAG: int
                        public static readonly NAME_SURROGATE_PREFIX_FLAG: int
                        public static readonly NAME_SURROGATE_NAME_FLAG: int
                        public static readonly NOTATIONS: int
                        public static readonly NOTATIONS_MASK: int
                        public static readonly NOTATIONS_SYSTEM_IDENTIFIER_FLAG: int
                        public static readonly NOTATIONS_PUBLIC_IDENTIFIER_FLAG: int
                        public static readonly UNPARSED_ENTITIES: int
                        public static readonly UNPARSED_ENTITIES_MASK: int
                        public static readonly UNPARSED_ENTITIES_PUBLIC_IDENTIFIER_FLAG: int
                        public static readonly PROCESSING_INSTRUCTION: int
                        public static readonly PROCESSING_INSTRUCTION_MASK: int
                        public static readonly COMMENT: int
                        public static readonly COMMENT_MASK: int
                        public static readonly DOCUMENT_TYPE_DECLARATION: int
                        public static readonly DOCUMENT_TYPE_DECLARATION_MASK: int
                        public static readonly DOCUMENT_TYPE_SYSTEM_IDENTIFIER_FLAG: int
                        public static readonly DOCUMENT_TYPE_PUBLIC_IDENTIFIER_FLAG: int
                        public static readonly ELEMENT: int
                        public static readonly ELEMENT_ATTRIBUTE_FLAG: int
                        public static readonly ELEMENT_NAMESPACES_FLAG: int
                        public static readonly ELEMENT_LITERAL_QNAME_FLAG: int
                        public static readonly NAMESPACE_ATTRIBUTE: int
                        public static readonly NAMESPACE_ATTRIBUTE_MASK: int
                        public static readonly NAMESPACE_ATTRIBUTE_PREFIX_NAME_MASK: int
                        public static readonly NAMESPACE_ATTRIBUTE_PREFIX_FLAG: int
                        public static readonly NAMESPACE_ATTRIBUTE_NAME_FLAG: int
                        public static readonly ATTRIBUTE_LITERAL_QNAME_FLAG: int
                        public static readonly LITERAL_QNAME_PREFIX_NAMESPACE_NAME_MASK: int
                        public static readonly LITERAL_QNAME_PREFIX_FLAG: int
                        public static readonly LITERAL_QNAME_NAMESPACE_NAME_FLAG: int
                        public static readonly CHARACTER_CHUNK: int
                        public static readonly CHARACTER_CHUNK_ADD_TO_TABLE_FLAG: int
                        public static readonly CHARACTER_CHUNK_UTF_8_FLAG: int
                        public static readonly CHARACTER_CHUNK_UTF_16_FLAG: int
                        public static readonly CHARACTER_CHUNK_RESTRICTED_ALPHABET_FLAG: int
                        public static readonly CHARACTER_CHUNK_ENCODING_ALGORITHM_FLAG: int
                        public static readonly UNEXPANDED_ENTITY_REFERENCE: int
                        public static readonly UNEXPANDED_ENTITY_REFERENCE_MASK: int
                        public static readonly UNEXPANDED_ENTITY_SYSTEM_IDENTIFIER_FLAG: int
                        public static readonly UNEXPANDED_ENTITY_PUBLIC_IDENTIFIER_FLAG: int
                        public static readonly NISTRING_ADD_TO_TABLE_FLAG: int
                        public static readonly NISTRING_UTF_8_FLAG: int
                        public static readonly NISTRING_UTF_16_FLAG: int
                        public static readonly NISTRING_RESTRICTED_ALPHABET_FLAG: int
                        public static readonly NISTRING_ENCODING_ALGORITHM_FLAG: int
                        public static readonly TERMINATOR: int
                        public static readonly DOUBLE_TERMINATOR: int
                        public static readonly ENCODING_ALGORITHM_BUILTIN_END: int
                        public static readonly ENCODING_ALGORITHM_APPLICATION_START: int
                        public static readonly ENCODING_ALGORITHM_APPLICATION_MAX: int
                        public static readonly RESTRICTED_ALPHABET_BUILTIN_END: int
                        public static readonly RESTRICTED_ALPHABET_APPLICATION_START: int
                        public static readonly RESTRICTED_ALPHABET_APPLICATION_MAX: int
                        public static readonly OCTET_STRING_LENGTH_SMALL_LIMIT: int
                        public static readonly OCTET_STRING_LENGTH_MEDIUM_LIMIT: int
                        public static readonly OCTET_STRING_LENGTH_MEDIUM_FLAG: int
                        public static readonly OCTET_STRING_LENGTH_LARGE_FLAG: int
                        public static readonly OCTET_STRING_MAXIMUM_LENGTH: long
                        public static readonly OCTET_STRING_LENGTH_2ND_BIT_SMALL_LIMIT: int
                        public static readonly OCTET_STRING_LENGTH_2ND_BIT_MEDIUM_LIMIT: int
                        public static readonly OCTET_STRING_LENGTH_2ND_BIT_MEDIUM_FLAG: int
                        public static readonly OCTET_STRING_LENGTH_2ND_BIT_LARGE_FLAG: int
                        public static readonly OCTET_STRING_LENGTH_2ND_BIT_SMALL_MASK: int
                        public static readonly OCTET_STRING_LENGTH_5TH_BIT_SMALL_LIMIT: int
                        public static readonly OCTET_STRING_LENGTH_5TH_BIT_MEDIUM_LIMIT: int
                        public static readonly OCTET_STRING_LENGTH_5TH_BIT_MEDIUM_FLAG: int
                        public static readonly OCTET_STRING_LENGTH_5TH_BIT_LARGE_FLAG: int
                        public static readonly OCTET_STRING_LENGTH_5TH_BIT_SMALL_MASK: int
                        public static readonly OCTET_STRING_LENGTH_7TH_BIT_SMALL_LIMIT: int
                        public static readonly OCTET_STRING_LENGTH_7TH_BIT_MEDIUM_LIMIT: int
                        public static readonly OCTET_STRING_LENGTH_7TH_BIT_MEDIUM_FLAG: int
                        public static readonly OCTET_STRING_LENGTH_7TH_BIT_LARGE_FLAG: int
                        public static readonly OCTET_STRING_LENGTH_7TH_BIT_SMALL_MASK: int
                        public static readonly INTEGER_SMALL_LIMIT: int
                        public static readonly INTEGER_MEDIUM_LIMIT: int
                        public static readonly INTEGER_LARGE_LIMIT: int
                        public static readonly INTEGER_MEDIUM_FLAG: int
                        public static readonly INTEGER_LARGE_FLAG: int
                        public static readonly INTEGER_LARGE_LARGE_FLAG: int
                        public static readonly INTEGER_MAXIMUM_SIZE: int
                        public static readonly INTEGER_2ND_BIT_SMALL_LIMIT: int
                        public static readonly INTEGER_2ND_BIT_MEDIUM_LIMIT: int
                        public static readonly INTEGER_2ND_BIT_LARGE_LIMIT: int
                        public static readonly INTEGER_2ND_BIT_MEDIUM_FLAG: int
                        public static readonly INTEGER_2ND_BIT_LARGE_FLAG: int
                        public static readonly INTEGER_2ND_BIT_SMALL_MASK: int
                        public static readonly INTEGER_2ND_BIT_MEDIUM_MASK: int
                        public static readonly INTEGER_2ND_BIT_LARGE_MASK: int
                        public static readonly INTEGER_3RD_BIT_SMALL_LIMIT: int
                        public static readonly INTEGER_3RD_BIT_MEDIUM_LIMIT: int
                        public static readonly INTEGER_3RD_BIT_LARGE_LIMIT: int
                        public static readonly INTEGER_3RD_BIT_MEDIUM_FLAG: int
                        public static readonly INTEGER_3RD_BIT_LARGE_FLAG: int
                        public static readonly INTEGER_3RD_BIT_LARGE_LARGE_FLAG: int
                        public static readonly INTEGER_3RD_BIT_SMALL_MASK: int
                        public static readonly INTEGER_3RD_BIT_MEDIUM_MASK: int
                        public static readonly INTEGER_3RD_BIT_LARGE_MASK: int
                        public static readonly INTEGER_3RD_BIT_LARGE_LARGE_MASK: int
                        public static readonly INTEGER_4TH_BIT_SMALL_LIMIT: int
                        public static readonly INTEGER_4TH_BIT_MEDIUM_LIMIT: int
                        public static readonly INTEGER_4TH_BIT_LARGE_LIMIT: int
                        public static readonly INTEGER_4TH_BIT_MEDIUM_FLAG: int
                        public static readonly INTEGER_4TH_BIT_LARGE_FLAG: int
                        public static readonly INTEGER_4TH_BIT_LARGE_LARGE_FLAG: int
                        public static readonly INTEGER_4TH_BIT_SMALL_MASK: int
                        public static readonly INTEGER_4TH_BIT_MEDIUM_MASK: int
                        public static readonly INTEGER_4TH_BIT_LARGE_MASK: int
                        public constructor()
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}