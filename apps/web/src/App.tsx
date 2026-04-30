import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import FederationDashboard from './pages/FederationDashboard';

const Placeholder = ({ name }: { name: string }) => (
  <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl">
    <h2 className="text-xl font-bold text-white mb-2">{name}</h2>
    <p className="text-slate-400">The Multi-Cloud Federation Platform is currently orchestrating institutional identity trust boundaries and optimizing cross-cloud session exchanges. Automated token validation and Zero Trust policy synchronization will be fully operational once the global identity mapping engine is finalized.</p>
  </div>
);

function App() {
  return (
    <Router>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<FederationDashboard />} />
          <Route path="/idps" element={<Placeholder name="Global Identity Providers" />} />
          <Route path="/workloads" element={<Placeholder name="Federated Workload Identity" />} />
          <Route path="/access" element={<Placeholder name="Federated Access Management" />} />
          <Route path="/policies" element={<Placeholder name="Global Policy Engine (RBAC/ABAC)" />} />
          <Route path="/tokens" element={<Placeholder name="Cross-Cloud Token Exchange" />} />
          <Route path="/network" element={<Placeholder name="Networking Federation & Trust" />} />
          <Route path="/conditional" element={<Placeholder name="Conditional Access Policies" />} />
          <Route path="/audit" element={<Placeholder name="Audit, Compliance & Traceability" />} />
          <Route path="/tenants" element={<Placeholder name="Multi-Tenant Federation Model" />} />
          <Route path="/settings" element={<Placeholder name="Platform & Federation Settings" />} />
        </Routes>
      </DashboardLayout>
    </Router>
  );
}

export default App;
