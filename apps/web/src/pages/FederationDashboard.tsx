import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  AreaChart, Area, Cell, PieChart, Pie, LineChart, Line
} from 'recharts';
import { 
  Globe, 
  Activity, 
  Clock,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  Zap,
  ArrowUpRight,
  ArrowDownRight,
  Fingerprint,
  Layers,
  ShieldCheck,
  Key,
  Lock,
  Cloud
} from 'lucide-react';

const tokenExchangeData = [
  { time: '00:00', exchange: 120, latency: 45 },
  { time: '04:00', exchange: 85, latency: 42 },
  { time: '08:00', exchange: 450, latency: 58 },
  { time: '12:00', exchange: 820, latency: 65 },
  { time: '16:00', exchange: 640, latency: 52 },
  { time: '20:00', exchange: 320, latency: 48 },
];

const providerBreakdown = [
  { name: 'AWS (IAM Roles)', value: 45, color: '#06b6d4' },
  { name: 'Azure (Entra ID)', value: 30, color: '#0891b2' },
  { name: 'GCP (Workload ID)', value: 15, color: '#22d3ee' },
  { name: 'On-Prem / K8s', value: 10, color: '#67e8f9' },
];

const KPI_CARDS = [
  { title: 'Federated Identities', value: '42.5k', trend: 'Global Reach', color: 'cyan', icon: Fingerprint },
  { title: 'Active Sessions', value: '8.2k', trend: 'Cross-Cloud', color: 'cyan', icon: Globe },
  { title: 'Exchange Rate', value: '450/min', trend: 'High Throughput', color: 'cyan', icon: Key },
  { title: 'Trust Health', value: '100%', trend: 'No Violations', color: 'cyan', icon: ShieldCheck },
];

const FederationDashboard = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Multi-Cloud Federation Command Center</h1>
          <p className="text-slate-400">Institutional identity federation, cross-cloud token exchange, and Zero Trust access orchestration.</p>
        </div>
        <div className="flex gap-2">
          <button className="bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all">
            Issue Exchange Token
          </button>
          <button className="bg-cyan-600 hover:bg-cyan-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all">
            Manage Trust Policy
          </button>
        </div>
      </div>

      {/* KPI Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {KPI_CARDS.map((card) => (
          <div key={card.title} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl relative group hover:border-slate-700 transition-all">
            <div className="flex justify-between items-start">
              <div className={`p-2 bg-cyan-600/10 rounded-lg`}>
                <card.icon className={`w-6 h-6 text-cyan-400`} />
              </div>
              <div className="text-xs font-medium text-emerald-400">
                {card.trend}
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm text-slate-500 font-medium">{card.title}</p>
              <p className="text-3xl font-bold text-white mt-1">{card.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Token Exchange Trends */}
        <div className="lg:col-span-2 bg-slate-900 border border-slate-800 p-6 rounded-2xl">
          <h3 className="text-lg font-bold text-white mb-6">Token Exchange Throughput & Latency (ms)</h3>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={tokenExchangeData}>
                <defs>
                  <linearGradient id="colorExchange" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#06b6d4" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                <XAxis dataKey="time" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px' }}
                />
                <Area type="monotone" dataKey="exchange" stroke="#06b6d4" strokeWidth={3} fillOpacity={1} fill="url(#colorExchange)" name="Tokens Issued" />
                <Area type="monotone" dataKey="latency" stroke="#22d3ee" strokeWidth={2} fill="transparent" name="Exchange Latency (ms)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Provider Breakdown */}
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
          <h3 className="text-lg font-bold text-white mb-6">Federation Provider Distribution</h3>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={providerBreakdown}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {providerBreakdown.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 space-y-2">
            {providerBreakdown.map((item) => (
              <div key={item.name} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }}></div>
                  <span className="text-sm text-slate-400">{item.name}</span>
                </div>
                <span className="text-sm font-bold text-white">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Federated Access Table */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
        <div className="p-6 border-b border-slate-800 flex items-center justify-between">
          <h3 className="text-lg font-bold text-white">Active Federated Workload Sessions</h3>
          <button className="text-cyan-400 hover:text-cyan-300 text-sm font-medium">View Global Audit</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-800/50 text-slate-400 text-xs uppercase tracking-wider">
              <tr>
                <th className="px-6 py-4 font-semibold">Subject Identity</th>
                <th className="px-6 py-4 font-semibold">Source</th>
                <th className="px-6 py-4 font-semibold">Target</th>
                <th className="px-6 py-4 font-semibold">Trust Status</th>
                <th className="px-6 py-4 font-semibold">Expiry</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {[
                { subject: 'payment-processor-svc', source: 'K8s Cluster A', target: 'AWS RDS (Finance)', status: 'Verified', expiry: '42m' },
                { subject: 'data-scientist-alpha', source: 'Azure AD', target: 'GCP BigQuery', status: 'Verified', expiry: '18m' },
                { subject: 'backup-orchestrator', source: 'On-Prem VM', target: 'Azure Blob Storage', status: 'MFA Required', expiry: 'N/A' },
                { subject: 'log-shipper-v4', source: 'AWS EKS', target: 'GCP PubSub', status: 'Verified', expiry: '55m' },
              ].map((session, i) => (
                <tr key={i} className="hover:bg-slate-800/50 transition-all group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <Fingerprint className="w-5 h-5 text-cyan-400" />
                      <div className="flex flex-col">
                        <span className="text-sm font-bold text-white group-hover:text-cyan-400 transition-colors">{session.subject}</span>
                        <span className="text-xs text-slate-500 font-mono">ID: FED-SUB-0{i+1}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-slate-300 font-medium">{session.source}</span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-300 font-medium">{session.target}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                      session.status === 'Verified' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-amber-500/10 text-amber-500'
                    }`}>
                      {session.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-500 font-medium">{session.expiry}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FederationDashboard;
