// Hand-written types matching the live Supabase schema.
// (Run `supabase gen types typescript` against the project later to keep these
// in perfect sync as the schema evolves.)

export type Role = "employee" | "admin";
export type EnquiryStatus = "new" | "contacted" | "in_progress" | "converted" | "closed";
export type JobEmploymentType = "full_time" | "part_time";
export type JobWorkMode = "on_site" | "remote" | "hybrid";
export type JobStatus = "open" | "closed";
export type ApplicationStatus = "new" | "reviewed" | "shortlisted" | "rejected" | "hired";
export type AttendanceStatus = "present" | "absent" | "leave" | "holiday";
export type LeaveType = "casual" | "sick";
export type LeaveStatus = "pending" | "approved" | "rejected";
export type GoalStatus = "on_track" | "behind" | "achieved";

export interface Profile {
  id: string;
  full_name: string;
  role: Role;
  phone: string | null;
  joining_date: string | null;
  created_at: string;
}

export interface Enquiry {
  id: string;
  name: string;
  company: string | null;
  phone: string | null;
  email: string | null;
  message: string | null;
  status: EnquiryStatus;
  assigned_to: string | null;
  created_at: string;
  updated_at: string;
}

export interface Job {
  id: string;
  title: string;
  department: string | null;
  employment_type: JobEmploymentType;
  location: string | null;
  work_mode: JobWorkMode;
  experience_range: string | null;
  description: string | null;
  status: JobStatus;
  created_at: string;
}

export interface JobApplication {
  id: string;
  job_id: string | null;
  full_name: string;
  mobile: string;
  email: string | null;
  city: string | null;
  highest_qualification: string | null;
  total_experience: string | null;
  resume_url: string | null;
  additional_info: string | null;
  status: ApplicationStatus;
  created_at: string;
}

export interface Attendance {
  id: string;
  employee_id: string;
  date: string;
  check_in_time: string | null;
  check_out_time: string | null;
  status: AttendanceStatus;
  created_at: string;
}

export interface LeaveRequest {
  id: string;
  employee_id: string;
  leave_type: LeaveType;
  start_date: string;
  end_date: string;
  reason: string | null;
  status: LeaveStatus;
  approved_by: string | null;
  created_at: string;
}

export interface Goal {
  id: string;
  employee_id: string;
  period_label: string;
  target_description: string;
  status: GoalStatus;
  manager_feedback: string | null;
  created_at: string;
}

export interface TrainingLog {
  id: string;
  employee_id: string;
  title: string;
  completed_date: string | null;
  certificate_url: string | null;
  notes: string | null;
  created_at: string;
}

export interface Service {
  id: string;
  title: string;
  description: string | null;
  display_order: number;
  created_at: string;
}

export interface Department {
  id: string;
  name: string;
  description: string | null;
  display_order: number;
  created_at: string;
}

export interface ContentBlock {
  id: string;
  page_slug: string;
  section_key: string;
  content: string | null;
  updated_at: string;
}

