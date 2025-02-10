interface Certificate {
    title: string;
    issuer: string;
    year: string;
  }
  
  export interface CertificatesProps {
    certificates: Certificate[];
  }