import React, { useState } from "react";
import AdminLayout from "../../layouts/AdminLayout";
import {
  Network,
  Plus,
  Search,
  Users,
  ChevronRight,
  X,
  AlertCircle,
  Trash2,
  Edit3,
  MoreHorizontal,
  UserCheck,
  Shield,
} from "lucide-react";

const EMPLOYEES = [
  {
    id: "m1",
    name: "Adi Thakrar",
    role: "Head of Product",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Adi",
  },
  {
    id: "m2",
    name: "Chirag Parekh",
    role: "Sr. Backend Lead",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Chirag",
  },
  {
    id: "m3",
    name: "Jeet D.",
    role: "Senior Designer",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jeet",
  },
  {
    id: "m4",
    name: "Sarah Chen",
    role: "VP Operations",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
  },
  {
    id: "m5",
    name: "Marcus Rivera",
    role: "Lead Architect",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus",
  },
  {
    id: "m6",
    name: "Anya Kapoor",
    role: "Head of People",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Anya",
  },
  {
    id: "m7",
    name: "Robert Fox",
    role: "DevOps Engineer",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Robert",
  },
  {
    id: "m8",
    name: "Jane Cooper",
    role: "Frontend Developer",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jane",
  },
  {
    id: "m9",
    name: "Elena Rodriguez",
    role: "Quality Analyst",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Elena",
  },
  {
    id: "m10",
    name: "Kevin Park",
    role: "Security Specialist",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kevin",
  },
];

const INITIAL_TEAMS = [
  {
    id: "t1",
    name: "Engineering",
    leadId: "m2",
    memberIds: ["m2", "m5", "m7", "m9", "m10"],
    color: "bg-blue-50 text-blue-600 border-blue-100",
    projects: 12,
  },
  {
    id: "t2",
    name: "Design",
    leadId: "m3",
    memberIds: ["m3", "m8"],
    color: "bg-pink-50 text-pink-600 border-pink-100",
    projects: 4,
  },
  {
    id: "t3",
    name: "Product",
    leadId: "m1",
    memberIds: ["m1"],
    color: "bg-teal-50 text-teal-600 border-teal-100",
    projects: 9,
  },
  {
    id: "t4",
    name: "HR & Management",
    leadId: "m4",
    memberIds: ["m4", "m6"],
    color: "bg-amber-50 text-amber-600 border-amber-100",
    projects: 3,
  },
];

// Helper to resolve members
const AvatarStack = ({ memberIds, max = 4, className = "" }) => {
  const resolved = memberIds
    .map((id) => EMPLOYEES.find((m) => m.id === id))
    .filter(Boolean);
  const visible = resolved.slice(0, max);
  const extra = resolved.length - max;
  return (
    <div className={`flex items-center -space-x-2 ${className}`}>
      {visible.map((m) => (
        <div
          key={m.id}
          title={m.name}
          className="w-8 h-8 rounded-full border-2 border-white overflow-hidden bg-gray-100 shrink-0"
        >
          <img src={m.avatar} alt={m.name} className="w-full h-full" />
        </div>
      ))}
      {extra > 0 && (
        <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-50 flex items-center justify-center text-[9px] font-bold text-gray-500">
          +{extra}
        </div>
      )}
    </div>
  );
};

const AddTeamModal = ({ onClose, onAdd }) => {
  const [form, setForm] = useState({ name: "", leadId: "", memberIds: [] });
  const [errors, setErrors] = useState({});

  const toggleMember = (id) => {
    setForm((prev) => {
      const isSelected = prev.memberIds.includes(id);
      let newMembers = isSelected
        ? prev.memberIds.filter((m) => m !== id)
        : [...prev.memberIds, id];
      // If we remove the lead, also clear the leadId
      const newLead = isSelected && prev.leadId === id ? "" : prev.leadId;
      return { ...prev, memberIds: newMembers, leadId: newLead };
    });
  };

  const handleSave = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Team name is required";
    if (!form.leadId) errs.leadId = "Please select a team lead";
    if (form.memberIds.length === 0)
      errs.memberIds = "Select at least one member";

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    const newTeam = {
      id: `t${Date.now()}`,
      name: form.name,
      leadId: form.leadId,
      memberIds: form.memberIds,
      color: "bg-teal-50 text-teal-600 border-teal-100", // Default color for new teams
      projects: 0,
    };
    onAdd(newTeam);
  };

  const resolvedMembers = form.memberIds
    .map((id) => EMPLOYEES.find((m) => m.id === id))
    .filter(Boolean);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-[40px] shadow-2xl w-full max-w-2xl flex flex-col overflow-hidden max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-8 pt-8 pb-5 border-b border-gray-100 flex items-center justify-between">
          <div>
            <h2
              style={{ fontFamily: "'Outfit', sans-serif" }}
              className="text-2xl font-bold text-[#042f2e] tracking-tight"
            >
              Create New Team
            </h2>
            <p className="text-xs text-gray-400 font-medium mt-1">
              Organize your workforce into functional groups.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:bg-gray-100 rounded-xl transition-all"
          >
            <X size={20} />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-8 overflow-y-auto space-y-6">
          {/* Team Name */}
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">
              Team Name <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              placeholder="e.g. Frontend Titans"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className={`w-full px-4 py-3.5 rounded-2xl border text-sm font-medium text-[#042f2e] focus:outline-none focus:ring-4 focus:ring-teal-500/10 focus:border-teal-400 transition-all ${errors.name ? "border-rose-400 bg-rose-50/30" : "border-gray-200"}`}
            />
            {errors.name && (
              <p className="text-[10px] text-rose-500 font-bold mt-1.5 flex items-center gap-1">
                <AlertCircle size={10} />
                {errors.name}
              </p>
            )}
          </div>

          {/* Members Selection */}
          <div className="bg-gray-50/50 rounded-3xl border border-gray-100 p-5">
            <div className="flex items-center justify-between mb-4">
              <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
                Add Members <span className="text-rose-500">*</span>
              </label>
              <span className="text-[10px] font-bold text-teal-600 bg-teal-50 px-2 py-1 rounded-md">
                {form.memberIds.length} Selected
              </span>
            </div>

            <div className="max-h-48 overflow-y-auto pr-2 space-y-2 scrollbar-thin scrollbar-thumb-gray-200">
              {EMPLOYEES.map((emp) => {
                const isSelected = form.memberIds.includes(emp.id);
                return (
                  <button
                    key={emp.id}
                    onClick={() => toggleMember(emp.id)}
                    className={`w-full flex items-center justify-between p-3 rounded-2xl border transition-all ${isSelected ? "border-teal-500 bg-teal-50/40" : "border-transparent hover:border-gray-200 hover:bg-white"}`}
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={emp.avatar}
                        alt={emp.name}
                        className="w-8 h-8 rounded-full bg-white border border-gray-100"
                      />
                      <div className="text-left">
                        <p className="text-sm font-bold text-[#042f2e]">
                          {emp.name}
                        </p>
                        <p className="text-[10px] text-gray-400 font-medium">
                          {emp.role}
                        </p>
                      </div>
                    </div>
                    <div
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${isSelected ? "bg-teal-500 border-teal-500" : "border-gray-300 bg-white"}`}
                    >
                      {isSelected && (
                        <svg
                          viewBox="0 0 14 14"
                          fill="none"
                          className="w-3 h-3 text-white"
                        >
                          <path
                            d="M11.6666 3.5L5.24992 9.91667L2.33325 7"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
            {errors.memberIds && (
              <p className="text-[10px] text-rose-500 font-bold mt-2 flex items-center gap-1">
                <AlertCircle size={10} />
                {errors.memberIds}
              </p>
            )}
          </div>

          {/* Lead Selection (Appears only if members exist) */}
          {form.memberIds.length > 0 && (
            <div className="animate-in fade-in slide-in-from-top-4">
              <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-3">
                Assign Team Lead <span className="text-rose-500">*</span>
              </label>
              <div className="grid grid-cols-2 gap-3">
                {resolvedMembers.map((m) => (
                  <button
                    key={m.id}
                    onClick={() => setForm({ ...form, leadId: m.id })}
                    className={`flex items-center gap-3 p-3 rounded-2xl border transition-all ${form.leadId === m.id ? "border-amber-400 bg-amber-50" : "border-gray-200 bg-white hover:border-amber-200"}`}
                  >
                    <img
                      src={m.avatar}
                      alt={m.name}
                      className="w-8 h-8 rounded-full border border-gray-100 bg-white"
                    />
                    <div className="text-left flex-1 min-w-0">
                      <p className="text-xs font-bold text-[#042f2e] truncate">
                        {m.name}
                      </p>
                      <p className="text-[9px] text-gray-500 font-medium truncate">
                        {m.role}
                      </p>
                    </div>
                    {form.leadId === m.id && (
                      <Shield size={14} className="text-amber-500 shrink-0" />
                    )}
                  </button>
                ))}
              </div>
              {errors.leadId && (
                <p className="text-[10px] text-rose-500 font-bold mt-2 flex items-center gap-1">
                  <AlertCircle size={10} />
                  {errors.leadId}
                </p>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-8 py-6 border-t border-gray-100 flex items-center justify-between gap-4 shrink-0 bg-gray-50/50">
          <button
            onClick={onClose}
            className="px-6 py-3 rounded-2xl text-sm font-bold text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-all"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="flex items-center gap-2 px-8 py-3 bg-[#042f2e] text-white rounded-2xl text-sm font-bold uppercase tracking-widest shadow-lg shadow-teal-900/20 hover:bg-teal-900 transition-all"
          >
            <Users size={16} /> Create Team
          </button>
        </div>
      </div>
    </div>
  );
};

// ─── MAIN PAGE ────────────────────────────────────────────────────────────────
const Teams = () => {
  const [teams, setTeams] = useState(INITIAL_TEAMS);
  const [showModal, setShowModal] = useState(false);
  const [search, setSearch] = useState("");

  const filteredTeams = teams.filter((t) =>
    t.name.toLowerCase().includes(search.toLowerCase()),
  );

  const handleAddTeam = (newTeam) => {
    setTeams([...teams, newTeam]);
    setShowModal(false);
  };

  const handleDelete = (id) => {
    setTeams(teams.filter((t) => t.id !== id));
  };

  return (
    <AdminLayout title="Teams">
      <div className="space-y-6 animate-in">
        {/* Toolbar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3 bg-white border border-gray-100 px-4 py-2.5 rounded-2xl flex-1 max-w-sm shadow-sm focus-within:ring-4 focus-within:ring-teal-500/5 focus-within:border-teal-400 transition-all">
            <Search size={16} className="text-gray-400 shrink-0" />
            <input
              type="text"
              placeholder="Search teams..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-transparent border-none outline-none text-sm font-medium text-[#042f2e] w-full placeholder:text-gray-300"
            />
          </div>

          <button
            onClick={() => setShowModal(true)}
            className="btn-primary py-2.5! px-6! text-sm!"
          >
            <Plus size={16} />
            Create Team
          </button>
        </div>

        {/* Teams Grid */}
        {filteredTeams.length === 0 ? (
          <div className="bg-white rounded-[40px] border border-gray-100 p-16 text-center shadow-sm">
            <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <Network size={32} className="text-gray-300" />
            </div>
            <h3 className="text-lg font-bold text-[#042f2e] mb-1">
              No Teams Found
            </h3>
            <p className="text-sm text-gray-400">
              Try adjusting your search or create a new team.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredTeams.map((team) => {
              const lead = EMPLOYEES.find((e) => e.id === team.leadId);
              return (
                <div
                  key={team.id}
                  className="bg-white border border-gray-100 rounded-[32px] p-6 shadow-sm hover:shadow-md hover:border-teal-100 transition-all group flex flex-col"
                >
                  {/* Top: Title & Options */}
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <span
                        className={`inline-block px-2.5 py-1 text-[9px] font-bold uppercase tracking-widest rounded-lg border mb-3 ${team.color}`}
                      >
                        {team.memberIds.length} Members
                      </span>
                      <h3
                        style={{ fontFamily: "'Outfit', sans-serif" }}
                        className="text-xl font-bold text-[#042f2e] group-hover:text-teal-700 transition-colors"
                      >
                        {team.name}
                      </h3>
                    </div>
                    <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 text-gray-300 hover:text-blue-500 hover:bg-blue-50 rounded-xl transition-all">
                        <Edit3 size={16} />
                      </button>
                      <button
                        onClick={() => handleDelete(team.id)}
                        className="p-2 text-gray-300 hover:text-rose-500 hover:bg-rose-50 rounded-xl transition-all"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>

                  {/* Body: Lead & Stats */}
                  <div className="flex-1 space-y-5">
                    {lead && (
                      <div className="flex items-center gap-3 p-3 bg-gray-50/50 rounded-2xl border border-gray-100">
                        <div className="relative">
                          <img
                            src={lead.avatar}
                            alt={lead.name}
                            className="w-10 h-10 rounded-full border-2 border-white bg-white shadow-sm"
                          />
                          <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-amber-100 border-2 border-white rounded-full flex items-center justify-center text-amber-500">
                            <Shield size={10} className="fill-current" />
                          </div>
                        </div>
                        <div>
                          <p className="text-[9px] font-bold uppercase tracking-widest text-amber-500 mb-0.5">
                            Team Lead
                          </p>
                          <p className="text-sm font-bold text-[#042f2e]">
                            {lead.name}
                          </p>
                        </div>
                      </div>
                    )}

                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3 bg-teal-50/50 rounded-2xl border border-teal-100/50">
                        <p className="text-[9px] font-bold uppercase tracking-widest text-teal-600 mb-1">
                          Active Projects
                        </p>
                        <p className="text-xl font-bold text-[#042f2e]">
                          {team.projects}
                        </p>
                      </div>
                      <div className="p-3 bg-gray-50/50 rounded-2xl border border-gray-100">
                        <p className="text-[9px] font-bold uppercase tracking-widest text-gray-400 mb-1">
                          Weekly Velocity
                        </p>
                        <p className="text-xl font-bold text-[#042f2e]">
                          {team.memberIds.length * 5}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Footer: Avatars */}
                  <div className="mt-6 pt-5 border-t border-gray-100 flex items-center justify-between">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                      Roster
                    </p>
                    <AvatarStack memberIds={team.memberIds} max={5} />
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {showModal && (
        <AddTeamModal
          onClose={() => setShowModal(false)}
          onAdd={handleAddTeam}
        />
      )}
    </AdminLayout>
  );
};

export default Teams;
