# Identity Federation & Trust Diagrams

## 11. Industrial Federation Lifecycle (Detailed)
*The end-to-end orchestration of cross-cloud identity trust.*

```mermaid
graph TD
    subgraph "Phase 1: Identity Discovery"
        D1[External IdP Scan]
        D2[Metadata Extraction]
        D3[Trust Evaluation]
    end
    subgraph "Phase 2: Trust Establishment"
        T1[OIDC/SAML Exchange]
        T2[Public Key Sync]
        T3[Boundary Policy Mapping]
    end
    subgraph "Phase 3: Token Orchestration"
        O1[Exchange Request]
        O2[Policy Evaluation]
        O3[Target STS Call]
    end
    subgraph "Phase 4: Secure Propagation"
        P1[Workload Injection]
        P2[Identity Propagation]
        P3[Session Monitoring]
    end
    subgraph "Phase 5: Governance & Audit"
        G1[Audit Log Generation]
        G2[Compliance Validation]
        G3[Trust Revocation]
    end

    D1 --> D2 --> D3 --> T1 --> T2 --> T3 --> O1 --> O2 --> O3 --> P1 --> P2 --> P3 --> G1 --> G2 --> G3
```

## 15. Cross-cloud identity mapping flow
```mermaid
graph LR
    I[Ident] --> M[Mapp]
    M --> C[Cros]
```

## 20. Token exchange state machine
```mermaid
graph TD
    Request[Token Request] --> Val[Validation]
    Val -->|Valid| Policy[Policy Check]
    Val -->|Invalid| Reject[Rejection]
    Policy -->|Allow| Issue[Token Issuance]
    Policy -->|Deny| Reject
```

## 25. Workload identity trust logic
```mermaid
graph LR
    W[Workload] --> T[Trust]
    T --> L[Logic]
```
