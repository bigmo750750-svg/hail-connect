import { useLanguage } from '@/contexts/LanguageContext';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const Contact = () => {
  const { t, language } = useLanguage();

  const faqs = [
    {
      questionAr: 'كيف يمكنني التقديم على وظيفة؟',
      questionEn: 'How can I apply for a job?',
      answerAr: 'يمكنك تصفح الوظائف المتاحة من صفحة الوظائف واختيار الوظيفة المناسبة، ثم الضغط على زر "تقديم طلب" وملء النموذج المطلوب.',
      answerEn: 'You can browse available jobs from the Jobs page, select a suitable position, click "Apply" and fill out the required form.',
    },
    {
      questionAr: 'كم من الوقت يستغرق مراجعة الطلب؟',
      questionEn: 'How long does application review take?',
      answerAr: 'عادة ما يتم مراجعة الطلبات خلال 5-7 أيام عمل. سيتم إعلامك عبر البريد الإلكتروني بأي تحديثات.',
      answerEn: 'Applications are typically reviewed within 5-7 business days. You will be notified via email of any updates.',
    },
    {
      questionAr: 'هل يمكنني التقديم على أكثر من وظيفة؟',
      questionEn: 'Can I apply for multiple jobs?',
      answerAr: 'نعم، يمكنك التقديم على أكثر من وظيفة طالما تتوفر فيك المؤهلات المطلوبة.',
      answerEn: 'Yes, you can apply for multiple positions as long as you meet the qualifications.',
    },
    {
      questionAr: 'كيف أتتبع حالة طلبي؟',
      questionEn: 'How do I track my application?',
      answerAr: 'استخدم رقم الطلب الذي حصلت عليه عند التقديم في صفحة "تتبع طلب" للاطلاع على حالة طلبك.',
      answerEn: 'Use the application ID you received when applying on the "Track Application" page to check your application status.',
    },
  ];

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">{t('contactUs')}</h1>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="gov-card">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-foreground mb-2">{t('officeAddress')}</h3>
                  <p className="text-muted-foreground">
                    {language === 'ar' 
                      ? 'طريق الملك عبدالعزيز، حي الوسيطاء، حائل 55425'
                      : 'King Abdulaziz Road, Al Wasita District, Hail 55425'}
                  </p>
                </div>
              </div>
            </div>

            <div className="gov-card">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-success/10 rounded-lg">
                  <Clock className="h-6 w-6 text-success" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-foreground mb-2">{t('workingHours')}</h3>
                  <p className="text-muted-foreground">{t('sundayThursday')}</p>
                </div>
              </div>
            </div>

            <div className="gov-card">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-foreground mb-2">{t('hotline')}</h3>
                  <p className="text-muted-foreground" dir="ltr">920000000</p>
                </div>
              </div>
            </div>

            <div className="gov-card">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-warning/10 rounded-lg">
                  <Mail className="h-6 w-6 text-warning" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-foreground mb-2">{t('officeEmail')}</h3>
                  <p className="text-muted-foreground" dir="ltr">hail@hrsd.gov.sa</p>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="gov-card">
            <h2 className="text-2xl font-bold text-foreground mb-6">{t('frequentQuestions')}</h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {language === 'ar' ? faq.questionAr : faq.questionEn}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {language === 'ar' ? faq.answerAr : faq.answerEn}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
