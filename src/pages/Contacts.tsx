import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Phone, Mail, MapPin, MessageCircle, Clock, Send, Copy, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { StructuredData, generateOrganizationData, generateBreadcrumbData } from "@/components/StructuredData";
import { useTranslation } from "react-i18next";

const Contacts = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [copiedPhone, setCopiedPhone] = useState(false);
  const { toast } = useToast();

  const phoneNumber = "+79955085808";
  const displayPhone = "+7 995 508 58 08";

  const copyPhoneNumber = async () => {
    try {
      await navigator.clipboard.writeText(displayPhone);
      setCopiedPhone(true);
      toast({
        title: t('contact.messageSent'),
        description: t('contact.willContact'),
      });
      setTimeout(() => setCopiedPhone(false), 2000);
    } catch (err) {
      toast({
        title: "Ошибка копирования",
        description: "Попробуйте выделить номер вручную: " + displayPhone,
        variant: "destructive"
      });
    }
  };

  const openWhatsApp = () => {
    // Пробуем разные форматы ссылок для максимальной совместимости
    const whatsappLinks = [
      `https://wa.me/${phoneNumber}`,
      `https://api.whatsapp.com/send?phone=${phoneNumber.replace('+', '')}`,
      `whatsapp://send?phone=${phoneNumber}`
    ];

    // Открываем первую ссылку
    const link = whatsappLinks[0];
    const newWindow = window.open(link, '_blank');

    // Если окно не открылось (заблокировано), показываем инструкцию
    if (!newWindow) {
      toast({
        title: "Не удалось открыть WhatsApp",
        description: `Скопируйте номер ${displayPhone} и найдите нас в WhatsApp вручную`,
        action: (
          <Button variant="outline" size="sm" onClick={copyPhoneNumber}>
            Скопировать номер
          </Button>
        )
      });
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: t('contact.phoneTitle'),
      details: [
        { text: "+7 995 508 58 08", link: "tel:+79955085808" }
      ],
      description: t('contact.phoneDescription')
    },
    {
      icon: Mail,
      title: t('contact.emailTitle'),
      details: [
        { text: "info@volshebno-tut.ru", link: "mailto:info@volshebno-tut.ru" },
        { text: "support@volshebno-tut.ru", link: "mailto:support@volshebno-tut.ru" }
      ],
      description: t('contact.emailDescription')
    },
    {
      icon: MessageCircle,
      title: t('contact.messengersTitle'),
      details: [
        {
          text: t('contact.telegram'),
          link: "https://t.me/Volshebno_tyt",
          icon: "telegram"
        },
        {
          text: t('contact.whatsapp'),
          link: "javascript:void(0)",
          action: "whatsapp",
          icon: "whatsapp"
        }
      ],
      description: t('contact.messengersDescription')
    },
    {
      icon: Clock,
      title: t('contact.supportTitle'),
      details: [
        { text: "24 часа в сутки" },
        { text: "7 дней в неделю" }
      ],
      description: t('contact.supportDescription')
    }
  ];

  const subjects = [
    "Бронирование апартаментов",
    "Командировки и корпоративное размещение",
    "Долгосрочная аренда от 7 дней",
    "Вопросы по проживанию",
    "Предложение сотрудничества",
    "Техническая поддержка",
    "Отзыв или предложение",
    "Другое"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Здесь бы была отправка данных на сервер
    console.log("Form submitted:", formData);

    toast({
      title: t('contact.messageSent'),
      description: t('contact.willContact'),
    });

    // Очистка формы
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const breadcrumbData = generateBreadcrumbData([
    { name: "Главная", url: "https://volshebno-tut.lovable.app/" },
    { name: "Контакты", url: "https://volshebno-tut.lovable.app/contacts" }
  ]);

  const contactPageData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Контакты Волшебно тут",
    "description": "Свяжитесь с нами любым удобным способом. Поддержка 24/7.",
    "url": "https://volshebno-tut.lovable.app/contacts",
    "mainEntity": {
      ...generateOrganizationData(),
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "ул. Тверская, д. 10, стр. 2, офис 520",
        "addressLocality": "Москва",
        "addressCountry": "RU",
        "postalCode": "125009"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "55.7558",
        "longitude": "37.6176"
      },
      "openingHours": [
        "Mo-Fr 09:00-19:00",
        "Sa 10:00-16:00"
      ]
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <StructuredData data={contactPageData} />
      <StructuredData data={breadcrumbData} />
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground">
              {t('contact.title')}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('contact.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center border-0 shadow-card hover:shadow-floating transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-luxury rounded-2xl flex items-center justify-center">
                    <info.icon className="h-8 w-8 text-luxury-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {info.title}
                  </h3>
                  <div className="space-y-1 mb-3">
                    {info.details.map((detail, i) => (
                      <div key={i} className="text-foreground font-medium">
                        {typeof detail === 'string' ? (
                          detail
                        ) : detail.action === 'whatsapp' ? (
                          <div className="flex flex-col items-center space-y-2">
                            <button
                              onClick={openWhatsApp}
                              className="hover:text-luxury transition-colors cursor-pointer flex items-center space-x-1"
                            >
                              <MessageCircle className="h-4 w-4 text-green-500" />
                              <span>{detail.text}</span>
                            </button>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={copyPhoneNumber}
                              className="text-xs h-7"
                            >
                              {copiedPhone ? (
                                <>
                                  <CheckCircle className="h-3 w-3 mr-1" />
                                  Скопировано
                                </>
                              ) : (
                                <>
                                  <Copy className="h-3 w-3 mr-1" />
                                  Скопировать
                                </>
                              )}
                            </Button>
                          </div>
                        ) : detail.icon === 'telegram' ? (
                          <a
                            href={detail.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-luxury transition-colors cursor-pointer flex items-center space-x-1"
                          >
                            <MessageCircle className="h-4 w-4 text-blue-500" />
                            <span>{detail.text}</span>
                          </a>
                        ) : detail.link ? (
                          <a
                            href={detail.link}
                            target={detail.link.startsWith('http') ? '_blank' : undefined}
                            rel={detail.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="hover:text-luxury transition-colors cursor-pointer"
                          >
                            {detail.text}
                          </a>
                        ) : (
                          detail.text
                        )}
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {info.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-surface">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-4">
                    {t('contact.formTitle')}
                  </h2>
                  <p className="text-muted-foreground">
                    {t('contact.formDescription')}
                  </p>
                </div>

                <Card className="border-0 shadow-card">
                  <CardContent className="p-6">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">{t('contact.name')} *</Label>
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) => handleInputChange("name", e.target.value)}
                            required
                            placeholder={t('contact.name')}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">{t('contact.email')} *</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            required
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="phone">{t('contact.phone')}</Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => handleInputChange("phone", e.target.value)}
                            placeholder="+7 (___) ___-__-__"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="subject">{t('contact.subject')}</Label>
                          <Select value={formData.subject} onValueChange={(value) => handleInputChange("subject", value)}>
                            <SelectTrigger>
                              <SelectValue placeholder={t('contact.subject')} />
                            </SelectTrigger>
                            <SelectContent>
                              {subjects.map((subject, index) => (
                                <SelectItem key={index} value={subject}>
                                  {subject}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">{t('contact.yourMessage')} *</Label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) => handleInputChange("message", e.target.value)}
                          required
                          placeholder={t('contact.yourMessage')}
                          rows={5}
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-gradient-luxury text-luxury-foreground hover:shadow-luxury hover:scale-105"
                      >
                        <Send className="h-4 w-4 mr-2" />
                        {t('contact.send')}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Map */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  {t('contact.locationTitle')}
                </h2>
                <p className="text-muted-foreground">
                  {t('contact.locationDescription')}
                </p>
              </div>

              <Card className="border-0 shadow-card">
                <CardContent className="p-6">
                  <div className="w-full h-96 bg-muted rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                      <p className="text-muted-foreground">
                        {t('contact.mapPlaceholder')}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-16 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              {t('contact.needHelpNow')}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t('contact.quickContactDescription')}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button
                size="lg"
                className="bg-gradient-luxury text-luxury-foreground hover:shadow-luxury hover:scale-105"
                asChild
              >
                <a href="tel:+79955085808">
                  <Phone className="h-5 w-5 mr-2" />
                  {t('contact.call')}
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-luxury text-luxury hover:bg-luxury hover:text-luxury-foreground"
                onClick={openWhatsApp}
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                {t('contact.whatsapp')}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-luxury text-luxury hover:bg-luxury hover:text-luxury-foreground"
                asChild
              >
                <a href="https://t.me/Volshebno_tyt" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Telegram
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contacts;
