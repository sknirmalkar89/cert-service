export interface CertReq {
    data: Array<Data>
    issuer: Issuer
    signatoryList?: Array<SignatoryList>
    htmlTemplate: String
    courseName: String
    name: String
    description: String
}

export interface Data {
    recipientName?: String,
    recipientEmail?: String,
    recipientPhone?: String
}
export interface SignatoryList {
    name: String,
    id: String,
    designation: String,
    image: String
}
export interface Issuer {
    name: String,
    url: String
}

export interface Store {
    type: String,
    account: String,
    key: String,
    path?: String,
    containerName: String
}

export interface Templates {
    id: String,
    name: String
}
