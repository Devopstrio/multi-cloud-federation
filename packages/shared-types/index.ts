export enum FederationProvider {
  AWS = "AWS",
  AZURE = "AZURE",
  GCP = "GCP",
  ONPREM = "ONPREM",
  KUBERNETES = "KUBERNETES"
}

export enum IdentityType {
  USER = "USER",
  SERVICE_ACCOUNT = "SERVICE_ACCOUNT",
  WORKLOAD = "WORKLOAD",
  API_KEY = "API_KEY"
}

export interface FederatedIdentity {
  id: string;
  externalId: string;
  provider: FederationProvider;
  type: IdentityType;
  email?: string;
  attributes: Record<string, any>;
  trustLevel: number; // 1-10
}

export interface TokenExchangeRequest {
  subjectToken: string;
  subjectTokenType: string;
  targetProvider: FederationProvider;
  requestedAudience: string;
  scope: string[];
}

export interface AccessPolicy {
  id: string;
  name: string;
  effect: "ALLOW" | "DENY";
  principals: string[]; // List of identity IDs
  providers: FederationProvider[];
  actions: string[];
  resources: string[];
  conditions?: Record<string, any>;
}

export interface FederationKPIs {
  totalIdentities: number;
  activeSessions: number;
  tokenExchangeRate: number; // per minute
  authSuccessRate: number;
  crossCloudAccessCount: number;
}
