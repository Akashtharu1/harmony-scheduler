export type UserRole = 'admin' | 'faculty' | 'student';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  department?: string;
}

export interface Faculty {
  id: string;
  name: string;
  email: string;
  department: string;
  maxHoursPerWeek: number;
  preferences?: string[];
  availability?: AvailabilitySlot[];
}

export interface Course {
  id: string;
  code: string;
  name: string;
  department: string;
  semester: number;
  credits: number;
  lectureHours: number;
  labHours?: number;
  faculty?: string[];
}

export interface Room {
  id: string;
  code: string;
  name: string;
  building: string;
  capacity: number;
  type: 'lecture' | 'lab' | 'tutorial';
  facilities: string[];
  availability?: AvailabilitySlot[];
}

export interface TimeSlot {
  id: string;
  day: 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat';
  startTime: string;
  endTime: string;
  duration: number;
}

export interface ScheduledSlot {
  id: string;
  courseId: string;
  courseName: string;
  courseCode: string;
  facultyId: string;
  facultyName: string;
  roomId: string;
  roomCode: string;
  day: string;
  startTime: string;
  endTime: string;
  status: 'ok' | 'conflict' | 'warning';
  conflicts?: Conflict[];
  capacity?: number;
}

export interface Conflict {
  type: 'room' | 'faculty' | 'student' | 'preference';
  severity: 'high' | 'medium' | 'low';
  description: string;
  suggestion?: string;
}

export interface AvailabilitySlot {
  day: string;
  startTime: string;
  endTime: string;
  available: boolean;
}

export interface TimetableVersion {
  id: string;
  versionId: string;
  department: string;
  semester: number;
  createdAt: string;
  createdBy: string;
  slots: ScheduledSlot[];
  stats: {
    conflicts: number;
    roomUtilization: number;
    teacherLoad: number;
  };
  status: 'draft' | 'active' | 'archived';
}

export interface GenerateParams {
  deptId: string;
  semester: number;
  weights: {
    hardPenalty: number;
    teacherPref: number;
    roomUtil: number;
  };
  method: 'GA' | 'DRL' | 'OR';
  seed?: number;
}

export interface Analytics {
  roomUtilization: {
    roomId: string;
    roomName: string;
    utilization: number;
    totalHours: number;
    usedHours: number;
  }[];
  teacherLoad: {
    facultyId: string;
    facultyName: string;
    hours: number;
    maxHours: number;
    percentage: number;
  }[];
  conflictStats: {
    total: number;
    byType: Record<string, number>;
    trend: { date: string; count: number }[];
  };
}
