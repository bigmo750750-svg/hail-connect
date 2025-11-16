export interface Job {
  id: string;
  titleAr: string;
  titleEn: string;
  departmentAr: string;
  departmentEn: string;
  location: string;
  type: 'fullTime' | 'partTime' | 'contract';
  descriptionAr: string;
  descriptionEn: string;
  requirementsAr: string[];
  requirementsEn: string[];
  posted: string;
}

export const jobs: Job[] = [
  {
    id: 'J001',
    titleAr: 'مدير موارد بشرية',
    titleEn: 'Human Resources Manager',
    departmentAr: 'إدارة الموارد البشرية',
    departmentEn: 'Human Resources',
    location: 'حائل',
    type: 'fullTime',
    descriptionAr: 'إدارة والإشراف على جميع عمليات الموارد البشرية في المكتب',
    descriptionEn: 'Manage and oversee all HR operations at the office',
    requirementsAr: ['بكالوريوس في إدارة الموارد البشرية', '5 سنوات خبرة', 'إجادة اللغة الإنجليزية'],
    requirementsEn: ['Bachelor in HR Management', '5 years experience', 'English proficiency'],
    posted: '2025-01-10',
  },
  {
    id: 'J002',
    titleAr: 'محلل بيانات',
    titleEn: 'Data Analyst',
    departmentAr: 'تقنية المعلومات',
    departmentEn: 'IT Department',
    location: 'حائل',
    type: 'fullTime',
    descriptionAr: 'تحليل البيانات وإعداد التقارير الإحصائية',
    descriptionEn: 'Analyze data and prepare statistical reports',
    requirementsAr: ['بكالوريوس في علوم الحاسب', '3 سنوات خبرة', 'إتقان SQL و Excel'],
    requirementsEn: ['Bachelor in Computer Science', '3 years experience', 'SQL & Excel proficiency'],
    posted: '2025-01-08',
  },
  {
    id: 'J003',
    titleAr: 'مسؤول علاقات عامة',
    titleEn: 'Public Relations Officer',
    departmentAr: 'العلاقات العامة',
    departmentEn: 'Public Relations',
    location: 'حائل',
    type: 'partTime',
    descriptionAr: 'التواصل مع الجمهور وإدارة العلاقات الخارجية',
    descriptionEn: 'Communicate with public and manage external relations',
    requirementsAr: ['دبلوم في العلاقات العامة', 'سنتان خبرة', 'مهارات تواصل ممتازة'],
    requirementsEn: ['Diploma in PR', '2 years experience', 'Excellent communication skills'],
    posted: '2025-01-05',
  },
  {
    id: 'J004',
    titleAr: 'أخصائي دعم فني',
    titleEn: 'IT Support Specialist',
    departmentAr: 'تقنية المعلومات',
    departmentEn: 'IT Department',
    location: 'حائل',
    type: 'contract',
    descriptionAr: 'تقديم الدعم الفني للأنظمة والمستخدمين',
    descriptionEn: 'Provide technical support for systems and users',
    requirementsAr: ['دبلوم في تقنية المعلومات', 'خبرة سنة واحدة', 'شهادات تقنية مفضلة'],
    requirementsEn: ['IT Diploma', '1 year experience', 'Technical certifications preferred'],
    posted: '2025-01-03',
  },
  {
    id: 'J005',
    titleAr: 'منسق تدريب',
    titleEn: 'Training Coordinator',
    departmentAr: 'التدريب والتطوير',
    departmentEn: 'Training & Development',
    location: 'حائل',
    type: 'fullTime',
    descriptionAr: 'تنسيق وتنفيذ برامج التدريب المهني',
    descriptionEn: 'Coordinate and execute professional training programs',
    requirementsAr: ['بكالوريوس في التعليم أو الموارد البشرية', '3 سنوات خبرة', 'مهارات تنظيمية قوية'],
    requirementsEn: ['Bachelor in Education or HR', '3 years experience', 'Strong organizational skills'],
    posted: '2025-01-01',
  },
  {
    id: 'J006',
    titleAr: 'محاسب',
    titleEn: 'Accountant',
    departmentAr: 'المالية',
    departmentEn: 'Finance',
    location: 'حائل',
    type: 'fullTime',
    descriptionAr: 'إدارة الحسابات والتقارير المالية',
    descriptionEn: 'Manage accounts and financial reports',
    requirementsAr: ['بكالوريوس في المحاسبة', 'شهادة مهنية', '4 سنوات خبرة'],
    requirementsEn: ['Bachelor in Accounting', 'Professional certification', '4 years experience'],
    posted: '2024-12-28',
  },
];
