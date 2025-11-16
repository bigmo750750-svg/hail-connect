import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'ar' | 'en';
type Direction = 'rtl' | 'ltr';

interface LanguageContextType {
  language: Language;
  direction: Direction;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  ar: {
    // Header
    ministry: 'وزارة الموارد البشرية والتنمية الاجتماعية',
    office: 'مكتب العمل بمنطقة حائل',
    portalName: 'نظام التوظيف بحائل',
    home: 'الرئيسية',
    jobs: 'الوظائف',
    trackApplication: 'تتبع طلب',
    contact: 'اتصل بنا',
    employeeLogin: 'دخول الموظفين',
    
    // Home page
    welcomeTitle: 'مرحباً بكم في نظام التوظيف الإلكتروني',
    welcomeSubtitle: 'خدمات التوظيف والتنمية المهنية للباحثين عن عمل في منطقة حائل',
    browseJobs: 'تصفح الوظائف',
    trackApp: 'تتبع طلبك',
    totalJobs: 'إجمالي الوظائف',
    activeJobs: 'الوظائف النشطة',
    applications: 'الطلبات المقدمة',
    hiredCandidates: 'المرشحين المعينين',
    
    // Jobs page
    searchJobs: 'ابحث عن وظيفة',
    searchPlaceholder: 'اسم الوظيفة أو القسم...',
    filterByType: 'تصفية حسب النوع',
    allTypes: 'جميع الأنواع',
    fullTime: 'دوام كامل',
    partTime: 'دوام جزئي',
    contract: 'عقد',
    jobsAvailable: 'وظيفة متاحة',
    apply: 'تقديم طلب',
    noJobs: 'لا توجد وظائف متاحة حالياً',
    
    // Application form
    applicationForm: 'نموذج التقديم على الوظيفة',
    personalInfo: 'المعلومات الشخصية',
    fullNameAr: 'الاسم الكامل (بالعربية)',
    fullNameEn: 'الاسم الكامل (بالإنجليزية)',
    nationalId: 'رقم الهوية / الإقامة',
    email: 'البريد الإلكتروني',
    phone: 'رقم الجوال',
    selectJob: 'اختر الوظيفة',
    educationLevel: 'المؤهل التعليمي',
    yearsExperience: 'سنوات الخبرة',
    uploadCV: 'رفع السيرة الذاتية',
    chooseFile: 'اختر ملف',
    submitApplication: 'إرسال الطلب',
    applicationSuccess: 'تم تقديم طلبك بنجاح!',
    applicationId: 'رقم الطلب',
    saveThisId: 'احفظ هذا الرقم لتتبع حالة طلبك',
    backToJobs: 'العودة للوظائف',
    
    // Track application
    trackYourApplication: 'تتبع طلب التوظيف',
    enterAppId: 'أدخل رقم الطلب',
    enterIdOrEmail: 'رقم الهوية أو البريد الإلكتروني',
    checkStatus: 'التحقق من الحالة',
    applicationStatus: 'حالة الطلب',
    submitted: 'تم الاستلام',
    underReview: 'قيد المراجعة',
    accepted: 'تم القبول',
    rejected: 'تم الرفض',
    
    // Contact
    contactUs: 'اتصل بنا',
    officeAddress: 'عنوان المكتب',
    workingHours: 'ساعات العمل',
    sundayThursday: 'الأحد - الخميس: 8 صباحاً - 4 عصراً',
    hotline: 'الخط الساخن',
    officeEmail: 'البريد الإلكتروني',
    frequentQuestions: 'الأسئلة الشائعة',
    
    // Employee area
    employeePortal: 'بوابة الموظفين',
    username: 'اسم المستخدم',
    password: 'كلمة المرور',
    login: 'تسجيل الدخول',
    dashboard: 'لوحة التحكم',
    totalApplications: 'إجمالي الطلبات',
    pendingReview: 'قيد المراجعة',
    acceptedApps: 'المقبولة',
    rejectedApps: 'المرفوضة',
    recentApplications: 'الطلبات الحديثة',
    applicantName: 'اسم المتقدم',
    jobTitle: 'المسمى الوظيفي',
    submittedDate: 'تاريخ التقديم',
    status: 'الحالة',
    actions: 'الإجراءات',
    view: 'عرض',
    reports: 'التقارير',
    statusDistribution: 'توزيع حالة الطلبات',
    applicantDetails: 'تفاصيل المتقدم',
    updateStatus: 'تحديث الحالة',
    save: 'حفظ',
    
    // Footer
    allRightsReserved: 'جميع الحقوق محفوظة',
    saudiArabia: 'المملكة العربية السعودية',
  },
  en: {
    // Header
    ministry: 'Ministry of Human Resources and Social Development',
    office: 'Hail Region Labor Office',
    portalName: 'Hail Employment Portal',
    home: 'Home',
    jobs: 'Jobs',
    trackApplication: 'Track Application',
    contact: 'Contact',
    employeeLogin: 'Employee Login',
    
    // Home page
    welcomeTitle: 'Welcome to the Employment Portal',
    welcomeSubtitle: 'Employment and professional development services for job seekers in Hail Region',
    browseJobs: 'Browse Jobs',
    trackApp: 'Track Application',
    totalJobs: 'Total Jobs',
    activeJobs: 'Active Jobs',
    applications: 'Applications Submitted',
    hiredCandidates: 'Hired Candidates',
    
    // Jobs page
    searchJobs: 'Search Jobs',
    searchPlaceholder: 'Job title or department...',
    filterByType: 'Filter by Type',
    allTypes: 'All Types',
    fullTime: 'Full Time',
    partTime: 'Part Time',
    contract: 'Contract',
    jobsAvailable: 'jobs available',
    apply: 'Apply',
    noJobs: 'No jobs available at the moment',
    
    // Application form
    applicationForm: 'Job Application Form',
    personalInfo: 'Personal Information',
    fullNameAr: 'Full Name (Arabic)',
    fullNameEn: 'Full Name (English)',
    nationalId: 'National ID / Iqama',
    email: 'Email',
    phone: 'Phone',
    selectJob: 'Select Job',
    educationLevel: 'Education Level',
    yearsExperience: 'Years of Experience',
    uploadCV: 'Upload CV',
    chooseFile: 'Choose File',
    submitApplication: 'Submit Application',
    applicationSuccess: 'Application Submitted Successfully!',
    applicationId: 'Application ID',
    saveThisId: 'Save this ID to track your application',
    backToJobs: 'Back to Jobs',
    
    // Track application
    trackYourApplication: 'Track Your Application',
    enterAppId: 'Enter Application ID',
    enterIdOrEmail: 'National ID or Email',
    checkStatus: 'Check Status',
    applicationStatus: 'Application Status',
    submitted: 'Submitted',
    underReview: 'Under Review',
    accepted: 'Accepted',
    rejected: 'Rejected',
    
    // Contact
    contactUs: 'Contact Us',
    officeAddress: 'Office Address',
    workingHours: 'Working Hours',
    sundayThursday: 'Sunday - Thursday: 8 AM - 4 PM',
    hotline: 'Hotline',
    officeEmail: 'Email',
    frequentQuestions: 'Frequently Asked Questions',
    
    // Employee area
    employeePortal: 'Employee Portal',
    username: 'Username',
    password: 'Password',
    login: 'Login',
    dashboard: 'Dashboard',
    totalApplications: 'Total Applications',
    pendingReview: 'Pending Review',
    acceptedApps: 'Accepted',
    rejectedApps: 'Rejected',
    recentApplications: 'Recent Applications',
    applicantName: 'Applicant Name',
    jobTitle: 'Job Title',
    submittedDate: 'Submitted Date',
    status: 'Status',
    actions: 'Actions',
    view: 'View',
    reports: 'Reports',
    statusDistribution: 'Application Status Distribution',
    applicantDetails: 'Applicant Details',
    updateStatus: 'Update Status',
    save: 'Save',
    
    // Footer
    allRightsReserved: 'All Rights Reserved',
    saudiArabia: 'Saudi Arabia',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('ar');
  const direction: Direction = language === 'ar' ? 'rtl' : 'ltr';

  useEffect(() => {
    document.documentElement.dir = direction;
    document.documentElement.lang = language;
    document.body.className = language === 'ar' ? 'font-arabic' : 'font-english';
  }, [language, direction]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'ar' ? 'en' : 'ar');
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.ar] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, direction, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
