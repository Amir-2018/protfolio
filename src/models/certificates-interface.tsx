
interface Certificate {
  title: string;
  issuer: string;
  year: string;
  image: string;
}

export interface CertificatesProps {
  certificates: Certificate[];
}