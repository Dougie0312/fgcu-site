export interface Course {
  code: string;
  name: string;
  credits: number;
  level: 'lower' | 'upper';
  description: string;
  prerequisites: string[];
  attributes: CourseAttribute[];
  role: CourseRole;
  isCapstone?: boolean;
  isCLWS?: boolean;
  isSCGR?: boolean;
}

export type CourseAttribute = 'CLWS' | 'SCGR' | 'GESO' | 'CRIT' | 'GECO' | 'COBC';

export type CourseRole = 'required' | 'elective' | 'restricted-elective' | 'prerequisite' | 'gen-ed';

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export interface GraduationRequirement {
  category: string;
  requirement: string;
  progress?: number;
  total?: number;
  status: 'completed' | 'in-progress' | 'not-started';
}

export interface DegreePlan {
  totalCredits: number;
  majorCredits: number;
  requiredCourses: Course[];
  electiveCourses: Course[];
  generationEd: GraduationRequirement[];
  universityRequirements: GraduationRequirement[];
}

export interface KnowledgeBaseContent {
  about: string;
  bsDegree: {
    totalCredits: number;
    majorCredits: number;
    electiveCredits: number;
    prerequisites: Course[];
    required: Course[];
    electives: Course[];
    graduation: GraduationRequirement[];
  };
  minor: {
    totalCredits: number;
    foundation: Course[];
    required: Course[];
    electives: Course[];
    restrictions: string[];
  };
  facilities: Facility[];
  programs: Program[];
}

export interface Facility {
  name: string;
  location: string;
  description: string;
  features: string[];
}

export interface Program {
  name: string;
  description: string;
  details: string;
}

export interface ChatApiRequest {
  message: string;
  history: ChatMessage[];
}

export interface ChatApiResponse {
  reply: string;
  error?: string;
}
