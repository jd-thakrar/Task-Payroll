export const INITIAL_EMPLOYEES = [
  { id: 'm1', name: 'Adi Thakrar',    role: 'Head of Product',    dept: 'Product',       avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Adi',    email: 'adi@worknest.com', status: 'Active', type: 'Full-time' },
  { id: 'm2', name: 'Chirag Parekh',  role: 'Sr. Backend Lead',   dept: 'Engineering',   avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Chirag', email: 'chirag@worknest.com', status: 'Active', type: 'Full-time' },
  { id: 'm3', name: 'Jeet D.',        role: 'Senior Designer',    dept: 'Design',        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jeet',   email: 'jeet@worknest.com', status: 'Active', type: 'Full-time' },
  { id: 'm4', name: 'Sarah Chen',     role: 'VP Operations',      dept: 'Management',    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',  email: 'sarah@worknest.com', status: 'On Leave', type: 'Full-time' },
  { id: 'm5', name: 'Marcus Rivera',  role: 'Lead Architect',     dept: 'Engineering',   avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus', email: 'marcus@worknest.com', status: 'Active', type: 'Freelancer' },
  { id: 'm6', name: 'Anya Kapoor',    role: 'Head of People',     dept: 'HR',            avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Anya',   email: 'anya@worknest.com', status: 'Active', type: 'Full-time' },
  { id: 'm7', name: 'Robert Fox',     role: 'DevOps Engineer',     dept: 'Engineering',   avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Robert', email: 'robert@worknest.com', status: 'Active', type: 'Freelancer' },
  { id: 'm8', name: 'Jane Cooper',    role: 'Frontend Developer', dept: 'Design',        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jane',   email: 'jane@worknest.com', status: 'Active', type: 'Full-time' },
  { id: 'm9', name: 'Elena Rodriguez', role: 'Quality Analyst',  dept: 'Engineering',   avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Elena',  email: 'elena@worknest.com', status: 'Active', type: 'Freelancer' },
  { id: 'm10', name: 'Kevin Park',    role: 'Security Specialist', dept: 'Engineering',   avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Kevin',  email: 'kevin@worknest.com', status: 'Active', type: 'Freelancer' },
];

export const INITIAL_FINANCIALS = {
  // Goal: Normalized Salary as per user requirement
  // Basic: 25,000, HRA: 12,500, Allowances: 12,500 -> Gross: 50,000
  // Deductions: PF: 3,000, PT: 200 -> Total: 3,200
  // Net: 46,800
  'm1':  { basic: 25000, hra: 12500, allowances: 12500, perqs: [], loan: null, lwp: 0, tds: false },
  'm2':  { basic: 25000, hra: 12500, allowances: 12500, perqs: [], loan: null, lwp: 0, tds: false },
  'm3':  { basic: 25000, hra: 12500, allowances: 12500, perqs: [], loan: null, lwp: 0, tds: false },
  'm4':  { basic: 25000, hra: 12500, allowances: 12500, perqs: [], loan: null, lwp: 0, tds: false },
  'm5':  { basic: 25000, hra: 12500, allowances: 12500, perqs: [], loan: null, lwp: 0, tds: false },
  'm6':  { basic: 25000, hra: 12500, allowances: 12500, perqs: [], loan: null, lwp: 0, tds: false },
  'm7':  { basic: 25000, hra: 12500, allowances: 12500, perqs: [], loan: null, lwp: 0, tds: false },
  'm8':  { basic: 25000, hra: 12500, allowances: 12500, perqs: [], loan: null, lwp: 0, tds: false },
  'm9':  { basic: 25000, hra: 12500, allowances: 12500, perqs: [], loan: null, lwp: 0, tds: false },
  'm10': { basic: 25000, hra: 12500, allowances: 12500, perqs: [], loan: null, lwp: 0, tds: false },
};

export const INITIAL_TASKS = [
  { id: 1, name: "Payroll Module API Integration", description: "Connect payroll calculation engine with bank APIs for auto-disbursement.", priority: "Critical", teamId: "t1", teamName: "Engineering", members: ["m2", "m7"], startDate: "2026-03-10", endDate: "2026-03-18", status: "In Progress", category: "Engineering" },
  { id: 2, name: "Dashboard Redesign — Phase 2", description: "Update the admin dashboard with richer data visualizations & charts.", priority: "High", teamId: "t2", teamName: "Design", members: ["m3", "m8"], startDate: "2026-03-12", endDate: "2026-03-20", status: "In Progress", category: "Design" },
  { id: 3, name: "HR Policy Documentation Update", description: "Revise employee handbook with updated leave, PF, and welfare policies.", priority: "Medium", teamId: "t4", teamName: "HR & Management", members: ["m6"], startDate: "2026-03-11", endDate: "2026-03-17", status: "In Progress", category: "HR" },
  { id: 4, name: "Q1 Payroll Reconciliation", description: "Reconcile and audit all Q1 payroll entries before government filing.", priority: "Critical", teamId: "t4", teamName: "HR & Management", members: ["m4", "m6"], startDate: "2026-03-15", endDate: "2026-03-20", status: "Pending", category: "Finance" },
  { id: 5, name: "Product Roadmap Q2 Planning", description: "Define feature priorities and sprint plan for Q2 2026.", priority: "High", teamId: "t3", teamName: "Product", members: ["m1"], startDate: "2026-03-16", endDate: "2026-03-25", status: "Pending", category: "Product" },
  { id: 6, name: "Security Audit & Pen Test", description: "Full penetration test on production server environment — passed.", priority: "High", teamId: "t1", teamName: "Engineering", members: ["m10"], startDate: "2026-03-05", endDate: "2026-03-10", status: "Completed", category: "Engineering" },
  { id: 7, name: "Database Schema Migration", description: "Migrate legacy user data to new encrypted clusters.", priority: "Medium", teamId: "t1", teamName: "Engineering", members: ["m2", "m5"], startDate: "2026-03-01", endDate: "2026-03-05", status: "Completed", category: "Engineering" },
  { id: 8, name: "Landing Page SEO Audit", description: "Improve keyword ranking and page load performance for the main site.", priority: "Low", teamId: "t2", teamName: "Design", members: ["m8"], startDate: "2026-03-04", endDate: "2026-03-08", status: "Completed", category: "Marketing" },
  { id: 9, name: "Employee Onboarding Portal", description: "Launch the self-service portal for new hires to upload documents.", priority: "High", teamId: "t4", teamName: "HR & Management", members: ["m6"], startDate: "2026-03-02", endDate: "2026-03-07", status: "Completed", category: "HR" },
  { id: 10, name: "Financial Report Q1 Generation", description: "Prepare the final financial summary for the board of directors.", priority: "Critical", teamId: "t4", teamName: "HR & Management", members: ["m4"], startDate: "2026-03-01", endDate: "2026-03-04", status: "Completed", category: "Finance" },
];

export const INITIAL_ATTENDANCE = [
  { id: 1, empId: 'm1', date: '2026-03-15', checkIn: '09:05', checkOut: '18:15', status: 'Present' },
  { id: 2, empId: 'm2', date: '2026-03-15', checkIn: '08:52', checkOut: '17:45', status: 'Present' },
  { id: 3, empId: 'm3', date: '2026-03-15', checkIn: '09:15', checkOut: '18:05', status: 'Present' },
  { id: 4, empId: 'm4', date: '2026-03-15', checkIn: '',      checkOut: '',      status: 'Absent' },
  { id: 5, empId: 'm5', date: '2026-03-15', checkIn: '08:55', checkOut: '18:05', status: 'Present' },
  { id: 6, empId: 'm6', date: '2026-03-15', checkIn: '09:02', checkOut: '18:10', status: 'Present' },
  { id: 7, empId: 'm7', date: '2026-03-15', checkIn: '09:30', checkOut: '18:30', status: 'Late' },
  { id: 8, empId: 'm8', date: '2026-03-15', checkIn: '08:50', checkOut: '17:40', status: 'Present' },
  { id: 9, empId: 'm9', date: '2026-03-15', checkIn: '09:05', checkOut: '18:05', status: 'Present' },
  { id: 10, empId: 'm10', date: '2026-03-15', checkIn: '08:45', checkOut: '17:30', status: 'Present' },
];

export const INITIAL_TEAMS = [
  { id: "t1", name: "Engineering", color: "blue", lead: "m2" },
  { id: "t2", name: "Design", color: "pink", lead: "m3" },
  { id: "t3", name: "Product", color: "teal", lead: "m1" },
  { id: "t4", name: "HR & Management", color: "amber", lead: "m4" },
];

export const INITIAL_LEAVE_REQUESTS = [
  { id: 1, empId: 'm4', type: 'Sick Leave',    from: '2026-03-15', to: '2026-03-16', days: 2, reason: 'High fever and flu', status: 'Approved' },
  { id: 2, empId: 'm8', type: 'Casual Leave',  from: '2026-03-18', to: '2026-03-18', days: 1, reason: 'Family function at home', status: 'Pending' },
  { id: 3, empId: 'm5', type: 'Privilege Leave',from: '2026-03-20', to: '2026-03-25', days: 6, reason: 'Personal vacation', status: 'Approved' },
];
